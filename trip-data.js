window.TRIP_DATA = {
  meta: {
    title: "Europa 2026",
    dates: "05–15 NOV 2026",
    route: "Rio → Madrid → Porto → Berlim → Madrid → Rio",
    travelers: ["Mateus Vasconcelos", "Maitê Vasconcelos", "José Celso Pessanha Junior", "Heloisa Carneiro Vasconcelos", "Carlos Henrique Caliman"]
  },
  flights: [
    { date:"05/11", from:"GIG", to:"MAD", depart:"20:30", arrive:"10:15 +1", status:"CONFIRMADO" },
    { date:"07/11", from:"MAD", to:"OPO", depart:"10:35", arrive:"10:50", status:"CONFIRMADO" },
    { date:"09/11", from:"OPO", to:"BER", depart:"09:35", arrive:"13:45", status:"CONFIRMADO" },
    { date:"13/11", from:"BER", to:"MAD", depart:"10:10", arrive:"13:20", status:"CONFIRMADO" },
    { date:"15/11", from:"MAD", to:"GIG", depart:"12:30", arrive:"18:50", status:"CONFIRMADO" }
  ],
  lodgings: [
    { city:"Madrid", dates:"06–07/11", name:"Hampton by Hilton Alcobendas Madrid", address:"Avenida de Fernando Alonso 4, Alcobendas, 28108, Spain", checkin:"15:00", checkout:"12:00", note:"Hotel logístico para a primeira noite. Café da manhã incluído." },
    { city:"Porto", dates:"07–09/11", name:"Duplex com jardim no centro histórico", address:"Largo de Viriato 5 RC HAB 2, Porto 4050-365", checkin:"16:00", checkout:"11:00", note:"Base no centro histórico." },
    { city:"Berlim", dates:"09–13/11", name:"Apartamento 90 m² com 2 quartos e varanda", address:"Choriner Straße 37, Berlin 10435", checkin:"15:00", checkout:"11:00", note:"Base em Prenzlauer Berg." },
    { city:"Madrid", dates:"13–15/11", name:"Apartamentos Olga Y Armin — Apartamento familiar 2", address:"Calle de San Andrés, 38 1G, Madrid 28004", checkin:"15:00", checkout:"11:00", note:"Base em Malasaña." }
  ],
  days: [
    {
      date:"05/11", city:"Rio → Madrid", theme:"Partida", rhythm:"LEVE", accent:"rio",
      summary:"Noite de viagem. O objetivo é chegar descansado para começar a viagem sem pressa.",
      plan:[
        {time:"20:30", title:"Voo GIG → MAD", area:"Aeroporto", priority:"IMPERDÍVEL", status:"CONFIRMADO", type:"Voo", notes:"Pernoite a bordo."}
      ]
    },
    {
      date:"06/11", city:"Madrid", theme:"Chegada à Europa + recuperação inteligente", rhythm:"LEVE", accent:"madrid",
      summary:"Dia propositalmente leve em Alcobendas. Sem ida ao centro de Madrid.",
      plan:[
        {time:"10:15", title:"Chegada em Madrid", area:"MAD", priority:"IMPERDÍVEL", status:"CONFIRMADO", type:"Logística", notes:"Imigração, malas e deslocamento até Alcobendas."},
        {time:"13:00", title:"Almoço tranquilo", area:"Alcobendas", priority:"VALE MUITO", status:"PLANEJADO", type:"Comida", notes:"Perto do hotel ou no caminho."},
        {time:"15:00", title:"Check-in + descanso", area:"Alcobendas", priority:"IMPERDÍVEL", status:"CONFIRMADO", type:"Hospedagem", notes:"Banho, descanso curto e adaptação ao fuso."},
        {time:"18:00", title:"Caminhada curta opcional", area:"Alcobendas", priority:"OPCIONAL", status:"PLANEJADO", type:"Passeio", notes:"Somente se todos estiverem bem."},
        {time:"20:00", title:"Jantar perto do hotel", area:"Alcobendas", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Dormir cedo por causa do voo da manhã seguinte."}
      ]
    },
    {
      date:"07/11", city:"Porto", theme:"Chegada + Porto histórico + operação corrida", rhythm:"MODERADO", accent:"porto",
      summary:"Primeiro contato com o Porto, mas preservando as pernas do seu pai antes dos 10 km.",
      plan:[
        {time:"10:35", title:"Voo MAD → OPO", area:"Aeroporto", priority:"IMPERDÍVEL", status:"CONFIRMADO", type:"Voo", notes:"Chegada prevista 10:50."},
        {time:"13:00", title:"Almoço central", area:"Centro", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Sem pressa."},
        {time:"14:30", title:"Carmo + Clérigos + ruas históricas", area:"Centro", priority:"VALE MUITO", status:"PLANEJADO", type:"Passeio", notes:"Livraria Lello apenas se der vontade; família já conhece."},
        {time:"16:30", title:"Retirada do kit da corrida", area:"Expo da Maratona", priority:"IMPERDÍVEL", status:"RESERVAR", type:"Corrida", notes:"Retirada do kit é prioridade operacional do dia."},
        {time:"18:00", title:"São Bento → Ribeira → Douro", area:"Centro / Ribeira", priority:"IMPERDÍVEL", status:"PLANEJADO", type:"Passeio", notes:"Passeio visual e sem exagero."},
        {time:"20:00", title:"Jantar cedo", area:"Centro", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Seu pai organiza roupa, número, chip e tênis da corrida."}
      ]
    },
    {
      date:"08/11", city:"Porto", theme:"Corrida + Porto leve", rhythm:"LEVE", accent:"porto",
      summary:"José Celso corre 10 km às 08:00. O resto do dia é flexível e de recuperação.",
      plan:[
        {time:"08:00", title:"10 km — Porto Marathon", area:"Zona da corrida", priority:"IMPERDÍVEL", status:"CONFIRMADO", type:"Corrida", notes:"Participante: José Celso. Família pode acompanhar largada/chegada."},
        {time:"11:30", title:"Banho + descanso", area:"Hospedagem", priority:"IMPERDÍVEL", status:"PLANEJADO", type:"Descanso", notes:"Recuperação antes do almoço."},
        {time:"13:30", title:"Almoço longo em família", area:"Porto", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Sem pressa."},
        {time:"16:00", title:"Foz do Douro / Parque da Cidade", area:"Litoral", priority:"VALE MUITO", status:"PLANEJADO", type:"Passeio", notes:"Plano leve e cênico. Seu pai pode descansar se estiver cansado."},
        {time:"20:00", title:"Jantar português de despedida", area:"Porto", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Sem degustação de vinho do Porto."}
      ]
    },
    {
      date:"09/11", city:"Berlim", theme:"Chegada a Berlim + bairro", rhythm:"LEVE", accent:"berlin",
      summary:"Chegada tranquila e primeiro contato com Prenzlauer Berg.",
      plan:[
        {time:"09:35", title:"Voo OPO → BER", area:"Aeroporto", priority:"IMPERDÍVEL", status:"CONFIRMADO", type:"Voo", notes:"Chegada prevista 13:45."},
        {time:"15:00", title:"Check-in", area:"Prenzlauer Berg", priority:"IMPERDÍVEL", status:"CONFIRMADO", type:"Hospedagem", notes:"Choriner Straße 37."},
        {time:"16:00", title:"Almoço tardio", area:"Prenzlauer Berg", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Perto do apartamento."},
        {time:"18:00", title:"Passeio pelo bairro", area:"Prenzlauer Berg", priority:"VALE MUITO", status:"PLANEJADO", type:"Passeio", notes:"Cafés, ruas e atmosfera local."},
        {time:"20:30", title:"Jantar perto de casa", area:"Prenzlauer Berg", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Sem grandes atrações."}
      ]
    },
    {
      date:"10/11", city:"Berlim", theme:"Do Império Alemão à Berlim contemporânea", rhythm:"MODERADO", accent:"berlin",
      summary:"Dia histórico com Reichstag, eixo monumental e apenas um museu importante.",
      plan:[
        {time:"09:00", title:"Reichstag + cúpula", area:"Regierungsviertel", priority:"IMPERDÍVEL", status:"RESERVAR", type:"História", notes:"Entrada gratuita, mas requer inscrição antecipada."},
        {time:"10:30", title:"Portão de Brandemburgo", area:"Mitte", priority:"IMPERDÍVEL", status:"PLANEJADO", type:"História", notes:"Conectar Império, guerras, nazismo e divisão alemã."},
        {time:"11:15", title:"Memorial aos Judeus Mortos da Europa", area:"Mitte", priority:"IMPERDÍVEL", status:"PLANEJADO", type:"História", notes:"Visita externa e contemplativa."},
        {time:"13:00", title:"Almoço em Mitte", area:"Mitte", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Janela de ~1h30."},
        {time:"14:45", title:"Unter den Linden + Bebelplatz + Neue Wache", area:"Mitte", priority:"VALE MUITO", status:"PLANEJADO", type:"História", notes:"Rota a pé."},
        {time:"16:00", title:"Neues Museum", area:"Museum Island", priority:"VALE MUITO", status:"RESERVAR", type:"Museu", notes:"Visita curta, 1h30–2h no máximo."},
        {time:"19:30", title:"Jantar / evento opcional", area:"Mitte", priority:"OPCIONAL", status:"A DEFINIR", type:"Noite", notes:"Pode encaixar evento do Berlin Freedom Week, se confirmado."}
      ]
    },
    {
      date:"11/11", city:"Berlim", theme:"Muro + Berlim alternativa + techno", rhythm:"MODERADO → INTENSO", accent:"berlin",
      summary:"A cidade dividida durante o dia e a vida noturna berlinense de verdade à noite.",
      plan:[
        {time:"10:30", title:"East Side Gallery", area:"Friedrichshain", priority:"IMPERDÍVEL", status:"PLANEJADO", type:"História", notes:"Trecho essencial do Muro de Berlim."},
        {time:"12:30", title:"Almoço multicultural", area:"Friedrichshain / Kreuzberg", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Preferência por comida turca / urbana."},
        {time:"14:30", title:"Kreuzberg vivido", area:"Kreuzberg", priority:"VALE MUITO", status:"PLANEJADO", type:"Bairro", notes:"Ruas, cafés, lojas, canais e grafite."},
        {time:"18:00", title:"Voltar ao apartamento", area:"Prenzlauer Berg", priority:"IMPERDÍVEL", status:"PLANEJADO", type:"Descanso", notes:"Banho, descanso, cochilo e troca de roupa."},
        {time:"21:00", title:"Jantar", area:"Berlim", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Pré-noite."},
        {time:"23:00", title:"Tresor", area:"Mitte / Köpenicker Straße", priority:"VALE MUITO", status:"VERIFICAR", type:"Noite", notes:"Rever programação e regras de entrada perto da viagem."}
      ]
    },
    {
      date:"12/11", city:"Berlim", theme:"Berlim vivida + cultura contemporânea", rhythm:"LEVE → MODERADO", accent:"berlin",
      summary:"Manhã lenta depois da noite. Tarde cultural sem correria.",
      plan:[
        {time:"11:30", title:"Brunch", area:"Prenzlauer Berg", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Sem compromisso cedo."},
        {time:"13:00", title:"Cafés + design + lojas", area:"Prenzlauer Berg / Mitte", priority:"VALE MUITO", status:"PLANEJADO", type:"Bairro", notes:"Hackescher Markt / Scheunenviertel como extensão natural."},
        {time:"15:00", title:"Opção A — história/cultura", area:"Mitte", priority:"VALE MUITO", status:"PRECISA DECIDIR", type:"Decisão", notes:"Recomendação principal: atividade histórica/cultural ou evento do Freedom Week se confirmado."},
        {time:"15:00", title:"Opção B — Charlottenburg + Ku'damm", area:"Berlim Oeste", priority:"OPCIONAL", status:"PRECISA DECIDIR", type:"Decisão", notes:"Alternativa mais urbana/comercial."},
        {time:"19:30", title:"Último jantar em Berlim", area:"Berlim", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Depois, malas parcialmente prontas."}
      ]
    },
    {
      date:"13/11", city:"Madrid", theme:"Madrid cool: Malasaña + Gran Vía", rhythm:"LEVE → MODERADO", accent:"madrid",
      summary:"Chegada e passeio perfeito para a localização da hospedagem em Malasaña.",
      plan:[
        {time:"10:10", title:"Voo BER → MAD", area:"Aeroporto", priority:"IMPERDÍVEL", status:"CONFIRMADO", type:"Voo", notes:"Chegada prevista 13:20."},
        {time:"15:00", title:"Check-in", area:"Malasaña", priority:"IMPERDÍVEL", status:"CONFIRMADO", type:"Hospedagem", notes:"Calle de San Andrés 38."},
        {time:"15:30", title:"Almoço tardio", area:"Malasaña", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Perto de casa."},
        {time:"17:00", title:"Malasaña → Plaza de España → Gran Vía → Callao", area:"Centro", priority:"VALE MUITO", status:"PLANEJADO", type:"Passeio", notes:"Sem atração interna importante."},
        {time:"19:00", title:"Rooftop opcional", area:"Centro", priority:"OPCIONAL", status:"RESERVAR", type:"Noite", notes:"Bom para pôr do sol/noite, se clima ajudar."},
        {time:"21:00", title:"Jantar", area:"Malasaña / Chueca / Salesas", priority:"VALE MUITO", status:"A DEFINIR", type:"Comida", notes:"Clima mais cool e urbano."}
      ]
    },
    {
      date:"14/11", city:"Madrid", theme:"Grande dia de Madrid", rhythm:"MODERADO+", accent:"madrid",
      summary:"Madrid imperial, centro histórico, parque, arte e uma noite especial.",
      plan:[
        {time:"09:30", title:"Palácio Real — visita interna", area:"Madrid de los Austrias", priority:"IMPERDÍVEL", status:"RESERVAR", type:"História", notes:"Visita de aproximadamente 1h–1h30."},
        {time:"11:15", title:"Almudena + Plaza de Oriente", area:"Centro", priority:"VALE MUITO", status:"PLANEJADO", type:"Passeio", notes:"Continuação natural."},
        {time:"12:15", title:"Plaza Mayor + Sol", area:"Centro", priority:"IMPERDÍVEL", status:"PLANEJADO", type:"Passeio", notes:"Mercado de San Miguel pode ser só passagem/petisco."},
        {time:"13:30", title:"Almoço espanhol especial", area:"Centro", priority:"IMPERDÍVEL", status:"RESERVAR", type:"Comida", notes:"Janela de 1h30–2h."},
        {time:"16:00", title:"Parque do Retiro", area:"Retiro", priority:"VALE MUITO", status:"PLANEJADO", type:"Passeio", notes:"Priorizar enquanto ainda houver luz natural."},
        {time:"17:45", title:"Prado Express", area:"Paseo del Prado", priority:"VALE MUITO", status:"RESERVAR", type:"Museu", notes:"Visita curta e curada, ~1h30. Foco em grandes obras."},
        {time:"20:30", title:"Noite especial", area:"Madrid", priority:"IMPERDÍVEL", status:"PRECISA DECIDIR", type:"Noite", notes:"Opção principal: rooftop + drinks + jantar especial. Alternativa: Bernabéu Skywalk / experiência inspirada no Cirque du Soleil, se confirmada."}
      ]
    },
    {
      date:"15/11", city:"Madrid → Rio", theme:"Operação aeroporto", rhythm:"LEVE", accent:"madrid",
      summary:"Sem turismo. Café, malas, checkout e aeroporto com margem confortável.",
      plan:[
        {time:"08:00", title:"Café da manhã + fechar malas", area:"Malasaña", priority:"IMPERDÍVEL", status:"PLANEJADO", type:"Logística", notes:"Sem correria."},
        {time:"09:00", title:"Saída para o aeroporto", area:"Madrid", priority:"IMPERDÍVEL", status:"PLANEJADO", type:"Transporte", notes:"Meta: chegar com cerca de 3h de antecedência."},
        {time:"12:30", title:"Voo MAD → GIG", area:"Aeroporto", priority:"IMPERDÍVEL", status:"CONFIRMADO", type:"Voo", notes:"Chegada prevista 18:50."}
      ]
    }
  ],
  reservations: [
    {id:"kit-corrida", item:"Retirada do kit — Porto", date:"07/11", city:"Porto", status:"PENDENTE"},
    {id:"reichstag", item:"Reichstag + cúpula", date:"10/11", city:"Berlim", status:"PENDENTE"},
    {id:"neues", item:"Neues Museum", date:"10/11", city:"Berlim", status:"PENDENTE"},
    {id:"tresor", item:"Tresor — programação/entrada", date:"11/11", city:"Berlim", status:"PENDENTE"},
    {id:"palacio", item:"Palácio Real", date:"14/11", city:"Madrid", status:"PENDENTE"},
    {id:"prado", item:"Museu do Prado", date:"14/11", city:"Madrid", status:"PENDENTE"},
    {id:"rooftop", item:"Rooftop Madrid", date:"13 ou 14/11", city:"Madrid", status:"PENDENTE"},
    {id:"jantar-mad", item:"Jantar especial Madrid", date:"14/11", city:"Madrid", status:"PENDENTE"},
    {id:"bernabeu", item:"Bernabéu Skywalk / experiência especial", date:"14/11", city:"Madrid", status:"PENDENTE"}
  ],
  raceChecklist: ["Kit retirado", "Tênis", "Roupa da corrida", "Número de peito", "Chip", "Relógio", "Documento", "Água", "Alimentação pré-prova", "Roupa seca pós-prova", "Proteção contra chuva"]
};
