import type { TreeChapter } from "../types"

export const TITULO_B_CHAPTERS: TreeChapter[] = [
  {
    title: "B.1 — Requisitos generales",
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
    title: "B.2 — Combinaciones de cargas",
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
  {
    title: "B.3 — Cargas muertas",
    items: [
      { code: "B.3.1", title: "Definición" },
      { code: "B.3.2", title: "Masas y pesos de los materiales" },
      { code: "B.3.3", title: "Cargas muertas mínimas" },
      {
        code: "B.3.4",
        title: "Elementos no estructurales",
        children: [
          { code: "B.3.4.1", title: "Elementos no estructurales horizontales" },
          { code: "B.3.4.2", title: "Elementos no estructurales verticales" },
          {
            code: "B.3.4.3",
            title: "Valores mínimos alternativos para cargas muertas de elementos no estructurales",
          },
        ],
      },
      { code: "B.3.5", title: "Equipos fijos" },
      { code: "B.3.6", title: "Consideraciones especiales" },
    ],
  },
  {
    title: "B.4 — Cargas vivas",
    items: [
      { code: "B.4.1", title: "Definición" },
      {
        code: "B.4.2",
        title: "Cargas vivas uniformemente repartidas",
        children: [
          { code: "B.4.2.1", title: "Cargas vivas requeridas" },
          { code: "B.4.2.2", title: "Empuje en pasamanos y antepechos" },
        ],
      },
      { code: "B.4.3", title: "Carga parcial" },
      { code: "B.4.4", title: "Impacto" },
      {
        code: "B.4.5",
        title: "Reducción de la carga viva",
        children: [
          {
            code: "B.4.5.1",
            title: "Reducción de la carga viva por área aferente",
            children: [
              { code: "B.4.5.1.1", title: "Límites de reducción" },
              { code: "B.4.5.1.2", title: "Determinación del área de influencia" },
            ],
          },
          { code: "B.4.5.2", title: "Reducción por número de pisos" },
        ],
      },
      { code: "B.4.6", title: "Puentes grúas" },
      { code: "B.4.7", title: "Efectos dinámicos" },
      {
        code: "B.4.8",
        title: "Cargas de empozamiento de agua y de granizo",
        children: [
          { code: "B.4.8.1", title: "Generalidades" },
          { code: "B.4.8.2", title: "Carga por empozamiento de agua" },
          { code: "B.4.8.3", title: "Carga de granizo" },
        ],
      },
    ],
  },
  {
    title: "B.5 — Cargas de suelos",
    items: [
      {
        code: "B.5.1",
        title: "Empuje en muros de contención de sótanos",
        children: [
          { code: "B.5.1.1", title: "Empuje lateral y presión hidrostática" },
          { code: "B.5.1.2", title: "Coeficiente de empuje de tierra" },
        ],
      },
      { code: "B.5.2", title: "Presión ascendente en losas de piso de sótanos" },
      { code: "B.5.3", title: "Suelos expansivos" },
      { code: "B.5.4", title: "Zonas inundables" },
    ],
  },
  {
    title: "B.6 — Cargas de viento",
    items: [
      {
        code: "B.6.1",
        title: "Alcance",
        children: [
          { code: "B.6.1.1", title: "Procedimientos permitidos" },
          { code: "B.6.1.3", title: "Carga de viento de diseño mínima" },
        ],
      },
      { code: "B.6.2", title: "Definiciones" },
      { code: "B.6.3", title: "Nomenclatura" },
      { code: "B.6.4", title: "Procedimiento simplificado (Método 1)" },
      {
        code: "B.6.5",
        title: "Método 2 — Procedimiento analítico",
        children: [
          { code: "B.6.5.4", title: "Velocidad de viento básica" },
          { code: "B.6.5.5", title: "Factor de importancia" },
          { code: "B.6.5.6", title: "Exposición" },
          { code: "B.6.5.7", title: "Efectos topográficos" },
          { code: "B.6.5.8", title: "Factor de efecto ráfaga" },
          { code: "B.6.5.9", title: "Clasificaciones de los cerramientos" },
          { code: "B.6.5.10", title: "Presión por velocidad" },
          { code: "B.6.5.11", title: "Coeficientes de presión y fuerza" },
          {
            code: "B.6.5.12",
            title: "Fuerzas de viento de diseño en edificios cerrados o parcialmente cerrados",
          },
          { code: "B.6.5.13", title: "Fuerzas de viento de diseño en edificios abiertos" },
          {
            code: "B.6.5.14",
            title: "Cargas de viento de diseño en muros libres y vallas macizas",
          },
          { code: "B.6.5.15", title: "Cargas de viento de diseño en otras estructuras" },
        ],
      },
      { code: "B.6.6", title: "Método 3 — Procedimiento de túnel de viento" },
    ],
  },
]
