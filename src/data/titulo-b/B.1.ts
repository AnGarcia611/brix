import type { Article } from "../types"

export const B1: Article[] = [
  {
    code: "B.1.1",
    title: "Alcance",
    summary:
      "Requisitos mínimos de cargas para el diseño de edificaciones, distintos a los efectos sísmicos.",
    body: [
      {
        type: "paragraph",
        text: "El presente Título da los requisitos mínimos que deben cumplir las edificaciones con respecto a cargas que deben emplearse en su diseño, diferentes a las fuerzas o efectos que impone el sismo. Para que una estructura sismo resistente cumpla adecuadamente su objetivo, debe ser capaz de resistir además de los efectos sísmicos, los efectos de las cargas prescritas en el presente Título. El diseño de los elementos que componen la estructura de la edificación debe hacerse para la combinación de carga crítica.",
      },
    ],
    related: [{ code: "B.1.2", title: "Requisitos básicos" }],
  },
  {
    code: "B.1.2",
    title: "Requisitos básicos",
    summary:
      "La estructura y todas sus partes deben cumplir requisitos de resistencia, funcionamiento, manejo de deformaciones impuestas y análisis estructural.",
    body: [
      {
        type: "subsection",
        code: "B.1.2.1",
        title: "Requisitos que deben cumplir la estructura y todas sus partes",
        items: [
          {
            type: "subsection",
            code: "B.1.2.1.1",
            title: "Resistencia",
            items: [
              {
                type: "paragraph",
                text: "La estructura de la edificación y todas sus partes deben diseñarse y construirse para que los materiales utilizados en la construcción de los elementos y sus conexiones puedan soportar con seguridad todas las cargas contempladas en el presente Título B de la NSR-10 sin exceder las resistencias de diseño cuando se mayoran las cargas por medio de coeficientes de carga, o los esfuerzos admisibles cuando se utilicen las cargas sin mayorar.",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.1.2.1.2",
            title: "Funcionamiento",
            items: [
              {
                type: "paragraph",
                text: "Los sistemas estructurales y sus componentes deben diseñarse para que tengan una rigidez adecuada que limite: (a) las deflexiones verticales de los elementos, (b) la deriva ante cargas de sismo y viento, (c) las vibraciones y (d) cualquier otra deformación que afecte adversamente el funcionamiento de la estructura o edificación.",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.1.2.1.3",
            title: "Fuerzas causadas por deformaciones impuestas",
            items: [
              {
                type: "paragraph",
                text: "Deben tenerse en cuenta en el diseño las fuerzas causadas por deformaciones impuestas a la estructura por: (a) los asentamientos diferenciales contemplados en el título H, (b) por restricción a los cambios dimensionales debidos a variaciones de temperatura, expansiones por humedad, retracción de fraguado, flujo plástico y efectos similares.",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.1.2.1.4",
            title: "Análisis",
            items: [
              {
                type: "paragraph",
                text: "Los efectos de las cargas en los diferentes elementos de la estructura y sus conexiones deben determinarse utilizando métodos aceptados de análisis estructural, teniendo en cuenta los principios de equilibrio, estabilidad general, compatibilidad de deformaciones y las propiedades de los materiales tanto a corto como a largo plazo. En aquellos elementos que tiendan a acumular deformaciones residuales bajo cargas de servicio sostenidas (flujo plástico) debe tenerse en cuenta en el análisis sus efectos durante la vida útil de la estructura.",
              },
            ],
          },
        ],
      },
    ],
    related: [{ code: "B.1.3", title: "Unidad e integridad estructural general" }],
  },
  {
    code: "B.1.3",
    title: "Unidad e integridad estructural general",
    summary:
      "Los elementos estructurales deben estar unidos para evitar el colapso progresivo ante daño local, garantizando continuidad, ductilidad y capacidad de redistribución de cargas.",
    body: [
      {
        type: "subsection",
        code: "B.1.3.1",
        title: "",
        items: [
          {
            type: "paragraph",
            text: "Además de los requisitos de amarre entre partes de la estructura y entre los elementos estructurales que se dan por razones sísmicas en el Título A de este Reglamento, deben tenerse en cuenta los requisitos adicionales que se dan a continuación. En el caso de estructuras de concreto reforzado deben consultarse también los requisitos de C.7.13.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.1.3.2",
        title: "",
        items: [
          {
            type: "paragraph",
            text: "Por razones accidentales o debido a que la estructura se utiliza para fines diferentes a los previstos en el diseño, ésta puede sufrir daño local o la falta de capacidad resistente en un elemento o en una porción menor de la edificación. Debido a esto los elementos y miembros estructurales deben estar unidos con el fin de obtener una integridad estructural general que les permita experimentar daño local sin que la estructura en general pierda su estabilidad ni extienda el daño local a otros elementos, ni se presente colapso progresivo.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.1.3.3",
        title: "",
        items: [
          {
            type: "paragraph",
            text: "El método más común para obtener integridad estructural consiste en disponer los elementos estructurales de tal manera que provean estabilidad general a la estructura, dándoles continuidad y garantizando que tengan suficiente ductilidad, capacidad de absorción y capacidad de disipación de energía para que pueda redistribuir cargas desde una zona dañada a las regiones adyacentes sin colapso.",
          },
        ],
      },
    ],
    related: [{ code: "B.1.4", title: "Trayectorias de cargas" }],
  },
  {
    code: "B.1.4",
    title: "Trayectorias de cargas",
    summary:
      "El sistema estructural debe proveer una trayectoria continua y capaz de resistir todas las cargas desde su punto de aplicación hasta la cimentación.",
    body: [
      {
        type: "subsection",
        code: "B.1.4.1",
        title: "",
        items: [
          {
            type: "paragraph",
            text: "El sistema estructural debe diseñarse de tal manera que exista una trayectoria continua para todas las cargas y solicitaciones consideradas en el diseño.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.1.4.2",
        title: "",
        items: [
          {
            type: "paragraph",
            text: "La trayectoria de carga que se disponga debe diseñarse de tal manera que sea capaz de resistir adecuadamente las fuerzas desde su punto de aplicación a la estructura, o lugar donde se originen en la estructura, a través de los elementos estructurales hasta la cimentación u otros elementos de apoyo.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.1.4.3",
        title: "",
        items: [
          {
            type: "paragraph",
            text: "En estructuras sometidas a fuerzas horizontales de viento, sismo, empuje de tierras y otras, los elementos estructurales que sean parte de la trayectoria de cargas deben ser capaces de resistir las fuerzas que se aplican en la superficie de otros elementos estructurales ya sea como cargas distribuidas o efectos inerciales causados por la masa de estos elementos y debe incluir diafragmas cuando sean requeridos para transmitir las fuerzas horizontales a los elementos verticales del sistema de resistencia ante fuerzas laterales.",
          },
        ],
      },
    ],
    related: [{ code: "B.1.1", title: "Alcance" }],
  },
]
