// Conteúdo de todos os casos de primeiros socorros
// Cada caso tem: id, name, category, urgency, summary, glyph, keywords
// branches (opcional), steps, childVersion, babyVersion, donts, callWhen, quiz

const CASES = [
  {
    id: "rcp",
    name: "Parada Cardíaca / RCP",
    category: "Emergência crítica",
    urgency: "critical",
    glyph: "♥",
    glyphColor: "var(--red-soft)",
    glyphInk: "var(--red-ink)",
    summary: "A vítima não responde, não respira (ou respira de forma anormal, com sons de gasping).",
    keywords: ["rcp", "parada", "cardiaca", "coração", "coracao", "compressão", "respiração", "respiracao", "ressuscitação", "ressuscitacao"],
    branch: {
      question: "A vítima está respondendo a você?",
      hint: "Toque os ombros e chame em voz alta: 'Você está bem?'",
      opts: [
        { id: "yes", label: "Sim, está consciente", icon: "👁", goto: "consciente" },
        { id: "no",  label: "Não responde",          icon: "✕", goto: "passos" }
      ]
    },
    consciente: "Se a vítima responde, está consciente — não é o caso de RCP. Coloque-a confortável, observe e ligue 192 se houver dor no peito, falta de ar ou desmaios.",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/_lvi5LO7vrg?start=36",
    illoLabel: "Posição das mãos no centro do peito",
    steps: [
      {
        title: "Garanta a segurança do local",
        body: "Antes de qualquer coisa, observe rapidamente: há fios desencapados, fumaça, trânsito? Você só pode ajudar se estiver segura(o). Aproxime-se com cuidado.",
        hint: "Se for inseguro, não entre — chame o 193 (Bombeiros) e aguarde."
      },
      {
        title: "Cheque resposta e respiração",
        body: "Toque os ombros e chame alto: 'Você está bem?'. Olhe para o peito por até 10 segundos. Respiração ausente ou ruídos estranhos (gasping) = parada cardíaca.",
        hint: "Gasping é um som de 'engolir ar' — NÃO é respiração normal. Trate como parada."
      },
      {
        title: "Ligue para 192 (SAMU) — ou peça a alguém",
        body: "Aponte para uma pessoa específica: 'Você de camisa azul, ligue 192 agora e volte aqui'. Peça também um DEA (desfibrilador) se houver no local.",
        hint: "Coloque o celular no viva-voz para receber instruções enquanto realiza a RCP."
      },
      {
        title: "Posicione as mãos no centro do peito",
        body: "Vítima deitada de costas em superfície firme. Calcanhar de uma mão no meio do peito (entre os mamilos), outra mão por cima, dedos entrelaçados. Braços esticados.",
        hint: "Mantenha-se na vertical sobre a vítima — a força vem do tronco, não dos braços."
      },
      {
        title: "Comprima FORTE e RÁPIDO",
        body: "Profundidade: 5 a 6 cm. Velocidade: 100 a 120 compressões por minuto. Use nosso cronômetro abaixo — ele marca o ritmo. Permita que o peito retorne totalmente entre cada compressão.",
        hint: "Não tenha medo de quebrar costelas — costelas se recuperam, vidas se perdem."
      },
      {
        title: "Não pare até a ajuda chegar",
        body: "Continue comprimindo ininterruptamente, sem pausas para ventilações. Compressões contínuas são tão eficazes quanto RCP com ventilação para leigos. Reveze com outra pessoa a cada 2 minutos — braços cansados comprimem mal.",
        hint: "Pare apenas se: a vítima reagir, chegar o SAMU, ou um DEA for instalado."
      }
    ],
    childVersion: {
      title: "Em crianças (1 a 8 anos)",
      steps: [
        {
          title: "Verifique resposta e respiração",
          body: "Toque os ombros e chame em voz alta. Olhe o peito por 10 segundos. Em crianças, a parada geralmente é causada por falta de ar — as ventilações são muito importantes.",
          hint: "Se estiver sozinha(o): faça 2 minutos de RCP ANTES de ligar — diferente do adulto."
        },
        {
          title: "Ligue 192 — ou peça alguém",
          body: "Aponte uma pessoa: 'Você, ligue 192 agora.' Se sozinha(o), faça 2 minutos de RCP antes de ligar e use o viva-voz ao retomar.",
          hint: "Em criança, 2 minutos de compressões antes de ligar podem fazer a diferença — a causa é geralmente respiratória."
        },
        {
          title: "Uma mão no centro do peito",
          body: "Para crianças menores (1–3 anos): use uma mão. Para crianças maiores: use o calcanhar de uma mão, como no adulto. Centro do peito, entre os mamilos.",
          hint: "Adapte a força ao tamanho da criança — o objetivo é comprimir 4–5 cm."
        },
        {
          title: "Comprima FORTE e RÁPIDO",
          body: "Profundidade: 4 a 5 cm (cerca de 1/3 do diâmetro do peito). Velocidade: 100 a 120 por minuto. Deixe o peito retornar totalmente entre as compressões.",
          hint: "Não tenha medo — comprimir firme salva. Costelas de criança se recuperam."
        },
        {
          title: "Ciclo 30 compressões + 2 sopros",
          body: "Após 30 compressões: incline a cabeça, eleve o queixo, cubra boca e nariz da criança com sua boca. Dê 2 sopros suaves de 1 segundo cada, até o peito subir levemente.",
          hint: "Em criança, as ventilações são recomendadas mesmo sem treinamento — a causa é geralmente respiratória."
        },
        {
          title: "Não pare até o SAMU chegar",
          body: "Continue o ciclo 30 compressões + 2 sopros. Reveze com outra pessoa a cada 2 minutos. Pare apenas se a criança reagir ou o SAMU assumir.",
          hint: "Se sozinha(o) e ainda não ligou, após 2 min de RCP ligue 192 e retome imediatamente."
        }
      ]
    },
    babyVersion: {
      title: "Em bebês (menos de 1 ano)",
      steps: [
        {
          title: "Verifique resposta",
          body: "Toque a planta do pé com firmeza e chame. Não sacuda. Se não reage e não respira → comece a RCP imediatamente.",
          hint: "Em bebês, a parada é quase sempre respiratória. As ventilações são essenciais."
        },
        {
          title: "Ligue 192 — ou peça alguém",
          body: "Se sozinha(o): faça 2 minutos de RCP ANTES de ligar. Aponte alguém se houver: 'Você, ligue 192 agora.' Use viva-voz ao retomar.",
          hint: "Coloque no viva-voz para receber instruções enquanto faz a RCP."
        },
        {
          title: "Posição correta",
          body: "Deite o bebê de costas em superfície firme. Incline levemente a cabeça para trás (posição neutra). Eleve o queixo com um dedo sob o mento.",
          hint: "Não incline demais — o pescoço do bebê é curto e pode obstruir a via aérea."
        },
        {
          title: "2 dedos no centro do peito",
          body: "Use o dedo médio e anelar logo abaixo da linha dos mamilos. Comprima 4 cm de profundidade, no ritmo de 100–120 por minuto. Deixe o peito retornar entre cada compressão.",
          hint: "Apenas 2 dedos — force proporcional ao tamanho do bebê."
        },
        {
          title: "Ciclo 30 compressões + 2 sopros",
          body: "Após 30 compressões: cubra boca E nariz do bebê com sua boca. Dê 2 sopros suaves com as bochechas (não os pulmões inteiros) — o peito deve subir levemente.",
          hint: "Soprar com força excessiva pode lesar os pulmões do bebê. Sopro de bochechas, suave."
        },
        {
          title: "Continue sem parar",
          body: "Mantenha o ciclo 30 compressões + 2 sopros até o SAMU chegar ou o bebê reagir. Bebês têm boa resposta à RCP imediata — não desista.",
          hint: "A tenra idade conserva melhor as funções cerebrais. Persista."
        }
      ]
    },
    donts: [
      "Não interrompa as compressões por mais de 10 segundos.",
      "Não ofereça água, comida ou remédios — a vítima está inconsciente.",
      "Não desista por achar que 'não está dando certo' — RCP é o que mantém o cérebro vivo até a ajuda chegar.",
      "Não comprima sobre o estômago ou costelas laterais — só no centro do peito.",
      "Não levante a vítima ou tente acordá-la sacudindo."
    ],
    callWhen: [
      "Imediatamente. Em parada cardíaca, cada minuto sem RCP reduz em 10% a chance de sobrevivência.",
      "Mantenha o 192 na linha durante toda a RCP — eles guiam você."
    ],
    quiz: [
      {
        q: "Qual a velocidade ideal das compressões?",
        opts: ["60 a 80 por minuto", "100 a 120 por minuto", "Quanto mais rápido melhor", "Não importa a velocidade"],
        correct: 1,
        explain: "100 a 120 por minuto — cerca de 2 compressões por segundo. Mais rápido que isso não dá tempo do coração encher de sangue."
      },
      {
        q: "Você não tem treinamento. O que faz?",
        opts: ["Não faz nada, espera o SAMU", "Faz só compressões, sem ventilação", "Tenta as duas mesmo sem treino", "Bate no peito com força para 'acordar'"],
        correct: 1,
        explain: "Pessoas leigas devem fazer 'Hands-Only CPR' — só compressões. Estudos mostram que é tão eficaz quanto a RCP completa nas primeiras emergências."
      },
      {
        q: "A vítima começa a respirar. E agora?",
        opts: ["Continua comprimindo por garantia", "Para a RCP, mantém em posição lateral e observa", "Acorda ela com tapas", "Dá água"],
        correct: 1,
        explain: "Pare a RCP, coloque a vítima em posição lateral de segurança e fique observando até o SAMU chegar. Se voltar a parada, retome."
      }
    ],
    hasRCPTimer: true
  },

  {
    id: "engasgo",
    name: "Engasgo",
    category: "Vias aéreas",
    urgency: "critical",
    glyph: "◐",
    glyphColor: "var(--red-soft)",
    glyphInk: "var(--red-ink)",
    summary: "A vítima leva as mãos ao pescoço, não consegue tossir, falar ou respirar.",
    keywords: ["engasgo", "engasgou", "asfixia", "sufocando", "manobra", "heimlich", "vias aéreas", "vias aereas"],
    branch: {
      question: "A vítima consegue tossir ou falar?",
      hint: "Se consegue tossir, a obstrução é parcial e a tosse pode resolver sozinha.",
      opts: [
        { id: "yes", label: "Sim, tosse e fala um pouco", icon: "🗣", goto: "consciente" },
        { id: "no",  label: "Não, está engasgada(o)",      icon: "✕", goto: "passos" }
      ]
    },
    consciente: "Obstrução parcial — a via aérea ainda tem passagem. Incentive a vítima a tossir com força. A tosse é o mecanismo mais eficaz. Se a tosse ENFRAQUECER ou ela parar de respirar, comece os passos de emergência imediatamente.",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/ENdkBiNY3SQ",
    babyVideoUrl: "https://www.youtube.com/embed/hKnnSF-_cos",
    illoLabel: "Palmadas interescapulares e Heimlich",
    steps: [
      {
        title: "Confirme o engasgo total",
        body: "Pergunte: 'Você está engasgada(o)?'. Se não consegue responder, faz o sinal do pescoço (mãos no pescoço) ou tem lábios azulados — é engasgo grave. Ligue 192.",
        hint: "O 'sinal universal do engasgo' é levar as duas mãos ao pescoço."
      },
      {
        title: "Dê 5 palmadas entre as omoplatas",
        body: "Incline a vítima para frente. Com a palma da mão, dê 5 golpes firmes entre as omoplatas (escápulas). Verifique a boca após cada série — se o objeto aparecer, retire.",
        hint: "Golpes firmes e separados, com a palma aberta — não é uma 'batidinha' suave."
      },
      {
        title: "Se as palmadas não resolverem: Heimlich",
        body: "Fique em pé atrás da vítima, ligeiramente inclinada para frente. Feche o punho entre o umbigo e o esterno. Cubra com a outra mão. Puxe para dentro e para CIMA com força.",
        hint: "Alterne: 5 palmadas nas costas → 5 compressões abdominais, até o objeto sair."
      },
      {
        title: "Se a vítima desmaiar, deite e ligue 192",
        body: "Coloque-a no chão de costas. Inicie compressões torácicas (como RCP). Antes de cada ciclo, olhe a boca: se ver o objeto, retire com o dedo. NÃO faça varredura cega.",
        hint: "Varredura cega pode empurrar o objeto mais fundo. Só retire se ESTIVER VENDO o objeto."
      }
    ],
    childVersion: {
      title: "Em crianças (1 a 8 anos)",
      steps: [
        {
          title: "Confirme o engasgo",
          body: "A criança não consegue falar, tossir ou respirar? Lábios azulados? Incline-a para frente — mesma abordagem do adulto, mas com força adaptada ao tamanho.",
          hint: "Crianças maiores de 1 ano: a técnica é a mesma do adulto, com ajuste de força."
        },
        {
          title: "5 palmadas entre as omoplatas",
          body: "Criança inclinada para frente (ajoelhe se necessário para ficar na altura dela). 5 golpes firmes entre as omoplatas com a palma aberta. Use força proporcional ao tamanho.",
          hint: "Menos força que no adulto — adapte ao tamanho da criança."
        },
        {
          title: "5 compressões abdominais (Heimlich)",
          body: "Fique atrás da criança ajoelhada(o). Punho fechado entre umbigo e esterno. Cubra com a outra mão. Puxe para dentro e para cima, 5 vezes.",
          hint: "Para crianças de 1–3 anos, use um punho menor e menos força."
        },
        {
          title: "Alterne até o objeto sair",
          body: "5 palmadas → 5 Heimlich → repita. Se desmaiar: deite, inicie RCP infantil (30 compressões com 1 mão + 2 ventilações) e ligue 192.",
          hint: "Antes de cada ventilação: inspecione a boca e retire o objeto SOMENTE se estiver visível."
        }
      ]
    },
    babyVersion: {
      title: "Em bebês (menos de 1 ano)",
      steps: [
        "Apoie o bebê de bruços no seu antebraço, cabeça mais baixa que o tronco.",
        "Dê 5 tapas firmes entre as escápulas, com a palma da mão.",
        "Vire o bebê de barriga para cima e faça 5 compressões com 2 dedos no centro do peito.",
        "Alterne 5 tapas / 5 compressões até o objeto sair ou ele desmaiar.",
        "Se desmaiar: ligue 192 e inicie RCP de bebê (ver caso RCP)."
      ]
    },
    donts: [
      "Não dê água, leite ou pão para 'empurrar' — pode piorar a obstrução.",
      "Não faça Heimlich no abdome de gestantes ou obesos — use compressões no peito.",
      "Não faça Heimlich em bebês menores de 1 ano — use os tapas e compressões descritos acima.",
      "Não tente tirar o objeto com o dedo se não estiver vendo — pode empurrar fundo."
    ],
    callWhen: [
      "Imediatamente quando a obstrução é total (não tosse, não fala).",
      "Sempre depois do incidente — mesmo se o objeto sair, vá ao pronto-socorro para checar a via aérea."
    ],
    quiz: [
      {
        q: "A vítima está tossindo com força. O que você faz?",
        opts: ["Faz Heimlich logo", "Estimula ela a tossir e observa", "Dá água", "Bate nas costas"],
        correct: 1,
        explain: "Se ela tosse, a via aérea está parcialmente aberta — a tosse é o mecanismo mais eficaz. Só intervenha se a tosse enfraquecer."
      },
      {
        q: "Onde colocar o punho na manobra de Heimlich em um adulto?",
        opts: ["No peito, entre os mamilos", "No abdome, entre umbigo e esterno", "Nas costelas laterais", "No pescoço"],
        correct: 1,
        explain: "Acima do umbigo e abaixo do esterno, na 'boca do estômago'. Empurra-se para dentro e para cima."
      },
      {
        q: "Bebê de 8 meses engasgado. Heimlich?",
        opts: ["Sim, Heimlich normal", "Não — 5 tapas nas costas + 5 compressões no peito", "Só sacudir", "Dar água"],
        correct: 1,
        explain: "Bebês até 1 ano: 5 tapas firmes entre as escápulas + 5 compressões no peito com 2 dedos. Heimlich pode machucar órgãos."
      }
    ]
  },

  {
    id: "queimaduras",
    name: "Queimaduras",
    category: "Emergência grave",
    urgency: "critical",
    glyph: "△",
    glyphColor: "oklch(0.93 0.08 50)",
    glyphInk: "oklch(0.4 0.15 50)",
    summary: "Lesão da pele por calor, líquido fervente, química, eletricidade ou sol. Classificada em 1°, 2° e 3° grau.",
    keywords: ["queimadura", "queimou", "fogo", "fervente", "óleo", "oleo", "fervida", "sol"],
    branch: {
      question: "Que tipo de queimadura é?",
      hint: "Cada tipo tem manejo diferente.",
      opts: [
        { id: "termica", label: "Calor / fogo / líquido", icon: "🔥", goto: "passos" },
        { id: "quimica", label: "Química / produto",      icon: "🧪", goto: "passos" },
        { id: "eletrica",label: "Elétrica",                icon: "⚡", goto: "passos" }
      ]
    },
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/z8Scj1Rveck",
    illoLabel: "Água corrente em queimadura — 15 a 20 minutos",
    steps: [
      {
        title: "Interrompa o agente",
        body: "Apague a chama (rolando a vítima no chão se for fogo na roupa). Tire da fonte de calor. Em queimadura química, retire roupas contaminadas usando luvas.",
        hint: "Lema dos bombeiros: 'pare, deite, role'. Correr só atiça o fogo."
      },
      {
        title: "Resfrie com água corrente",
        body: "Água em temperatura ambiente (NÃO gelada) por 15 a 20 minutos. Isso impede a queimadura de aprofundar. Em queimadura química, lave por 20+ minutos.",
        hint: "Gelo direto piora — congela o tecido e causa mais dano."
      },
      {
        title: "Remova joias e roupas (com cuidado)",
        body: "Tire anéis, pulseiras, relógios antes do inchaço. Roupas só se NÃO estiverem grudadas. Se grudou, corte ao redor — não puxe.",
        hint: "Joias podem ficar 'aprisionadas' quando o membro incha."
      },
      {
        title: "Cubra com pano limpo e úmido",
        body: "Cobertura solta, sem aderir à ferida. Pano limpo, gaze ou plástico filme (PVC) funciona para transporte. Não use algodão (gruda).",
        hint: "PVC alimentar é solução de campo aprovada por bombeiros."
      },
      {
        title: "Vá ao hospital se for grande ou profunda",
        body: "Hospital sempre para: queimaduras maiores que a palma da mão da vítima, em rosto, mãos, pés, genitais, articulações, ou de 2°/3° grau (bolhas, pele branca/preta).",
        hint: "Use a 'regra da mão': palma da vítima ≈ 1% da superfície corporal. Em criança, qualquer queimadura = hospital."
      }
    ],
    donts: [
      "Não passe pasta de dente, manteiga, óleo, clara de ovo, café, borra ou qualquer 'remédio caseiro'.",
      "Não estoure bolhas — elas protegem a pele em regeneração.",
      "Não use gelo direto na pele — agrava a lesão.",
      "Não cubra com algodão — fibras grudam na ferida.",
      "Não jogue água em queimadura elétrica antes de cortar a energia.",
      "Não atrase o transporte para hospital em queimaduras grandes — risco de choque hipovolêmico."
    ],
    callWhen: [
      "Queimadura em rosto, mãos, pés, genitais ou articulações.",
      "Queimaduras com bolhas grandes, pele branca ou enegrecida (2° e 3° grau).",
      "Área queimada maior que a palma da mão da vítima.",
      "Queimadura em criança ou idoso, mesmo pequena.",
      "Queimadura química, elétrica ou por inalação de fumaça.",
      "Sinais de choque: confusão, palidez, sede intensa, pulso fraco."
    ],
    quiz: [
      {
        q: "Criança queimou a mão no fogão. Você...",
        opts: ["Passa manteiga", "Aplica gelo", "Água corrente em temperatura ambiente por 15-20 min, cobre com pano limpo, hospital", "Estoura a bolha"],
        correct: 2,
        explain: "Água corrente em temperatura ambiente é o tratamento de primeira linha. Hospital sempre em criança."
      },
      {
        q: "Bolha grande se formou. O que fazer?",
        opts: ["Estourar com agulha esterilizada", "Cortar a pele", "Deixar intacta, cobrir e ir ao hospital", "Passar álcool"],
        correct: 2,
        explain: "Bolha intacta é proteção biológica. Estourar é porta de entrada para infecção."
      }
    ]
  },

  {
    id: "desmaio",
    name: "Desmaio",
    category: "Crise circulatória",
    urgency: "critical",
    glyph: "○",
    glyphColor: "var(--blue-soft)",
    glyphInk: "var(--blue-ink)",
    summary: "Perda breve de consciência por queda de pressão. A pessoa cai, fica pálida e recupera em segundos a poucos minutos.",
    keywords: ["desmaio", "desmaiou", "pressão", "pressao", "tontura", "vertigem"],
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/nZGdJwuxRiE",
    illoLabel: "Elevação das pernas após desmaio",
    steps: [
      {
        title: "Confirme que é desmaio",
        body: "Pessoa cai, fica pálida, suada, fria. Responde após segundos. Se não responde em até 1 minuto ou não respira → trate como parada cardíaca (ir para o caso de RCP).",
        hint: "Desmaio típico dura segundos. Mais que isso já não é mais um simples desmaio."
      },
      {
        title: "Deite a vítima de costas",
        body: "Mantenha no chão, em local seguro. Não tente sentá-la imediatamente. Afrouxe roupa apertada (gola, cinto, sutiã).",
        hint: "Sentar antes da hora faz desmaiar de novo — espere a coloração voltar."
      },
      {
        title: "Eleve as pernas",
        body: "Ponha as pernas a uns 30 cm do chão (use almofadas, cadeira). Isso devolve sangue ao cérebro. Mantenha por 1 a 2 minutos.",
        hint: "Esta é a manobra mais eficaz no desmaio comum (vasovagal)."
      },
      {
        title: "Ventile o ambiente",
        body: "Abra janelas, peça espaço (gente em volta atrapalha). Ar fresco no rosto ajuda. Não jogue água — só molhe levemente a testa se necessário.",
        hint: "Movimento de leque é melhor que jogar copo de água."
      },
      {
        title: "Recuperação gradual",
        body: "Quando responder, ofereça pequenos goles de água OU água com açúcar se houver suspeita de hipoglicemia. Deixe sentada por 5 a 10 minutos antes de levantar.",
        hint: "Levantar rápido = novo desmaio garantido."
      }
    ],
    donts: [
      "Não sente nem levante a vítima rapidamente.",
      "Não jogue água gelada no rosto — pode causar arritmia.",
      "Não dê tapas para 'acordar'.",
      "Não force líquidos antes da pessoa recuperar consciência total.",
      "Não permita que volte a se levantar sem repouso prévio."
    ],
    callWhen: [
      "Desmaio dura mais de 1 minuto.",
      "Vítima não recupera consciência por completo.",
      "Houve dor no peito, palpitações, falta de ar antes do desmaio.",
      "Desmaio em gestante, idoso ou pessoa com doença cardíaca.",
      "Lesão por queda (cabeça, fratura).",
      "Desmaios repetidos no mesmo dia."
    ],
    quiz: [
      {
        q: "Pessoa desmaiou. Posição correta?",
        opts: ["Sentada com cabeça entre joelhos", "Em pé encostada na parede", "Deitada de costas com pernas elevadas", "De lado, em silêncio"],
        correct: 2,
        explain: "Deitar e elevar pernas devolve sangue rapidamente ao cérebro. Sentar mantém o problema."
      },
      {
        q: "Quando NÃO é só desmaio comum?",
        opts: ["Dura mais que 1 minuto sem voltar", "Veio com dor no peito", "Houve trauma na queda", "Todas as anteriores"],
        correct: 3,
        explain: "Qualquer um desses sinais pede 192 e avaliação imediata."
      }
    ]
  },

  {
    id: "avc",
    name: "AVC/AVE — Derrame",
    category: "Emergência crítica",
    urgency: "critical",
    glyph: "◎",
    glyphColor: "oklch(0.93 0.04 280)",
    glyphInk: "oklch(0.38 0.12 280)",
    summary: "Assimetria facial, braço sem força, fala embaralhada. Cada minuto conta — ligue 192 agora.",
    keywords: ["avc", "ave", "derrame", "acidente vascular", "cerebral", "stroke", "boca torta", "assimetria facial", "fraqueza braço", "fala embaralhada"],
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/FDc-RCRsJJc",
    illoLabel: "Teste SAMU — Sorrir, Braços, Falar",
    steps: [
      {
        title: "Aplique o teste SAMU",
        body: "Peça para a pessoa: (S) Sorrir — um lado da boca cai? (A) Levantar os dois braços — um cai? (M) Falar uma frase — fala enrolada ou estranha? Qualquer sinal positivo = AVC provável.",
        hint: "Um único sinal positivo já justifica ligar 192 imediatamente. Não espere todos os três."
      },
      {
        title: "Ligue 192 agora e anote a hora",
        body: "Informe: 'Suspeita de AVC, vítima com [sinal]'. Anote o horário exato do início dos sintomas — o médico vai precisar para decidir o tratamento.",
        hint: "Cada minuto de AVC sem tratamento = aproximadamente 2 milhões de neurônios perdidos."
      },
      {
        title: "Posicione confortavelmente",
        body: "Se consciente: sente ou deite com cabeça levemente elevada (30°). Se inconsciente mas respirando: posição lateral de segurança. Não deixe cair — quedas causam lesão adicional.",
        hint: "Nunca force a pessoa a andar 'para ver se está bem' — pode agravar o derrame."
      },
      {
        title: "Não dê nada pela boca",
        body: "AVC pode comprometer a deglutição. Água, comida ou remédio podem ir para o pulmão. Não dê AAS (aspirina) sem orientação médica — alguns AVCs são hemorrágicos e a aspirina piora.",
        hint: "AAS em AVC hemorrágico pode ser fatal. Só o médico pode diferenciar os tipos."
      },
      {
        title: "Monitore até o SAMU chegar",
        body: "Observe: nível de consciência, respiração, convulsões, piora dos sintomas. Anote qualquer mudança para informar à equipe. Não deixe a pessoa sozinha.",
        hint: "Se convulsionar: proteja a cabeça, afaste objetos, não coloque nada na boca. Veja o caso 'Convulsão'."
      }
    ],
    donts: [
      "Não dê aspirina (AAS) — pode agravar AVCs hemorrágicos.",
      "Não dê nada pela boca — risco de aspiração por dificuldade de deglutição.",
      "Não leve de carro — o SAMU tem equipamentos que salvam vidas no trajeto.",
      "Não espere 'melhorar sozinho' — AVC isquêmico tem janela máxima de 4h30 para tratamento.",
      "Não deixe a pessoa dormir sem monitoramento — pode ser piora progressiva da consciência."
    ],
    callWhen: [
      "192 (SAMU) imediatamente ao primeiro sinal — não espere confirmar.",
      "A janela para tratamento com trombolítico (clot-buster) é de apenas 4h30 do início dos sintomas.",
      "Anote a hora exata do início dos sintomas — é a informação mais importante para o médico."
    ],
    quiz: [
      {
        q: "Qual NÃO faz parte do teste SAMU de AVC?",
        opts: ["Sorrir (assimetria facial)", "Levantar os dois braços", "Apertar a mão com força", "Falar uma frase"],
        correct: 2,
        explain: "SAMU: Sorrir, Braços, fala (Mudar). Apertar a mão não é parte do protocolo simplificado para leigos."
      },
      {
        q: "Por que não dar aspirina em qualquer AVC?",
        opts: ["Aumenta a pressão arterial", "Pode agravar AVCs hemorrágicos (sangramento)", "Causa alergia", "É contraindicada para idosos"],
        correct: 1,
        explain: "AVC pode ser isquêmico (coágulo) ou hemorrágico (sangramento). Aspirina em hemorrágico é perigosa. Só o médico decide."
      },
      {
        q: "Qual a janela de tempo para tratamento eficaz do AVC isquêmico?",
        opts: ["1 hora", "4h30 minutos", "12 horas", "24 horas"],
        correct: 1,
        explain: "4h30 é a janela máxima para trombolítico. Por isso ligue 192 ao primeiro sinal e anote a hora dos sintomas."
      }
    ]
  },

  {
    id: "infarto",
    name: "Infarto",
    category: "Emergência crítica",
    urgency: "critical",
    glyph: "♥",
    glyphColor: "oklch(0.96 0.035 28)",
    glyphInk: "oklch(0.38 0.18 28)",
    summary: "Dor forte no peito que pode irradiar para o braço esquerdo, mandíbula ou costas. Suor frio, náusea, falta de ar.",
    keywords: ["infarto", "coração", "coracao", "dor no peito", "ataque cardiaco", "ataque cardíaco", "iam", "isquemia", "angina", "infartou"],
    branch: {
      question: "A vítima está consciente e respondendo?",
      hint: "Toque os ombros e chame. Olhe se o peito se move.",
      opts: [
        { id: "yes", label: "Sim, está consciente", icon: "👁", goto: "passos" },
        { id: "no",  label: "Não responde / não respira", icon: "✕", goto: "passos-grave" }
      ]
    },
    "passos-grave": "A vítima não responde e não respira — pode ter entrado em parada cardíaca. Ligue 192 IMEDIATAMENTE e inicie RCP: 30 compressões fortes no centro do peito, 100–120 por minuto. Siga o caso 'Parada Cardíaca / RCP'.",
    illoLabel: "Dor no peito irradiando para o braço",
    steps: [
      {
        title: "Ligue 192 imediatamente",
        body: "Não espere a dor passar. No infarto, cada minuto conta — artérias bloqueadas destroem músculo cardíaco de forma irreversível. Aponte alguém: 'Você, ligue 192 agora.'",
        hint: "Informe: 'Possível infarto, vítima com dor no peito.' O SAMU chega com o equipamento certo."
      },
      {
        title: "Sente ou deite a vítima",
        body: "Posição que exige menos esforço ao coração: sentada reclinada ou deitada com cabeça levemente elevada. Não permita que a vítima ande — qualquer esforço aumenta a demanda cardíaca.",
        hint: "Afrouxe gravata, cinto e roupas apertadas no pescoço e no peito."
      },
      {
        title: "Não dê AAS (Aspirina) por conta própria",
        body: "Embora aspirina seja usada no infarto, a dose e o momento são decisão médica. Se a pessoa já toma e tem orientação do médico, siga. Do contrário, aguarde o SAMU.",
        hint: "Dor no peito pode ter várias causas — só o médico confirma o infarto e decide o tratamento."
      },
      {
        title: "Monitore e acalme",
        body: "Fique perto, fale com calma. Observe: lábios azulados, confusão, perda de consciência → inicie RCP. Não deixe a vítima sozinha.",
        hint: "Ansiedade aumenta a frequência cardíaca. Ambiente calmo reduz o dano ao coração."
      },
      {
        title: "Se a vítima desmaiar e parar de respirar: RCP",
        body: "Infarto pode evoluir para parada cardíaca a qualquer momento. Se não responde e não respira → 30 compressões no centro do peito, FORTE e RÁPIDO, 100–120 por minuto.",
        hint: "Não tenha medo de iniciar RCP — é o que salva quando o coração para."
      }
    ],
    donts: [
      "Não deixe a vítima andar ou se esforçar — qualquer atividade piora o quadro.",
      "Não dê água, comida ou remédios sem orientação médica.",
      "Não minimize a dor — 'aguentar um pouco' custa músculo cardíaco.",
      "Não leve de carro se o SAMU pode chegar — o trajeto sem suporte pode ser fatal.",
      "Não espere a dor passar sozinha — no infarto, a janela de tratamento é de horas."
    ],
    callWhen: [
      "Imediatamente ao primeiro sinal: dor no peito + suor frio, náusea ou dor no braço/mandíbula.",
      "Cada minuto de artéria bloqueada = mais músculo cardíaco perdido de forma irreversível.",
      "Hospitais com hemodinâmica (cateterismo) podem desobstruir a artéria em minutos com o tratamento certo."
    ],
    quiz: [
      {
        q: "Dor no peito há 10 minutos, suor frio, braço esquerdo pesado. O que fazer primeiro?",
        opts: ["Esperar mais para ver se piora", "Tomar dois AAS por conta", "Ligar 192 imediatamente e sentar a vítima", "Dar água com açúcar"],
        correct: 2,
        explain: "192 imediatamente. No infarto, cada minuto conta. Não espere a dor passar."
      },
      {
        q: "Por que não dar AAS sem orientação médica no infarto?",
        opts: ["AAS é proibido", "A dor pode ter outra causa e a dose precisa ser correta", "AAS piora qualquer dor", "AAS causa hipertensão"],
        correct: 1,
        explain: "Dor no peito tem várias causas. Só o médico confirma infarto e decide a dose e o momento correto de usar AAS."
      }
    ]
  },

  {
    id: "choque-eletrico",
    name: "Choque elétrico",
    category: "Acidentes elétricos",
    urgency: "alta",
    glyph: "⚡",
    glyphColor: "oklch(0.95 0.08 70)",
    glyphInk: "oklch(0.4 0.15 70)",
    summary: "A vítima recebeu descarga elétrica. Pode estar caída, queimada, em parada cardíaca ou ainda em contato com a fonte.",
    keywords: ["choque", "elétrico", "eletrico", "eletricidade", "raio", "tomada", "fio"],
    branch: {
      question: "A vítima ainda está em contato com a corrente?",
      hint: "Se SIM, NÃO TOQUE — você pode ser eletrocutada(o) também.",
      opts: [
        { id: "yes", label: "Sim, ainda em contato", icon: "⚡", goto: "passos" },
        { id: "no",  label: "Não, já está livre", icon: "✓", goto: "passos" }
      ]
    },
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/YFRL6WNok3U",
    illoLabel: "Desligar disjuntor antes de tocar",
    steps: [
      {
        title: "NÃO TOQUE na vítima ainda",
        body: "Se ela está em contato com fios ou aparelhos energizados, tocá-la transfere a corrente para você. Vítima parada eletrizada é uma armadilha mortal.",
        hint: "A regra é simples: corte a energia ANTES de qualquer outra coisa."
      },
      {
        title: "Desligue a energia",
        body: "Desligue o disjuntor geral (no quadro de luz) ou puxe o plugue. Se não conseguir, use um objeto SECO e isolante (cabo de vassoura de madeira, plástico grosso) para afastar a fonte.",
        hint: "Nunca use metal, materiais úmidos ou as próprias mãos."
      },
      {
        title: "Cheque consciência e respiração",
        body: "Após cortar a energia, toque a vítima. Chame em voz alta. Olhe o peito. Se não responde e não respira → comece RCP imediatamente.",
        hint: "Choque elétrico frequentemente causa parada cardíaca. Esteja preparada(o)."
      },
      {
        title: "Ligue 192 (SAMU) e 193 (Bombeiros)",
        body: "Mesmo que pareça bem, toda vítima de choque elétrico precisa de avaliação médica. Pode haver arritmia cardíaca tardia, queimadura interna, lesão nervosa.",
        hint: "Informe se foi corrente de 110V, 220V, alta tensão ou raio — o atendimento muda."
      },
      {
        title: "Cuide das queimaduras",
        body: "Procure dois pontos de queimadura: por onde a corrente entrou e por onde saiu (geralmente pés). Cubra com pano limpo úmido. Não passe pomadas ou pasta de dente.",
        hint: "Queimadura elétrica é pequena por fora, grande por dentro. Sempre exige hospital."
      }
    ],
    donts: [
      "Não toque na vítima antes de cortar a energia — você vira a segunda vítima.",
      "Não jogue água em pessoa que ainda está em contato com a corrente.",
      "Não use objetos metálicos ou molhados para afastar fios.",
      "Não dê alta médica por conta própria — sempre vá ao hospital, mesmo que pareça bem.",
      "Em choque de alta tensão (rede elétrica), mantenha pelo menos 10 metros de distância e chame os Bombeiros."
    ],
    callWhen: [
      "Sempre — toda vítima de choque elétrico precisa de avaliação.",
      "Bombeiros 193 para cortar a energia em casos de rede pública.",
      "SAMU 192 para a vítima."
    ],
    quiz: [
      {
        q: "Vítima caída tocando em um fio desencapado. Primeira ação?",
        opts: ["Puxar pelos braços rapidamente", "Cortar a energia ou afastar com objeto isolante", "Jogar água", "Fazer RCP imediatamente"],
        correct: 1,
        explain: "Nunca toque antes de cortar a energia. Você pode virar a segunda vítima."
      },
      {
        q: "Após levar um choque leve em casa, a pessoa diz que está bem. O que fazer?",
        opts: ["Liberar, já que está bem", "Ir ao hospital mesmo assim", "Só observar 24h em casa", "Dar água com açúcar"],
        correct: 1,
        explain: "Choques elétricos podem causar arritmia até horas depois. Avaliação médica é obrigatória."
      }
    ]
  },

  {
    id: "hemorragia",
    name: "Hemorragia / Sangramento",
    category: "Trauma",
    urgency: "alta",
    glyph: "▣",
    glyphColor: "var(--red-soft)",
    glyphInk: "var(--red-ink)",
    summary: "Sangramento abundante que não estanca, jorra ou empapa rapidamente o tecido aplicado.",
    keywords: ["hemorragia", "sangue", "sangramento", "corte", "ferida", "estancar"],
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/gqgguKRpbQQ",
    illoLabel: "Compressão direta com pano limpo",
    steps: [
      {
        title: "Proteja-se",
        body: "Use luvas, sacola plástica ou várias camadas de pano entre suas mãos e o sangue da vítima. Doenças transmissíveis pelo sangue são reais.",
        hint: "Se não tiver luvas, sacola plástica de mercado funciona bem como barreira."
      },
      {
        title: "Aplique pressão direta na ferida",
        body: "Use pano limpo, gaze ou camiseta. Pressione com FORÇA diretamente sobre o ponto que sangra. Mantenha a pressão contínua por pelo menos 10 minutos sem espiar.",
        hint: "Espiar a cada 30 segundos quebra a coagulação. Pressione firme e segure."
      },
      {
        title: "Eleve o membro afetado",
        body: "Se o sangramento é em braço ou perna, eleve acima do nível do coração enquanto continua pressionando. A gravidade ajuda a reduzir o fluxo.",
        hint: "Não eleve se suspeitar de fratura no mesmo local."
      },
      {
        title: "Se empapar, NÃO troque — adicione mais",
        body: "Trocar o pano remove o coágulo que está se formando. Coloque mais camadas POR CIMA e continue pressionando.",
        hint: "Quanto menos você mexer no curativo, mais rápido o sangue coagula."
      },
      {
        title: "Para sangramentos massivos: pressione na artéria",
        body: "Se o sangramento jorra e não para: pressione a artéria principal mais próxima (braquial no braço, femoral na virilha). Em último caso e em membros, torniquete acima da ferida — anote a hora!",
        hint: "Torniquete só em hemorragia que ameaça a vida, e só em membros. Nunca em pescoço ou tronco."
      }
    ],
    donts: [
      "Não espie a ferida durante a compressão — quebra o coágulo.",
      "Não use pó de café, terra ou farinha — contamina e dificulta o tratamento.",
      "Não retire objetos cravados (faca, vidro) — pode aumentar o sangramento. Estabilize ao redor.",
      "Não dê água — se precisar de cirurgia, estômago vazio é melhor.",
      "Não use torniquete em pescoço, tronco ou se a hemorragia não é massiva."
    ],
    callWhen: [
      "Sangramento que não para após 10 minutos de pressão.",
      "Sangue jorrando em pulsos (artéria) ou em volume muito grande.",
      "Vítima ficando pálida, suando frio, confusa ou com pulso fraco — sinais de choque.",
      "Objeto cravado, amputação ou ferida em pescoço/tórax/abdome."
    ],
    quiz: [
      {
        q: "O pano empapou de sangue. O que fazer?",
        opts: ["Trocar por um limpo", "Adicionar mais pano por cima", "Soltar e olhar", "Lavar com água"],
        correct: 1,
        explain: "Trocar remove o coágulo formado. Coloque MAIS camadas por cima e continue pressionando."
      },
      {
        q: "Faca cravada na coxa, sangrando muito. Você...",
        opts: ["Puxa a faca rapidamente", "Deixa a faca, pressiona ao redor, chama 192", "Empurra mais fundo", "Lava com álcool"],
        correct: 1,
        explain: "Objetos cravados podem estar tamponando vasos. Retirar pode causar sangramento ainda maior. Estabilize e leve assim para o hospital."
      }
    ]
  },

  {
    id: "convulsao",
    name: "Convulsão",
    category: "Crise neurológica",
    urgency: "alta",
    glyph: "≋",
    glyphColor: "oklch(0.95 0.05 290)",
    glyphInk: "oklch(0.4 0.15 290)",
    summary: "A pessoa perde a consciência e tem movimentos involuntários (tremores, rigidez) que duram segundos a minutos.",
    keywords: ["convulsão", "convulsao", "epilepsia", "epileptica", "ataque", "crise"],
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/8fk2-liGO0A",
    illoLabel: "Proteção da cabeça e posição lateral",
    steps: [
      {
        title: "Mantenha a calma e marque a hora",
        body: "A maioria das convulsões dura 1 a 3 minutos e termina sozinha. Olhe seu relógio: você vai precisar dessa informação.",
        hint: "Convulsões parecem durar uma eternidade — o tempo real é quase sempre menor do que você imagina."
      },
      {
        title: "Proteja a cabeça e afaste objetos",
        body: "Coloque algo macio sob a cabeça (almofada, casaco dobrado). Afaste móveis, vidros, objetos pontiagudos. Afrouxe roupa apertada no pescoço.",
        hint: "Não tente conter os movimentos — você pode machucar a vítima ou se machucar."
      },
      {
        title: "NÃO coloque nada na boca",
        body: "Nunca enfie dedos, colher, pano ou objeto na boca da vítima. A pessoa NÃO engole a língua. Você só consegue: quebrar dentes dela ou ser mordida(o) com força.",
        hint: "Este é um mito antigo. Repetir: nada na boca, nunca."
      },
      {
        title: "Quando os tremores pararem, vire de lado",
        body: "Posição lateral de segurança (PLS): vítima de lado, cabeça apoiada no braço dobrado, perna de cima flexionada. Isso evita aspiração de saliva ou vômito.",
        hint: "Após a crise, a pessoa pode estar confusa por minutos a uma hora — fique perto, fale com calma."
      },
      {
        title: "Observe e registre",
        body: "Quanto tempo durou? Que partes do corpo se moveram? Houve perda de urina? A pessoa já tem epilepsia conhecida? Essas respostas são ouro para o médico.",
        hint: "Se ela acordar bem e tiver epilepsia conhecida, talvez não precise de hospital — siga orientação do médico dela."
      }
    ],
    donts: [
      "Não coloque NADA na boca — nem dedo, nem colher, nem pano.",
      "Não tente segurar a vítima ou impedir os movimentos.",
      "Não dê água, comida ou remédios durante ou logo após a crise.",
      "Não jogue água no rosto para 'acordar'.",
      "Não tente 'reanimar' aplicando tapas ou sacudindo."
    ],
    callWhen: [
      "Primeira convulsão da vida (sem histórico).",
      "Crise dura MAIS de 5 minutos.",
      "Crises seguidas, sem recuperação entre elas.",
      "Convulsão em gestante, criança pequena ou após trauma na cabeça.",
      "Vítima não recupera a consciência após o fim dos tremores.",
      "Houve lesão durante a queda."
    ],
    quiz: [
      {
        q: "Durante a convulsão, você deve colocar algo na boca para 'evitar que engula a língua'?",
        opts: ["Sim, uma colher", "Sim, um pano enrolado", "Não, nunca", "Só os dedos"],
        correct: 2,
        explain: "Mito perigoso. A pessoa NÃO engole a língua. Colocar objetos só causa danos."
      },
      {
        q: "Quanto tempo de convulsão exige chamada ao 192?",
        opts: ["Mais de 30 segundos", "Mais de 2 minutos", "Mais de 5 minutos", "Só se durar mais de 10 minutos"],
        correct: 2,
        explain: "Após 5 minutos, é considerada 'crise prolongada' (status epilepticus) e precisa de intervenção médica."
      }
    ]
  },

  {
    id: "animais-peconhentos",
    name: "Acidente com animais peçonhentos",
    category: "Zooacidentes",
    urgency: "alta",
    glyph: "✺",
    glyphColor: "oklch(0.93 0.08 130)",
    glyphInk: "oklch(0.35 0.13 130)",
    summary: "Picada ou mordida de cobra, escorpião, aranha, abelha, lacraia, arraia ou outros. Comum no Brasil — atenção em áreas rurais e mata.",
    keywords: ["cobra", "escorpião", "escorpiao", "aranha", "abelha", "vespa", "marimbondo", "lacraia", "arraia", "picada", "mordida", "veneno", "soro"],
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/oDR1zD1QFTc",
    illoLabel: "Imobilização do membro picado",
    steps: [
      {
        title: "Afaste-se do animal com segurança",
        body: "Não tente capturar nem matar a cobra ou escorpião — mas se conseguir uma FOTO à distância, ajuda muito o hospital a escolher o soro certo.",
        hint: "Em áreas rurais brasileiras: jararaca, cascavel, surucucu e coral são as principais. Escorpiões amarelos no Sudeste/Nordeste."
      },
      {
        title: "Acalme a vítima e mantenha imóvel",
        body: "Coloque a pessoa deitada, com o local da picada em posição neutra (nem elevada, nem baixa). Movimento e ansiedade aceleram a circulação do veneno.",
        hint: "Falar com calma reduz a frequência cardíaca — isso atrasa a difusão do veneno."
      },
      {
        title: "Limpe o local com água e sabão",
        body: "Lave a picada apenas com água corrente e sabão neutro. Não passe álcool, querosene, gasolina, fumo, café, terra ou qualquer substância 'caseira'.",
        hint: "Soluções caseiras não neutralizam veneno e podem mascarar sintomas no hospital."
      },
      {
        title: "Remova anéis, pulseiras, calçados",
        body: "O local incha. Se há joias, relógios ou sapatos apertados no membro, retire AGORA — depois pode ficar impossível.",
        hint: "Pode tirar foto antes para mostrar a evolução do inchaço ao médico."
      },
      {
        title: "Leve ao hospital o mais rápido possível",
        body: "Picadas de cobra e escorpião exigem soro específico. Vá direto a hospital com soroterapia (UPA não tem). Ligue 192 se a vítima ficar com dificuldade respiratória, vômitos ou desmaio.",
        hint: "No SUS, a soroterapia é gratuita. Hospitais regionais e Cemepar/Vital Brasil são referências."
      }
    ],
    donts: [
      "NÃO faça torniquete ou garrote — concentra o veneno e pode levar a necrose.",
      "NÃO corte o local para 'sugar o veneno' — isso só infecciona.",
      "NÃO sugue com a boca — você se intoxica também.",
      "NÃO aplique gelo, álcool, querosene, fumo, café ou terra.",
      "NÃO dê bebida alcoólica para a vítima.",
      "NÃO espere os sintomas piorarem — vá direto ao hospital."
    ],
    callWhen: [
      "Toda picada de cobra ou escorpião — sempre.",
      "Picada de aranha (armadeira, viúva-negra, marrom) com dor intensa, suor, vômito.",
      "Reação alérgica grave a abelhas/vespas: inchaço de face, falta de ar, queda de pressão.",
      "Mordida em criança pequena, idoso ou gestante.",
      "Picadas múltiplas (enxame)."
    ],
    quiz: [
      {
        q: "Picada de cobra. O que você FAZ?",
        opts: ["Torniquete no membro", "Sugar o veneno", "Lavar com água e sabão e ir ao hospital", "Passar querosene"],
        correct: 2,
        explain: "Lavar, manter calmo, imobilizar e ir direto a hospital com soroterapia. Tudo mais é mito que piora o quadro."
      },
      {
        q: "Foto do animal serve para...",
        opts: ["Nada", "Postar nas redes", "Identificar a espécie e escolher o soro correto", "Assustar amigos"],
        correct: 2,
        explain: "Identificar a espécie ajuda muito — cada veneno tem soro específico (antibotrópico, anticrotálico, etc)."
      }
    ]
  },

  {
    id: "intoxicacao",
    name: "Intoxicação / Envenenamento",
    category: "Acidentes domésticos",
    urgency: "alta",
    glyph: "☠",
    glyphColor: "oklch(0.93 0.05 130)",
    glyphInk: "oklch(0.35 0.13 130)",
    summary: "Ingestão, inalação ou contato com substâncias tóxicas: remédios em excesso, produtos de limpeza, plantas, álcool, drogas.",
    keywords: ["intoxicação", "intoxicacao", "veneno", "envenenamento", "remédio", "remedio", "produto", "químico", "quimico", "ingestão"],
    branch: {
      question: "Que tipo de exposição foi?",
      hint: "A resposta muda totalmente a conduta.",
      opts: [
        { id: "ingestao", label: "Engoliu algo",       icon: "💊", goto: "passos" },
        { id: "inalacao", label: "Inalou (gás, fumaça)", icon: "💨", goto: "passos" },
        { id: "contato",  label: "Contato com pele/olhos", icon: "🖐", goto: "passos" }
      ]
    },
    illoLabel: "Embalagem do produto ingerido — leve junto",
    steps: [
      {
        title: "Ligue para o CIATox: 0800-722-6001",
        body: "Centro de Informações Toxicológicas — atende 24h, gratuito de todo o Brasil. Eles dão orientação específica por substância. Tenha a embalagem em mãos.",
        hint: "Salve esse número no seu celular AGORA. Vale ouro em emergência."
      },
      {
        title: "Identifique o produto",
        body: "Pegue a embalagem, frasco ou planta. Quanto, há quanto tempo, em que via (boca, pele, olhos)? Anote o nome exato — vai junto para o hospital.",
        hint: "Se for planta, fotografe folhas e flores ou leve um galho."
      },
      {
        title: "NÃO induza vômito",
        body: "A recomendação antiga de 'colocar o dedo na garganta' está superada. Provocar vômito pode causar queimadura no esôfago (em produtos cáusticos) ou aspiração para o pulmão.",
        hint: "Só induza vômito se um profissional do CIATox ou SAMU orientar especificamente."
      },
      {
        title: "Em inalação: leve para área ventilada",
        body: "Abra portas e janelas. Tire a vítima do ambiente. Se for gás de cozinha ou monóxido, NÃO acenda interruptores nem celular dentro do local. Se for cloro/amônia, evite respirar.",
        hint: "Você pode ser a próxima vítima — proteja-se primeiro."
      },
      {
        title: "Em contato com pele/olhos: lave por 15 minutos",
        body: "Água corrente fria, por 15 minutos no mínimo. Em olhos, abra a pálpebra com cuidado. Retire roupas contaminadas. Não esfregue.",
        hint: "Marque 15 minutos no relógio — parece longo, mas é necessário."
      },
      {
        title: "Vá ao hospital com a embalagem",
        body: "Mesmo que a vítima pareça bem, leve para avaliação. A embalagem, a receita ou o resto da substância vão com ela.",
        hint: "Em crianças, qualquer suspeita de ingestão de remédio do adulto = hospital, sempre."
      }
    ],
    donts: [
      "NÃO faça a vítima vomitar por conta própria.",
      "NÃO dê leite, óleo, água ou 'antídotos caseiros' antes de orientação.",
      "NÃO dê nada pela boca se a vítima estiver inconsciente, com convulsão ou engasgada.",
      "NÃO neutralize ácido com base (ou vice-versa) — gera calor e queimaduras.",
      "NÃO deixe a embalagem para trás — é informação crítica para o médico."
    ],
    callWhen: [
      "CIATox 0800-722-6001 sempre — é a referência principal.",
      "SAMU 192 se houver sintomas: vômito, sonolência, convulsão, inconsciência, dor de cabeça forte, dificuldade respiratória.",
      "Bombeiros 193 se for vazamento de gás ou produto químico em área fechada."
    ],
    quiz: [
      {
        q: "Criança engoliu produto de limpeza. Você deve...",
        opts: ["Forçar vômito", "Dar leite", "Ligar CIATox e ir ao hospital com a embalagem", "Esperar passar"],
        correct: 2,
        explain: "CIATox 0800-722-6001 + hospital com a embalagem. Forçar vômito em produto cáustico queima o esôfago duas vezes."
      },
      {
        q: "Qual o número do CIATox no Brasil?",
        opts: ["192", "0800-722-6001", "188", "136"],
        correct: 1,
        explain: "0800-722-6001 — Disque Intoxicação, gratuito, 24h."
      }
    ]
  },

  {
    id: "bebes",
    name: "Acidentes domésticos com bebês",
    category: "Pediatria",
    urgency: "alta",
    glyph: "◍",
    glyphColor: "oklch(0.95 0.04 30)",
    glyphInk: "oklch(0.4 0.13 30)",
    summary: "Bebês exploram o mundo com a boca, caem com facilidade e têm corpos frágeis. Quedas, engasgo, queimadura e ingestão lideram.",
    keywords: ["bebê", "bebe", "criança", "crianca", "infantil", "queda", "bercário", "bercario"],
    illoLabel: "Tapas nas costas em bebê engasgado",
    steps: [
      {
        title: "Queda da cama/trocador",
        body: "Acalme o bebê. Observe por 24h: vômito repetido, sonolência fora de hora, pupilas diferentes, choro inconsolável ou desmaio são sinais de alerta. Se houver, vá ao hospital.",
        hint: "Bebês têm fontanelas (moleiras) — proteção natural, mas isso não substitui avaliação se a queda foi de altura."
      },
      {
        title: "Engasgo com objeto pequeno",
        body: "Apoie o bebê de bruços no antebraço, cabeça mais baixa. 5 tapas firmes entre as escápulas. Vire e faça 5 compressões com 2 dedos no centro do peito. Alterne até sair.",
        hint: "Brinquedos com peças <3cm, moedas, botões e tampinhas são os principais vilões."
      },
      {
        title: "Queimadura com líquido quente",
        body: "Causa da água a 60°C: queima a pele em 1 segundo. Resfrie com água corrente em temperatura ambiente por 15 a 20 min. NÃO use gelo. Não estoure bolhas. Cubra com pano limpo e leve ao hospital.",
        hint: "Tirou a roupa antes? Se grudou na pele, não puxe — corte ao redor."
      },
      {
        title: "Ingestão acidental de produto/medicamento",
        body: "CIATox 0800-722-6001 imediatamente. Leve a embalagem. Não force vômito. Não dê leite por conta própria.",
        hint: "Verifique medicamentos da casa: a maioria das intoxicações pediátricas é de remédios dos avós e dos pais."
      },
      {
        title: "Afogamento (banheira, piscina)",
        body: "Tire o bebê da água. Se não responde e não respira, comece RCP infantil: 30 compressões com 2 dedos + 2 ventilações. Ligue 192. Nunca deixe bebê sozinho em água, nem 30 segundos.",
        hint: "Bebês podem se afogar em 5 cm de água — banheira, balde, vaso sanitário."
      }
    ],
    donts: [
      "Não dê água, leite ou comida em qualquer suspeita de intoxicação ou engasgo.",
      "Não passe pasta de dente, manteiga ou pomada caseira em queimadura.",
      "Não use gelo direto na pele do bebê.",
      "Não sacuda o bebê em qualquer situação — pode causar lesão cerebral grave.",
      "Não deixe sozinho em superfícies altas (cama, trocador, sofá) — eles rolam.",
      "Não force vômito em ingestão de produtos químicos."
    ],
    callWhen: [
      "Após queda com vômito, sonolência ou comportamento estranho.",
      "Qualquer engasgo que não resolva nos primeiros 30 segundos.",
      "Queimadura maior que a palma da mão do bebê.",
      "Ingestão de qualquer produto químico ou medicamento.",
      "Bebê sem responder, mole, com lábios azulados — 192 + RCP imediatamente."
    ],
    quiz: [
      {
        q: "Bebê de 6 meses caiu da cama (40cm). Está chorando mas parece bem. O que fazer?",
        opts: ["Ir ao hospital imediatamente", "Acalmar e observar por 24h, com olhos atentos a sinais de alerta", "Dar remédio para dor", "Esperar uma semana"],
        correct: 1,
        explain: "Se está chorando e responde normalmente, observação domiciliar de 24h é o padrão. Hospital se houver vômito, sonolência fora do normal ou comportamento estranho."
      },
      {
        q: "Bebê engasgado. Você...",
        opts: ["Faz Heimlich normal", "Dá leite para empurrar", "5 tapas nas costas + 5 compressões com 2 dedos no peito", "Sacode o bebê"],
        correct: 2,
        explain: "Sequência específica para menores de 1 ano. Heimlich pode lesionar órgãos internos do bebê."
      }
    ]
  },

  {
    id: "suicidio",
    name: "Risco de suicídio",
    category: "Saúde mental",
    urgency: "alta",
    glyph: "♥",
    glyphColor: "var(--blue-soft)",
    glyphInk: "var(--blue-ink)",
    summary: "Alguém demonstrou pensamento, plano ou tentativa de suicídio. Sua presença e escuta podem salvar uma vida. CVV: 188.",
    keywords: ["suicídio", "suicidio", "cvv", "automutilação", "automutilacao", "ideação", "ideacao"],
    illoLabel: "Escuta ativa — você não está sozinha(o)",
    steps: [
      {
        title: "Leve a sério. Sempre.",
        body: "Falar sobre suicídio NÃO 'planta a ideia' — esse é mito. Toda menção a se machucar ou morrer merece atenção. Não minimize, não julgue.",
        hint: "Frases como 'queria sumir', 'todo mundo ia ficar melhor sem mim' são alertas."
      },
      {
        title: "Pergunte diretamente",
        body: "'Você está pensando em se machucar?' / 'Tem pensado em tirar a própria vida?'. A pergunta direta alivia — quem está em sofrimento muitas vezes está esperando alguém perguntar.",
        hint: "Estudos mostram: perguntar reduz o risco, não aumenta."
      },
      {
        title: "Ofereça escuta, não solução",
        body: "Você não precisa ter resposta. Esteja presente. Ouça sem interromper. Valide: 'Isso que você está passando é muito difícil. Estou aqui com você.'",
        hint: "Não diga 'pensa nas coisas boas' ou 'tem gente que está pior'. Acolhimento, não comparação."
      },
      {
        title: "Ligue para o CVV: 188",
        body: "Centro de Valorização da Vida. Ligação gratuita, 24 horas, sigilo total, voluntários treinados. Disponível em todo Brasil. Pode ser por chat (cvv.org.br) também.",
        hint: "Você pode ligar JUNTO com a pessoa, no viva-voz. Ou ligar você mesma(o) pedindo orientação."
      },
      {
        title: "Em risco iminente: SAMU 192 e segurança",
        body: "Se há plano concreto, acesso a meio (arma, medicamento, local) ou ato em curso: ligue 192. Retire o acesso (guarde remédios, armas). Não deixe a pessoa sozinha. Acompanhe ao CAPS ou pronto-socorro psiquiátrico.",
        hint: "CAPS (Centro de Atenção Psicossocial) atende crise pelo SUS, sem agendamento."
      }
    ],
    donts: [
      "Não minimize ('é fase', 'imagina', 'pensa nas coisas boas').",
      "Não prometa segredo absoluto — a vida vem antes do sigilo.",
      "Não julgue moral ou religiosamente.",
      "Não deixe a pessoa sozinha em risco iminente.",
      "Não interrogue sobre 'motivos' — escute o que ela quer falar.",
      "Não argumente contra — apenas acolha e direcione para ajuda."
    ],
    callWhen: [
      "CVV 188 — sempre. Escuta 24h, gratuita, sigilosa.",
      "SAMU 192 — em tentativa em curso ou intoxicação.",
      "Bombeiros 193 — se a pessoa está em local de risco físico imediato (alturas, etc).",
      "CAPS local — para encaminhamento na rede pública.",
      "Polícia 190 — apenas em risco iminente quando outros não respondem."
    ],
    quiz: [
      {
        q: "Amiga disse 'às vezes queria desaparecer'. Você...",
        opts: ["Muda de assunto", "Pergunta diretamente se ela tem pensado em se machucar", "Manda piada para distrair", "Sai de fininho"],
        correct: 1,
        explain: "Perguntar diretamente acolhe, não 'planta a ideia'. Estudos comprovam: a pergunta direta reduz o risco."
      },
      {
        q: "Número do CVV?",
        opts: ["192", "193", "188", "190"],
        correct: 2,
        explain: "188 — Centro de Valorização da Vida. 24h, gratuito, sigiloso, todo o Brasil."
      }
    ]
  },

  {
    id: "afogamento",
    name: "Afogamento",
    category: "Emergência aquática",
    urgency: "alta",
    glyph: "≈",
    glyphColor: "oklch(0.93 0.06 220)",
    glyphInk: "oklch(0.35 0.15 225)",
    summary: "Vítima retirada da água inconsciente ou com dificuldade respiratória grave.",
    keywords: ["afogamento", "afogou", "se afogou", "água", "agua", "piscina", "mar", "banheira", "rio", "praia"],
    branch: {
      question: "A vítima saiu da água consciente e respirando?",
      hint: "Afogamentos aparentemente leves podem deteriorar nas próximas horas.",
      opts: [
        { id: "consciente", label: "Sim, responde e respira", icon: "👁", goto: "consciente" },
        { id: "grave",      label: "Não responde / não respira", icon: "✕", goto: "passos" }
      ]
    },
    consciente: "Vítima consciente: aqueça-a, retire roupas molhadas e observe por pelo menos 30 minutos. Qualquer piora — tosse persistente, confusão, lábios azulados — vá ao pronto-socorro. Afogamentos leves podem deteriorar em horas.",
    illoLabel: "Compressões em vítima de afogamento",
    steps: [
      {
        title: "Retire com segurança",
        body: "Se não for nadador treinado, não entre na água. Use corda, galho, boia ou prancha para resgatar à distância. Ligue 193 (Bombeiros) para resgate aquático.",
        hint: "Afogados em pânico podem submerger o socorrista. Sempre use um objeto como intermediário."
      },
      {
        title: "Ligue 192 imediatamente",
        body: "Aponte alguém específico: 'Você, ligue 192 agora.' Afogamento é parada cardíaca em potencial — cada segundo conta.",
        hint: "Se estiver sozinha(o), ligue antes de iniciar as compressões."
      },
      {
        title: "Verifique respiração",
        body: "Deite a vítima de costas em superfície firme. Incline a cabeça, eleve o queixo. Observe o peito por 10 segundos. Qualquer respiração ausente ou anormal: comece compressões.",
        hint: "Não tente 'escorrer água' virando de lado — isso atrasa o atendimento que salva."
      },
      {
        title: "Inicie compressões imediatamente",
        body: "30 compressões fortes no centro do peito, 5–6 cm de profundidade, ritmo de 100–120 por minuto. Não interrompa. Reveze a cada 2 minutos se houver ajuda.",
        hint: "O frio da água pode conservar o cérebro por mais tempo — não desista mesmo se parecer sem esperança."
      },
      {
        title: "Aqueça a vítima",
        body: "Remova roupas molhadas. Cubra com casaco, cobertor ou qualquer tecido seco. Hipotermia piora muito o prognóstico de afogamento.",
        hint: "Nunca deixe a vítima no chão frio ou úmido — isolamento térmico salva."
      }
    ],
    babyVersion: {
      title: "Em bebês (< 1 ano)",
      steps: [
        "Retire da água imediatamente. Nunca deixe bebê sozinho perto de água, nem 30 segundos.",
        "Deite de costas em superfície firme. Verifique respiração por 10 segundos.",
        "Se não respira: 2 dedos (médio e anelar) no centro do peito, comprima 4 cm, ritmo de 100–120 por minuto.",
        "Ciclo: 30 compressões + 2 sopros suaves cobrindo boca E nariz do bebê.",
        "Ligue 192. Mantenha compressões até o SAMU chegar."
      ]
    },
    donts: [
      "Não vire de lado para 'escorrer água' — isso atrasa as compressões que salvam.",
      "Não entre na água sem treinamento — você pode se tornar a segunda vítima.",
      "Não abandone a vítima mesmo que pareça sem vida — o frio pode conservar funções vitais.",
      "Não use álcool para aquecer — contrai os vasos e piora a hipotermia."
    ],
    callWhen: [
      "Todo afogamento com perda de consciência — 192 imediatamente.",
      "Vítima consciente mas com tosse persistente, confusão ou lábios azulados — pronto-socorro.",
      "Bombeiros 193 se a vítima ainda estiver na água ou for resgate em mar/rio."
    ],
    quiz: [
      {
        q: "Primeira ação ao retirar vítima de afogamento inconsciente?",
        opts: ["Virar de lado para escorrer água", "Verificar respiração e iniciar compressões", "Dar água quente", "Chacoalhar para acordar"],
        correct: 1,
        explain: "Verifique respiração e inicie compressões imediatamente. Virar de lado atrasa o atendimento que realmente salva."
      },
      {
        q: "Por que não entrar na água sem treinamento?",
        opts: ["É proibido por lei", "Você pode se tornar mais uma vítima", "A água é muito fria", "Pode assustar a vítima"],
        correct: 1,
        explain: "Vítimas de afogamento em pânico frequentemente submergem quem tenta salvá-las. Use objetos como intermediário."
      },
      {
        q: "Afogamento aparentemente leve: o que fazer após a vítima recuperar consciência?",
        opts: ["Liberar, está bem", "Observar 30 min e ir ao pronto-socorro se piorar", "Só ir se ficar azul", "Esperar 24h em casa"],
        correct: 1,
        explain: "Afogamentos leves podem deteriorar nas próximas horas. Observação ativa e pronto-socorro se houver qualquer sinal de piora."
      }
    ]
  },

  {
    id: "quedas-idosos",
    name: "Quedas de idosos",
    category: "Geriatria",
    urgency: "media",
    glyph: "↡",
    glyphColor: "oklch(0.93 0.05 50)",
    glyphInk: "oklch(0.4 0.13 50)",
    summary: "Idoso(a) caiu. Pode haver fratura (especialmente fêmur ou bacia), traumatismo craniano, ou nenhum dano aparente.",
    keywords: ["queda", "idoso", "fratura", "femur", "fêmur", "bacia", "trauma"],
    branch: {
      question: "A pessoa está consciente e respondendo?",
      hint: "Se não responde, trate como urgência crítica.",
      opts: [
        { id: "yes", label: "Sim, está consciente", icon: "✓", goto: "passos" },
        { id: "no",  label: "Não responde",         icon: "✕", goto: "passos-grave" }
      ]
    },
    illoLabel: "Imobilização sem mover a vítima",
    steps: [
      {
        title: "Não tente levantar ainda",
        body: "Mesmo se quiser muito ajudar — pare. Levantar uma pessoa com fratura de fêmur ou quadril piora o quadro brutalmente. Espere a avaliação.",
        hint: "Idosos têm ossos frágeis (osteoporose) — fraturas escondidas são comuns."
      },
      {
        title: "Cheque consciência, dor e movimento",
        body: "Pergunte: 'Você sabe onde está? Que dia é hoje? Sente dor onde?'. Peça para mexer dedos das mãos e dos pés. Observe se algum membro está em posição estranha.",
        hint: "Posição estranha (perna torta, encurtada ou rodada para fora) = suspeita forte de fratura."
      },
      {
        title: "Se houver dor forte, NÃO mova",
        body: "Cubra com cobertor (idoso esfria rápido), apoie cabeça com almofada baixa, e ligue 192. Espere o SAMU para movimentação segura.",
        hint: "Dor forte no quadril + perna virada para fora = fêmur quebrado. Não tente endireitar."
      },
      {
        title: "Se quer levantar e parece bem, faça devagar",
        body: "Primeiro: sentar no chão (apoiada). Espere 1 minuto. Depois: ajoelhar com apoio. Depois: levantar com apoio de cadeira firme. Não puxe pelos braços.",
        hint: "Puxar pelos braços de idoso pode deslocar ombro."
      },
      {
        title: "Observe nas próximas 48h",
        body: "Mesmo sem dor imediata, observe: dor que aparece depois, hematomas grandes, dificuldade para andar, sonolência ou confusão (pode ser TCE).",
        hint: "Idoso em uso de anticoagulante (AAS, varfarina) + pancada na cabeça = hospital sempre, mesmo sem sintoma."
      }
    ],
    "passos-grave": "Se o idoso não responde, não respira normalmente ou tem sangramento intenso: ligue 192 IMEDIATAMENTE, comece RCP se necessário, e siga o caso de Parada Cardíaca.",
    donts: [
      "Não tente levantar pelos braços — pode deslocar ombros frágeis.",
      "Não 'endireite' membros em posição estranha — fixe na posição em que estão.",
      "Não dê água, comida ou remédio antes de avaliação médica.",
      "Não ignore sinais tardios: confusão e sonolência nas próximas 48h podem ser hemorragia cerebral.",
      "Não deixe sozinho mesmo após o susto passar — observação é importante."
    ],
    callWhen: [
      "Dor forte que não passa em alguns minutos.",
      "Suspeita de fratura (perna torta, dor ao mover, deformidade).",
      "Bateu a cabeça — sempre, especialmente se usa anticoagulante.",
      "Confusão, sonolência ou vômitos após a queda.",
      "Idoso não consegue levantar mesmo sem dor evidente."
    ],
    quiz: [
      {
        q: "Idosa caiu no banheiro. Está consciente mas com dor forte no quadril e perna virada para fora. Você...",
        opts: ["Tenta sentar para conferir", "Não move, cobre, liga 192", "Endireita a perna", "Dá analgésico e espera"],
        correct: 1,
        explain: "Perna rodada para fora + dor forte no quadril = fratura de fêmur provável. Mover sem imobilização piora gravemente."
      },
      {
        q: "Idoso bateu a cabeça e parece bem. Toma AAS (anticoagulante). Conduta?",
        opts: ["Observar em casa", "Hospital sempre, mesmo sem sintoma", "Só ir se doer", "Esperar 24h"],
        correct: 1,
        explain: "Anticoagulante aumenta MUITO o risco de hemorragia cerebral tardia. Avaliação obrigatória."
      }
    ]
  },

  {
    id: "ansiedade",
    name: "Crise de ansiedade / Pânico",
    category: "Saúde mental",
    urgency: "media",
    glyph: "◌",
    glyphColor: "var(--blue-soft)",
    glyphInk: "var(--blue-ink)",
    summary: "Crise aguda: coração acelerado, falta de ar, suor, tremor, sensação de morte iminente. Apesar do susto, raramente é perigoso fisicamente.",
    keywords: ["ansiedade", "pânico", "panico", "crise", "respiração", "respiracao", "taquicardia"],
    illoLabel: "Técnica de respiração 4-7-8",
    steps: [
      {
        title: "Valide o que ela está sentindo",
        body: "Fale com calma: 'Eu estou aqui. Você está em segurança. Isso vai passar.' Não diga 'calma' ou 'isso é bobagem' — invalida. Reconheça o sofrimento.",
        hint: "A pessoa pode achar que está infartando ou enlouquecendo. O medo é real, mesmo que a causa não seja física."
      },
      {
        title: "Ajude a respirar devagar",
        body: "Técnica 4-7-8: inspire pelo nariz contando 4, segure por 7, expire pela boca por 8. Repita 4 vezes. Faça JUNTO com a pessoa para guiar.",
        hint: "Respiração rápida (hiperventilação) é o que mantém a crise — desacelerar reverte."
      },
      {
        title: "Aterragem: 5-4-3-2-1",
        body: "Peça para apontar: 5 coisas que vê, 4 que pode tocar, 3 que ouve, 2 que sente o cheiro, 1 que pode provar. Traz a pessoa ao momento presente.",
        hint: "Essa técnica desativa o sistema 'luta ou fuga' que está hiperativo."
      },
      {
        title: "Reduza estímulos",
        body: "Saia do ambiente lotado. Diminua luz se possível. Peça silêncio dos outros. Ofereça água em temperatura ambiente. Não force conversa.",
        hint: "Pessoas em volta dizendo 'calma!' costumam piorar — peça espaço."
      },
      {
        title: "Após a crise, converse",
        body: "Crises se repetem. Sugira procurar psiquiatra ou psicólogo. Aponte o CVV (188) como apoio emocional 24h. Não é vergonha — é cuidado.",
        hint: "Crises recorrentes têm tratamento eficaz. Quanto antes começar, melhor."
      }
    ],
    donts: [
      "Não diga 'calma', 'relaxa' ou 'é só ansiedade' — invalida.",
      "Não force a pessoa a respirar em saco de papel — pode causar hipóxia.",
      "Não dê calmante de outra pessoa — uso indiscriminado é perigoso.",
      "Não confronte a pessoa nem peça para 'parar com isso'.",
      "Não trate como teatro — a dor é real, mesmo sem causa física."
    ],
    callWhen: [
      "Crise dura mais de 30 minutos sem melhora.",
      "Dor no peito que se irradia para braço/mandíbula — pode ser infarto, não pânico.",
      "Desmaio durante a crise.",
      "Pessoa fala em se machucar ou em suicídio (veja também o caso CVV).",
      "Primeira crise da vida — para descartar causa física."
    ],
    quiz: [
      {
        q: "Amigo em crise de pânico. O que VOCÊ NÃO faz?",
        opts: ["Respira junto com ele", "Diz 'calma, é só ansiedade'", "Sai do lugar barulhento", "Oferece água"],
        correct: 1,
        explain: "'Calma' invalida o sentimento e costuma piorar. Reconhecer e respirar junto funciona muito melhor."
      },
      {
        q: "Respiração 4-7-8 significa...",
        opts: ["4 inspirações, 7 expirações, 8 pausas", "Inspirar 4s, segurar 7s, expirar 8s", "Repetir 478 vezes", "Não importa a ordem"],
        correct: 1,
        explain: "Inspira 4 segundos pelo nariz, segura 7, expira 8 pela boca. Desacelera o sistema autônomo."
      }
    ]
  }
];

window.CASES = CASES;
