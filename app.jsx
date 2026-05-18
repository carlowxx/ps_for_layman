// ===== Main App =====
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentBlue": "#3868D4",
  "accentRed": "#E03B3B",
  "density": "respirado",
  "fontPair": "bricolage-manrope"
}/*EDITMODE-END*/;

function App() {
  const [theme, setTheme] = React.useState(() => {
    const stored = localStorage.getItem("ps-theme");
    if (stored) return stored;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [route, setRoute] = React.useState("home"); // "home" or caseId
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [sosOpen, setSosOpen] = React.useState(false);

  // Tweaks
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [tweaksOn, setTweaksOn] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ps-theme", theme);
  }, [theme]);

  // Apply tweaks
  React.useEffect(() => {
    const root = document.documentElement;
    // For accents we'd ideally convert hex → oklch, but for simplicity overlay css vars
    if (t.accentBlue) root.style.setProperty("--blue", t.accentBlue);
    if (t.accentRed)  root.style.setProperty("--red", t.accentRed);
  }, [t.accentBlue, t.accentRed]);

  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode")   setTweaksOn(true);
      if (e.data.type === "__deactivate_edit_mode") setTweaksOn(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const goHome = () => { setRoute("home"); window.scrollTo({ top: 0 }); };
  const goCase = (id) => { setRoute(id); window.scrollTo({ top: 0 }); };

  const cases = window.CASES;
  const activeCase = route === "home" ? null : cases.find(c => c.id === route);

  return (
    <React.Fragment>
      <AppHeader
        onMenu={() => setDrawerOpen(true)}
        onHome={goHome}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        cases={cases}
        activeId={route}
        onPick={goCase}
      />
      {activeCase ? (
        <CaseView caseData={activeCase} onBack={goHome} />
      ) : (
        <Home cases={cases} onPick={goCase} />
      )}
      <SOSFab onClick={() => setSosOpen(true)} />
      <SOSModal open={sosOpen} onClose={() => setSosOpen(false)} />

      {tweaksOn && (
        <TweaksPanel title="Tweaks" onClose={() => {
          setTweaksOn(false);
          window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
        }}>
          <TweakSection title="Cores">
            <TweakColor
              label="Azul (confiança)"
              value={t.accentBlue}
              onChange={(v) => setTweak("accentBlue", v)}
              options={["#3868D4", "#2A5DD9", "#1B9AAA", "#5A4FCF"]}
            />
            <TweakColor
              label="Vermelho (urgência)"
              value={t.accentRed}
              onChange={(v) => setTweak("accentRed", v)}
              options={["#E03B3B", "#D2353C", "#F25C54", "#C2185B"]}
            />
          </TweakSection>
          <TweakSection title="Tema">
            <TweakRadio
              label="Esquema"
              value={theme}
              onChange={setTheme}
              options={[{value: "light", label: "Claro"}, {value: "dark", label: "Escuro"}]}
            />
          </TweakSection>
          <TweakSection title="Navegação">
            <TweakButton onClick={() => { setSosOpen(true); }}>Abrir painel SOS</TweakButton>
            <TweakButton onClick={() => { setDrawerOpen(true); }}>Abrir menu lateral</TweakButton>
            <TweakButton onClick={goHome}>Ir para Home</TweakButton>
          </TweakSection>
        </TweaksPanel>
      )}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
