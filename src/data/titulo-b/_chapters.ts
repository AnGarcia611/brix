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
]
