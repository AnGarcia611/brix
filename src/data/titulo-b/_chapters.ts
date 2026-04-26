import type { TreeChapter } from "../types"

export const TITULO_B_CHAPTERS: TreeChapter[] = [
  {
    title: "Capítulo B.1 — Requisitos generales",
    items: [
      { code: "B.1.1", title: "Alcance" },
      {
        code: "B.1.2",
        title: "Requisitos básicos",
        children: [
          {
            code: "B.1.2.1",
            title: "Requisitos que deben cumplir la estructura y todas sus partes",
            children: [
              { code: "B.1.2.1.1", title: "Resistencia" },
              { code: "B.1.2.1.2", title: "Funcionamiento" },
              { code: "B.1.2.1.3", title: "Fuerzas causadas por deformaciones impuestas" },
              { code: "B.1.2.1.4", title: "Análisis" },
            ],
          },
        ],
      },
      {
        code: "B.1.3",
        title: "Unidad e integridad estructural general",
        children: [
          { code: "B.1.3.1", title: "Requisitos adicionales de amarre" },
          { code: "B.1.3.2", title: "Integridad estructural ante daño local" },
          { code: "B.1.3.3", title: "Método de continuidad y ductilidad" },
        ],
      },
      {
        code: "B.1.4",
        title: "Trayectorias de cargas",
        children: [
          { code: "B.1.4.1", title: "Continuidad de la trayectoria de cargas" },
          { code: "B.1.4.2", title: "Capacidad resistente de la trayectoria" },
          { code: "B.1.4.3", title: "Fuerzas horizontales y diafragmas" },
        ],
      },
    ],
  },
  {
    title: "Capítulo B.2 — Combinaciones de cargas",
    items: [
      {
        code: "B.2.1",
        title: "Definiciones y limitaciones",
        children: [
          { code: "B.2.1.1", title: "Definiciones" },
          { code: "B.2.1.2", title: "Limitación" },
        ],
      },
      { code: "B.2.2", title: "Nomenclatura" },
      {
        code: "B.2.3",
        title: "Combinaciones de carga — método de esfuerzos de trabajo",
        children: [
          { code: "B.2.3.1", title: "Combinaciones básicas" },
          {
            code: "B.2.3.2",
            title: "Fuerzas sísmicas",
            children: [
              { code: "B.2.3.2.1", title: "Verificación de derivas — sismo de diseño" },
              { code: "B.2.3.2.2", title: "Verificación de derivas — sismo de umbral de daño" },
            ],
          },
        ],
      },
      {
        code: "B.2.4",
        title: "Combinaciones de cargas mayoradas — método de resistencia",
        children: [
          { code: "B.2.4.1", title: "Aplicabilidad" },
          {
            code: "B.2.4.2",
            title: "Combinaciones básicas",
            children: [
              { code: "B.2.4.2.1", title: "Fuerzas sísmicas reducidas de diseño" },
              { code: "B.2.4.2.2", title: "Reducción del factor de carga viva" },
              { code: "B.2.4.2.3", title: "Factor de viento sin reducción por direccionalidad" },
              { code: "B.2.4.2.4", title: "Factor de sismo al nivel de servicio" },
              { code: "B.2.4.2.5", title: "Factor de carga H en combinaciones con viento o sismo" },
              { code: "B.2.4.2.6", title: "Efectos de impacto" },
              {
                code: "B.2.4.2.7",
                title: "Estimativos de deformaciones diferidas y variaciones de temperatura",
              },
            ],
          },
        ],
      },
    ],
  },
]
