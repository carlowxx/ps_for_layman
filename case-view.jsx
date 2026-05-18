// ===== Case View =====
function CaseView({ caseData, onBack }) {
  const c = caseData;
  const [phase, setPhase] = React.useState(c.branch ? "branch" : "content");
  const [patientType, setPatientType] = React.useState("adult");

  React.useEffect(() => {
    setPhase(c.branch ? "branch" : "content");
    setPatientType("adult");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [c.id]);

  const handleBranch = (opt) => {
    if (opt.goto === "consciente" && c.consciente) {
      setPhase("consciente");
    } else if (opt.goto === "passos-grave") {
      setPhase("passos-grave");
    } else {
      setPhase("content");
    }
  };

  return (
    <main className="case-view">
      <button className="crumb" onClick={onBack}>
        <Icon.ArrowL /> Voltar à página inicial
      </button>

      <div className="case-hero">
        <div className="case-hero__tag" style={{color: c.glyphInk}}>
          <span style={{
            width: 28, height: 28,
            display: "grid", placeItems: "center",
            background: c.glyphColor, color: c.glyphInk,
            borderRadius: 8, fontSize: 16
          }}>{c.glyph}</span>
          {c.category}
        </div>
        <h1 className="case-hero__title">{c.name}</h1>
        <p className="case-hero__sub">{c.summary}</p>
      </div>

      {phase === "branch" && (
        <div className="branch">
          <h2 className="branch__q">{c.branch.question}</h2>
          <p className="branch__hint">{c.branch.hint}</p>
          <div className="branch__opts">
            {c.branch.opts.map(o => (
              <button key={o.id} className="branch__opt" onClick={() => handleBranch(o)}>
                <div className="branch__opt__icon">{o.icon}</div>
                <div>{o.label}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {phase === "consciente" && (
        <div className="branch">
          <div style={{fontSize: 48, marginBottom: 12}}>✓</div>
          <h2 className="branch__q" style={{fontSize: 22}}>{c.consciente}</h2>
          <div style={{marginTop: 24, display: "flex", gap: 10, justifyContent: "center"}}>
            <button className="btn btn--ghost" onClick={() => setPhase("branch")}>Voltar</button>
            <button className="btn btn--primary" onClick={() => setPhase("content")}>
              Ver passo a passo completo <Icon.Arrow />
            </button>
          </div>
        </div>
      )}

      {phase === "passos-grave" && (
        <div className="branch" style={{background: "var(--red-soft)", border: "1px solid var(--red-line)"}}>
          <div style={{fontSize: 48, marginBottom: 12}}>⚠</div>
          <h2 className="branch__q" style={{color: "var(--red-ink)", fontSize: 22}}>{c["passos-grave"]}</h2>
          <div style={{marginTop: 24, display: "flex", gap: 10, justifyContent: "center"}}>
            <a className="btn btn--danger" href="tel:192"><Icon.Phone /> Ligar 192</a>
            <button className="btn btn--primary" onClick={() => setPhase("content")}>
              Seguir com os passos <Icon.Arrow />
            </button>
          </div>
        </div>
      )}

      {phase === "content" && (
        <div className="case-content">
          <CaseVideoPlayer caseData={c} patientType={patientType} />

          {c.hasRCPTimer && (
            <div className="case-section">
              <div className="case-section__head">
                <h2 className="case-section__title">Cronômetro de compressão</h2>
              </div>
              <RCPTimer />
            </div>
          )}

          <div className="case-section">
            <div className="case-section__head">
              <span className="case-section__num">01</span>
              <h2 className="case-section__title">Passo a passo</h2>
            </div>
            <StepList steps={c.steps} babyVersion={c.babyVersion} childVersion={c.childVersion} patientType={patientType} onPatientChange={setPatientType} />
          </div>

          <div className="case-section">
            <div className="case-section__head">
              <span className="case-section__num">02</span>
              <h2 className="case-section__title">O que NÃO fazer</h2>
            </div>
            <DontsView donts={c.donts} />
          </div>

          <div className="case-section">
            <div className="case-section__head">
              <span className="case-section__num">03</span>
              <h2 className="case-section__title">Quando chamar ajuda</h2>
            </div>
            <CallWhenView callWhen={c.callWhen} />
          </div>

          {c.quiz && c.quiz.length > 0 && (
            <div className="case-section">
              <div className="case-section__head">
                <span className="case-section__num">04</span>
                <h2 className="case-section__title">Quiz rápido</h2>
              </div>
              <QuizView quiz={c.quiz} caseName={c.name} />
            </div>
          )}
        </div>
      )}
    </main>
  );
}

// ===== Step list with patient-type selector =====
function StepList({ steps, babyVersion, childVersion, patientType, onPatientChange }) {
  const [checked, setChecked] = React.useState({});
  const who = patientType || "adult";

  const tabs = [{ id: "adult", label: "Adulto", icon: "●" }];
  if (childVersion) tabs.push({ id: "child", label: "Criança (1–8 anos)", icon: "◉" });
  if (babyVersion)  tabs.push({ id: "baby",  label: "Bebê (< 1 ano)",    icon: "◍" });

  const activeVersion = who === "baby"  && babyVersion  ? babyVersion  :
                        who === "child" && childVersion ? childVersion :
                        null;
  const activeSteps = activeVersion ? activeVersion.steps : steps;
  const isStringSteps = activeSteps.length > 0 && typeof activeSteps[0] === "string";

  const toggle = (i) => setChecked(prev => ({...prev, [i]: !prev[i]}));
  const switchWho = (id) => { if (onPatientChange) onPatientChange(id); setChecked({}); };

  return (
    <div>
      {tabs.length > 1 && (
        <div className="patient-tabs">
          <div className="patient-tabs__label">Para quem é o atendimento?</div>
          <div className="patient-tabs__row">
            {tabs.map(t => (
              <button
                key={t.id}
                className={"patient-tab" + (who === t.id ? " patient-tab--active" : "")}
                onClick={() => switchWho(t.id)}
              >
                <span className="patient-tab__icon">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {who !== "adult" && activeVersion && (
        <div className="patient-notice">
          <span className="patient-notice__icon">{who === "baby" ? "◍" : "◉"}</span>
          <span>{activeVersion.title}</span>
        </div>
      )}

      {isStringSteps ? (
        <div className="checklist">
          <div className="checklist__list">
            {activeSteps.map((s, i) => (
              <div key={i} className="check-row" style={{cursor: "default"}}>
                <div style={{
                  width: 22, height: 22, borderRadius: 6, background: "var(--blue-soft)", color: "var(--blue-ink)",
                  display: "grid", placeItems: "center", fontSize: 12, fontWeight: 700, flexShrink: 0
                }}>{i + 1}</div>
                <div className="check-row__txt">{s}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="step-list">
          {activeSteps.map((step, i) => (
            <div className={"step-card" + (checked[i] ? " step-card--done" : "")} key={who + "-" + i}>
              <div className="step-card__num">PASSO {String(i + 1).padStart(2, "0")}</div>
              <h3 className="step-card__title">{step.title}</h3>
              <div className="step-card__body"><p>{step.body}</p></div>
              {step.hint && (
                <div className="step-card__hint">
                  <Icon.Info />
                  <div>{step.hint}</div>
                </div>
              )}
              <label
                className={"check-row " + (checked[i] ? "check-row--done" : "")}
                onClick={() => toggle(i)}
                style={{marginTop: 16, cursor: "pointer"}}
              >
                <div className="check-row__box">
                  {checked[i] && <Icon.Check />}
                </div>
                <div className="check-row__txt">Feito — passo concluído</div>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ===== Don'ts =====
function DontsView({ donts }) {
  return (
    <div className="dont">
      <div className="dont__head">
        <div className="dont__head__icon">✕</div>
        <h2 className="dont__title">O que NÃO fazer</h2>
      </div>
      <div className="dont__list">
        {donts.map((d, i) => (
          <div key={i} className="dont__item">{d}</div>
        ))}
      </div>
    </div>
  );
}

// ===== Call when =====
function CallWhenView({ callWhen }) {
  return (
    <div className="call-panel">
      <div className="call-panel__head">
        <div className="call-panel__icon"><Icon.Phone /></div>
        <h2 className="call-panel__title">Quando chamar ajuda</h2>
      </div>
      <div style={{marginBottom: 18, opacity: 0.92, fontSize: 15, lineHeight: 1.6}}>
        {callWhen.map((line, i) => (
          <div key={i} style={{display: "flex", gap: 10, padding: "8px 0", borderBottom: i < callWhen.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none"}}>
            <span style={{opacity: 0.7}}>›</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
      <div className="call-panel__rows">
        <a className="call-panel__row" href="tel:192">
          <div className="call-panel__row__num">192</div>
          <div>
            <div className="call-panel__row__lbl">SAMU</div>
            <div className="call-panel__row__desc">Emergência médica</div>
          </div>
          <Icon.Phone />
        </a>
        <a className="call-panel__row" href="tel:193">
          <div className="call-panel__row__num">193</div>
          <div>
            <div className="call-panel__row__lbl">Bombeiros</div>
            <div className="call-panel__row__desc">Resgate, afogamento, fogo</div>
          </div>
          <Icon.Phone />
        </a>
        <a className="call-panel__row" href="tel:188">
          <div className="call-panel__row__num">188</div>
          <div>
            <div className="call-panel__row__lbl">CVV</div>
            <div className="call-panel__row__desc">Apoio emocional · 24h</div>
          </div>
          <Icon.Phone />
        </a>
      </div>
    </div>
  );
}

// ===== Quiz =====
function QuizView({ quiz, caseName }) {
  const [idx, setIdx] = React.useState(0);
  const [picked, setPicked] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [finished, setFinished] = React.useState(false);

  if (!quiz || quiz.length === 0) return null;

  if (finished) {
    const pct = Math.round((score / quiz.length) * 100);
    return (
      <div className="quiz">
        <div className="quiz-result">
          <div className="complete__icon" style={{margin: "0 auto 18px"}}><Icon.Check /></div>
          <h2 className="complete__title">Você concluiu!</h2>
          <div className="quiz-result__score">{score}/{quiz.length}</div>
          <p className="complete__sub">
            {pct === 100 ? "Perfeito! Você dominou os passos." :
             pct >= 60   ? "Bom trabalho. Revise os passos para fixar o que gera dúvida." :
                           "Vale revisar o passo a passo — em emergência, cada acerto vale uma vida."}
          </p>
          <div style={{display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap"}}>
            <button className="btn btn--ghost" onClick={() => { setIdx(0); setPicked(null); setScore(0); setFinished(false); }}>
              Refazer quiz
            </button>
            <button className="btn btn--primary" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
              Rever os passos <Icon.ArrowL />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = quiz[idx];
  const isCorrect = picked !== null && picked === q.correct;

  const handlePick = (i) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.correct) setScore(score + 1);
  };

  const next = () => {
    if (idx + 1 >= quiz.length) setFinished(true);
    else { setIdx(idx + 1); setPicked(null); }
  };

  return (
    <div className="quiz">
      <div className="quiz__num">Pergunta {idx + 1} de {quiz.length} · {caseName}</div>
      <h2 className="quiz__q">{q.q}</h2>
      <div className="quiz__opts">
        {q.opts.map((opt, i) => {
          let cls = "quiz__opt";
          if (picked !== null) {
            if (i === q.correct) cls += " quiz__opt--correct";
            else if (i === picked) cls += " quiz__opt--wrong";
          }
          return (
            <button key={i} className={cls} onClick={() => handlePick(i)} disabled={picked !== null}>
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <React.Fragment>
          <div className={"quiz__feedback " + (isCorrect ? "quiz__feedback--right" : "quiz__feedback--wrong")}>
            <strong>{isCorrect ? "Acertou! " : "Não foi dessa vez. "}</strong>{q.explain}
          </div>
          <div className="step-nav" style={{marginTop: 16}}>
            <span />
            <button className="btn btn--primary" onClick={next}>
              {idx + 1 >= quiz.length ? "Ver resultado" : "Próxima"} <Icon.Arrow />
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

// ===== RCP Timer =====
function RCPTimer() {
  const [running, setRunning] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const intervalRef = React.useRef(null);
  const timeRef = React.useRef(null);

  const BPM = 110;
  const interval = 60000 / BPM;

  React.useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setCount(c => c + 1), interval);
      timeRef.current = setInterval(() => setTime(t => t + 1), 1000);
    } else {
      clearInterval(intervalRef.current);
      clearInterval(timeRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(timeRef.current);
    };
  }, [running]);

  const fmt = (s) => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  const cycles = Math.floor(count / 30);
  const switchIn = 120 - (time % 120);

  const reset = () => { setRunning(false); setCount(0); setTime(0); };

  return (
    <div className="rcp-timer">
      <div className="rcp-timer__label">Ritmo de compressão</div>
      <div className="rcp-timer__bpm">100–120</div>
      <div className="rcp-timer__bpm-suffix">compressões por minuto</div>

      <div className={"rcp-timer__beat " + (running ? "rcp-timer__beat--active" : "")} style={{animationDuration: interval + "ms"}}>
        COMPRIMA
      </div>

      <div className="rcp-timer__count">{count}</div>
      <div className="rcp-timer__count-lbl">compressões totais</div>

      <div className="rcp-timer__stats">
        <div className="rcp-timer__stat">
          <div className="rcp-timer__stat__num">{fmt(time)}</div>
          <div className="rcp-timer__stat__lbl">Tempo</div>
        </div>
        <div className="rcp-timer__stat">
          <div className="rcp-timer__stat__num">{cycles}</div>
          <div className="rcp-timer__stat__lbl">Ciclos de 30</div>
        </div>
        <div className="rcp-timer__stat">
          <div className="rcp-timer__stat__num">{fmt(switchIn)}</div>
          <div className="rcp-timer__stat__lbl">Trocar em</div>
        </div>
      </div>

      <div className="rcp-timer__controls">
        {!running ? (
          <button className="btn btn--danger rcp-btn-main" onClick={() => setRunning(true)}>
            <Icon.Play /> {count === 0 ? "Iniciar" : "Retomar"}
          </button>
        ) : (
          <button className="btn rcp-btn-pause" onClick={() => setRunning(false)}>
            <Icon.Pause /> Pausar
          </button>
        )}
        <button className="btn btn--ghost" onClick={reset}>
          <Icon.Reset /> Zerar
        </button>
      </div>

      <div style={{marginTop: 24, padding: 16, background: "var(--surface)", borderRadius: 12, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.6, textAlign: "left"}}>
        <strong style={{color: "var(--ink)"}}>Como usar:</strong> Inicie e comprima no ritmo do círculo pulsante.
        Reveze com outra pessoa a cada 2 minutos (indicador "Trocar em"). Não pare até o SAMU chegar.
      </div>
    </div>
  );
}

Object.assign(window, { CaseView, StepList, DontsView, CallWhenView, QuizView, RCPTimer });
