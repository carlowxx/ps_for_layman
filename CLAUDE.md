# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**P.S. para Leigos** (First Aid for Laypeople) is a Brazilian Portuguese language educational web application providing step-by-step first aid guidance for emergency situations. It's a client-side React application with no build process or backend—all files are served directly to the browser.

**Purpose:** Deliver clear, jargon-free first aid instructions in Portuguese to help non-medical people respond to emergencies like cardiac arrest, choking, burns, and mental health crises.

## Tech Stack

- **Frontend Framework:** React 18.3.1 (via CDN, Babel standalone transpilation)
- **Styling:** Plain CSS with OKLCH color space and CSS custom properties (design tokens)
- **Language:** JSX (Babel-transpiled inline in HTML via `<script type="text/babel">`)
- **No build tool, no package manager, no testing framework**
- **Languages:** Portuguese (pt-BR) content; English comments in code

## Architecture

The app follows a **single-page application (SPA)** pattern rendered entirely client-side. The codebase is modular yet lightweight:

### Loading Order (from index.html)
Files are loaded sequentially as `<script type="text/babel">` tags:
1. **tweaks-panel.jsx** — Reusable panel system for design tweaks (colors, theme, etc.); ships `useTweaks()` hook and form controls
2. **data.jsx** — All emergency case data (19+ cases like RCP, choking, electric shock); defines `window.CASES` global
3. **components.jsx** — Shared UI components (icons, header, drawer, SOS modal, UPA locator)
4. **home.jsx** — Home page with search, case grid, and urgency categorization
5. **case-view.jsx** — Detail page for a single case; handles branching logic, step flow, quizzes, timers
6. **app.jsx** — Root component; manages routing (home ↔ case view), theme, drawer, tweaks panel

### Data Flow

**Case Structure** (in data.jsx):
```javascript
{
  id: "rcp",                    // unique identifier
  name: "Parada Cardíaca / RCP",
  category: "Emergência crítica",
  urgency: "critical" | "alta" | "media",
  glyph: "♥",                   // emoji/symbol for visual identification
  glyphColor/glyphInk: "...",   // colors for glyph display
  summary: "...",               // one-liner for cards
  keywords: ["rcp", "..."],     // for search filtering
  branch: {                      // optional branching (e.g., "is victim conscious?")
    question: "...",
    hint: "...",
    opts: [{ id, label, icon, goto }, ...]
  },
  consciente: "...",            // optional text shown if branch result is "conscious"
  steps: [{title, body, hint}, ...],  // main step-by-step flow
  babyVersion: {title, steps: [...]}, // optional variant for infants
  donts: ["...", "..."],        // critical things not to do
  callWhen: ["...", "..."],     // when to call emergency services
  quiz: [{q, opts, correct, explain}, ...],  // knowledge check
  illoLabel: "...",             // description for placeholder illustrations
  hasRCPTimer: boolean          // RCP case only; enables timer tab
}
```

### Routing & State Management

`App.jsx` manages:
- **route**: "home" or a case ID; switches between `Home` and `CaseView`
- **theme**: "light" or "dark"; persists to localStorage; applied to `<html data-theme>`
- **drawerOpen**: sidebar navigation visibility
- **sosOpen**: emergency numbers modal visibility
- **tweaksOn**: design tweaks panel visibility (responds to parent iframe messages for edit mode)

No Redux/context needed; state is minimal and co-located in components.

### Styling Architecture

**Token-driven design** (styles.css):
- CSS custom properties (`--ff-display`, `--blue`, `--red-ink`, etc.) define the entire visual system
- Light and dark themes (`:root` and `[data-theme="dark"]`) swap token values
- OKLCH color space for perceptual consistency across themes
- No CSS classes for layout (flexbox/grid inline); classes are semantic (`.hero`, `.case-card`, etc.)
- Shadow, radius, and spacing tokens ensure consistency

**Component styles:**
- Header, drawer, home grid, case detail, quiz, RCP timer, tweaks panel each have dedicated CSS sections
- Responsive design via `clamp()`, `grid-template-columns: repeat(auto-fill)`, and viewport units
- SVG icons defined inline in `Icon` object (components.jsx)

### Key Patterns

1. **Branching Questions:** Cases with complex entry logic (e.g., "Is the victim conscious?") use a `branch` object. After user picks an option, `goto` field determines whether to show a "conscious" message, a "grave" warning, or proceed to main steps.

2. **Tab System (CaseView):** Tabs (`passos`, `timer`, `dont`, `call`, `quiz`) manage content within a case view. Progressing through tabs is linear (steps → timer/dont → call → quiz).

3. **Progress Tracking:** Step checklist uses local state `done: {stepIdx: boolean}` to let users mark steps complete; this is purely UI feedback (no persistence).

