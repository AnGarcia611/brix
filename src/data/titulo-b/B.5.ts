import type { Article } from "../types"

export const B5: Article[] = [
  {
    code: "B.5.1",
    title: "Empuje en muros de contención de sótanos",
    summary:
      "Los muros de contención de sótanos deben diseñarse para el empuje lateral del suelo adyacente, las cargas vivas y muertas en la superficie, y la presión hidrostática cuando la estructura esté bajo el nivel freático.",
    body: [
      {
        type: "subsection",
        code: "B.5.1.1",
        title: "Empuje lateral y presión hidrostática",
        items: [
          {
            type: "paragraph",
            text: "En el diseño de los muros de contención de los sótanos y otras estructuras aproximadamente verticales localizadas bajo tierra, debe tenerse en cuenta el empuje lateral del suelo adyacente. Igualmente deben tenerse en cuenta las posibles cargas tanto vivas como muertas que puedan darse en la parte superior del suelo adyacente. Cuando parte o toda la estructura de sótano está por debajo del nivel freático, el empuje debe calcularse para el peso del suelo sumergido y la totalidad de la presión hidrostática. Deben consultarse los requisitos del Título H del Reglamento.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.5.1.2",
        title: "Coeficiente de empuje de tierra",
        items: [
          {
            type: "paragraph",
            text: "El coeficiente de empuje de tierra deberá elegirse en función de las condiciones de deformabilidad de la estructura de contención. Puede asignarse el coeficiente de empuje activo cuando las estructuras tengan libertad de giro y de traslación. En caso contrario, el coeficiente será el de reposo o uno mayor, hasta el valor del pasivo, a juicio del ingeniero geotecnista y de acuerdo con las condiciones geométricas de la estructura y de los taludes adyacentes, cumpliendo los requisitos adicionales del Título H del Reglamento.",
          },
        ],
      },
    ],
    related: [
      { code: "B.5.2", title: "Presión ascendente en losas de piso de sótanos" },
      { code: "B.5.3", title: "Suelos expansivos" },
    ],
  },

  {
    code: "B.5.1.1",
    title: "Empuje lateral y presión hidrostática",
    summary:
      "Los muros de sótano deben considerar el empuje lateral del suelo, las cargas sobre la superficie adyacente, y la presión hidrostática completa cuando la estructura quede bajo el nivel freático.",
    body: [
      {
        type: "paragraph",
        text: "En el diseño de los muros de contención de los sótanos y otras estructuras aproximadamente verticales localizadas bajo tierra, debe tenerse en cuenta el empuje lateral del suelo adyacente. Igualmente deben tenerse en cuenta las posibles cargas tanto vivas como muertas que puedan darse en la parte superior del suelo adyacente. Cuando parte o toda la estructura de sótano está por debajo del nivel freático, el empuje debe calcularse para el peso del suelo sumergido y la totalidad de la presión hidrostática. Deben consultarse los requisitos del Título H del Reglamento.",
      },
    ],
    related: [
      { code: "B.5.1", title: "Empuje en muros de contención de sótanos" },
      { code: "B.5.1.2", title: "Coeficiente de empuje de tierra" },
      { code: "B.5.2", title: "Presión ascendente en losas de piso de sótanos" },
    ],
  },

  {
    code: "B.5.1.2",
    title: "Coeficiente de empuje de tierra",
    summary:
      "El coeficiente de empuje se elige según la deformabilidad de la estructura: activo si hay libertad de giro y traslación; de reposo o mayor en caso contrario, a juicio del ingeniero geotecnista.",
    body: [
      {
        type: "paragraph",
        text: "El coeficiente de empuje de tierra deberá elegirse en función de las condiciones de deformabilidad de la estructura de contención. Puede asignarse el coeficiente de empuje activo cuando las estructuras tengan libertad de giro y de traslación. En caso contrario, el coeficiente será el de reposo o uno mayor, hasta el valor del pasivo, a juicio del ingeniero geotecnista y de acuerdo con las condiciones geométricas de la estructura y de los taludes adyacentes, cumpliendo los requisitos adicionales del Título H del Reglamento.",
      },
    ],
    related: [
      { code: "B.5.1", title: "Empuje en muros de contención de sótanos" },
      { code: "B.5.1.1", title: "Empuje lateral y presión hidrostática" },
    ],
  },

  {
    code: "B.5.2",
    title: "Presión ascendente (subpresión) en losas de piso de sótanos",
    summary:
      "Las losas de piso de sótano y estructuras horizontales bajo tierra deben diseñarse para la totalidad de la presión hidrostática ascendente, medida desde el nivel freático. Aplica también a tanques y piscinas.",
    body: [
      {
        type: "paragraph",
        text: "En el diseño de la losa de piso de sótano y otras estructuras aproximadamente horizontales localizadas bajo tierra debe tenerse en cuenta la totalidad de la presión hidrostática ascendente aplicada sobre el área. La cabeza de presión hidrostática debe medirse desde el nivel freático. La misma consideración debe hacerse en el diseño de tanques y piscinas. Véase el Capítulo C.23.",
      },
    ],
    related: [
      { code: "B.5.1", title: "Empuje en muros de contención de sótanos" },
      { code: "B.5.3", title: "Suelos expansivos" },
      { code: "B.5.4", title: "Zonas inundables" },
    ],
  },

  {
    code: "B.5.3",
    title: "Suelos expansivos",
    summary:
      "Cuando existan suelos expansivos bajo la cimentación o losas, los elementos deben diseñarse para tolerar los movimientos y resistir las presiones de expansión, o bien los suelos deben retirarse o estabilizarse según el ingeniero geotecnista.",
    body: [
      {
        type: "paragraph",
        text: "Cuando existan suelos expansivos bajo la cimentación de la edificación, o bajo losas apoyadas sobre el terreno, la cimentación, las losas y los otros elementos de la edificación deben diseñarse para que sean capaces de tolerar los movimientos que se presenten y resistir las presiones ascendentes causadas por la expansión del suelo, o bien los suelos expansivos deben retirarse o estabilizarse debajo y en los alrededores de la edificación, de acuerdo con las indicaciones del ingeniero geotecnista. Debe consultarse el Título H del Reglamento.",
      },
    ],
    related: [
      { code: "B.5.1", title: "Empuje en muros de contención de sótanos" },
      { code: "B.5.2", title: "Presión ascendente en losas de piso de sótanos" },
      { code: "B.5.4", title: "Zonas inundables" },
    ],
  },

  {
    code: "B.5.4",
    title: "Zonas inundables",
    summary:
      "En zonas declaradas inundables por la autoridad competente, la estructura debe resistir los efectos de flotación y desplazamiento lateral causados por efectos hidrostáticos, hidrodinámicos e impacto de objetos flotantes.",
    body: [
      {
        type: "paragraph",
        text: "En aquellas zonas designadas por la autoridad competente como inundables, el sistema estructural de la edificación debe diseñarse y construirse para que sea capaz de resistir los efectos de flotación y de desplazamiento lateral causados por los efectos hidrostáticos, hidrodinámicos y de impacto de objetos flotantes.",
      },
    ],
    related: [
      { code: "B.5.2", title: "Presión ascendente en losas de piso de sótanos" },
      { code: "B.5.3", title: "Suelos expansivos" },
    ],
  },
]
