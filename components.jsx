// ===== Shared icons =====
const Icon = {
  Menu:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  Close:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>,
  Sun:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>,
  Moon:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>,
  Search:  () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
  Arrow:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  ArrowL:  () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M11 5l-7 7 7 7"/></svg>,
  Phone:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Info:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v.01M12 12v5"/></svg>,
  Check:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M5 12l5 5L20 7"/></svg>,
  Pin:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  Play:    () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>,
  Pause:   () => <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>,
  Reset:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>,
  Alert:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 9v4M12 17v.01"/><path d="M10.3 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>,
};

// ===== Placeholder illustration =====
function Illo({ label, large }) {
  return (
    <div className={"illo " + (large ? "illo--large" : "")}>
      <span className="illo__label">{label || "imagem"}</span>
    </div>
  );
}

// ===== Header =====
function AppHeader({ onMenu, onHome, theme, onToggleTheme }) {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <div className="brand" onClick={onHome}>
          <div className="brand__mark">+</div>
          <div>
            <div className="brand__name">P.S. para Leigos</div>
            <div className="brand__sub">Primeiros socorros · Brasil</div>
          </div>
        </div>
        <div className="header-actions">
          <button className="icon-btn" onClick={onToggleTheme} title="Trocar tema">
            {theme === "dark" ? <Icon.Sun /> : <Icon.Moon />}
          </button>
          <button className="icon-btn" onClick={onMenu} title="Menu">
            <Icon.Menu />
          </button>
        </div>
      </div>
    </header>
  );
}

