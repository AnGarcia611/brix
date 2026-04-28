import type { Article } from "../types"

export const B4: Article[] = [
  {
    code: "B.4.1",
    title: "Definición",
    summary:
      "Las cargas vivas son producidas por el uso y ocupación de la edificación, excluyendo cargas ambientales como viento y sismo. En cubiertas incluyen mantenimiento, objetos móviles y personas con acceso.",
    body: [
      {
        type: "paragraph",
        text: "Las cargas vivas son aquellas cargas producidas por el uso y ocupación de la edificación y no deben incluir cargas ambientales tales como viento y sismo.",
      },
      {
        type: "paragraph",
        text: "Las cargas vivas en las cubiertas son aquellas causadas por: (a) los materiales, equipos y trabajadores utilizados en el mantenimiento de la cubierta, y (b) las causadas por objetos móviles, tales como materas u otros objetos decorativos, y por las personas que tengan acceso a ellas.",
      },
    ],
    related: [
      { code: "B.4.2", title: "Cargas vivas uniformemente repartidas" },
      { code: "B.4.5", title: "Reducción de la carga viva" },
    ],
  },

  {
    code: "B.4.2",
    title: "Cargas vivas uniformemente repartidas",
    summary:
      "Las cargas vivas de diseño deben ser las máximas esperadas según el uso de la edificación, y en ningún caso menores a los valores mínimos de las Tablas B.4.2.1-1 y B.4.2.1-2. Incluye requisitos para pasamanos, antepechos y barreras para vehículos.",
    body: [
      {
        type: "subsection",
        code: "B.4.2.1",
        title: "Cargas vivas requeridas",
        items: [
          {
            type: "paragraph",
            text: "Las cargas vivas que se utilicen en el diseño de la estructura deben ser las máximas cargas que se espera ocurran en la edificación debido al uso que ésta va a tener. En ningún caso estas cargas vivas pueden ser menores que las cargas vivas mínimas que se dan en las Tablas B.4.2.1-1 y B.4.2.1-2.",
          },
          {
            type: "table",
            caption: "Tabla B.4.2.1-1 — Cargas vivas mínimas uniformemente distribuidas",
            headers: ["Ocupación o uso", "Carga uniforme (kN/m²)", "Carga uniforme (kgf/m²)"],
            rows: [
              ["Reunión — Balcones", 5.0, 500],
              ["Reunión — Corredores y escaleras", 5.0, 500],
              ["Reunión — Silletería fija (fijada al piso)", 3.0, 300],
              ["Reunión — Gimnasios", 5.0, 500],
              ["Reunión — Vestíbulos", 5.0, 500],
              ["Reunión — Silletería móvil", 5.0, 500],
              ["Reunión — Áreas recreativas", 5.0, 500],
              ["Reunión — Plataformas", 5.0, 500],
              ["Reunión — Escenarios", 7.5, 750],
              ["Oficinas — Corredores y escaleras", 3.0, 300],
              ["Oficinas — Oficinas", 2.0, 200],
              ["Oficinas — Restaurantes", 5.0, 500],
              ["Educativos — Salones de clase", 2.0, 200],
              ["Educativos — Corredores y escaleras", 5.0, 500],
              ["Educativos — Bibliotecas, salones de lectura", 2.0, 200],
              ["Educativos — Bibliotecas, estanterías", 7.0, 700],
              ["Fábricas — Industrias livianas", 5.0, 500],
              ["Fábricas — Industrias pesadas", 10.0, 1000],
              ["Institucional — Cuartos de cirugía, laboratorios", 4.0, 400],
              ["Institucional — Cuartos privados", 2.0, 200],
              ["Institucional — Corredores y escaleras", 5.0, 500],
              ["Comercio — Minorista", 5.0, 500],
              ["Comercio — Mayorista", 6.0, 600],
              ["Residencial — Balcones", 5.0, 500],
              ["Residencial — Cuartos privados y sus corredores", 1.8, 180],
              ["Residencial — Escaleras", 3.0, 300],
              ["Almacenamiento — Liviano", 6.0, 600],
              ["Almacenamiento — Pesado", 12.0, 1200],
              ["Garajes — Automóviles de pasajeros", 2.5, 250],
              ["Garajes — Vehículos de carga hasta 2000 kg", 5.0, 500],
              ["Coliseos y Estadios — Graderías", 5.0, 500],
              ["Coliseos y Estadios — Escaleras", 5.0, 500],
            ],
          },
          {
            type: "table",
            caption: "Tabla B.4.2.1-2 — Cargas vivas mínimas en cubiertas",
            headers: ["Tipo de cubierta", "Carga uniforme (kN/m²)", "Carga uniforme (kgf/m²)"],
            rows: [
              [
                "Cubiertas, azoteas y terrazas",
                "La misma del resto de la edificación (véase Nota 1)",
                "La misma del resto de la edificación (véase Nota 1)",
              ],
              ["Cubiertas usadas para jardines de cubierta o para reuniones", 5.0, 500],
              [
                "Cubiertas inclinadas con más de 15° de pendiente en estructura metálica o de madera con imposibilidad física de cargas superiores",
                0.35,
                35,
              ],
              [
                "Cubiertas inclinadas con pendiente de 15° o menos en estructura metálica o de madera con imposibilidad física de cargas superiores",
                0.5,
                50,
              ],
            ],
          },
          {
            type: "note",
            text: "Nota 1 — La carga viva de la cubierta no debe ser menor que el máximo valor de las cargas vivas usadas en el resto de la edificación. Cuando la edificación tenga uso mixto, la carga debe ser la mayor de las cargas vivas correspondientes a los diferentes usos.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.4.2.2",
        title: "Empuje en pasamanos y antepechos",
        items: [
          {
            type: "paragraph",
            text: "Las barandas, pasamanos de escaleras y balcones, barras auxiliares tanto exteriores como interiores, y los antepechos deben diseñarse para resistir una fuerza horizontal de 1.00 kN/m (100 kgf/m) aplicada en la parte superior, y deben ser capaces de transferir esta carga a través de los soportes a la estructura. Para viviendas unifamiliares la carga mínima es de 0.4 kN/m (40 kgf/m). En estadios y coliseos esa carga mínima horizontal no será menor de 2.5 kN/m (250 kgf/m), y las barandas deberán ser sometidas a pruebas de carga dirigidas y documentadas por el Supervisor Técnico antes de ser puestas en servicio.",
          },
          {
            type: "paragraph",
            text: "Las barandas intermedias y paneles de relleno se deben diseñar para soportar una carga normal aplicada horizontalmente de 0.25 kN (25 kgf) sobre un área que no exceda 0.3 m de lado, incluyendo aberturas y espacios entre barandas. No es necesario superponer estas acciones con las de los párrafos precedentes.",
          },
          {
            type: "paragraph",
            text: "Los sistemas de barreras para vehículos de pasajeros deben diseñarse para resistir una única carga de 30 kN (3000 kgf) aplicada horizontalmente en cualquier dirección, a una altura mínima de 0.5 m sobre la superficie del piso o rampa, sobre un área que no exceda 0.3 m de lado. Esta carga no debe suponerse actuando conjuntamente con las cargas de pasamanos. Las cargas indicadas no incluyen sistemas de barreras para garajes de vehículos de transporte público y camiones, para los cuales se deben realizar análisis apropiados.",
          },
        ],
      },
    ],
    related: [
      { code: "B.4.1", title: "Definición" },
      { code: "B.4.3", title: "Carga parcial" },
      { code: "B.4.5", title: "Reducción de la carga viva" },
    ],
  },

  {
    code: "B.4.2.1",
    title: "Cargas vivas requeridas",
    summary:
      "Las cargas vivas de diseño deben ser las máximas esperadas por uso y en ningún caso menores a los valores mínimos de las Tablas B.4.2.1-1 y B.4.2.1-2.",
    body: [
      {
        type: "paragraph",
        text: "Las cargas vivas que se utilicen en el diseño de la estructura deben ser las máximas cargas que se espera ocurran en la edificación debido al uso que ésta va a tener. En ningún caso estas cargas vivas pueden ser menores que las cargas vivas mínimas que se dan en las Tablas B.4.2.1-1 y B.4.2.1-2.",
      },
      {
        type: "table",
        caption: "Tabla B.4.2.1-1 — Cargas vivas mínimas uniformemente distribuidas",
        headers: ["Ocupación o uso", "Carga uniforme (kN/m²)", "Carga uniforme (kgf/m²)"],
        rows: [
          ["Reunión — Balcones", 5.0, 500],
          ["Reunión — Corredores y escaleras", 5.0, 500],
          ["Reunión — Silletería fija (fijada al piso)", 3.0, 300],
          ["Reunión — Gimnasios", 5.0, 500],
          ["Reunión — Vestíbulos", 5.0, 500],
          ["Reunión — Silletería móvil", 5.0, 500],
          ["Reunión — Áreas recreativas", 5.0, 500],
          ["Reunión — Plataformas", 5.0, 500],
          ["Reunión — Escenarios", 7.5, 750],
          ["Oficinas — Corredores y escaleras", 3.0, 300],
          ["Oficinas — Oficinas", 2.0, 200],
          ["Oficinas — Restaurantes", 5.0, 500],
          ["Educativos — Salones de clase", 2.0, 200],
          ["Educativos — Corredores y escaleras", 5.0, 500],
          ["Educativos — Bibliotecas, salones de lectura", 2.0, 200],
          ["Educativos — Bibliotecas, estanterías", 7.0, 700],
          ["Fábricas — Industrias livianas", 5.0, 500],
          ["Fábricas — Industrias pesadas", 10.0, 1000],
          ["Institucional — Cuartos de cirugía, laboratorios", 4.0, 400],
          ["Institucional — Cuartos privados", 2.0, 200],
          ["Institucional — Corredores y escaleras", 5.0, 500],
          ["Comercio — Minorista", 5.0, 500],
          ["Comercio — Mayorista", 6.0, 600],
          ["Residencial — Balcones", 5.0, 500],
          ["Residencial — Cuartos privados y sus corredores", 1.8, 180],
          ["Residencial — Escaleras", 3.0, 300],
          ["Almacenamiento — Liviano", 6.0, 600],
          ["Almacenamiento — Pesado", 12.0, 1200],
          ["Garajes — Automóviles de pasajeros", 2.5, 250],
          ["Garajes — Vehículos de carga hasta 2000 kg", 5.0, 500],
          ["Coliseos y Estadios — Graderías", 5.0, 500],
          ["Coliseos y Estadios — Escaleras", 5.0, 500],
        ],
      },
    ],
    related: [
      { code: "B.4.2", title: "Cargas vivas uniformemente repartidas" },
      { code: "B.4.5", title: "Reducción de la carga viva" },
    ],
  },

  {
    code: "B.4.2.2",
    title: "Empuje en pasamanos y antepechos",
    summary:
      "Barandas y antepechos deben resistir 1.00 kN/m horizontal (0.4 kN/m en vivienda unifamiliar; 2.5 kN/m en estadios). Los sistemas de barreras para vehículos de pasajeros deben resistir 30 kN en cualquier dirección horizontal.",
    body: [
      {
        type: "paragraph",
        text: "Las barandas, pasamanos de escaleras y balcones, barras auxiliares tanto exteriores como interiores, y los antepechos deben diseñarse para resistir una fuerza horizontal de 1.00 kN/m (100 kgf/m) aplicada en la parte superior, y deben ser capaces de transferir esta carga a través de los soportes a la estructura. Para viviendas unifamiliares la carga mínima es de 0.4 kN/m (40 kgf/m). En estadios y coliseos esa carga mínima horizontal no será menor de 2.5 kN/m (250 kgf/m), y las barandas deberán ser sometidas a pruebas de carga dirigidas y documentadas por el Supervisor Técnico antes de ser puestas en servicio.",
      },
      {
        type: "paragraph",
        text: "Las barandas intermedias y paneles de relleno se deben diseñar para soportar una carga normal aplicada horizontalmente de 0.25 kN (25 kgf) sobre un área que no exceda 0.3 m de lado. No es necesario superponer estas acciones con las de los párrafos precedentes.",
      },
      {
        type: "paragraph",
        text: "Los sistemas de barreras para vehículos de pasajeros deben diseñarse para resistir una única carga de 30 kN (3000 kgf) aplicada horizontalmente en cualquier dirección, a una altura mínima de 0.5 m sobre la superficie del piso o rampa, sobre un área que no exceda 0.3 m de lado. Esta carga no debe suponerse actuando conjuntamente con las cargas de pasamanos. Las cargas indicadas no incluyen sistemas de barreras para garajes de vehículos de transporte público y camiones.",
      },
    ],
    related: [
      { code: "B.4.2", title: "Cargas vivas uniformemente repartidas" },
      { code: "B.4.2.1", title: "Cargas vivas requeridas" },
    ],
  },

  {
    code: "B.4.3",
    title: "Carga parcial",
    summary:
      "Cuando la carga viva parcial en una luz produce un efecto más desfavorable que la carga total, ese efecto debe tenerse en cuenta en el diseño.",
    body: [
      {
        type: "paragraph",
        text: "Cuando la luz de un elemento esté cargada parcialmente con la carga viva de diseño produciendo un efecto más desfavorable que cuando está cargada en la totalidad de la luz, este efecto debe ser tenido en cuenta en el diseño.",
      },
    ],
    related: [
      { code: "B.4.2", title: "Cargas vivas uniformemente repartidas" },
      { code: "B.4.4", title: "Impacto" },
    ],
  },

  {
    code: "B.4.4",
    title: "Impacto",
    summary:
      "Cuando la estructura quede sometida a cargas vivas generadoras de impacto, la carga viva debe incrementarse según el tipo de equipo: desde 10% para puentes grúas por control remoto hasta 100% para soportes de ascensores.",
    body: [
      {
        type: "paragraph",
        text: "Cuando la estructura quede sometida a carga viva generadora de impacto, la carga viva debe incrementarse, para efectos de diseño, por los siguientes porcentajes:",
      },
      {
        type: "table",
        caption: "Tabla B.4.4-1 — Incrementos por impacto sobre la carga viva",
        headers: ["Tipo de equipo o apoyo", "Incremento (%)"],
        rows: [
          ["Soportes de elevadores y ascensores", 100],
          ["Vigas de puentes grúas con cabina de operación y sus conexiones", 25],
          ["Vigas de puentes grúas operados por control remoto y sus conexiones", 10],
          ["Apoyos de maquinaria liviana movida mediante motor eléctrico o por un eje", 20],
          ["Apoyos de maquinaria de émbolo o movida por motor a pistón (mínimo)", 50],
          ["Tensores que sirvan de apoyo a pisos o balcones suspendidos y escaleras", 33],
        ],
      },
    ],
    related: [
      { code: "B.4.3", title: "Carga parcial" },
      { code: "B.4.5", title: "Reducción de la carga viva" },
      { code: "B.4.6", title: "Puentes grúas" },
    ],
  },

  {
    code: "B.4.5",
    title: "Reducción de la carga viva",
    summary:
      "Cuando el área de influencia del elemento sea ≥ 35 m² y la carga viva esté entre 1.80 y 3.00 kN/m², puede reducirse mediante la ecuación B.4.5-1. La reducción no puede ser menor del 50% de L0 para un piso ni del 40% para dos o más pisos.",
    body: [
      {
        type: "subsection",
        code: "B.4.5.1",
        title: "Reducción de la carga viva por área aferente",
        items: [
          {
            type: "paragraph",
            text: "Cuando el área de influencia del elemento estructural sea mayor o igual a 35 m² y la carga viva sea superior a 1.80 kN/m² (180 kgf/m²) e inferior a 3.00 kN/m² (300 kgf/m²), la carga viva puede reducirse utilizando la ecuación B.4.5-1:",
          },
          {
            type: "note",
            text: "Ecuación B.4.5-1:   L = L₀ · (0.25 + 4.6 / √Aᵢ)\n\nDonde:\n• L  = carga viva reducida, en kN/m²\n• L₀ = carga viva sin reducir, en kN/m²\n• Aᵢ = área de influencia del elemento, en m²",
          },
          {
            type: "subsection",
            code: "B.4.5.1.1",
            title: "Límites de reducción",
            items: [
              {
                type: "paragraph",
                text: "La carga viva reducida no puede ser menor del 50% de L₀ en elementos que soporten un piso, ni del 40% de L₀ en elementos que soporten dos o más pisos.",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.4.5.1.2",
            title: "Determinación del área de influencia",
            items: [
              {
                type: "paragraph",
                text: "El área de influencia es el área de los paneles adyacentes al elemento considerado. Para elementos que soporten más de un piso deben sumarse las áreas de influencia de los diferentes pisos.",
              },
              {
                type: "table",
                caption: "Tabla B.4.5-1 — Área de influencia según tipo de elemento",
                headers: ["Elemento", "Área de influencia (Aᵢ)"],
                rows: [
                  ["Vigas centrales", "Área de dos paneles"],
                  ["Vigas de borde", "Área de un panel"],
                  ["Columnas centrales", "Área de cuatro paneles"],
                  ["Columnas de borde", "Área de dos paneles"],
                  ["Columnas de esquina", "Área de un panel"],
                ],
              },
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.4.5.2",
        title: "Reducción por número de pisos",
        items: [
          {
            type: "paragraph",
            text: "Alternativamente, en edificios de cinco pisos o más, la carga viva para diseño de columnas y cimentación puede tomarse como la suma de las cargas vivas de cada piso multiplicadas por el coeficiente r correspondiente:",
          },
          {
            type: "table",
            caption: "Tabla B.4.5-2 — Coeficiente r de reducción por número de pisos",
            headers: ["Piso i (desde la cima)", "Coeficiente r"],
            rows: [
              ["i = n a i = n−4 (cinco pisos superiores)", "r = 1.0"],
              ["i = n−5 a i = n−8", "r = 1.0 + 0.10·(i − n + 4)"],
              ["i = n−9 en adelante", "r = 0.5"],
            ],
          },
          {
            type: "note",
            text: "Donde n = número de pisos del edificio e i = número del piso donde se aplica el coeficiente r.",
          },
        ],
      },
    ],
    related: [
      { code: "B.4.2.1", title: "Cargas vivas requeridas" },
      { code: "B.4.4", title: "Impacto" },
      { code: "B.2.4", title: "Combinaciones de cargas mayoradas — método de resistencia" },
    ],
  },

  {
    code: "B.4.5.1",
    title: "Reducción de la carga viva por área aferente",
    summary:
      "Con área de influencia ≥ 35 m² y carga viva entre 1.80 y 3.00 kN/m², se puede reducir L usando L = L₀·(0.25 + 4.6/√Aᵢ), con un mínimo del 50% de L₀ para un piso y 40% para dos o más.",
    body: [
      {
        type: "paragraph",
        text: "Cuando el área de influencia del elemento estructural sea mayor o igual a 35 m² y la carga viva sea superior a 1.80 kN/m² e inferior a 3.00 kN/m², la carga viva puede reducirse utilizando la ecuación B.4.5-1:",
      },
      {
        type: "note",
        text: "Ecuación B.4.5-1:   L = L₀ · (0.25 + 4.6 / √Aᵢ)\n\nDonde:\n• L  = carga viva reducida, en kN/m²\n• L₀ = carga viva sin reducir, en kN/m²\n• Aᵢ = área de influencia del elemento, en m²",
      },
      {
        type: "paragraph",
        text: "La carga viva reducida no puede ser menor del 50% de L₀ en elementos que soporten un piso, ni del 40% de L₀ en elementos que soporten dos o más pisos.",
      },
    ],
    related: [
      { code: "B.4.5", title: "Reducción de la carga viva" },
      { code: "B.4.5.1.1", title: "Límites de reducción" },
      { code: "B.4.5.1.2", title: "Determinación del área de influencia" },
      { code: "B.4.5.2", title: "Reducción por número de pisos" },
    ],
  },

  {
    code: "B.4.5.1.1",
    title: "Límites de reducción",
    summary:
      "La carga viva reducida no puede ser menor del 50% de L₀ para elementos que soporten un piso, ni del 40% de L₀ para dos o más pisos.",
    body: [
      {
        type: "paragraph",
        text: "La carga viva reducida no puede ser menor del 50% de L₀ en elementos que soporten un piso, ni del 40% de L₀ en elementos que soporten dos o más pisos.",
      },
    ],
    related: [
      { code: "B.4.5.1", title: "Reducción de la carga viva por área aferente" },
      { code: "B.4.5.1.2", title: "Determinación del área de influencia" },
    ],
  },

  {
    code: "B.4.5.1.2",
    title: "Determinación del área de influencia",
    summary:
      "El área de influencia equivale al área de los paneles adyacentes al elemento: cuatro paneles para columnas centrales, dos para vigas centrales o columnas de borde, y uno para vigas de borde o columnas de esquina.",
    body: [
      {
        type: "paragraph",
        text: "El área de influencia es el área de los paneles adyacentes al elemento considerado. Para elementos que soporten más de un piso deben sumarse las áreas de influencia de los diferentes pisos.",
      },
      {
        type: "table",
        caption: "Tabla B.4.5-1 — Área de influencia según tipo de elemento",
        headers: ["Elemento", "Área de influencia (Aᵢ)"],
        rows: [
          ["Vigas centrales", "Área de dos paneles"],
          ["Vigas de borde", "Área de un panel"],
          ["Columnas centrales", "Área de cuatro paneles"],
          ["Columnas de borde", "Área de dos paneles"],
          ["Columnas de esquina", "Área de un panel"],
        ],
      },
    ],
    related: [
      { code: "B.4.5.1", title: "Reducción de la carga viva por área aferente" },
      { code: "B.4.5.1.1", title: "Límites de reducción" },
    ],
  },

  {
    code: "B.4.5.2",
    title: "Reducción por número de pisos",
    summary:
      "En edificios de cinco pisos o más, la carga viva para columnas y cimentación puede reducirse multiplicando la carga de cada piso por el coeficiente r: 1.0 para los cinco pisos superiores, reducción lineal para los siguientes cuatro, y 0.5 a partir del décimo.",
    body: [
      {
        type: "paragraph",
        text: "Alternativamente, en edificios de cinco pisos o más, la carga viva para diseño de columnas y cimentación puede tomarse como la suma de las cargas vivas de cada piso multiplicadas por el coeficiente r correspondiente:",
      },
      {
        type: "table",
        caption: "Tabla B.4.5-2 — Coeficiente r de reducción por número de pisos",
        headers: ["Piso i (desde la cima)", "Coeficiente r"],
        rows: [
          ["i = n a i = n−4 (cinco pisos superiores)", "r = 1.0"],
          ["i = n−5 a i = n−8", "r = 1.0 + 0.10·(i − n + 4)"],
          ["i = n−9 en adelante", "r = 0.5"],
        ],
      },
      {
        type: "note",
        text: "Donde n = número de pisos del edificio e i = número del piso donde se aplica el coeficiente r.",
      },
    ],
    related: [
      { code: "B.4.5", title: "Reducción de la carga viva" },
      { code: "B.4.5.1", title: "Reducción de la carga viva por área aferente" },
    ],
  },

  {
    code: "B.4.6",
    title: "Puentes grúas",
    summary:
      "Las vigas carrilera deben diseñarse para una fuerza horizontal transversal de al menos el 20% del peso de la grúa más la carga levantada, y una fuerza horizontal longitudinal igual al 10% de las cargas máximas de rueda.",
    body: [
      {
        type: "paragraph",
        text: "En el diseño de las vigas carrilera de los puentes grúas debe tenerse en cuenta una fuerza horizontal equivalente a por lo menos el 20% de la suma de los pesos de la grúa y la carga levantada. En la suma no entra el peso de las partes estacionarias del puente grúa. Esta fuerza debe suponerse colocada en la parte superior de los rieles, normalmente a los mismos, y debe distribuirse entre las vigas teniendo en cuenta la rigidez lateral de la estructura que soporta los rieles.",
      },
      {
        type: "paragraph",
        text: "Además debe tenerse en cuenta una fuerza horizontal longitudinal, aplicada al tope del riel, igual al 10% de las cargas máximas de rueda de la grúa.",
      },
    ],
    related: [
      { code: "B.4.4", title: "Impacto" },
      { code: "B.4.7", title: "Efectos dinámicos" },
    ],
  },

  {
    code: "B.4.7",
    title: "Efectos dinámicos",
    summary:
      "Las edificaciones expuestas a excitaciones dinámicas del público (estadios, gimnasios, pistas de baile, etc.) deben tener frecuencias naturales verticales iguales o superiores a 5 Hz (período menor a 0.2 s).",
    body: [
      {
        type: "paragraph",
        text: "Las edificaciones expuestas a excitaciones dinámicas producidas por el público tales como: estadios, coliseos, teatros, gimnasios, pistas de baile, centros de reunión o similares, deben ser diseñadas de tal manera que tengan frecuencias naturales verticales iguales o superiores a 5 Hz (períodos naturales verticales menores de 0.2 s).",
      },
    ],
    related: [
      { code: "B.4.6", title: "Puentes grúas" },
      { code: "B.4.4", title: "Impacto" },
    ],
  },

  {
    code: "B.4.8",
    title: "Cargas de empozamiento de agua y de granizo",
    summary:
      "Toda cubierta debe contemplar sistemas auxiliares de evacuación de agua. La carga de empozamiento Le se determina con base en el volumen acumulable antes de que opere el sistema auxiliar. La carga de granizo es 1.0 kN/m² en zonas sobre 2000 m.s.n.m.",
    body: [
      {
        type: "subsection",
        code: "B.4.8.1",
        title: "Generalidades",
        items: [
          {
            type: "paragraph",
            text: "En el diseño estructural de cubiertas se deben considerar los efectos de empozamiento de agua y de granizo. El empozamiento se produce por obstrucción de los sistemas de drenaje, la cual puede ocurrir por residuos, hojas de árboles o granizo, entre otras fuentes.",
          },
          {
            type: "list",
            items: [
              "Toda cubierta debe disponer de sistema auxiliar de evacuación del exceso de agua cuando se presenta una obstrucción de las bajantes normales. Este sistema puede consistir en gárgolas, rebosaderos u otros implementos.",
              "La carga de empozamiento de agua, Le, se determina con base en el volumen de agua que es posible contener hasta que se alcance el nivel de los elementos del sistema auxiliar de evacuación, como se indica en B.4.8.2.",
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.4.8.2",
        title: "Carga por empozamiento de agua",
        items: [
          {
            type: "paragraph",
            text: "El proyecto hidráulico de la edificación debe incluir el diseño del sistema de drenaje de la cubierta y del sistema auxiliar de evacuación del exceso de agua, y definirá el volumen de agua que pueda acumularse antes de que el sistema auxiliar opere. Es responsabilidad del constructor que suscribe la licencia de construcción aprobar el proyecto hidráulico y suministrar esta información al diseñador estructural.",
          },
          {
            type: "paragraph",
            text: "Con base en la información suministrada por el constructor, el diseñador estructural determinará las cargas causadas por el volumen de agua acumulable y su distribución a los elementos estructurales de soporte de la cubierta, de tal manera que sean capaces de resistir este peso sin fallar.",
          },
          {
            type: "note",
            text: "Para cubiertas en estructura metálica, la revisión del empozamiento debe tener adicionalmente en cuenta lo indicado en F.2.2.3.9.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.4.8.3",
        title: "Carga de granizo",
        items: [
          {
            type: "paragraph",
            text: "Las cargas de granizo, G, deben tenerse en cuenta en las regiones del país con más de 2000 metros de altura sobre el nivel del mar, o en lugares de menor altura donde la autoridad municipal o distrital así lo exija.",
          },
          {
            type: "paragraph",
            text: "En los municipios y distritos donde la carga de granizo deba tenerse en cuenta, su valor es de 1.0 kN/m² (100 kgf/m²). Para cubiertas con una inclinación mayor a 15° este valor puede reducirse a 0.5 kN/m² (50 kgf/m²).",
          },
        ],
      },
    ],
    related: [
      { code: "B.4.1", title: "Definición" },
      { code: "B.2.2", title: "Nomenclatura" },
    ],
  },

  {
    code: "B.4.8.1",
    title: "Generalidades — Empozamiento de agua y granizo",
    summary:
      "Toda cubierta debe tener un sistema auxiliar de evacuación (gárgolas, rebosaderos). La carga Le se basa en el volumen acumulable antes de que opere dicho sistema.",
    body: [
      {
        type: "paragraph",
        text: "En el diseño estructural de cubiertas se deben considerar los efectos de empozamiento de agua y de granizo. El empozamiento se produce por obstrucción de los sistemas de drenaje, la cual puede ocurrir por residuos, hojas de árboles o granizo.",
      },
      {
        type: "list",
        items: [
          "Toda cubierta debe disponer de sistema auxiliar de evacuación del exceso de agua cuando se presenta una obstrucción de las bajantes normales. Este sistema puede consistir en gárgolas, rebosaderos u otros implementos.",
          "La carga de empozamiento de agua, Le, se determina con base en el volumen de agua que es posible contener hasta que se alcance el nivel de los elementos del sistema auxiliar de evacuación, como se indica en B.4.8.2.",
        ],
      },
    ],
    related: [
      { code: "B.4.8", title: "Cargas de empozamiento de agua y de granizo" },
      { code: "B.4.8.2", title: "Carga por empozamiento de agua" },
      { code: "B.4.8.3", title: "Carga de granizo" },
    ],
  },

  {
    code: "B.4.8.2",
    title: "Carga por empozamiento de agua",
    summary:
      "El diseñador estructural determina las cargas de empozamiento con base en el volumen definido por el proyecto hidráulico. El constructor es responsable de aprobar dicho proyecto y suministrar la información al diseñador.",
    body: [
      {
        type: "paragraph",
        text: "El proyecto hidráulico de la edificación debe incluir el diseño del sistema de drenaje de la cubierta y del sistema auxiliar de evacuación del exceso de agua, y definirá el volumen de agua que pueda acumularse antes de que el sistema auxiliar opere. Es responsabilidad del constructor que suscribe la licencia de construcción aprobar el proyecto hidráulico y suministrar esta información al diseñador estructural.",
      },
      {
        type: "paragraph",
        text: "Con base en la información suministrada por el constructor, el diseñador estructural determinará las cargas causadas por el volumen de agua acumulable y su distribución a los elementos estructurales de soporte, de tal manera que sean capaces de resistir este peso sin fallar.",
      },
      {
        type: "note",
        text: "Para cubiertas en estructura metálica, la revisión del empozamiento debe tener adicionalmente en cuenta lo indicado en F.2.2.3.9.",
      },
    ],
    related: [
      { code: "B.4.8", title: "Cargas de empozamiento de agua y de granizo" },
      { code: "B.4.8.1", title: "Generalidades" },
      { code: "B.4.8.3", title: "Carga de granizo" },
    ],
  },

  {
    code: "B.4.8.3",
    title: "Carga de granizo",
    summary:
      "En zonas sobre 2000 m.s.n.m. la carga de granizo es 1.0 kN/m². Para cubiertas con inclinación mayor a 15° puede reducirse a 0.5 kN/m².",
    body: [
      {
        type: "paragraph",
        text: "Las cargas de granizo, G, deben tenerse en cuenta en las regiones del país con más de 2000 metros de altura sobre el nivel del mar, o en lugares de menor altura donde la autoridad municipal o distrital así lo exija.",
      },
      {
        type: "paragraph",
        text: "En los municipios y distritos donde la carga de granizo deba tenerse en cuenta, su valor es de 1.0 kN/m² (100 kgf/m²). Para cubiertas con una inclinación mayor a 15° este valor puede reducirse a 0.5 kN/m² (50 kgf/m²).",
      },
    ],
    related: [
      { code: "B.4.8", title: "Cargas de empozamiento de agua y de granizo" },
      { code: "B.4.8.1", title: "Generalidades" },
      { code: "B.4.2.1", title: "Cargas vivas requeridas" },
    ],
  },
]