4. **Tweaks Protocol:** The `useTweaks()` hook and `TweaksPanel` communicate with a parent iframe via `window.postMessage()`. Messages include `__activate_edit_mode`, `__deactivate_edit_mode`, `__edit_mode_set_keys`. The EDITMODE comment blocks in TWEAK_DEFAULTS mark which keys can be persisted by external tools.

5. **Search Filtering:** Home.jsx filters cases by matching query against `name + summary + category + keywords` (case-insensitive substring match).

## Running the App

**No build step required.** Simply open `index.html` in a browser:
- **Local development:** Use `python -m http.server 8000` (or any static server) and navigate to `http://localhost:8000`
- **Production:** Deploy `index.html` and all `.jsx`, `.css` files to static hosting (GitHub Pages, Vercel, Netlify, etc.)

## Editing Content

### Adding a New Emergency Case

1. Open **data.jsx** and add a new object to the `CASES` array following the structure above.
2. Required fields: `id`, `name`, `category`, `urgency`, `glyph`, `glyphColor`, `glyphInk`, `summary`, `keywords`, `steps`, `donts`, `callWhen`, `quiz`.
3. Optional: `branch`, `consciente`, `babyVersion`, `illoLabel`, `hasRCPTimer`.
4. The app will auto-register the case in the drawer, home grid, and search.

### Adding a New UI Component

1. Define the component in **components.jsx** (shared) or **case-view.jsx** / **home.jsx** (local).
2. Export via `Object.assign(window, { YourComponent })` to make it available to other scripts.
3. Import is not needed; call as `<YourComponent />` in JSX.

### Styling New Elements

1. Add CSS to **styles.css** using existing token variables (`--blue`, `--ink`, etc.).
2. For layout, prefer flexbox/grid inline (`display: flex; gap: 16px`).
3. For colors, always use CSS vars so light/dark theme toggle works automatically.
4. Use `clamp()` for responsive sizing (e.g., `font-size: clamp(18px, 5vw, 32px)`).

### Tweaking Design

At runtime, if the app detects a parent iframe postMessage protocol (edit mode), a floating tweaks panel appears. Currently tweaks control:
- `accentBlue`, `accentRed` (color overrides)
- `density` (layout spacing: "respirado" = loose)
- `fontPair` (font family: "bricolage-manrope")
- `theme` (light/dark)

Tweaks are defined in `app.jsx` in the `EDITMODE-BEGIN/END` comment block. External tools (e.g., a design system editor) can parse and persist this block.

## Important Notes for Editors

1. **Portuguese Language:** All user-facing text (case names, descriptions, step instructions) is in Portuguese (pt-BR). Code comments are in English.

2. **Accessibility:** Button labels have proper `aria-label`; colors pass WCAG AA contrast in both light and dark modes. Icon-only buttons use `title` attributes.

3. **No External Dependencies:** The app relies only on React and Babel (via CDN). No npm, no node_modules, no build config. This is intentional for simplicity and offline deployment potential.

4. **Illustrations:** The `Illo` component renders a placeholder box with label text. Future iterations can replace with actual SVG or images; the structure is ready.

5. **Emergency Numbers:** Hard-coded in `components.jsx` (SOSModal):
   - 192: SAMU (ambulance/medical emergency)
   - 193: Bombeiros (fire/rescue)
   - 188: CVV (suicide prevention hotline)
   - 190: Polícia Militar
   - 136: Disque Saúde
   - 0800-722-6001: CIATox (poison control)

   Update these if targeting a different country or region.

6. **localStorage Keys:**
   - `ps-theme`: Stores user's light/dark preference
   - `deck-stage.railVisible`: (Legacy) Deck stage thumbnail rail state; can be removed if deck-stage is not used

7. **RCP Timer:** Only case `rcp` has `hasRCPTimer: true`. The timer uses 110 BPM (beats per minute) for CPR guidance. If you add another case needing a timer, add `hasRCPTimer: true` and the timer tab will appear automatically.

## Code Style & Conventions

- **Naming:** camelCase for variables/functions, PascalCase for React components
- **State:** Prefer `React.useState()` over `useState` (direct React reference via CDN)
- **Effects:** Use `React.useEffect()` with dependency arrays
- **Refs:** Use `React.useRef()` for DOM access (e.g., timer intervals)
- **Memoization:** `React.useMemo()` and `React.useCallback()` where performance matters (e.g., search filtering)
- **Comments:** Explain *why*, not *what*; use section headers (`// ===== Section Name =====`)
- **CSS Classes:** Hyphenated (e.g., `.case-card__name`); use BEM-ish conventions for clarity

## Deployment Considerations

- The app is entirely static; no server-side logic needed.
- All state is client-side (localStorage for theme).
- Works offline once cached by the browser.
- Can be embedded in an iframe; supports parent postMessage for edit mode.
- No CORS issues (all assets are local or from trusted CDNs like Google Fonts, unpkg).