// ===== Hamburger drawer =====
function Drawer({ open, onClose, cases, activeId, onPick }) {
  return (
    <React.Fragment>
      <div className={"drawer-backdrop " + (open ? "open" : "")} onClick={onClose} />
      <aside className={"drawer " + (open ? "open" : "")} aria-hidden={!open}>
        <div className="drawer__head">
          <div className="drawer__title">Todos os casos</div>
          <button className="icon-btn" onClick={onClose}><Icon.Close /></button>
        </div>
        <ul className="drawer__list">
          {cases.map(c => (
            <li
              key={c.id}
              className={"drawer__item " + (c.id === activeId ? "drawer__item--active" : "")}
              onClick={() => { onPick(c.id); onClose(); }}
            >
              <div className="drawer__item__glyph" style={{background: c.glyphColor, color: c.glyphInk}}>{c.glyph}</div>
              <div>
                <div className="drawer__item__name">{c.name}</div>
                <div className="drawer__item__cat">{c.category}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="drawer__foot">
          <div><strong>SAMU 192</strong> · <strong>Bombeiros 193</strong> · <strong>CVV 188</strong></div>
          <div>Este site é apoio educacional — não substitui atendimento profissional.</div>
        </div>
      </aside>
    </React.Fragment>
  );
}

// ===== SOS button + modal =====
function SOSFab({ onClick }) {
  return (
    <button className="sos-fab" onClick={onClick} aria-label="Números de emergência">
      <span className="sos-fab__pulse" />
      <span className="sos-fab__icon">!</span>
      <span>SOS</span>
    </button>
  );
}

function SOSModal({ open, onClose }) {
  const phones = [
    { num: "192", name: "SAMU", desc: "Emergência médica" },
    { num: "193", name: "Bombeiros", desc: "Resgate, fogo, afogamento" },
    { num: "188", name: "CVV", desc: "Apoio emocional · suicídio" },
    { num: "190", name: "Polícia Militar", desc: "Violência, ameaça imediata" },
    { num: "136", name: "Disque Saúde", desc: "Orientação geral" },
    { num: "0800-722-6001", name: "CIATox", desc: "Intoxicações" },
  ];
  return (
    <div className={"modal-backdrop " + (open ? "open" : "")} onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal__head">
          <div>
            <div className="modal__title">Emergência</div>
            <div className="modal__sub">Telefones gratuitos 24h — toque para ligar</div>
          </div>
          <button className="icon-btn" onClick={onClose}><Icon.Close /></button>
        </div>
        <div className="phone-list">
          {phones.map(p => (
            <a key={p.num} className="phone-row" href={"tel:" + p.num.replace(/\D/g, "")}>
              <div className="phone-row__num">{p.num}</div>
              <div>
                <div className="phone-row__name">{p.name}</div>
                <div className="phone-row__desc">{p.desc}</div>
              </div>
              <span className="phone-row__call"><Icon.Phone />Ligar</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== UPA locator (with real geolocation) =====
function UPALocator() {
  const [geoState, setGeoState] = React.useState("idle"); // idle | loading | granted | denied
  const [mapsUrl, setMapsUrl] = React.useState(null);
  const [city, setCity] = React.useState("");

  const handleGeolocate = () => {
    if (!navigator.geolocation) { setGeoState("denied"); return; }
    setGeoState("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        setMapsUrl("https://www.google.com/maps/search/Pronto+socorro/@" + lat + "," + lng + ",14z");
        setGeoState("granted");
      },
      () => setGeoState("denied"),
      { timeout: 10000 }
    );
  };

  const handleCitySearch = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    setMapsUrl("https://www.google.com/maps/search/Pronto+socorro+" + encodeURIComponent(city.trim()));
    setGeoState("granted");
  };

  return (
    <div className="upa-locator">
      <div className="upa-locator__head">
        <div style={{width: 44, height: 44, background: "var(--blue-soft)", color: "var(--blue-ink)", borderRadius: 12, display: "grid", placeItems: "center", flexShrink: 0}}>
          <Icon.Pin />
        </div>
        <div>
          <div className="upa-locator__title">Unidades próximas</div>
          <div className="upa-locator__sub">
            {geoState === "idle" && "Ative a localização para ver hospitais e UPAs próximas"}
            {geoState === "loading" && "Obtendo sua localização…"}
            {geoState === "granted" && "Abrindo no Google Maps — resultados reais próximos a você"}
            {geoState === "denied" && "Permissão negada — busque por cidade abaixo"}
          </div>
        </div>
      </div>

      {geoState === "idle" && (
        <button className="btn btn--primary" style={{width: "100%", justifyContent: "center", marginBottom: 12}} onClick={handleGeolocate}>
          <Icon.Pin /> Usar minha localização
        </button>
      )}

      {geoState === "loading" && (
        <div style={{textAlign: "center", padding: "20px 0", color: "var(--ink-3)", fontSize: 14}}>Localizando…</div>
      )}

      {geoState === "granted" && mapsUrl && (
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{width: "100%", justifyContent: "center", marginBottom: 12}}>
          <Icon.Pin /> Ver no Google Maps
        </a>
      )}

      {(geoState === "idle" || geoState === "denied") && (
        <form onSubmit={handleCitySearch} style={{display: "flex", gap: 8, marginTop: 4}}>
          <input
            className="search"
            style={{height: 44, fontSize: 15, flex: 1, padding: "0 14px", borderRadius: "var(--radius)"}}
            placeholder="Buscar por cidade…"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <button type="submit" className="btn btn--ghost" style={{flexShrink: 0}}>Buscar</button>
        </form>
      )}
    </div>
  );
}

// ===== Case Video Player =====
function CaseVideoPlayer({ caseData, patientType }) {
  const { videoType, videoUrl, babyVideoUrl, videoPoster, name } = caseData;
  const [loaded, setLoaded] = React.useState(false);

  const activeUrl = (patientType === "baby" && babyVideoUrl) ? babyVideoUrl : videoUrl;

  // Reset loaded state when video switches
  const prevUrl = React.useRef(activeUrl);
  React.useEffect(() => {
    if (prevUrl.current !== activeUrl) {
      setLoaded(false);
      prevUrl.current = activeUrl;
    }
  }, [activeUrl]);

  if (!videoType || !activeUrl) return null;

  return (
    <div className="case-video">
      {!loaded && <div className="case-video__skeleton" />}
      {videoType === "youtube" ? (
        <iframe
          key={activeUrl}
          className={"case-video__frame" + (loaded ? " case-video__frame--loaded" : "")}
          src={activeUrl + "?rel=0&modestbranding=1&playsinline=1"}
          title={(name || "") + " — tutorial em vídeo"}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <video
          key={activeUrl}
          className={"case-video__frame" + (loaded ? " case-video__frame--loaded" : "")}
          controls
          preload="metadata"
          playsInline
          poster={videoPoster}
          onLoadedMetadata={() => setLoaded(true)}
          src={activeUrl}
        />
      )}
    </div>
  );
}

Object.assign(window, { Icon, Illo, AppHeader, Drawer, SOSFab, SOSModal, UPALocator, CaseVideoPlayer });
