// ===== Home Page =====
function Home({ cases, onPick }) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cases;
    return cases.filter(c => {
      const hay = (c.name + " " + c.summary + " " + c.category + " " + (c.keywords || []).join(" ")).toLowerCase();
      return hay.includes(q);
    });
  }, [query, cases]);

  const suggestions = ["RCP", "AVC", "Afogamento", "Engasgo", "Queimadura", "Convulsão", "Cobra"];
  const critical = filtered.filter(c => c.urgency === "critical");
  const alta = filtered.filter(c => c.urgency === "alta");
  const media = filtered.filter(c => c.urgency === "media");

  return (
    <main className="home">
      <section className="hero">
        <div className="hero__eyebrow">
          <span className="dot" /> Primeiros socorros · linguagem simples
        </div>
        <h1 className="hero__title">
          O que está acontecendo <em>agora?</em>
        </h1>
        <p className="hero__sub">
          Encontre passo a passo claro e ilustrado para a emergência à sua frente.
          Conteúdo para leigos — sem jargão, sem demora.
        </p>
        <div className="search-wrap">
          <input
            className="search"
            placeholder="Descreva o que aconteceu… ex: 'engasgou', 'bateu a cabeça', 'cobra'"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
          <span className="search-icon"><Icon.Search /></span>
        </div>
        {!query && (
          <div className="search-suggestions">
            {suggestions.map(s => (
              <button key={s} className="chip" onClick={() => setQuery(s)}>{s}</button>
            ))}
          </div>
        )}
      </section>

      {filtered.length === 0 && (
        <div className="no-results">
          <div className="no-results__big">⚆</div>
          <div>Nenhum caso encontrado para "{query}".</div>
          <div style={{marginTop: 8, fontSize: 14}}>Tente uma palavra mais simples ou use o menu lateral.</div>
        </div>
      )}

      {critical.length > 0 && (
        <React.Fragment>
          <div className="section-head">
            <h2 className="section-head__title">Emergências críticas</h2>
            <span className="section-head__count">{critical.length} casos</span>
          </div>
          <CaseGrid cases={critical} onPick={onPick} />
        </React.Fragment>
      )}

      {alta.length > 0 && (
        <React.Fragment>
          <div className="section-head">
            <h2 className="section-head__title">Urgência alta</h2>
            <span className="section-head__count">{alta.length} casos</span>
          </div>
          <CaseGrid cases={alta} onPick={onPick} />
        </React.Fragment>
      )}

      {media.length > 0 && (
        <React.Fragment>
          <div className="section-head">
            <h2 className="section-head__title">Urgência média</h2>
            <span className="section-head__count">{media.length} casos</span>
          </div>
          <CaseGrid cases={media} onPick={onPick} />
        </React.Fragment>
      )}

      {!query && (
        <React.Fragment>
          <div className="section-head">
            <h2 className="section-head__title">Onde buscar ajuda</h2>
          </div>
          <UPALocator />
        </React.Fragment>
      )}
    </main>
  );
}

function CaseGrid({ cases, onPick }) {
  const urgencyMap = { critical: "Crítica", alta: "Alta", media: "Média" };
  return (
    <div className="case-grid">
      {cases.map(c => (
        <button key={c.id} className="case-card" onClick={() => onPick(c.id)}>
          <div className="case-card__illo" style={{background: c.glyphColor}}>
            <span className={"case-card__urgency urgency-" + c.urgency}>{urgencyMap[c.urgency]}</span>
            <div style={{fontFamily: "var(--ff-display)", fontSize: 56, color: c.glyphInk, opacity: 0.85, fontWeight: 700}}>{c.glyph}</div>
          </div>
          <div className="case-card__name">{c.name}</div>
          <div className="case-card__hint">{c.summary}</div>
        </button>
      ))}
    </div>
  );
}

Object.assign(window, { Home, CaseGrid });
