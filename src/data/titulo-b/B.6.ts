import type { Article } from "../types"

export const B6: Article[] = [
  {
    code: "B.6.1",
    title: "Alcance",
    summary:
      "Presenta los métodos para calcular fuerzas de viento sobre el SPRFV, componentes y revestimientos de edificaciones. No aplica a estructuras de forma especial, susceptibles a oscilaciones graves o puentes. Los resultados de túnel de viento pueden reemplazar los métodos aquí especificados con aprobación de la Comisión Asesora.",
    body: [
      {
        type: "paragraph",
        text: "A continuación se presentan métodos para calcular las fuerzas de viento con que debe diseñarse el sistema principal de resistencia de fuerzas de viento (SPRFV) de las edificaciones, sus componentes y elementos de revestimiento. No es aplicable a las estructuras de forma o localización especiales, las cuales requieren investigación apropiada, ni a las que puedan verse sometidas a oscilaciones graves inducidas por el viento, ni tampoco a estructuras de puentes. Cuando existan resultados experimentales obtenidos en túneles de viento, éstos pueden usarse en lugar de los especificados en este capítulo, siempre y cuando reciban la aprobación de la Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes.",
      },
      {
        type: "subsection",
        code: "B.6.1.1",
        title: "Procedimientos permitidos",
        items: [
          {
            type: "paragraph",
            text: "Las cargas de diseño para edificios y otras estructuras, incluyendo el SPRFV y todos los componentes y elementos de revestimiento, se determinarán usando uno de los siguientes procedimientos:",
          },
          {
            type: "list",
            items: [
              "Método 1 — Procedimiento Simplificado, para edificios que cumplan los requisitos especificados en la sección B.6.4.",
              "Método 2 — Procedimiento Analítico, para edificios que cumplan los requisitos especificados en la sección B.6.5.",
              "Método 3 — Procedimiento de Túnel de Viento como se especifica en la sección B.6.6.",
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.1.2",
        title: "Presiones de viento en caras opuestas",
        items: [
          {
            type: "paragraph",
            text: "Para el cálculo de las cargas de viento de diseño del SPRFV, se deberá tomar la suma algebraica de las presiones que actúan en caras opuestas de cada superficie del edificio.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.1.3",
        title: "Carga de viento de diseño mínima",
        items: [
          {
            type: "paragraph",
            text: "La carga de viento de diseño, determinada mediante cualquiera de los procedimientos de la sección B.6.1.1, no deberá ser menor a la especificada a continuación.",
          },
          {
            type: "subsection",
            code: "B.6.1.3.1",
            title: "Sistema Principal Resistente a Cargas de Viento (SPRFV)",
            items: [
              {
                type: "paragraph",
                text: "Para una edificación cerrada, parcialmente cerrada o para cualquier estructura, la carga de viento a usarse en el diseño de SPRFV no será menor a la multiplicación de 0.40 kN/m² por el área de la edificación o estructura, proyectada a un plano vertical normal a la dirección de viento en estudio.",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.6.1.3.2",
            title: "Componentes y revestimientos",
            items: [
              {
                type: "paragraph",
                text: "La presión de viento de diseño para los componentes y revestimientos de la estructura no será menor a una presión neta de 0.40 kN/m² actuando en cualquier dirección normal a la superficie.",
              },
            ],
          },
        ],
      },
    ],
    related: [
      { code: "B.6.2", title: "Definiciones" },
      { code: "B.6.4", title: "Procedimiento simplificado" },
      { code: "B.6.5", title: "Método 2 — Procedimiento analítico" },
      { code: "B.6.6", title: "Método 3 — Procedimiento de túnel de viento" },
    ],
  },

  {
    code: "B.6.1.1",
    title: "Procedimientos permitidos",
    summary:
      "Las cargas de diseño de viento se determinan por uno de tres métodos: Método 1 (Simplificado, B.6.4), Método 2 (Analítico, B.6.5) o Método 3 (Túnel de viento, B.6.6).",
    body: [
      {
        type: "list",
        items: [
          "Método 1 — Procedimiento Simplificado, para edificios que cumplan los requisitos especificados en la sección B.6.4.",
          "Método 2 — Procedimiento Analítico, para edificios que cumplan los requisitos especificados en la sección B.6.5.",
          "Método 3 — Procedimiento de Túnel de Viento como se especifica en la sección B.6.6.",
        ],
      },
    ],
    related: [
      { code: "B.6.1", title: "Alcance" },
      { code: "B.6.4", title: "Procedimiento simplificado" },
      { code: "B.6.5", title: "Método 2 — Procedimiento analítico" },
      { code: "B.6.6", title: "Método 3 — Procedimiento de túnel de viento" },
    ],
  },

  {
    code: "B.6.1.3",
    title: "Carga de viento de diseño mínima",
    summary:
      "La carga de viento no puede ser menor a 0.40 kN/m² por el área proyectada verticalmente para el SPRFV, ni a una presión neta de 0.40 kN/m² normal a la superficie para componentes y revestimientos.",
    body: [
      {
        type: "paragraph",
        text: "La carga de viento de diseño, determinada mediante cualquiera de los procedimientos de la sección B.6.1.1, no deberá ser menor a la especificada a continuación.",
      },
      {
        type: "paragraph",
        text: "Para el SPRFV: no será menor a 0.40 kN/m² multiplicado por el área de la edificación proyectada a un plano vertical normal a la dirección de viento en estudio.",
      },
      {
        type: "paragraph",
        text: "Para componentes y revestimientos: la presión de diseño no será menor a una presión neta de 0.40 kN/m² actuando en cualquier dirección normal a la superficie.",
      },
    ],
    related: [
      { code: "B.6.1", title: "Alcance" },
      { code: "B.6.4.2", title: "Procedimiento de diseño simplificado" },
    ],
  },

  {
    code: "B.6.2",
    title: "Definiciones",
    summary:
      "Define los términos fundamentales del capítulo B.6: tipos de edificios (abierto, cerrado, parcialmente cerrado, bajo, flexible, rígido), elementos del SPRFV, clasificaciones de cerramiento y condiciones topográficas.",
    body: [
      {
        type: "list",
        items: [
          "Aberturas: Vanos o espacios en el cerramiento del edificio que permiten la circulación del aire y se diseñan como 'abiertos' durante vientos de diseño.",
          "Altura de la cornisa, h: Distancia desde la superficie del suelo adyacente al edificio hasta la cornisa en una determinada pared. Si varía a lo largo de la pared, se tomará la altura promedio.",
          "Altura media de cubierta, h: Promedio de la altura hasta la cornisa y la altura hasta el punto más elevado de la cubierta. Para cubiertas con ángulos de inclinación ≤ 10°, la altura media será la altura de la cornisa.",
          "Área efectiva: Área usada para determinar GCp. Para componentes y paneles de revestimiento, es la longitud de luz multiplicada por un ancho efectivo no menor que un tercio de la longitud del tramo.",
          "Colina: Superficie de terreno caracterizada por un cambio notable de relieve en cualquier dirección horizontal, con respecto a los efectos topográficos de B.6.5.7.",
          "Componentes y revestimientos: Elementos que no forman parte del SPRFV.",
          "Cubierta libre: Cubierta con configuración a una, dos aguas o en artesa, en un edificio abierto sin paredes de cerramiento bajo la superficie de cubierta.",
          "Edificio abierto: Edificio con aberturas de al menos 80% del área en cada una de las paredes que conforman el cerramiento (Ao ≥ 0.8·Ag).",
          "Edificio bajo: Edificio cerrado o parcialmente cerrado con altura media de cubierta h ≤ 18 m, y donde h no excede la menor dimensión horizontal del edificio.",
          "Edificio cerrado: Edificio que no cumple los requerimientos de edificios abiertos o parcialmente cerrados.",
          "Edificio de diafragma simple: Edificio en el cual las cargas de viento a barlovento y sotavento se transmiten a través de los diafragmas de piso y cubierta hacia un mismo SPRFV, sin separaciones estructurales.",
          "Edificio parcialmente cerrado: Edificio donde el área total de aberturas en una pared con presión positiva externa excede en más de 10% la suma de las áreas de aberturas en el área restante del revestimiento, y dicha área supera 0.37 m² o el 1% del área de esa pared (Ao > 1.10·Aoi, con Aoi/Agi ≤ 0.20).",
          "Edificio o estructura flexible: Edificio o estructura esbelta con frecuencia natural fundamental menor a 1 Hz.",
          "Edificio o estructura rígido: Edificio u otra estructura cuya frecuencia fundamental sea mayor o igual a 1 Hz.",
          "Escarpe: Acantilado o pendiente fuerte que separa dos niveles de terreno, con respecto a los efectos topográficos de B.6.5.7.",
          "Factor de importancia, I: Factor que tiene en cuenta el grado de amenaza a la vida humana y daño a la propiedad.",
          "Fuerza de diseño, F: Fuerza estática equivalente usada para determinar las cargas de viento para edificios abiertos y otras estructuras.",
          "Material para vidriado: Elementos de vidrio (recocido, con recubrimiento orgánico, templado, laminado, armado) o láminas de plástico usados en vidriados.",
          "Presión de diseño, p: Presión estática equivalente usada para determinar cargas de viento para edificios.",
          "Revestimiento del edificio: Componentes que cierren el edificio como cubiertas, claraboyas, paredes exteriores, puertas y ventanas.",
          "Revestimiento resistente a impactos: Cerramiento diseñado para proteger los materiales para vidriados.",
          "Sistema principal resistente a cargas de viento (SPRFV): Conjunto de elementos estructurales que brinda apoyo y estabilidad a la estructura en su totalidad. Generalmente recibe cargas de viento provenientes de más de una superficie.",
          "Velocidad de viento, V: Velocidad de una ráfaga de 3 segundos medida 10 m por encima del suelo en la Exposición C (véase B.6.5.6.3).",
          "Vidriera: Vidrio o láminas traslucidas de plástico usado en ventanas, puertas, claraboyas o cerramientos.",
        ],
      },
    ],
    related: [
      { code: "B.6.1", title: "Alcance" },
      { code: "B.6.3", title: "Nomenclatura" },
      { code: "B.6.5.6", title: "Exposición" },
      { code: "B.6.5.9", title: "Clasificaciones de los cerramientos" },
    ],
  },

  {
    code: "B.6.3",
    title: "Nomenclatura",
    summary:
      "Define los símbolos y variables utilizados en el Capítulo B.6 para el cálculo de fuerzas de viento.",
    body: [
      {
        type: "table",
        caption: "Tabla B.6.3-1 — Nomenclatura del Capítulo B.6",
        headers: ["Símbolo", "Descripción"],
        rows: [
          ["A", "Área efectiva para viento, en m²"],
          [
            "Af",
            "Área de un edificio u otra estructura abierta (normal a la dirección de viento o proyectada), en m²",
          ],
          ["Ag", "Área bruta a la cual hace referencia Ao, en m²"],
          [
            "Agi",
            "Suma de las áreas brutas de toda la superficie del envolvente (paredes y cubierta) sin incluir Ag, en m²",
          ],
          ["Ao", "Área total de aberturas en una pared que recibe presión positiva externa, en m²"],
          [
            "Aoi",
            "Suma del área de aberturas de toda la superficie del envolvente (paredes y cubierta) sin incluir Ao, en m²",
          ],
          [
            "Aog",
            "Área total de aberturas en toda la superficie del cerramiento (paredes y cubierta) del edificio, en m²",
          ],
          ["a", "Ancho de la zona para coeficiente de presión, en m"],
          [
            "B",
            "Dimensión horizontal del edificio medido en dirección normal a la dirección del viento, en m",
          ],
          ["b", "Factor de velocidad media de viento horaria en la ec. B.6.5-12 (tabla B.6.5-2)"],
          ["b̂", "Factor de velocidad de ráfaga de 3 segundos (tabla B.6.5-2)"],
          ["Cf", "Coeficiente de fuerza para estructuras diferentes a edificios"],
          ["CN", "Coeficiente de presión neta para edificios abiertos"],
          ["Cp", "Coeficiente de presión externa para edificios"],
          ["c", "Factor de intensidad de turbulencia en la ec. B.6.5-3 (tabla B.6.5-2)"],
          ["D", "Diámetro de estructura o miembro circular, en m"],
          ["D′", "Profundidad de elementos sobresalientes como nervaduras y cornisas, en m"],
          ["F", "Fuerza de viento de diseño para estructuras diferentes a edificios, en N"],
          ["G", "Factor de efecto ráfaga"],
          [
            "Gf",
            "Factor de efecto ráfaga para el SPRFV de edificios flexibles y otras estructuras",
          ],
          ["GCpn", "Coeficiente de presión combinada para un parapeto"],
          [
            "GCp",
            "Producto del coeficiente de presión externa y el factor de efecto ráfaga para edificios",
          ],
          [
            "GCpf",
            "Producto del coeficiente equivalente de presión externa y el factor de efecto ráfaga para el SPRFV de edificios bajos",
          ],
          [
            "GCpi",
            "Producto del coeficiente de presión interna y el factor de efecto ráfaga para edificios",
          ],
          ["gQ", "Factor pico para respuesta del entorno (ecs. B.6.5-2 y B.6.5-6)"],
          ["gR", "Factor pico para respuesta de resonancia (ec. B.6.5-6)"],
          ["gν", "Factor pico para respuesta de viento (ecs. B.6.5-2 y B.6.5-6)"],
          ["H", "Altura de la colina o escarpe (fig. B.6.5-1), en m"],
          [
            "h",
            "Altura media del edificio o de cualquier otra estructura (altura a la cornisa si θ ≤ 10°), en m",
          ],
          [
            "he",
            "Altura de la cornisa o altura promedio de cornisa si varía a lo largo de la estructura",
          ],
          ["I", "Factor de importancia"],
          ["Iz̄", "Intensidad de turbulencia (ec. B.6.5-6)"],
          ["K1, K2, K3", "Factores de multiplicación (fig. B.6.5-1) para calcular Kzt"],
          ["Kd", "Factor de direccionalidad de viento (tabla B.6.5-4)"],
          ["Kh", "Coeficiente de exposición de presión por velocidad evaluado a z = h"],
          ["Kz", "Coeficiente de exposición de presión por velocidad evaluado a la altura z"],
          ["Kzt", "Factor topográfico (sección B.6.5.7)"],
          ["L", "Dimensión horizontal del edificio en dirección paralela al viento, en m"],
          [
            "Lh",
            "Distancia viento arriba de la cresta donde la diferencia de elevación es la mitad de H (fig. B.6.5-1), en m",
          ],
          ["Lz", "Longitud integral a escala de la turbulencia, en m"],
          [
            "Lr",
            "Dimensión horizontal de esquina de retorno para muro libre o valla maciza (fig. B.6.5-17), en m",
          ],
          ["Λ", "Factor de escala de longitud integral (tabla B.6.5-2), en m"],
          ["N1", "Frecuencia reducida (ec. B.6.5-10)"],
          ["n1", "Frecuencia natural del edificio, en Hz"],
          ["p", "Presión de diseño para cargas de viento en edificios"],
          ["pL", "Presión de viento en la cara a sotavento (fig. B.6.5-6), en N/m²"],
          ["pnet", "Presión neta de viento de diseño (ec. B.6.4-2), en N/m²"],
          [
            "pnet10",
            "Presión neta de viento de diseño para categoría de exposición B a h = 10.0 m",
          ],
          ["ps", "Presión neta de viento de diseño (ec. B.6.4-1), en N/m²"],
          [
            "ps10",
            "Presión de viento de diseño simplificada para categoría de exposición B a h = 10.0 m (fig. B.6.4-2)",
          ],
          ["pw", "Presión de viento en la cara a barlovento (fig. B.6.5-6), en N/m²"],
          ["Q", "Factor de respuesta del entorno (ec. B.6.5-4)"],
          ["q", "Presión por velocidad, en N/m²"],
          ["qh", "Presión por velocidad evaluada a z = h, en N/m²"],
          ["qi", "Presión por velocidad para determinación de la presión interna, en N/m²"],
          ["qp", "Presión por velocidad en la parte superior del parapeto, en N/m²"],
          ["qz", "Presión por velocidad evaluada a una altura z por encima del terreno, en N/m²"],
          ["R", "Factor de respuesta de resonancia (ec. B.6.5-8)"],
          ["Rn", "Valor de la ec. B.6.5-9"],
          ["Ri", "Factor de reducción (ec. B.6.5-14)"],
          ["s", "Dimensión vertical de un muro libre o valla maciza (fig. B.6.5-17), en m"],
          [
            "V",
            "Velocidad básica de viento (fig. B.6.4-1), en m/s. Velocidad de ráfaga de 3 segundos a 10 m de altura en exposición C",
          ],
          ["Vi", "Volumen interno sin particiones, en m³"],
          ["Vz", "Velocidad de viento promedia por hora a una altura z, en m/s"],
          ["W", "Ancho del edificio o ancho de la luz (según figura), en m"],
          ["X", "Distancia hasta el centro de presión desde el borde a barlovento, en m"],
          [
            "x",
            "Distancia desde la cima en dirección de barlovento o sotavento (fig. B.6.5-1), en m",
          ],
          ["z", "Altura por encima del terreno, en m"],
          ["z̄", "Altura equivalente de la estructura, en m"],
          ["zg", "Altura nominal de la capa atmosférica límite (tabla B.6.5-2)"],
          ["zmin", "Altura mínima de exposición (tabla B.6.5-2)"],
          ["α", "Exponente para la ley potencial de la velocidad de ráfaga de 3 s (tabla B.6.5-2)"],
          ["α̂", "Inversa de α (tabla B.6.5-2)"],
          ["ᾱ", "Exponente para la ley potencial de la velocidad media horaria (tabla B.6.5-2)"],
          ["β", "Coeficiente de amortiguamiento, porcentaje crítico"],
          [
            "ε",
            "Coeficiente de área sólida vs área bruta para muros libres, vallas y torres de celosía",
          ],
          ["λ", "Factor de ajuste por altura y exposición (figs. B.6.4-2 y B.6.4-3)"],
          [
            "ε̄",
            "Exponente para la ley potencial de la escala de longitud integral (ec. B.6.5-5, tabla B.6.5-2)",
          ],
          ["η", "Valor usado en la ec. B.6.5-11a"],
          ["θ", "Ángulo de inclinación de la cubierta, en grados"],
          ["ν", "Cociente alto/ancho para vallas macizas"],
        ],
      },
    ],
    related: [
      { code: "B.6.2", title: "Definiciones" },
      { code: "B.6.4", title: "Procedimiento simplificado" },
      { code: "B.6.5", title: "Método 2 — Procedimiento analítico" },
    ],
  },

  {
    code: "B.6.4",
    title: "Procedimiento simplificado (Método 1)",
    summary:
      "Método simplificado para calcular cargas de viento en edificios de diafragma simple, bajos, cerrados, de forma regular, no flexibles y con sección transversal aproximadamente simétrica y cubierta con θ ≤ 45°. Las presiones ps y pnet se determinan con las ecuaciones B.6.4-1 y B.6.4-2.",
    body: [
      {
        type: "subsection",
        code: "B.6.4.1",
        title: "Alcance",
        items: [
          {
            type: "paragraph",
            text: "Un edificio cuyas cargas de viento de diseño se determinen de acuerdo con esta sección deberá cumplir las condiciones de B.6.4.1.1 o B.6.4.1.2. Si solamente cumple las condiciones de B.6.4.1.2 para el diseño de los elementos de revestimiento y componentes, el SPRFV deberá diseñarse usando el Método 2 (Procedimiento Analítico) o el Método 3 (Procedimiento de Túnel de Viento).",
          },
          {
            type: "subsection",
            code: "B.6.4.1.1",
            title: "Sistema Principal de Resistencia de Fuerzas de Viento (SPRFV)",
            items: [
              {
                type: "paragraph",
                text: "Para el diseño del SPRFV el edificio debe cumplir todas las siguientes condiciones:",
              },
              {
                type: "list",
                items: [
                  "(a) El edificio sea de diafragma simple según B.6.2.",
                  "(b) El edificio sea bajo de acuerdo con B.6.2.",
                  "(c) El edificio sea cerrado según B.6.2 y cumpla las provisiones de zonas propensas a huracanes (B.6.5.9.3).",
                  "(d) El edificio sea de forma regular según B.6.2.",
                  "(e) El edificio no sea clasificado como flexible según B.6.2.",
                  "(f) Las características de respuesta del edificio sean tales que no esté sujeto a cargas por viento a través de él, generación de vórtices, inestabilidad por golpeteo o aleteo, ni ubicado en sitio con efectos de canalización o sacudimiento por la estela de obstrucciones en barlovento.",
                  "(g) El edificio tenga sección transversal aproximadamente simétrica en cada dirección y cubierta plana o a dos o cuatro aguas con θ ≤ 45°.",
                  "(h) El edificio esté eximido de los casos de carga torsional de la Nota 5 de la fig. B.6.5-7, o estos casos no controlen el diseño de ningún elemento del SPRFV.",
                ],
              },
            ],
          },
          {
            type: "subsection",
            code: "B.6.4.1.2",
            title: "Componentes y revestimientos",
            items: [
              {
                type: "paragraph",
                text: "Para el diseño de los componentes y elementos de revestimiento, el edificio debe cumplir todas las siguientes condiciones:",
              },
              {
                type: "list",
                items: [
                  "(a) La altura promedio h es igual o menor a 18.0 m.",
                  "(b) El edificio es cerrado según B.6.2 y cumple las provisiones de zonas propensas a huracanes (B.6.5.9.3).",
                  "(c) El edificio es de forma regular según B.6.2.",
                  "(d) El edificio tiene cubierta plana, cubierta a dos aguas con θ ≤ 45° o cubierta a cuatro aguas con θ ≤ 27°.",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.4.2",
        title: "Procedimiento de diseño",
        items: [
          {
            type: "list",
            items: [
              "(a) La velocidad básica de viento V se determina de acuerdo con B.6.5.4. Se supondrá que el viento viene de cualquier dirección horizontal.",
              "(b) El factor de importancia I se determina de acuerdo con B.6.5.5.",
              "(c) La categoría de exposición se determina de acuerdo con B.6.5.6.",
              "(d) Se determina un coeficiente de ajuste por altura y exposición λ de acuerdo con la fig. B.6.4-2.",
            ],
          },
          {
            type: "subsection",
            code: "B.6.4.2.1",
            title: "SPRFV — Presión de viento de diseño simplificado",
            items: [
              {
                type: "paragraph",
                text: "Las presiones de viento de diseño simplificado, ps, representan la presión neta (suma de presiones internas y externas) que se aplica a las proyecciones horizontales y verticales de las superficies del edificio. ps se determinará con la ecuación:",
              },
              {
                type: "note",
                text: "Ecuación B.6.4-1:   ps = λ · Kzt · I · PS10\n\nDonde:\n• λ    = factor de ajuste por altura y exposición (fig. B.6.4-2)\n• Kzt  = factor topográfico evaluado a la altura promedio de cubierta h (ec. B.6.5-1)\n• I    = factor de importancia (B.6.5.5)\n• PS10 = presión de viento de diseño simplificada para categoría de exposición B con h = 10 m (fig. B.6.4-2)",
              },
              {
                type: "note",
                text: "Presiones mínimas (B.6.4.2.1.1): Los efectos de carga no serán menores que el caso mínimo de B.6.1.3.1, suponiendo ps = +0.40 kN/m² para las zonas A, B, C y D y 0 kN/m² para las zonas E, F, G y H.",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.6.4.2.2",
            title: "Componentes y revestimientos — Presión de viento de diseño neta",
            items: [
              {
                type: "paragraph",
                text: "Las presiones de viento de diseño netas, pnet, representan la presión neta (suma de presiones internas y externas) aplicada en dirección normal a cada superficie del edificio. pnet se determinará con la ecuación:",
              },
              {
                type: "note",
                text: "Ecuación B.6.4-2:   pnet = λ · Kzt · I · Pnet10\n\nDonde:\n• λ       = factor de ajuste por altura y exposición (fig. B.6.4-2)\n• Kzt     = factor topográfico evaluado a la altura promedio de cubierta h\n• I       = factor de importancia (B.6.2)\n• Pnet10  = presión neta de viento de diseño para categoría de exposición B a h = 10.0 m",
              },
              {
                type: "note",
                text: "Presiones mínimas (B.6.4.2.2.1): Las presiones positivas y negativas Pnet no serán menores a +0.4 kN/m² y -0.4 kN/m², respectivamente.",
              },
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.4.3",
        title: "Revestimiento permeable",
        items: [
          {
            type: "paragraph",
            text: "Las cargas de viento de diseño de la fig. B.6.4-3 se usarán para todos los revestimientos permeables a menos que se demuestre a través de datos experimentales aprobados u otra literatura reconocida que las cargas son menores para el tipo de revestimiento considerado.",
          },
        ],
      },
    ],
    related: [
      { code: "B.6.1.1", title: "Procedimientos permitidos" },
      { code: "B.6.5", title: "Método 2 — Procedimiento analítico" },
      { code: "B.6.5.4", title: "Velocidad de viento básica" },
      { code: "B.6.5.5", title: "Factor de importancia" },
    ],
  },

  {
    code: "B.6.5",
    title: "Método 2 — Procedimiento analítico",
    summary:
      "Procedimiento analítico para calcular fuerzas de viento en edificios y estructuras de forma regular sin características de respuesta inusuales. Cubre velocidad básica, factor de importancia, exposición, topografía, efecto ráfaga, clasificación de cerramiento, presiones por velocidad y cargas de diseño.",
    body: [
      {
        type: "subsection",
        code: "B.6.5.1",
        title: "Alcance",
        items: [
          {
            type: "paragraph",
            text: "Un edificio cuyas cargas de viento de diseño sean determinadas de acuerdo con esta sección deberá cumplir las siguientes condiciones:",
          },
          {
            type: "list",
            items: [
              "(a) El edificio o estructura sea de forma regular según B.6.2.",
              "(b) El edificio o estructura no tiene características de respuesta que den lugar a cargas transversales de viento, generación de vórtices, inestabilidad debida a golpeteo o aleteo, ni merecer consideración especial los efectos de canalización o sacudimiento por la estela de obstrucciones a barlovento.",
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.2",
        title: "Limitaciones",
        items: [
          {
            type: "paragraph",
            text: "Las especificaciones de B.6.5 consideran el efecto del aumento de cargas producto de la resonancia entre ráfagas y vibraciones en la dirección del viento en edificios flexibles y otras estructuras. Los edificios que no cumplan B.6.5.1 o tengan forma irregular o características de respuesta inusuales deberán diseñarse usando literatura reconocida o el procedimiento de túnel de viento (B.6.6).",
          },
          {
            type: "note",
            text: "No se harán reducciones de presiones de velocidad producto del apantallamiento de otras estructuras aledañas o de las características del terreno (B.6.5.2.1). Para revestimientos permeables se usarán las especificaciones de B.6.5 salvo que se demuestre con ensayos o literatura reconocida que las cargas son menores (B.6.5.2.2).",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.3",
        title: "Procedimiento de diseño",
        items: [
          {
            type: "list",
            items: [
              "(a) La velocidad básica de viento V y el factor de dirección Kd se determinan de acuerdo con B.6.5.4.",
              "(b) El factor de importancia I se determina de acuerdo con B.6.5.5.",
              "(c) Se determina la categoría de exposición Kz y el coeficiente Kh para cada dirección de viento (B.6.5.6).",
              "(d) El factor topográfico Kzt se determina de acuerdo con B.6.5.7.",
              "(e) El factor de efecto de ráfaga G o Gf, según aplique, se determina de acuerdo con B.6.5.8.",
              "(f) La clasificación de cerramiento se determina de acuerdo con B.6.5.9.",
              "(g) El coeficiente de presión interna GCpi se determina de acuerdo con B.6.5.11.1.",
              "(h) El coeficiente de presión externa Cp, GCpf o los coeficientes de fuerza Cf se determinan de acuerdo con B.6.5.11.2 o B.6.5.11.3.",
              "(i) La presión por velocidad qz o qh se determina de acuerdo con B.6.5.10.",
              "(j) La carga de viento de diseño p o F se determina de acuerdo con las secciones B.6.5.12, B.6.5.13, B.6.5.14 y B.6.5.15.",
            ],
          },
        ],
      },
    ],
    related: [
      { code: "B.6.1.1", title: "Procedimientos permitidos" },
      { code: "B.6.4", title: "Procedimiento simplificado" },
      { code: "B.6.6", title: "Método 3 — Procedimiento de túnel de viento" },
      { code: "B.6.5.4", title: "Velocidad de viento básica" },
      { code: "B.6.5.8", title: "Factor de efecto ráfaga" },
      {
        code: "B.6.5.12",
        title: "Fuerzas de viento en edificios cerrados o parcialmente cerrados",
      },
    ],
  },

  {
    code: "B.6.5.4",
    title: "Velocidad de viento básica",
    summary:
      "La velocidad básica V se toma de la fig. B.6.4-1 y corresponde a una ráfaga de 3 segundos a 10 m de altura en exposición C. En regiones especiales o con datos climáticos regionales puede ajustarse. Los tornados no se consideran en el cálculo de V.",
    body: [
      {
        type: "paragraph",
        text: "La velocidad de viento básica, V, usada en la determinación de las cargas de viento de diseño se tomará de la Fig. B.6.4-1. Se supondrá que el viento proviene de cualquier dirección horizontal.",
      },
      {
        type: "subsection",
        code: "B.6.5.4.1",
        title: "Regiones especiales para viento",
        items: [
          {
            type: "paragraph",
            text: "La velocidad básica de viento se incrementará donde existan registros o la experiencia indique velocidades mayores que las expresadas en la fig. B.6.4-1. Terrenos montañosos, precipicios y las regiones especiales de la figura B.6.4-1 se deberán estudiar para determinar si existen condiciones de viento inusuales. La autoridad respectiva ajustará los valores de la fig. B.6.4-1 basándose en información meteorológica.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.4.2",
        title: "Estimación de la velocidad básica a partir de información climática regional",
        items: [
          {
            type: "paragraph",
            text: "Los datos climáticos regionales pueden usarse en lugar de los valores de la fig. B.6.4-1 solamente cuando la autoridad competente considere que: (B.6.5.4.2.1) se han utilizado procedimientos estadísticos aprobados para el análisis de valores extremos, y (B.6.5.4.2.2) se han tenido en cuenta la longitud de registros, el error de muestreo, el tiempo promedio, la altura del anemómetro, la calidad de los datos y la exposición del terreno.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.4.3",
        title: "Limitaciones",
        items: [
          {
            type: "paragraph",
            text: "Los tornados no se han considerado en los cálculos de la velocidad de viento básica.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.4.4",
        title: "Factor de dirección de viento",
        items: [
          {
            type: "paragraph",
            text: "El factor de dirección de viento, Kd, se determinará con la tabla B.6.5-4. Este factor solo aplica cuando se use conjuntamente con las combinaciones de carga especificadas en las secciones B.2.3 y B.2.4.",
          },
        ],
      },
    ],
    related: [
      { code: "B.6.5", title: "Método 2 — Procedimiento analítico" },
      { code: "B.6.5.5", title: "Factor de importancia" },
      { code: "B.6.5.6", title: "Exposición" },
      { code: "B.2.3", title: "Combinaciones de carga — método de esfuerzos de trabajo" },
      { code: "B.2.4", title: "Combinaciones de cargas mayoradas — método de resistencia" },
    ],
  },

  {
    code: "B.6.5.5",
    title: "Factor de importancia",
    summary:
      "El factor de importancia I para edificios y otras estructuras se determina de la tabla B.6.5-1, de acuerdo con los grupos de uso presentados en la sección A.2.5.",
    body: [
      {
        type: "paragraph",
        text: "El factor de importancia, I, para el edificio u otra estructura debe determinarse de la tabla B.6.5-1, de acuerdo con los grupos de uso presentados en la sección A.2.5.",
      },
    ],
    related: [
      { code: "B.6.5.4", title: "Velocidad de viento básica" },
      { code: "B.6.5.6", title: "Exposición" },
    ],
  },

  {
    code: "B.6.5.6",
    title: "Exposición",
    summary:
      "La categoría de exposición a barlovento se determina en función de la rugosidad del terreno para cada dirección de viento. Se definen tres categorías: B (zonas urbanas o boscosas), C (terreno abierto con pocas obstrucciones) y D (áreas planas y superficies acuáticas).",
    body: [
      {
        type: "paragraph",
        text: "Para cada dirección de viento considerada, la categoría de exposición a barlovento se determinará con base en la rugosidad del terreno, determinada por la topografía natural, la vegetación y las estructuras construidas.",
      },
      {
        type: "subsection",
        code: "B.6.5.6.1",
        title: "Direcciones de viento y sectores",
        items: [
          {
            type: "paragraph",
            text: "Para cada dirección de viento seleccionada, se debe determinar la exposición del edificio para los dos sectores a barlovento que se extienden a 45° a cada lado de la dirección de viento elegida. La exposición que produzca las mayores cargas de viento se usará para representar el viento de esa dirección.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.6.2",
        title: "Categorías de rugosidad de terreno",
        items: [
          {
            type: "list",
            items: [
              "Rugosidad B: Áreas urbanas y suburbanas, áreas boscosas u otros terrenos con numerosas obstrucciones del tamaño de una vivienda unifamiliar o mayores, con poca separación entre ellas.",
              "Rugosidad C: Terreno abierto con pocas obstrucciones y alturas inferiores a 9.0 m. Incluye campos abiertos, praderas y todas las superficies acuáticas en zonas propensas a huracanes.",
              "Rugosidad D: Áreas planas y no obstruidas, y superficies acuáticas por fuera de regiones propensas a huracanes. Incluye pantanos, salinas y superficies de hielo.",
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.6.3",
        title: "Categorías de exposición",
        items: [
          {
            type: "list",
            items: [
              "Exposición B: Aplica cuando la Rugosidad B prevalece por una distancia de al menos 800 m (o 20 veces la altura del edificio) en la dirección al viento. Para edificios con altura media ≤ 9.0 m, la distancia puede reducirse a 460 m.",
              "Exposición C: Aplica para todos los casos donde no apliquen las categorías B y D.",
              "Exposición D: Aplica cuando la Rugosidad D prevalece por una distancia mayor a 1500 m (o 20 veces la altura del edificio) en la dirección de barlovento. Se extiende hacia sotavento de Rugosidades B o C por 200 m (o 20 veces la altura del edificio).",
            ],
          },
          {
            type: "note",
            text: "Para una edificación en zona de transición entre categorías, se usará la que produzca mayores fuerzas de diseño. Se permite usar una categoría intermedia si se determina mediante un proceso analítico definido en literatura reconocida.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.6.6",
        title: "Coeficiente de exposición de presión por velocidad",
        items: [
          {
            type: "paragraph",
            text: "Con base en la categoría de exposición determinada en B.6.5.3, se define de la Tabla B.6.5-3 el coeficiente de exposición de presión por velocidad Kz o Kh. En zonas de transición entre categorías, se permitirán valores intermedios determinados por un método racional definido en literatura reconocida.",
          },
        ],
      },
    ],
    related: [
      { code: "B.6.5.4", title: "Velocidad de viento básica" },
      { code: "B.6.5.7", title: "Efectos topográficos" },
      { code: "B.6.5.10", title: "Presión por velocidad" },
    ],
  },

  {
    code: "B.6.5.7",
    title: "Efectos topográficos",
    summary:
      "Se deben incluir los efectos de aumento de velocidad del viento sobre colinas o escarpes aislados. El factor topográfico Kzt = (1 + K1·K2·K3)² se aplica cuando el sitio cumple las condiciones de ubicación, relieve y exposición especificadas.",
    body: [
      {
        type: "subsection",
        code: "B.6.5.7.1",
        title: "Aumento de velocidad sobre colinas o escarpes",
        items: [
          {
            type: "paragraph",
            text: "Se deben incluir en el diseño los efectos de aumento de velocidad del viento sobre colinas aisladas o escarpes que constituyan cambios abruptos en la topografía general. Las condiciones que debe cumplir el sitio son:",
          },
          {
            type: "list",
            items: [
              "(a) La colina o escarpe está aislada y sin obstrucciones en barlovento por otros accidentes topográficos de altura cercana a 100H o 3 km (la que sea menor), medida horizontalmente.",
              "(b) La colina o escarpe sobresale sobre el terreno viento arriba por un factor de 2 o más, dentro de un radio de 3 km.",
              "(c) La estructura está localizada en la mitad superior de la colina o cerca de la cresta del escarpe (véase fig. B.6.5-1).",
              "(d) H/Lh ≥ 0.2.",
              "(e) H es mayor o igual a 4.5 m para Exposición C y D, y 18 m para Exposición B.",
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.7.2",
        title: "Factor topográfico",
        items: [
          {
            type: "paragraph",
            text: "El efecto de aumento de velocidad de viento se incluirá en el cálculo de cargas de viento usando el factor Kzt:",
          },
          {
            type: "note",
            text: "Ecuación B.6.5-1:   Kzt = (1 + K1·K2·K3)²\n\nDonde K1, K2 y K3 se dan en la Fig. B.6.5-1.\n\nSi el sitio no cumple las condiciones de B.6.5.7.1, entonces Kzt = 1.0.",
          },
        ],
      },
    ],
    related: [
      { code: "B.6.5.6", title: "Exposición" },
      { code: "B.6.5.10", title: "Presión por velocidad" },
    ],
  },

  {
    code: "B.6.5.8",
    title: "Factor de efecto ráfaga",
    summary:
      "Para estructuras rígidas (n₁ ≥ 1 Hz), G = 0.85 o se calcula con la ec. B.6.5-2. Para estructuras flexibles (n₁ < 1 Hz), Gf se calcula con la ec. B.6.5-6, que incluye los factores de respuesta del entorno Q y de resonancia R. También se permite determinación por método racional.",
    body: [
      {
        type: "subsection",
        code: "B.6.5.8.1",
        title: "Estructuras rígidas",
        items: [
          {
            type: "paragraph",
            text: "Para estructuras rígidas (frecuencia fundamental ≥ 1 Hz), el factor de efecto ráfaga se tomará como 0.85 o se calculará con la siguiente fórmula:",
          },
          {
            type: "note",
            text: "Ecuación B.6.5-2:   G = 0.925 · (1 + 1.7·gQ·Iz̄·Q) / (1 + 1.7·gν·Iz̄)\n\nEcuación B.6.5-3:   Iz̄ = c·(10/z̄)^(1/6)\n\nDonde z̄ = altura equivalente = 0.6h (no menor a zmin). Los valores de c y zmin están en la tabla B.6.5-2. gQ y gν se toman como 3.4.\n\nEcuación B.6.5-4 (respuesta del entorno Q):\nQ = 1 / √(1 + 0.62·((B+h)/Lz)^0.63)\n\nEcuación B.6.5-5 (longitud integral a escala de turbulencia):\nLz = Λ·(z̄/10)^ε\n\nDonde Λ y ε son constantes definidas en la tabla B.6.5-2.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.8.2",
        title: "Estructuras flexibles o dinámicamente sensibles",
        items: [
          {
            type: "paragraph",
            text: "Para estructuras flexibles (frecuencia fundamental < 1 Hz), el factor efecto ráfaga se calculará con la siguiente expresión:",
          },
          {
            type: "note",
            text: "Ecuación B.6.5-6:   Gf = 0.925 · (1 + 1.7·Iz̄·√(gQ²·Q² + gR²·R²)) / (1 + 1.7·gν·Iz̄)\n\ngQ y gν = 3.4; gR se calcula con:\nEcuación B.6.5-7:   gR = √(2·ln(3600·n₁)) + 0.577/√(2·ln(3600·n₁))\n\nEcuación B.6.5-8 (factor de resonancia R):\nR = (1/β) · Rn · RB · Rh · RL · (0.53 + 0.47·RL)\n\nEcuación B.6.5-9:   Rn = 7.47·N₁ / (1 + 10.3·N₁)^(5/3)\n\nEcuación B.6.5-10:   N₁ = n₁·Lz̄/Vz̄\n\nLas funciones de reducción (ec. B.6.5-11a) para η > 0:\nRi = (1/η) - (1/2η²)·(1 - e^(-2η))\n\nDonde β = porcentaje de amortiguamiento crítico y Vz̄ = b·(z̄/10)^ᾱ·V (ec. B.6.5-12).",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.8.3",
        title: "Análisis racional",
        items: [
          {
            type: "paragraph",
            text: "En lugar de los procedimientos de B.6.5.8.1 y B.6.5.8.2, se permite la determinación del factor efecto ráfaga por medio de cualquier método racional definido en literatura reconocida.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.8.4",
        title: "Limitaciones",
        items: [
          {
            type: "paragraph",
            text: "Donde aparezcan en tablas coeficientes de presión y factores de efecto ráfaga combinados (GCp, GCpi y GCpf), no se calculará el factor efecto ráfaga por separado.",
          },
        ],
      },
    ],
    related: [
      { code: "B.6.5.7", title: "Efectos topográficos" },
      { code: "B.6.5.10", title: "Presión por velocidad" },
      {
        code: "B.6.5.12",
        title: "Fuerzas de viento en edificios cerrados o parcialmente cerrados",
      },
    ],
  },

  {
    code: "B.6.5.9",
    title: "Clasificaciones de los cerramientos",
    summary:
      "Todos los edificios se clasifican como cerrados, parcialmente cerrados o abiertos para efectos de los coeficientes de presión interna. En zonas propensas a huracanes los vidrios deben protegerse con cobertura resistente a impacto o ser vidrios resistentes a impacto.",
    body: [
      {
        type: "subsection",
        code: "B.6.5.9.1",
        title: "General",
        items: [
          {
            type: "paragraph",
            text: "Para efectos de la determinación de coeficientes de presión interna, todos los edificios se deben clasificar como cerrados, parcialmente cerrados o abiertos de acuerdo con la sección B.6.2.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.9.2",
        title: "Aberturas",
        items: [
          {
            type: "paragraph",
            text: "Se deben cuantificar las aberturas en el cerramiento del edificio para determinar la clasificación de cerramiento según B.6.5.9.1.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.9.3",
        title: "Zonas propensas a huracanes",
        items: [
          {
            type: "paragraph",
            text: "Los vidrios de edificios en zonas propensas a huracanes deberán protegerse con una cobertura resistente a impacto o ser vidrios resistentes a impactos de acuerdo con las normas ASTM E1886 y ASTM E1996 u otros métodos de ensayo aprobados.",
          },
          {
            type: "note",
            text: "Excepciones: (a) Podrán no estar protegidos los vidrios en edificios de categoría II, III o IV localizados a más de 18.0 m sobre el suelo y a más de 9.0 m sobre cubiertas con superficies de agregado a 450 m al interior del edificio. (b) Se permiten vidrios sin protección en edificios de categoría I.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.9.4",
        title: "Clasificaciones múltiples",
        items: [
          {
            type: "paragraph",
            text: "Si un edificio cumple con los parámetros de edificio 'abierto' y 'parcialmente cerrado', se clasificará como 'abierto'. Un edificio que no cumpla con las definiciones de 'abierto' o 'parcialmente cerrado' se clasificará como 'cerrado'.",
          },
        ],
      },
    ],
    related: [
      { code: "B.6.2", title: "Definiciones" },
      { code: "B.6.5.11", title: "Coeficientes de presión y fuerza" },
    ],
  },

  {
    code: "B.6.5.10",
    title: "Presión por velocidad",
    summary:
      "La presión por velocidad qz se calcula como qz = 0.613·Kz·Kzt·Kd·V²·I (en N/m², con V en m/s). El coeficiente numérico 0.613 se usará siempre que no haya registros climáticos suficientes para justificar otro valor.",
    body: [
      {
        type: "paragraph",
        text: "La presión por velocidad, qz, evaluada a la altura z se calculará con la siguiente expresión:",
      },
      {
        type: "note",
        text: "Ecuación B.6.5-13:   qz = 0.613·Kz·Kzt·Kd·V²·I   (N/m²; V en m/s)\n\nDonde:\n• Kd  = factor de dirección de viento (B.6.5.4.4)\n• Kz  = coeficiente de exposición de presión por velocidad (B.6.5.6.6)\n• Kzt = factor topográfico (B.6.5.7.2)\n• qh  = presión por velocidad calculada con esta ecuación a la altura media de cubierta h\n\nEl coeficiente numérico 0.613 se usará siempre que no haya registros climáticos suficientes para justificar otro valor.",
      },
    ],
    related: [
      { code: "B.6.5.6", title: "Exposición" },
      { code: "B.6.5.7", title: "Efectos topográficos" },
      { code: "B.6.5.11", title: "Coeficientes de presión y fuerza" },
      {
        code: "B.6.5.12",
        title: "Fuerzas de viento en edificios cerrados o parcialmente cerrados",
      },
    ],
  },

  {
    code: "B.6.5.11",
    title: "Coeficientes de presión y fuerza",
    summary:
      "Define los coeficientes de presión interna GCpi, los coeficientes de presión externa Cp o GCpf, y los coeficientes de fuerza Cf para el cálculo de cargas de viento en edificios cerrados, parcialmente cerrados y abiertos, así como en parapetos y cornisas.",
    body: [
      {
        type: "subsection",
        code: "B.6.5.11.1",
        title: "Coeficiente de presión interna",
        items: [
          {
            type: "paragraph",
            text: "Los coeficientes de presión interna, GCpi, se determinarán de la Figura B.6.5-2 basados en la clasificación de cerramientos determinada en B.6.5.9.",
          },
          {
            type: "note",
            text: "Factor de reducción Ri (B.6.5.11.1.1): Para un edificio parcialmente cerrado que contenga un solo espacio sin particiones, GCpi se multiplicará por Ri:\nRi = 0.5 · (1 + 1/√(1 + Vi/(11000·Aog))) ≤ 1.0\n\nDonde Aog = área total de aberturas en el cerramiento (m²) y Vi = volumen interno sin particiones (m³).",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.11.2",
        title: "Coeficientes de presión externa",
        items: [
          {
            type: "paragraph",
            text: "Los coeficientes de presión externa Cp para el SPRFV se dan en las figs. B.6.5-3, B.6.5-4 y B.6.5-5. Las combinaciones GCpf para edificios bajos se dan en la fig. B.6.5-7. Los coeficientes GCp para componentes y revestimientos se dan en las figs. B.6.5-8A a B.6.5-14. Los coeficientes de presión y factores de efecto ráfaga de la fig. B.6.5-7 no se deberán tomar por separado.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.11.3",
        title: "Coeficientes de fuerza",
        items: [
          {
            type: "paragraph",
            text: "En las figs. B.6.5-17 a B.6.5-19 se dan los coeficientes de fuerza, Cf.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.11.4",
        title: "Cornisas de cubiertas",
        items: [
          {
            type: "paragraph",
            text: "Para el SPRFV, los aleros a barlovento se diseñarán con una presión positiva en la cara inferior producto del coeficiente Cp = 0.8 y las presiones determinadas usando las figs. B.6.5-3 y B.6.5-5. Para revestimiento y componentes, los aleros se diseñarán con los coeficientes de las figs. B.6.5-8B, C y D.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.11.5",
        title: "Parapetos",
        items: [
          {
            type: "paragraph",
            text: "Los coeficientes de presión para el efecto de parapetos en el SPRFV se dan en B.6.5.12.2.4. Los coeficientes de presión para el diseño de elementos de revestimiento y componentes de parapetos se toman de las tablas de coeficientes de presión de cubiertas y paredes según B.6.5.12.4.4.",
          },
        ],
      },
    ],
    related: [
      { code: "B.6.5.9", title: "Clasificaciones de los cerramientos" },
      { code: "B.6.5.10", title: "Presión por velocidad" },
      {
        code: "B.6.5.12",
        title: "Fuerzas de viento en edificios cerrados o parcialmente cerrados",
      },
    ],
  },

  {
    code: "B.6.5.12",
    title: "Fuerzas de viento de diseño en edificios cerrados o parcialmente cerrados",
    summary:
      "Establece las ecuaciones de presión de diseño para el SPRFV y para elementos de revestimiento y componentes en edificios cerrados o parcialmente cerrados, incluyendo edificios rígidos, bajos, flexibles y parapetos.",
    body: [
      {
        type: "subsection",
        code: "B.6.5.12.1",
        title: "General",
        items: [
          {
            type: "list",
            items: [
              "Convención de signos (B.6.5.12.1.1): Las presiones positivas actúan hacia la superficie en estudio y las negativas actúan hacia afuera.",
              "Condición de carga crítica (B.6.5.12.1.2): Los valores de presiones internas y externas se combinarán en forma algebraica para determinar el caso más crítico.",
              "Áreas aferentes mayores a 65 m² (B.6.5.12.1.3): Los elementos de revestimiento y componentes con área aferente mayor a 65 m² se podrán diseñar usando las especificaciones del SPRFV.",
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.12.2",
        title: "Sistemas Principales de Resistencia de Fuerzas de Viento",
        items: [
          {
            type: "note",
            text: "Ecuación B.6.5-15 — Edificios rígidos de cualquier altura:\np = q·G·Cp − qi·(GCpi)   (N/m²)\n\nDonde:\n• q = qz para paredes a barlovento (evaluada a altura z)\n• q = qh para paredes a sotavento, paredes de costado y cubiertas (evaluada a altura h)\n• qi = qh para edificios cerrados y presiones internas negativas en parcialmente cerrados\n• qi = qz para presiones internas positivas en edificios parcialmente cerrados (z = nivel de la abertura más elevada)\n• G = factor de efecto ráfaga (B.6.5.8); Cp = figs. B.6.5-3 o B.6.5-5; GCpi = fig. B.6.5-2",
          },
          {
            type: "note",
            text: "Ecuación B.6.5-16 — Edificios bajos:\np = qh·[(GCpf) − (GCpi)]   (N/m²)\n\nDonde:\n• qh = presión por velocidad a la altura media de cubierta h\n• GCpf = coeficientes de la fig. B.6.5-7; GCpi = coeficientes de la fig. B.6.5-2",
          },
          {
            type: "note",
            text: "Ecuación B.6.5-17 — Edificios flexibles:\np = q·Gf·Cp − qi·(GCpi)   (N/m²)\n\nDonde Gf = factor de efecto ráfaga para estructuras flexibles (B.6.5.8.2).",
          },
          {
            type: "note",
            text: "Ecuación B.6.5-18 — Parapetos:\npp = qp·GCpn   (N/m)\n\nDonde:\n• qp = presión por velocidad en la parte más alta del parapeto\n• GCpn = +1.5 para parapeto a barlovento; −1.0 para parapeto a sotavento",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.12.3",
        title: "Casos de carga de viento de diseño",
        items: [
          {
            type: "paragraph",
            text: "El SPRFV de edificios cuyas cargas se hayan determinado según B.6.5.12.2.1 y B.6.5.12.2.3 se deberán diseñar considerando los casos de carga de la fig. B.6.5-6. La excentricidad e para estructuras rígidas se mide desde el centro geométrico de la cara del edificio. Para estructuras flexibles, e se determina con la ecuación B.6.5-19.",
          },
          {
            type: "note",
            text: "Excepción: Los edificios de un piso con h < 9.0 m, edificios de dos pisos o menos con pórticos de construcción liviana, y edificios de dos pisos o menos con diafragmas flexibles, se pueden diseñar solamente con los casos de carga 1 y 3 de la fig. B.6.5-6.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.5.12.4",
        title: "Elementos de revestimiento y componentes",
        items: [
          {
            type: "note",
            text: "Ecuación B.6.5-20 — Edificios bajos y edificios con h ≤ 18.0 m:\np = qh·[(GCp) − (GCpi)]   (N/m²)\n\nEcuación B.6.5-21 — Edificios con h > 18.0 m:\np = (qp·GCp) − (qi·GCpi)   (N/m²)\n\nEcuación B.6.5-22 — Parapetos:\np = qp·[(GCp) − (GCpi)]",
          },
          {
            type: "note",
            text: "Alternativa B.6.5.12.4.3: Para edificios con 18.0 m < h < 27.0 m, con relación altura/ancho ≤ 1, puede usarse la ec. B.6.5-20 con los coeficientes de las figs. B.6.5-8 a B.6.5-14 como alternativa a B.6.5.12.4.2.",
          },
        ],
      },
    ],
    related: [
      { code: "B.6.5.10", title: "Presión por velocidad" },
      { code: "B.6.5.11", title: "Coeficientes de presión y fuerza" },
      { code: "B.6.5.13", title: "Cargas de viento en edificios abiertos" },
    ],
  },

  {
    code: "B.6.5.13",
    title:
      "Cargas de viento de diseño en edificios abiertos con cubiertas a una, dos aguas y en artesa",
    summary:
      "La presión de diseño neta para el SPRFV y para revestimiento y componentes en edificios abiertos con cubiertas libres se determina como p = qh·G·CN, usando los coeficientes de presión neta CN de las figs. B.6.5-15 y B.6.5-16.",
    body: [
      {
        type: "paragraph",
        text: "Las presiones positivas actúan hacia la superficie en estudio y las negativas actúan hacia afuera. Los coeficientes de presión neta CN incluyen los aportes de las superficies superiores e inferiores. Se deben investigar todos los casos de carga para cada ángulo de cubierta.",
      },
      {
        type: "note",
        text: "Ecuación B.6.5-23 — SPRFV:\np = qh·G·CN\n\nEcuación B.6.5-24 — Componentes y revestimiento:\np = qh·G·CN\n\nDonde:\n• qh = presión por velocidad a la altura promedio de cubierta h (usando la exposición que resulte en las mayores cargas)\n• G  = factor de efecto ráfaga (B.6.5.8)\n• CN = coeficiente de presión neta\n  - SPRFV: figs. B.6.5-15A a B.6.5-15D\n  - Componentes y revestimiento: figs. B.6.5-16A a B.6.5-16C\n\nNota: Para cubiertas libres con θ ≤ 5° que contengan paneles de fascia, estos se considerarán como parapeto invertido. El aporte al SPRFV se determinará usando B.6.5.12.2.4 con qp = qh.",
      },
    ],
    related: [
      {
        code: "B.6.5.12",
        title: "Fuerzas de viento en edificios cerrados o parcialmente cerrados",
      },
      { code: "B.6.5.14", title: "Cargas de viento en muros libres y vallas macizas" },
    ],
  },

  {
    code: "B.6.5.14",
    title: "Cargas de viento de diseño en muros libres y vallas macizas",
    summary:
      "La fuerza de viento de diseño para muros libres y vallas macizas se determina como F = qh·G·Cf·As (en N), usando el coeficiente de fuerza neta Cf de la fig. B.6.5-17.",
    body: [
      {
        type: "note",
        text: "Ecuación B.6.5-25:   F = qh·G·Cf·As   (N)\n\nDonde:\n• qh = presión por velocidad a la altura h (fig. B.6.5-17) usando la exposición de B.6.5.6.4.1\n• G  = factor de efecto ráfaga (B.6.5.8)\n• Cf = coeficiente de fuerza neta (fig. B.6.5-17)\n• As = área bruta del muro libre o valla sólida, en m²",
      },
    ],
    related: [
      { code: "B.6.5.13", title: "Cargas de viento en edificios abiertos" },
      { code: "B.6.5.15", title: "Cargas de viento en otras estructuras" },
    ],
  },

  {
    code: "B.6.5.15",
    title: "Cargas de viento de diseño en otras estructuras",
    summary:
      "La fuerza de viento de diseño para otras estructuras (diferentes a edificios y muros libres) se determina como F = qz·G·Cf·Af (en N). Para estructuras y equipos sobre cubiertas en edificios con h ≤ 18.0 m, se aplica un factor de amplificación de 1.9.",
    body: [
      {
        type: "note",
        text: "Ecuación B.6.5-26:   F = qz·G·Cf·Af   (N)\n\nDonde:\n• qz = presión por velocidad a la altura z del centroide del área Af (exposición de B.6.5.6.3)\n• G  = factor de efecto ráfaga (B.6.5.8)\n• Cf = coeficientes de fuerza (figs. B.6.5-18 a B.6.5-19)\n• Af = área proyectada normal al viento (excepto donde Cf se haya especificado para la superficie real), en m²",
      },
      {
        type: "paragraph",
        text: "Para estructuras y equipos sobre cubiertas en edificios con h ≤ 18.0 m: la fuerza determinada con la ec. B.6.5-26 se multiplicará por un factor de 1.9 cuando Af < 0.1·B·h. Este factor se puede reducir linealmente desde 1.9 hasta 1.0 a medida que Af aumenta de 0.1·B·h a B·h.",
      },
    ],
    related: [
      { code: "B.6.5.14", title: "Cargas de viento en muros libres y vallas macizas" },
      {
        code: "B.6.5.12",
        title: "Fuerzas de viento en edificios cerrados o parcialmente cerrados",
      },
    ],
  },

  {
    code: "B.6.6",
    title: "Método 3 — Procedimiento de túnel de viento",
    summary:
      "Los ensayos de túnel de viento deben usarse donde lo requiera B.6.5.2, y se permiten en lugar de los Métodos 1 y 2 para cualquier edificio. Los ensayos deben modelar la capa límite atmosférica, la turbulencia, la geometría del entorno, y minimizar los efectos de bloqueo y número de Reynolds.",
    body: [
      {
        type: "subsection",
        code: "B.6.6.1",
        title: "Alcance",
        items: [
          {
            type: "paragraph",
            text: "Los ensayos de túnel de viento deben ser usados donde sea requerido de acuerdo con la sección B.6.5.2. Estos ensayos deben permitirse en lugar de los Métodos 1 y 2 para cualquier edificio o estructura.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.6.2",
        title: "Condiciones de ensayos",
        items: [
          {
            type: "paragraph",
            text: "Los ensayos de túnel de viento para determinar las variaciones y el promedio de las fuerzas y presiones deben reunir las siguientes condiciones:",
          },
          {
            type: "list",
            items: [
              "(B.6.6.2.1) La capa de borde para la atmósfera natural se ha modelado teniendo en cuenta la variación de la velocidad del viento con la altura.",
              "(B.6.6.2.2) Las escalas relevantes de macro y micro-longitud de la componente longitudinal de la turbulencia atmosférica se modelan aproximadamente a la misma escala que el edificio o la estructura.",
              "(B.6.6.2.3) El edificio, las estructuras y topografía de los alrededores son geométricamente similares a sus contrapartes en escala natural. Para edificios bajos que reúnan las condiciones de B.6.5.1, los ensayos se permiten para los edificios escalados en una sola categoría de exposición.",
              "(B.6.6.2.4) El área proyectada del edificio modelado y sus alrededores es menor al 8% del área de la sección transversal de ensayo, a menos que se haga una corrección por bloqueo.",
              "(B.6.6.2.5) El gradiente de presión longitudinal en la sección de ensayo del túnel de viento debe ser considerado.",
              "(B.6.6.2.6) Los efectos del número de Reynolds sobre las presiones y fuerzas se minimizan.",
              "(B.6.6.2.7) Las características de respuesta de la instrumentación del túnel de viento son consistentes con las mediciones requeridas.",
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.6.3",
        title: "Respuesta dinámica",
        items: [
          {
            type: "paragraph",
            text: "Los ensayos para determinar la respuesta dinámica del edificio o de otra estructura deben estar de acuerdo con la sección B.6.6.2. El modelo estructural y el análisis respectivo deben tener en cuenta la distribución de masa, la rigidez y el amortiguamiento.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.6.6.4",
        title: "Limitaciones",
        items: [
          {
            type: "paragraph",
            text: "La variación de velocidades básicas de viento con la dirección no se debe permitir a menos que el análisis para velocidades de viento esté de acuerdo a los requisitos de la sección B.6.5.4.2.",
          },
        ],
      },
    ],
    related: [
      { code: "B.6.1.1", title: "Procedimientos permitidos" },
      { code: "B.6.4", title: "Procedimiento simplificado" },
      { code: "B.6.5", title: "Método 2 — Procedimiento analítico" },
      { code: "B.6.5.2", title: "Limitaciones del procedimiento analítico" },
    ],
  },
]
