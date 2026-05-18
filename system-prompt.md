# System Prompt — P.S. para Leigos

You are working on **P.S. para Leigos** ("First Aid for Laypeople"), a Brazilian Portuguese educational web app that delivers step-by-step first aid guidance for emergencies to non-medical users. All user-facing text is in **pt-BR**; code comments are in English.

---

## Tech Stack

- **React 18.3.1** loaded via CDN (unpkg); **no build step, no npm, no node_modules**
- **Babel Standalone** transpiles JSX inline in the browser (`<script type="text/babel">`)
- **Plain CSS** with OKLCH color tokens and CSS custom properties (`styles.css`)
- **Fonts** (Google Fonts): Bricolage Grotesque (headings), Manrope (body), JetBrains Mono (numbers/timers)
- **Entry point:** open `index.html` directly in a browser, or serve with `python -m http.server 8000`

---

## File Architecture (loading order in index.html)

| File | Role |
|---|---|
| `tweaks-panel.jsx` | Design-tweaks panel + `useTweaks()` hook; parent-iframe postMessage protocol |
| `data.jsx` | All case data → exposes `window.CASES` array |
| `components.jsx` | Shared UI: Header, Drawer, SOSModal, UPA locator, Icon set |
| `home.jsx` | Home page: search, urgency-grouped case grid, quick-access chips |
| `case-view.jsx` | Case detail: branching questions, step flow, tabs, RCP timer, quiz |
| `app.jsx` | Root: routing (home ↔ case), theme, drawer/SOS state, tweaks panel |

Components are **not imported** — each file does `Object.assign(window, { MyComponent })` and the next file reads them as globals.

---

## Case Data Model (`data.jsx`)

```js
{
  id: string,            // unique slug, e.g. "rcp"
  name: string,          // display name in pt-BR
  category: string,      // e.g. "Emergência crítica"
  urgency: "critical" | "alta" | "media",
  glyph: string,         // emoji/symbol for card icon
  glyphColor: string,    // card background color
  glyphInk: string,      // glyph foreground color
  summary: string,       // one-liner for card
  keywords: string[],    // for search matching
  steps: [{ title, body, hint? }],
  donts: string[],
  callWhen: string[],
  quiz: [{ q, opts, correct, explain }],
  // optional:
  branch?: { question, hint, opts: [{ id, label, icon, goto }] },
  consciente?: string,   // message shown when branch result = conscious
  babyVersion?: { title, steps: [{ title, body }] },
  hasRCPTimer?: boolean, // enables RCP tab (only "rcp" case uses this)
  illoLabel?: string,    // placeholder illustration label
}
```

There are **16 emergency cases**: RCP (cardiac arrest + CPR), Engasgo (choking), Choque Elétrico (electric shock), Hemorragia (bleeding), Convulsão (seizure), Animais Peçonhentos (venomous animals), Intoxicação (poisoning), Bebês (baby accidents), Desmaio (fainting), Quedas em Idosos (elderly falls), Queimaduras (burns), Ansiedade (panic attack), Suicídio (suicide risk) — plus others.

---

## Code Conventions

- Always use `React.useState()`, `React.useEffect()`, `React.useRef()` — **never** destructure from React (CDN global)
- PascalCase for components, camelCase for variables/functions
- CSS classes: BEM-ish hyphenated (`.case-card__name`, `.call-panel__row`)
- Use CSS vars for all colors (`--blue`, `--ink`, `--red`, etc.) so light/dark theme works automatically
- Use `clamp()` for responsive sizing

---

## Styling System (`styles.css`)

- Light/dark themes: `:root` and `[data-theme="dark"]` swap OKLCH token values
- Accent colors: `--blue` oklch(0.55 0.17 255), `--red` oklch(0.58 0.21 28)
- Theme toggle persists to `localStorage` key `ps-theme`
- `deck-stage.railVisible` is a legacy localStorage key from the tweaks panel — safe to ignore

---

## Key UX Patterns

1. **Branching:** Cases with a `branch` field show a question *before* steps; user's choice determines entry path
2. **Tab flow:** Steps → (RCP Timer) → Don'ts → When to Call → Quiz — linear progression
3. **RCP Timer:** 110 BPM animated metronome; only the `rcp` case uses `hasRCPTimer: true`
4. **Baby variants:** Some cases have `babyVersion` with alternate infant procedures
5. **SOS modal:** Floating fixed button → modal with one-tap `tel:` links for all services

---

## Emergency Numbers (hard-coded in `components.jsx` — do not change without good reason)

| Number | Service |
|---|---|
| 192 | SAMU (medical emergency) |
| 193 | Bombeiros (fire/rescue) |
| 188 | CVV (suicide prevention, 24h free) |
| 190 | Polícia Militar |
| 136 | Disque Saúde |
| 0800-722-6001 | CIATox (poison control) |

---

## Adding Content

**New case:** add object to `CASES` array in `data.jsx` — it auto-appears in drawer, home grid, and search.  
**New shared component:** define in `components.jsx`, export via `Object.assign(window, { Name })`.  
**New styles:** add to `styles.css` using existing token vars; always test both light and dark themes.
