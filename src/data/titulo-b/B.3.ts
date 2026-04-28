import type { Article } from "../types"

export const B3: Article[] = [
  {
    code: "B.3.1",
    title: "Definición",
    summary:
      "La carga muerta cubre todos los elementos permanentes de construcción: estructura, muros, pisos, cubiertas, cielos rasos, escaleras y equipos fijos. Incluye las fuerzas netas de preesfuerzo.",
    body: [
      {
        type: "paragraph",
        text: "La carga muerta cubre todas las cargas de elementos permanentes de construcción incluyendo su estructura, los muros, pisos, cubiertas, cielos rasos, escaleras, equipos fijos y todas aquellas cargas que no son causadas por la ocupación y uso de la edificación. Las fuerzas netas de preesfuerzo deben incluirse dentro de la carga muerta.",
      },
    ],
    related: [
      { code: "B.3.2", title: "Masas y pesos de los materiales" },
      { code: "B.3.5", title: "Equipos fijos" },
    ],
  },

  {
    code: "B.3.2",
    title: "Masas y pesos de los materiales",
    summary:
      "Para calcular cargas muertas se usan densidades de masa reales (kg/m³) multiplicadas por 9.8 m/s² para obtener el peso en N/m³. La Tabla B.3.2-1 lista los materiales más frecuentes.",
    body: [
      {
        type: "paragraph",
        text: "Al calcular las cargas muertas deben utilizarse las densidades de masa reales (en kg/m³) de los materiales, las cuales se deben multiplicar por la aceleración de la gravedad, 9.8 m/s², para así obtener valores de peso en N/m³.",
      },
      {
        type: "table",
        caption: "Tabla B.3.2-1 — Masas de los materiales",
        headers: ["Material", "Densidad (kg/m³)", "Material", "Densidad (kg/m³)"],
        rows: [
          ["Acero", 7800, "Mortero de inyección para mampostería", 2250],
          ["Agua dulce", 1000, "Mortero de pega para mampostería", 2100],
          ["Agua marina", 1030, "Piedra — Caliza, mármol, cuarzo", 2700],
          ["Aluminio", 2700, "Piedra — Basalto, granito, gneis", 2850],
          ["Arena limpia y seca", 1440, "Piedra — Arenisca", 2200],
          ["Arena seca de río", 1700, "Pizarra", 2600],
          ["Baldosa cerámica", 2400, "Plomo", 11400],
          ["Bronce", 8850, "Productos bituminosos — Asfalto y alquitrán", 1300],
          ["Cal hidratada suelta", 500, "Productos bituminosos — Gasolina", 700],
          ["Cal hidratada compacta", 730, "Grafito", 2160],
          ["Carbón, apilado", 800, "Parafina", 900],
          ["Carbón vegetal", 200, "Petróleo", 850],
          ["Cemento pórtland, a granel", 1440, "Relleno de ceniza", 920],
          ["Cobre", 9000, "Tableros de madera aglutinada", 750],
          ["Concreto simple", 2300, "Terracota — Poros saturados", 1950],
          ["Concreto reforzado", 2400, "Terracota — Poros no saturados", 1150],
          ["Corcho, comprimido", 250, "Tierra — Arcilla húmeda", 1750],
          ["Estaño", 7360, "Tierra — Arcilla seca", 1100],
          ["Grava seca", 1660, "Tierra — Arcilla y grava seca", 1600],
          ["Hielo", 920, "Tierra — Arena y grava húmeda", 1900],
          ["Hierro fundido", 7200, "Tierra — Arena y grava seca apisonada", 1750],
          ["Hierro forjado", 7700, "Tierra — Arena y grava seca suelta", 1600],
          ["Latón", 8430, "Tierra — Limo húmedo consolidado", 1550],
          ["Madera laminada", 600, "Tierra — Limo húmedo suelto", 1250],
          ["Madera seca", "450–750", "Vidrio", 2600],
          ["Mampostería de concreto", 2150, "Yeso en tableros para muros", 800],
          ["Mampostería de ladrillo macizo", 1850, "Yeso suelto", 1150],
          ["Mampostería de piedra", 2200, "Zinc en láminas enrolladas", 7200],
        ],
      },
    ],
    related: [
      { code: "B.3.3", title: "Cargas muertas mínimas" },
      { code: "B.3.4", title: "Elementos no estructurales" },
    ],
  },

  {
    code: "B.3.3",
    title: "Cargas muertas mínimas",
    summary:
      "Deben utilizarse las masas reales de los materiales. El peso debe ser especificado por el fabricante o evaluado analítica o experimentalmente cuando no se conozca.",
    body: [
      {
        type: "paragraph",
        text: "Al calcular las cargas muertas deben utilizarse las masas reales de los materiales. Debe ponerse especial cuidado en determinar masas representativas en este cálculo, utilizar el peso especificado por el fabricante o en su defecto deben evaluarse analítica o experimentalmente.",
      },
    ],
    related: [
      { code: "B.3.2", title: "Masas y pesos de los materiales" },
      { code: "B.3.4", title: "Elementos no estructurales" },
    ],
  },

  {
    code: "B.3.4",
    title: "Elementos no estructurales",
    summary:
      "Los elementos no estructurales se dividen en horizontales (losas y cubiertas) y verticales (muros, fachadas, particiones). Se dan tablas de cargas mínimas para cada categoría.",
    body: [
      {
        type: "paragraph",
        text: "Para el cálculo de las cargas muertas producidas por materiales de construcción no estructurales, estos elementos se dividen en horizontales y verticales.",
      },
      {
        type: "subsection",
        code: "B.3.4.1",
        title: "Elementos no estructurales horizontales",
        items: [
          {
            type: "paragraph",
            text: "Los elementos no estructurales horizontales son aquellos cuya dimensión vertical es substancialmente menor que sus dimensiones horizontales, y están aplicados, soportados, fijados o anclados a las losas o a la cubierta de la edificación. Estos elementos incluyen, entre otros: formaletería permanente para losas o viguetas, morteros de afinado de piso, rellenos de piso, acabados de piso, rellenos en cubiertas inclinadas, elementos de cubiertas, tejas, membranas impermeables, aislamientos térmicos, claraboyas, cielo raso, alistados, y ductos para servicios.",
          },
          {
            type: "note",
            text: "Para propósitos de diseño, las cargas muertas de elementos no estructurales horizontales se consideran como cargas verticales uniformes por unidad de área de superficie o proyección horizontal. Deben usarse la densidad de masa real y un espesor realista. Los valores de las tablas B.3.4.1-1 a B.3.4.1-4 corresponden a valores mínimos promedio; el diseñador debe considerar variaciones por diferencias en materiales locales y práctica constructiva.",
          },
          {
            type: "table",
            caption: "Tabla B.3.4.1-1 — Cargas muertas mínimas — Cielo raso",
            headers: ["Componente", "Carga (kN/m²)", "Carga (kgf/m²)"],
            rows: [
              ["Canales suspendidas de acero", 0.1, 10],
              ["Ductos mecánicos", 0.2, 20],
              ["Entramado metálico suspendido afinado en cemento", 0.7, 70],
              ["Entramado metálico suspendido afinado en yeso", 0.5, 50],
              ["Fibras acústicas", 0.1, 10],
              ["Pañete en yeso o concreto", 0.25, 25],
              ["Pañete en entramado de madera", 0.8, 80],
              ["Tableros de yeso", "0.0080 por mm de espesor", "8 por cm de espesor"],
              ["Sistema de suspensión de madera", 0.15, 15],
            ],
          },
          {
            type: "table",
            caption: "Tabla B.3.4.1-2 — Cargas muertas mínimas — Relleno de pisos",
            headers: ["Componente", "Carga (kN/m²)", "Carga (kgf/m²)"],
            rows: [
              ["Arena", "0.0150 por mm de espesor", "15 por cm de espesor"],
              ["Concreto con escoria", "0.0200 por mm de espesor", "20 por cm de espesor"],
              ["Concreto con piedra", "0.0250 por mm de espesor", "25 por cm de espesor"],
              ["Concreto ligero", "0.0150 por mm de espesor", "15 por cm de espesor"],
            ],
          },
          {
            type: "table",
            caption: "Tabla B.3.4.1-3 — Cargas muertas mínimas — Pisos y acabados",
            headers: ["Componente", "Carga (kN/m²)", "Carga (kgf/m²)"],
            rows: [
              ["Acabado de piso en concreto", "0.0200 por mm de espesor", "20 por cm de espesor"],
              ["Afinado (25 mm) sobre concreto de agregado pétreo", 1.5, 150],
              ["Baldosa cerámica (20 mm) sobre 12 mm de mortero", 0.8, 80],
              ["Baldosa cerámica (20 mm) sobre 25 mm de mortero", 1.1, 110],
              ["Baldosa sobre 25 mm de mortero", 1.1, 110],
              ["Bloque de asfalto (50 mm), sobre 12 mm de mortero", 1.5, 150],
              ["Bloque de madera (75 mm) sin relleno", 0.5, 50],
              ["Bloque de madera (75 mm) sobre 12 mm de mortero", 0.8, 80],
              ["Durmientes de madera, 20 mm", 0.15, 15],
              ["Madera densa, 25 mm", 0.2, 20],
              ["Mármol y mortero sobre concreto de agregado pétreo", 1.6, 160],
              ["Piso asfáltico o linóleo, 6 mm", 0.05, 5],
              ["Pizarra", "0.030 por mm de espesor", "30 por cm de espesor"],
              ["Terrazzo (25 mm), concreto 50 mm", 1.5, 150],
              ["Terrazzo (40 mm) directamente sobre la losa", 0.9, 90],
              ["Terrazzo (25 mm) sobre afinado en concreto", 1.5, 150],
            ],
          },
          {
            type: "table",
            caption: "Tabla B.3.4.1-4 — Cargas muertas mínimas — Cubiertas",
            headers: ["Componente", "Carga (kN/m²)", "Carga (kgf/m²)"],
            rows: [
              ["Cobre o latón", 0.05, 5],
              [
                "Cubierta aislante — Fibra de vidrio",
                "0.0020 por mm de espesor",
                "2.0 por cm de espesor",
              ],
              [
                "Cubierta aislante — Tableros de fibra",
                "0.0030 por mm de espesor",
                "3.0 por cm de espesor",
              ],
              ["Cubierta aislante — Perlita", "0.0015 por mm de espesor", "1.5 por cm de espesor"],
              [
                "Cubierta aislante — Espuma de poliestireno",
                "0.0005 por mm de espesor",
                "0.5 por cm de espesor",
              ],
              [
                "Cubierta aislante — Espuma de poliuretano",
                "0.0010 por mm de espesor",
                "1.0 por cm de espesor",
              ],
              ["Cubiertas corrugadas de asbesto-cemento", 0.2, 20],
              ["Entablado de madera", "0.0060 por mm de espesor", "6.0 por cm de espesor"],
              ["Láminas de yeso, 12 mm", 0.1, 10],
              [
                "Madera laminada (según espesor)",
                "0.0100 por mm de espesor",
                "10.0 por cm de espesor",
              ],
              ["Membrana impermeable — Bituminosa, cubierta de grava", 0.25, 25],
              ["Membrana impermeable — Bituminosa, superficie lisa", 0.1, 10],
              ["Membrana impermeable — Líquido aplicado", 0.05, 5],
              ["Membrana impermeable — Tela asfáltica de una capa", 0.03, 3],
              ["Marquesinas, marco metálico, vidrio de 10 mm", 0.4, 40],
              ["Tableros de fibra, 12 mm", 0.05, 5],
              ["Tableros de madera, 50 mm", 0.25, 25],
              ["Tableros de madera, 75 mm", 0.4, 40],
              ["Tablero metálico, calibre 20 (0.9 mm nominal)", 0.08, 8],
              ["Tablero metálico, calibre 18 (1.2 mm nominal)", 0.08, 8],
              ["Tablillas (shingles) de asbesto-cemento", 0.2, 20],
              ["Tablillas (shingles) de asfalto", 0.1, 10],
              ["Tablillas (shingles) de madera", 0.15, 15],
              ["Teja de arcilla, incluyendo el mortero", 0.8, 80],
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.3.4.2",
        title: "Elementos no estructurales verticales",
        items: [
          {
            type: "paragraph",
            text: "Los elementos no estructurales verticales son aquellos cuya dimensión vertical es substancialmente mayor que su mínima dimensión horizontal y se encuentran erguidos libremente o soportados por los elementos estructurales verticales o fijados a ellos o anclados solamente a las losas de entrepiso. Tales elementos incluyen, entre otros: fachadas, muros no estructurales, particiones, recubrimiento de muros, enchapes, ornamentación arquitectónica, ventanas, puertas, y ductos verticales de servicios. En las edificaciones en las cuales se puedan disponer particiones, se debe hacer provisión de carga para ellas, ya sea que estas figuren o no en los planos arquitectónicos.",
          },
          {
            type: "note",
            text: "Las cargas muertas de elementos no estructurales verticales se consideran como cargas concentradas o distribuidas por unidad de longitud. Para obtener las cargas distribuidas en kN/m, los valores de las tablas B.3.4.2-1 a B.3.4.2-5 deben multiplicarse por la altura en m del elemento. Los valores dados corresponden a mínimos promedio; el diseñador debe considerar variaciones por diferencias en materiales locales y práctica constructiva. La carga muerta de fachadas y elementos de cerramiento debe considerarse como carga distribuida sobre el borde de la losa.",
          },
          {
            type: "table",
            caption:
              "Tabla B.3.4.2-1 — Cargas muertas mínimas — Recubrimiento de muros (kN/m² de superficie vertical)",
            headers: ["Componente", "Carga (kN/m²)", "Carga (kgf/m²)"],
            rows: [
              ["Baldosín de cemento", 0.8, 80],
              ["Entablado de madera", "0.0060 por mm de espesor", "6.0 por cm de espesor"],
              [
                "Madera laminada (según espesor)",
                "0.0100 por mm de espesor",
                "10.0 por cm de espesor",
              ],
              [
                "Tablero aislante — Espuma de poliestireno",
                "0.0005 por mm de espesor",
                "0.5 por cm de espesor",
              ],
              [
                "Tablero aislante — Espuma de poliuretano",
                "0.0010 por mm de espesor",
                "1.0 por cm de espesor",
              ],
              [
                "Tablero aislante — Fibra o acrílico",
                "0.0020 por mm de espesor",
                "2.0 por cm de espesor",
              ],
              ["Tablero aislante — Perlita", "0.0015 por mm de espesor", "1.5 por cm de espesor"],
              [
                "Tablero aislante — Tableros de fibra",
                "0.0030 por mm de espesor",
                "3.0 por cm de espesor",
              ],
              ["Tableros de fibra, 12 mm", 0.05, 5],
              ["Tableros de yeso, 12 mm", 0.1, 10],
            ],
          },
          {
            type: "table",
            caption:
              "Tabla B.3.4.2-2 — Cargas muertas mínimas — Particiones livianas (kN/m² de superficie vertical)",
            headers: ["Componente", "Carga (kN/m²)", "Carga (kgf/m²)"],
            rows: [
              ["Particiones móviles de acero (altura parcial)", 0.5, 50],
              ["Particiones móviles de acero (altura total)", 0.2, 20],
              ["Poste en madera o acero, yeso de 12 mm a cada lado", 0.9, 90],
              ["Poste en madera 50×100, sin pañetar", 0.3, 30],
              ["Poste en madera 50×100, pañete por un lado", 0.6, 60],
              ["Poste en madera 50×100, pañete por ambos lados", 2.0, 200],
            ],
          },
          {
            type: "table",
            caption:
              "Tabla B.3.4.2-3 — Cargas muertas mínimas — Enchapes (kN/m² de superficie vertical)",
            headers: ["Componente", "Carga (kN/m²)", "Carga (kgf/m²)"],
            rows: [
              ["Enchape cerámico", "0.015 por mm de espesor", "15 por cm de espesor"],
              ["Enchape en arenisca", "0.013 por mm de espesor", "13 por cm de espesor"],
              ["Enchape en caliza", "0.015 por mm de espesor", "15 por cm de espesor"],
              ["Enchape en granito", "0.017 por mm de espesor", "17 por cm de espesor"],
            ],
          },
          {
            type: "table",
            caption:
              "Tabla B.3.4.2-4 — Cargas muertas mínimas — Muros (kN/m² de superficie vertical)",
            headers: ["Componente", "Carga (kN/m²)", "Carga (kgf/m²)"],
            rows: [
              [
                "Exteriores de paneles (postes de acero o madera): yeso 15 mm, aislado, entablado 10 mm",
                1.0,
                100,
              ],
              ["Exteriores con enchape en ladrillo", 2.5, 250],
              ["Mampostería de bloque de arcilla 100 mm — pañetado en ambas caras", 1.8, 180],
              ["Mampostería de bloque de arcilla 150 mm — pañetado en ambas caras", 2.5, 250],
              ["Mampostería de bloque de arcilla 200 mm — pañetado en ambas caras", 3.1, 310],
              ["Mampostería de bloque de arcilla 250 mm — pañetado en ambas caras", 3.8, 380],
              ["Mampostería de bloque de arcilla 300 mm — pañetado en ambas caras", 4.4, 440],
              ["Mampostería de bloque de arcilla 100 mm — sin pañetar", 1.3, 130],
              ["Mampostería de bloque de arcilla 150 mm — sin pañetar", 2.0, 200],
              ["Mampostería de bloque de arcilla 200 mm — sin pañetar", 2.6, 260],
              ["Mampostería de bloque de arcilla 250 mm — sin pañetar", 3.3, 330],
              ["Mampostería de bloque de arcilla 300 mm — sin pañetar", 3.9, 390],
              ["Mampostería de bloque de concreto 100 mm — sin relleno", 1.4, 140],
              ["Mampostería de bloque de concreto 150 mm — sin relleno", 1.45, 145],
              ["Mampostería de bloque de concreto 200 mm — sin relleno", 1.9, 190],
              ["Mampostería de bloque de concreto 250 mm — sin relleno", 2.25, 225],
              ["Mampostería de bloque de concreto 300 mm — sin relleno", 2.6, 260],
              ["Mampostería de bloque de concreto 150 mm — relleno cada 1.2 m", 1.7, 170],
              ["Mampostería de bloque de concreto 200 mm — relleno cada 1.2 m", 2.25, 225],
              ["Mampostería de bloque de concreto 250 mm — relleno cada 1.2 m", 2.7, 270],
              ["Mampostería de bloque de concreto 300 mm — relleno cada 1.2 m", 3.15, 315],
              ["Mampostería de bloque de concreto 150 mm — todas las celdas llenas", 3.0, 300],
              ["Mampostería de bloque de concreto 200 mm — todas las celdas llenas", 4.0, 400],
              ["Mampostería de bloque de concreto 250 mm — todas las celdas llenas", 5.0, 500],
              ["Mampostería de bloque de concreto 300 mm — todas las celdas llenas", 6.1, 610],
              ["Mampostería maciza de arcilla 100 mm — sin pañetar", 1.9, 190],
              ["Mampostería maciza de arcilla 150 mm — sin pañetar", 2.9, 290],
              ["Mampostería maciza de arcilla 200 mm — sin pañetar", 3.8, 380],
              ["Mampostería maciza de arcilla 250 mm — sin pañetar", 4.7, 470],
              ["Mampostería maciza de arcilla 300 mm — sin pañetar", 5.5, 550],
              ["Mampostería maciza de concreto 100 mm — sin pañetar", 2.0, 200],
              ["Mampostería maciza de concreto 150 mm — sin pañetar", 3.1, 310],
              ["Mampostería maciza de concreto 200 mm — sin pañetar", 4.2, 420],
              ["Mampostería maciza de concreto 250 mm — sin pañetar", 5.3, 530],
              ["Mampostería maciza de concreto 300 mm — sin pañetar", 6.4, 640],
            ],
          },
          {
            type: "table",
            caption:
              "Tabla B.3.4.2-5 — Cargas muertas mínimas — Ventanas (kN/m² de superficie vertical)",
            headers: ["Componente", "Carga (kN/m²)", "Carga (kgf/m²)"],
            rows: [
              ["Muros cortina de vidrio, entramado y marco", 0.5, 50],
              ["Ventanas, vidrio, entramado y marco", 0.45, 45],
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.3.4.3",
        title: "Valores mínimos alternativos para cargas muertas de elementos no estructurales",
        items: [
          {
            type: "paragraph",
            text: "En edificaciones con alturas entre pisos terminados menores a 3 m, se pueden utilizar los valores mínimos de carga muerta en kN/m² de área horizontal en planta dados en la Tabla B.3.4.3-1, según el tipo de ocupación, en vez de aquellos obtenidos del análisis detallado de las cargas muertas causadas por los elementos no estructurales.",
          },
          {
            type: "table",
            caption:
              "Tabla B.3.4.3-1 — Valores mínimos alternativos de carga muerta de elementos no estructurales (altura entre pisos < 3 m)",
            headers: [
              "Ocupación",
              "Fachada y particiones (kN/m²)",
              "Afinado de piso y cubierta (kN/m²)",
              "Fachada y particiones (kgf/m²)",
              "Afinado de piso y cubierta (kgf/m²)",
            ],
            rows: [
              ["Reunión — salón para menos de 100 personas sin escenarios", 1.0, 1.8, 100, 180],
              ["Oficinas — particiones móviles de altura total", 1.0, 1.8, 100, 180],
              ["Oficinas — particiones fijas de mampostería", 2.0, 1.8, 200, 180],
              ["Educativos — salones de clase", 2.0, 1.5, 200, 150],
              ["Fábricas — industrias livianas", 0.8, 1.6, 80, 160],
              ["Institucional — internados con atención a los residentes", 2.0, 1.6, 200, 160],
              ["Institucional — prisiones, cárceles y centros de detención", 2.5, 1.8, 250, 180],
              ["Institucional — guarderías", 2.0, 1.6, 200, 160],
              ["Comercio — exhibición y venta de mercancías", 1.5, 1.4, 150, 140],
              ["Residencial — fachada y particiones de mampostería", 3.0, 1.6, 300, 160],
              ["Residencial — fachada y particiones livianas", 2.0, 1.4, 200, 140],
              ["Almacenamiento — materiales livianos", 1.5, 1.5, 150, 150],
              ["Garajes — vehículos hasta 2000 kg", 0.2, 1.0, 20, 100],
            ],
          },
        ],
      },
    ],
    related: [
      { code: "B.3.2", title: "Masas y pesos de los materiales" },
      { code: "B.3.5", title: "Equipos fijos" },
    ],
  },

  {
    code: "B.3.4.1",
    title: "Elementos no estructurales horizontales",
    summary:
      "Elementos fijados a losas o cubiertas (cielos rasos, acabados de piso, tejas, membranas). Se calculan como cargas verticales uniformes por unidad de área usando densidades reales y espesores realistas.",
    body: [
      {
        type: "paragraph",
        text: "Los elementos no estructurales horizontales son aquellos cuya dimensión vertical es substancialmente menor que sus dimensiones horizontales, y están aplicados, soportados, fijados o anclados a las losas o a la cubierta de la edificación. Estos elementos incluyen, entre otros: formaletería permanente para losas o viguetas, morteros de afinado de piso, rellenos de piso, acabados de piso, rellenos en cubiertas inclinadas, elementos de cubiertas, tejas, membranas impermeables, aislamientos térmicos, claraboyas, cielo raso, alistados, y ductos para servicios.",
      },
      {
        type: "note",
        text: "Para propósitos de diseño, las cargas muertas de estos elementos se consideran como cargas verticales uniformes por unidad de área de superficie o proyección horizontal. Deben usarse la densidad de masa real y un espesor realista. Los valores de las tablas B.3.4.1-1 a B.3.4.1-4 corresponden a valores mínimos promedio.",
      },
    ],
    related: [
      { code: "B.3.4", title: "Elementos no estructurales" },
      { code: "B.3.4.2", title: "Elementos no estructurales verticales" },
      { code: "B.3.4.3", title: "Valores mínimos alternativos" },
    ],
  },

  {
    code: "B.3.4.2",
    title: "Elementos no estructurales verticales",
    summary:
      "Elementos con dimensión vertical dominante (muros, fachadas, particiones, ventanas). Sus cargas se calculan por unidad de área vertical y se multiplican por la altura del elemento para obtener cargas distribuidas en kN/m.",
    body: [
      {
        type: "paragraph",
        text: "Los elementos no estructurales verticales son aquellos cuya dimensión vertical es substancialmente mayor que su mínima dimensión horizontal y se encuentran erguidos libremente o soportados por los elementos estructurales verticales o fijados a ellos o anclados solamente a las losas de entrepiso. Tales elementos incluyen, entre otros: fachadas, muros no estructurales, particiones, recubrimiento de muros, enchapes, ornamentación arquitectónica, ventanas, puertas, y ductos verticales de servicios.",
      },
      {
        type: "note",
        text: "En las edificaciones en las cuales se puedan disponer particiones, se debe hacer provisión de carga para ellas, ya sea que estas figuren o no en los planos arquitectónicos. La carga muerta de fachadas y elementos de cerramiento debe considerarse como carga distribuida sobre el borde de la losa.",
      },
    ],
    related: [
      { code: "B.3.4", title: "Elementos no estructurales" },
      { code: "B.3.4.1", title: "Elementos no estructurales horizontales" },
      { code: "B.3.4.3", title: "Valores mínimos alternativos" },
    ],
  },

  {
    code: "B.3.4.3",
    title: "Valores mínimos alternativos para cargas muertas de elementos no estructurales",
    summary:
      "En edificaciones con altura entre pisos menor a 3 m, la Tabla B.3.4.3-1 ofrece valores mínimos de carga muerta por ocupación como alternativa al análisis detallado.",
    body: [
      {
        type: "paragraph",
        text: "En edificaciones con alturas entre pisos terminados menores a 3 m, se pueden utilizar los valores mínimos de carga muerta en kN/m² de área horizontal en planta dados en la Tabla B.3.4.3-1, según el tipo de ocupación, en vez de aquellos obtenidos del análisis detallado de las cargas muertas causadas por los elementos no estructurales.",
      },
      {
        type: "table",
        caption:
          "Tabla B.3.4.3-1 — Valores mínimos alternativos de carga muerta de elementos no estructurales (altura entre pisos < 3 m)",
        headers: [
          "Ocupación",
          "Fachada y particiones (kN/m²)",
          "Afinado de piso y cubierta (kN/m²)",
          "Fachada y particiones (kgf/m²)",
          "Afinado de piso y cubierta (kgf/m²)",
        ],
        rows: [
          ["Reunión — salón para menos de 100 personas sin escenarios", 1.0, 1.8, 100, 180],
          ["Oficinas — particiones móviles de altura total", 1.0, 1.8, 100, 180],
          ["Oficinas — particiones fijas de mampostería", 2.0, 1.8, 200, 180],
          ["Educativos — salones de clase", 2.0, 1.5, 200, 150],
          ["Fábricas — industrias livianas", 0.8, 1.6, 80, 160],
          ["Institucional — internados con atención a los residentes", 2.0, 1.6, 200, 160],
          ["Institucional — prisiones, cárceles y centros de detención", 2.5, 1.8, 250, 180],
          ["Institucional — guarderías", 2.0, 1.6, 200, 160],
          ["Comercio — exhibición y venta de mercancías", 1.5, 1.4, 150, 140],
          ["Residencial — fachada y particiones de mampostería", 3.0, 1.6, 300, 160],
          ["Residencial — fachada y particiones livianas", 2.0, 1.4, 200, 140],
          ["Almacenamiento — materiales livianos", 1.5, 1.5, 150, 150],
          ["Garajes — vehículos hasta 2000 kg", 0.2, 1.0, 20, 100],
        ],
      },
    ],
    related: [
      { code: "B.3.4", title: "Elementos no estructurales" },
      { code: "B.3.4.1", title: "Elementos no estructurales horizontales" },
      { code: "B.3.4.2", title: "Elementos no estructurales verticales" },
    ],
  },

  {
    code: "B.3.5",
    title: "Equipos fijos",
    summary:
      "Las cargas muertas deben incluir la masa de todos los equipos fijos apoyados sobre elementos estructurales: ascensores, bombas, transformadores, equipos de HVAC y otros.",
    body: [
      {
        type: "paragraph",
        text: "Dentro de las cargas muertas deben incluirse la masa correspondiente de todos los equipos fijos que estén apoyados sobre elementos estructurales tales como ascensores, bombas hidráulicas, transformadores, equipos de aire acondicionado y ventilación y otros.",
      },
    ],
    related: [
      { code: "B.3.1", title: "Definición" },
      { code: "B.3.6", title: "Consideraciones especiales" },
    ],
  },

  {
    code: "B.3.6",
    title: "Consideraciones especiales",
    summary:
      "Los profesionales, el constructor y el propietario deben verificar en obra que los pesos de los materiales no superen los valores usados en el diseño. El cumplimiento es responsabilidad de quien suscribe la licencia de construcción.",
    body: [
      {
        type: "paragraph",
        text: "Los profesionales que participen en la construcción y la supervisión técnica, y el propietario de la edificación, deben ser conscientes de los valores de las cargas muertas utilizadas en el diseño y tomar las precauciones necesarias para verificar en la obra que los pesos de los materiales utilizados no superen los valores usados en el diseño. Es responsabilidad de quien suscribe como constructor la licencia de construcción el cumplimiento de este requisito. Véase A.1.3.6.5.",
      },
    ],
    related: [
      { code: "B.3.3", title: "Cargas muertas mínimas" },
      { code: "B.3.5", title: "Equipos fijos" },
    ],
  },
]
