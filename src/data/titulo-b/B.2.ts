import type { Article } from "../types"

export const B2: Article[] = [
  {
    code: "B.2.1",
    title: "Definiciones y limitaciones",
    summary:
      "Define los términos fundamentales del sistema de cargas de la NSR-10 y establece las limitaciones de aplicabilidad de los métodos de diseño.",
    body: [
      {
        type: "subsection",
        code: "B.2.1.1",
        title: "Definiciones",
        items: [
          {
            type: "note",
            text: "Las definiciones a continuación hacen referencia al Título B. Se incluye la traducción al inglés para efectos de concordancia con las normas base de la NSR-10.",
          },
          {
            type: "list",
            items: [
              "Cargas (Loads): Fuerzas u otras solicitaciones que actúan sobre el sistema estructural, provenientes del peso de elementos permanentes, ocupantes, efectos ambientales, asentamientos diferenciales y restricción de cambios dimensionales. Las cargas permanentes varían muy poco en el tiempo; todas las demás son cargas variables.",
              "Cargas de servicio (Service loads): Véase cargas nominales.",
              "Carga mayorada (Factored load): Carga obtenida como el producto de una carga nominal por un coeficiente de carga. Las fuerzas sísmicas del Título A ya son mayoradas, pues el coeficiente de carga va incluido en la probabilidad de ocurrencia del sismo de diseño.",
              "Cargas nominales (Nominal loads): Magnitudes de las cargas especificadas en B.3 a B.6. Las cargas muertas, vivas y de viento de este Título son nominales — NO han sido multiplicadas por el coeficiente de carga.",
              "Coeficiente de carga (Load factor): Coeficiente que tiene en cuenta las desviaciones inevitables de las cargas reales respecto a las nominales y las incertidumbres del análisis estructural. Sinónimo de 'factor de carga' en el Reglamento NSR-10.",
              "Coeficiente de reducción de resistencia (Strength reduction factor): Coeficiente que tiene en cuenta las desviaciones entre la resistencia real y la resistencia nominal del elemento, así como la forma y consecuencia de su tipo de falla. Sinónimo de 'factor de reducción de resistencia'.",
              "Curadurías: Entidades encargadas de estudiar, tramitar y expedir las licencias de construcción según la Ley 388 de 1997. Incluye además cualquier entidad que cumpla dichas funciones.",
              "Durabilidad (Durability): Capacidad de una estructura o elemento estructural de garantizar que no se presente deterioro perjudicial para el desempeño requerido en el ambiente para el cual se diseñó.",
              "Edificación (Building): Construcción cuyo uso principal es la habitación o ocupación por seres humanos.",
              "Efectos de las cargas (Load effects): Deformaciones y fuerzas internas que producen las cargas en los elementos estructurales.",
              "Estado límite (Limit state): Condición más allá de la cual una estructura o componente deja de cumplir su función (estado límite de servicio) o se vuelve insegura (estado límite de resistencia).",
              "Funcionamiento (Serviceability): Capacidad de la estructura o elemento estructural de tener un comportamiento adecuado en condiciones de servicio.",
              "Integridad estructural (Structural integrity): Capacidad de la estructura para evitar colapso generalizado cuando ocurre daño localizado.",
              "Mantenimiento (Maintenance): Conjunto de actividades realizadas durante la vida de servicio de diseño para que la estructura cumpla sus requisitos de desempeño sin necesidad de reparaciones importantes.",
              "Método de la resistencia (Strength design method): Método de diseño en el que las fuerzas internas producidas por cargas mayoradas no deben exceder las resistencias de diseño de los elementos.",
              "Método de los esfuerzos de trabajo (Allowable stress design method): Método en el que los esfuerzos calculados elásticamente con cargas reales no deben exceder un valor límite especificado para cada material.",
              "Método de los estados límites (Limit state design method): Método de diseño tal que la probabilidad de falla para ciertos estados límites considerados importantes esté dentro de valores aceptables. Estudia los estados límites de servicio y de resistencia.",
              "Reparabilidad (Restorability): Capacidad de la estructura o elemento de poder ser reparada física y económicamente cuando sea dañada.",
              "Resistencia (Resistance): Capacidad de un elemento estructural para soportar las cargas o fuerzas que se le apliquen.",
              "Resistencia de diseño (Design strength): Producto de la resistencia nominal por un coeficiente de reducción de resistencia.",
              "Resistencia nominal (Nominal strength): Capacidad de la estructura o componente de resistir los efectos de las cargas, determinada mediante cálculo con valores nominales de resistencia de materiales y dimensiones nominales, usando ecuaciones de principios aceptables de mecánica estructural.",
              "Sistema estructural (Structural system): Elementos estructurales interconectados que en conjunto cumplen una función específica.",
              "Trayectoria de cargas (Load path): Sucesión de elementos estructurales a lo largo de los cuales se transmiten las cargas desde su punto de aplicación hasta la cimentación.",
              "Vida de servicio de diseño (Design service life): Período durante el cual la estructura o elemento son utilizables para el propósito para el cual se diseñaron, con los mantenimientos requeridos pero sin necesidad de reparaciones importantes.",
            ],
          },
        ],
      },
      {
        type: "subsection",
        code: "B.2.1.2",
        title: "Limitación",
        items: [
          {
            type: "paragraph",
            text: "La seguridad de la estructura puede verificarse utilizando los requisitos de B.2.3 o B.2.4, dependiendo del método de diseño escogido y del material estructural. Una vez determinado cuál se usa, el diseño debe hacerse en su totalidad siguiendo los requisitos de ese numeral para todos los elementos de la estructura.",
          },
        ],
      },
    ],
    related: [
      { code: "B.2.3", title: "Combinaciones de carga — método de esfuerzos de trabajo" },
      { code: "B.2.4", title: "Combinaciones de cargas mayoradas — método de resistencia" },
    ],
  },

  {
    code: "B.2.2",
    title: "Nomenclatura",
    summary:
      "Define los símbolos y variables utilizados en las combinaciones de carga del Capítulo B.2.",
    body: [
      {
        type: "table",
        caption: "Tabla B.2-1 — Nomenclatura de cargas y coeficientes",
        headers: ["Símbolo", "Descripción"],
        rows: [
          [
            "D",
            "Carga muerta: (a) peso propio del elemento; (b) peso de materiales de construcción permanentes, incluyendo muros y particiones; (c) peso del equipo permanente.",
          ],
          [
            "E",
            "Fuerzas sísmicas reducidas de diseño (E = Fs/R) empleadas para diseñar los miembros estructurales.",
          ],
          ["Ed", "Fuerza sísmica del umbral de daño."],
          [
            "F",
            "Cargas debidas al peso y presión de fluidos con densidades bien definidas y alturas máximas controlables.",
          ],
          ["Fa", "Carga debida a inundación."],
          [
            "Fs",
            "Fuerzas sísmicas calculadas de acuerdo con los requisitos del Título A del Reglamento.",
          ],
          ["G", "Carga debida al granizo, sin tener en cuenta la contribución del empozamiento."],
          [
            "H",
            "Cargas debidas al empuje lateral del suelo, de agua freática o de materiales almacenados con restricción horizontal.",
          ],
          [
            "L",
            "Cargas vivas debidas al uso y ocupación de la edificación, incluyendo objetos móviles y particiones relocalizables. Incluye cualquier reducción permitida. Los efectos de impacto deben incluirse en L.",
          ],
          ["Le", "Carga de empozamiento de agua."],
          ["L0", "Carga viva sin reducir, en kN/m². Véase B.4.5.1."],
          ["Lr", "Carga viva sobre la cubierta."],
          [
            "R0",
            "Coeficiente de capacidad de disipación de energía básico definido para cada sistema estructural. Véase Capítulo A.3.",
          ],
          [
            "R",
            "Coeficiente de capacidad de disipación de energía para diseño (R = φapr · φ · R0). Véase Capítulo A.3.",
          ],
          [
            "T",
            "Fuerzas y efectos causados por variación de temperatura, retracción de fraguado, flujo plástico, cambios de humedad, asentamiento diferencial o combinación de estos.",
          ],
          ["W", "Carga de viento."],
        ],
      },
    ],
    related: [
      { code: "B.2.3", title: "Combinaciones de carga — método de esfuerzos de trabajo" },
      { code: "B.2.4", title: "Combinaciones de cargas mayoradas — método de resistencia" },
      { code: "B.3.1", title: "Cargas vivas — alcance" },
    ],
  },

  {
    code: "B.2.3",
    title:
      "Combinaciones de carga — método de esfuerzos de trabajo o verificación del estado límite de servicio",
    summary:
      "Establece las combinaciones básicas de carga para el método de esfuerzos de trabajo. Aplicables únicamente cuando el Título o Capítulo correspondiente lo indique explícitamente, ya que la mayoría de materiales de la NSR-10 se diseñan por el método de la resistencia.",
    body: [
      {
        type: "subsection",
        code: "B.2.3.1",
        title: "Combinaciones básicas",
        items: [
          {
            type: "paragraph",
            text: "Deben tenerse en cuenta todas las cargas actuando en las combinaciones que se dan a continuación. El diseño debe hacerse para la combinación que produzca el efecto más desfavorable. El efecto más desfavorable puede ocurrir cuando una o varias de las cargas no actúen.",
          },
          {
            type: "note",
            text: "Todos los materiales estructurales de la NSR-10, con excepción de la madera y guadua (Título G), se diseñan por el método de la resistencia. Las combinaciones de esta sección B.2.3.1 solo deben emplearse cuando lo indique explícitamente el Título, Capítulo o Sección correspondiente.",
          },
          {
            type: "table",
            caption: "Tabla B.2-2 — Combinaciones de carga para el método de esfuerzos de trabajo",
            headers: ["Ecuación", "Combinación"],
            rows: [
              ["B.2.3-1", "D + F"],
              ["B.2.3-2", "D + H + F + L + T"],
              ["B.2.3-3", "D + H + F + (Lr ó G ó Le)"],
              ["B.2.3-4", "D + H + F + 0.75·L + T + 0.75·(Lr ó G ó Le)"],
              ["B.2.3-5", "D + H + F + W"],
              ["B.2.3-6", "D + H + F + 0.7·E"],
              ["B.2.3-7", "D + H + F + 0.75·W + 0.75·L + 0.75·(Lr ó G ó Le)"],
              ["B.2.3-8", "D + H + F + 0.75·(0.7E) + 0.75·L + 0.75·(Lr ó G ó Le)"],
              ["B.2.3-9", "0.6·D + W + H"],
              ["B.2.3-10", "0.6·D + 0.7·E + H"],
            ],
          },
          {
            type: "note",
            text: "Deben considerarse los efectos más desfavorables de viento y de sismo tomándolos independientemente.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.2.3.2",
        title: "Fuerzas sísmicas",
        items: [
          {
            type: "paragraph",
            text: "Las fuerzas sísmicas reducidas, E, utilizadas en las combinaciones B.2.3-6, B.2.3-8 y B.2.3-10 corresponden al efecto Fs de los movimientos sísmicos de diseño del Título A, divididos por R (E = Fs/R). Cuando se diseña por el método de los esfuerzos de trabajo, el coeficiente de carga que afecta E es 0.7.",
          },
          {
            type: "subsection",
            code: "B.2.3.2.1",
            title: "Verificación de derivas — sismo de diseño",
            items: [
              {
                type: "paragraph",
                text: "Para evaluar las derivas por deflexiones horizontales causadas por el sismo de diseño, deben utilizarse los requisitos del Capítulo A.6, los cuales exigen verificar las derivas para las fuerzas sísmicas Fs sin dividir por R, empleando 1.0·E en vez de 0.7·E en las ecuaciones de B.2.3.",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.2.3.2.2",
            title: "Verificación de derivas — sismo de umbral de daño",
            items: [
              {
                type: "paragraph",
                text: "Para evaluar las derivas causadas por el sismo de umbral de daño en edificaciones indispensables del grupo de uso IV, deben utilizarse los requisitos del Capítulo A.12, los cuales exigen verificar las derivas para las fuerzas sísmicas Ed.",
              },
            ],
          },
        ],
      },
    ],
    related: [
      { code: "B.2.4", title: "Combinaciones de cargas mayoradas — método de resistencia" },
      { code: "B.2.2", title: "Nomenclatura" },
    ],
  },

  {
    code: "B.2.4",
    title: "Combinaciones de cargas mayoradas — método de resistencia",
    summary:
      "Establece las combinaciones de cargas mayoradas para el método de resistencia, aplicables a todos los materiales estructurales de la NSR-10 salvo indicación contraria. Incluye notas sobre factores de carga para sismo, viento, carga viva y empuje de suelos.",
    body: [
      {
        type: "subsection",
        code: "B.2.4.1",
        title: "Aplicabilidad",
        items: [
          {
            type: "paragraph",
            text: "Las combinaciones de carga y factores de carga de B.2.4.2 deben usarse en todos los materiales estructurales permitidos por el Reglamento, con excepción de los casos en que se indique explícitamente el uso del método de esfuerzos de trabajo (sección B.2.3.1).",
          },
          {
            type: "note",
            text: "Nota importante: Las combinaciones de B.2.4.2 contienen factores de carga menores que los de la NSR-98, pero los coeficientes de reducción de resistencia φ también son menores, siendo concordantes con la probabilidad de falla que limita el Reglamento. Es incorrecto e inseguro usar las nuevas combinaciones de carga con los valores de φ de la NSR-98.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.2.4.2",
        title: "Combinaciones básicas",
        items: [
          {
            type: "paragraph",
            text: "El diseño de estructuras, componentes y cimentaciones debe hacerse de tal forma que las resistencias de diseño igualen o excedan los efectos producidos por las cargas mayoradas en las siguientes combinaciones:",
          },
          {
            type: "table",
            caption: "Tabla B.2-3 — Combinaciones de cargas mayoradas (método de resistencia)",
            headers: ["Ecuación", "Combinación"],
            rows: [
              ["B.2.4-1", "1.4·(D + F)"],
              ["B.2.4-2", "1.2·(D + F + T) + 1.6·(L + H) + 0.5·(Lr ó G ó Le)"],
              ["B.2.4-3", "1.2·D + 1.6·(Lr ó G ó Le) + (L ó 0.8·W)"],
              ["B.2.4-4", "1.2·D + 1.6·W + 1.0·L + 0.5·(Lr ó G ó Le)"],
              ["B.2.4-5", "1.2·D + 1.0·E + 1.0·L"],
              ["B.2.4-6", "0.9·D + 1.6·W + 1.6·H"],
              ["B.2.4-7", "0.9·D + 1.0·E + 1.6·H"],
            ],
          },
          {
            type: "subsection",
            code: "B.2.4.2.1",
            title: "Fuerzas sísmicas reducidas de diseño",
            items: [
              {
                type: "paragraph",
                text: "Las fuerzas sísmicas reducidas de diseño E usadas en B.2.4-5 y B.2.4-7 corresponden a E = Fs/R. El coeficiente de carga que afecta E es 1.0, dado que las fuerzas sísmicas están prescritas al nivel de resistencia. Para verificación de derivas, deben utilizarse los requisitos del Capítulo A.6 con las fuerzas Fs sin dividir por R.",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.2.4.2.2",
            title: "Reducción del factor de carga viva",
            items: [
              {
                type: "paragraph",
                text: "Se permite reducir a 0.5 el factor de carga viva L en las combinaciones B.2.4-3, B.2.4-4 y B.2.4-5, excepto para estacionamientos, áreas ocupadas como lugares de reunión pública y todas las áreas donde L0 sea superior a 4.8 kN/m².",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.2.4.2.3",
            title: "Factor de viento sin reducción por direccionalidad",
            items: [
              {
                type: "paragraph",
                text: "Cuando las cargas de viento del Capítulo B.6 no se reducen por el factor de direccionalidad, se permite utilizar 1.3·W en lugar de 1.6·W en las combinaciones B.2.4-4 y B.2.4-6.",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.2.4.2.4",
            title: "Factor de sismo al nivel de servicio",
            items: [
              {
                type: "paragraph",
                text: "En las combinaciones B.2.4-5 y B.2.4-7 se puede usar 1.4·E en lugar de 1.0·E cuando los efectos de carga por sismo E se basan en los niveles de servicio de las fuerzas sísmicas.",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.2.4.2.5",
            title: "Factor de carga H en combinaciones con viento o sismo",
            items: [
              {
                type: "paragraph",
                text: "El factor de carga para H debe fijarse igual a cero en las combinaciones B.2.4-6 y B.2.4-7 si la acción estructural debida a H neutraliza las causadas por W o E. Cuando las presiones laterales del suelo proporcionan resistencia, no deben incluirse en H sino en la resistencia de diseño.",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.2.4.2.6",
            title: "Efectos de impacto",
            items: [
              {
                type: "paragraph",
                text: "Si los efectos del impacto deben tenerse en cuenta en el diseño, estos deben incluirse con la carga viva L.",
              },
            ],
          },
          {
            type: "subsection",
            code: "B.2.4.2.7",
            title: "Estimativos de deformaciones diferidas y variaciones de temperatura",
            items: [
              {
                type: "paragraph",
                text: "Los estimativos de asentamientos diferenciales, flujo plástico, retracción, expansión de concretos de retracción compensada o variaciones de temperatura deben basarse en una evaluación realista de los efectos que puedan ocurrir durante la vida útil de la estructura.",
              },
            ],
          },
        ],
      },
    ],
    related: [
      { code: "B.2.3", title: "Combinaciones de carga — método de esfuerzos de trabajo" },
      { code: "B.2.2", title: "Nomenclatura" },
      { code: "B.3.4", title: "Cargas vivas mínimas uniformemente distribuidas" },
      { code: "B.6.1", title: "Cargas de viento — generalidades" },
    ],
  },

  // ─── Artículos independientes de sub-secciones ───────────────────────────

  {
    code: "B.2.1.1",
    title: "Definiciones",
    summary:
      "Define los términos fundamentales del sistema de cargas de la NSR-10: cargas nominales, mayoradas, coeficientes de carga, estados límites, durabilidad y vida de servicio.",
    body: [
      {
        type: "note",
        text: "Las definiciones a continuación hacen referencia al Título B. Se incluye la traducción al inglés para efectos de concordancia con las normas base de la NSR-10.",
      },
      {
        type: "list",
        items: [
          "Cargas (Loads): Fuerzas u otras solicitaciones que actúan sobre el sistema estructural, provenientes del peso de elementos permanentes, ocupantes, efectos ambientales, asentamientos diferenciales y restricción de cambios dimensionales. Las cargas permanentes varían muy poco en el tiempo; todas las demás son cargas variables.",
          "Cargas de servicio (Service loads): Véase cargas nominales.",
          "Carga mayorada (Factored load): Carga obtenida como el producto de una carga nominal por un coeficiente de carga. Las fuerzas sísmicas del Título A ya son mayoradas, pues el coeficiente de carga va incluido en la probabilidad de ocurrencia del sismo de diseño.",
          "Cargas nominales (Nominal loads): Magnitudes de las cargas especificadas en B.3 a B.6. Las cargas muertas, vivas y de viento de este Título son nominales — NO han sido multiplicadas por el coeficiente de carga.",
          "Coeficiente de carga (Load factor): Coeficiente que tiene en cuenta las desviaciones inevitables de las cargas reales respecto a las nominales y las incertidumbres del análisis estructural. Sinónimo de 'factor de carga' en el Reglamento NSR-10.",
          "Coeficiente de reducción de resistencia (Strength reduction factor): Coeficiente que tiene en cuenta las desviaciones entre la resistencia real y la resistencia nominal del elemento, así como la forma y consecuencia de su tipo de falla. Sinónimo de 'factor de reducción de resistencia'.",
          "Curadurías: Entidades encargadas de estudiar, tramitar y expedir las licencias de construcción según la Ley 388 de 1997. Incluye además cualquier entidad que cumpla dichas funciones.",
          "Durabilidad (Durability): Capacidad de una estructura o elemento estructural de garantizar que no se presente deterioro perjudicial para el desempeño requerido en el ambiente para el cual se diseñó.",
          "Edificación (Building): Construcción cuyo uso principal es la habitación o ocupación por seres humanos.",
          "Efectos de las cargas (Load effects): Deformaciones y fuerzas internas que producen las cargas en los elementos estructurales.",
          "Estado límite (Limit state): Condición más allá de la cual una estructura o componente deja de cumplir su función (estado límite de servicio) o se vuelve insegura (estado límite de resistencia).",
          "Funcionamiento (Serviceability): Capacidad de la estructura o elemento estructural de tener un comportamiento adecuado en condiciones de servicio.",
          "Integridad estructural (Structural integrity): Capacidad de la estructura para evitar colapso generalizado cuando ocurre daño localizado.",
          "Mantenimiento (Maintenance): Conjunto de actividades realizadas durante la vida de servicio de diseño para que la estructura cumpla sus requisitos de desempeño sin necesidad de reparaciones importantes.",
          "Método de la resistencia (Strength design method): Método de diseño en el que las fuerzas internas producidas por cargas mayoradas no deben exceder las resistencias de diseño de los elementos.",
          "Método de los esfuerzos de trabajo (Allowable stress design method): Método en el que los esfuerzos calculados elásticamente con cargas reales no deben exceder un valor límite especificado para cada material.",
          "Método de los estados límites (Limit state design method): Método de diseño tal que la probabilidad de falla para ciertos estados límites considerados importantes esté dentro de valores aceptables. Estudia los estados límites de servicio y de resistencia.",
          "Reparabilidad (Restorability): Capacidad de la estructura o elemento de poder ser reparada física y económicamente cuando sea dañada.",
          "Resistencia (Resistance): Capacidad de un elemento estructural para soportar las cargas o fuerzas que se le apliquen.",
          "Resistencia de diseño (Design strength): Producto de la resistencia nominal por un coeficiente de reducción de resistencia.",
          "Resistencia nominal (Nominal strength): Capacidad de la estructura o componente de resistir los efectos de las cargas, determinada mediante cálculo con valores nominales de resistencia de materiales y dimensiones nominales, usando ecuaciones de principios aceptables de mecánica estructural.",
          "Sistema estructural (Structural system): Elementos estructurales interconectados que en conjunto cumplen una función específica.",
          "Trayectoria de cargas (Load path): Sucesión de elementos estructurales a lo largo de los cuales se transmiten las cargas desde su punto de aplicación hasta la cimentación.",
          "Vida de servicio de diseño (Design service life): Período durante el cual la estructura o elemento son utilizables para el propósito para el cual se diseñaron, con los mantenimientos requeridos pero sin necesidad de reparaciones importantes.",
        ],
      },
    ],
    related: [
      { code: "B.2.1", title: "Definiciones y limitaciones" },
      { code: "B.2.1.2", title: "Limitación" },
      { code: "B.2.2", title: "Nomenclatura" },
    ],
  },

  {
    code: "B.2.1.2",
    title: "Limitación",
    summary:
      "La seguridad de la estructura se verifica usando B.2.3 o B.2.4 según el método de diseño escogido, el cual debe aplicarse uniformemente a todos los elementos.",
    body: [
      {
        type: "paragraph",
        text: "La seguridad de la estructura puede verificarse utilizando los requisitos de B.2.3 o B.2.4, dependiendo del método de diseño escogido y del material estructural. Una vez determinado cuál se usa, el diseño debe hacerse en su totalidad siguiendo los requisitos de ese numeral para todos los elementos de la estructura.",
      },
    ],
    related: [
      { code: "B.2.1", title: "Definiciones y limitaciones" },
      { code: "B.2.3", title: "Combinaciones de carga — método de esfuerzos de trabajo" },
      { code: "B.2.4", title: "Combinaciones de cargas mayoradas — método de resistencia" },
    ],
  },

  {
    code: "B.2.3.1",
    title: "Combinaciones básicas — esfuerzos de trabajo",
    summary:
      "Combinaciones básicas de carga para el método de esfuerzos de trabajo. El diseño debe hacerse para la combinación más desfavorable, incluyendo casos en que una o varias cargas no actúen.",
    body: [
      {
        type: "paragraph",
        text: "Deben tenerse en cuenta todas las cargas actuando en las combinaciones que se dan a continuación. El diseño debe hacerse para la combinación que produzca el efecto más desfavorable. El efecto más desfavorable puede ocurrir cuando una o varias de las cargas no actúen.",
      },
      {
        type: "note",
        text: "Todos los materiales estructurales de la NSR-10, con excepción de la madera y guadua (Título G), se diseñan por el método de la resistencia. Las combinaciones de esta sección B.2.3.1 solo deben emplearse cuando lo indique explícitamente el Título, Capítulo o Sección correspondiente.",
      },
      {
        type: "table",
        caption: "Tabla B.2-2 — Combinaciones de carga para el método de esfuerzos de trabajo",
        headers: ["Ecuación", "Combinación"],
        rows: [
          ["B.2.3-1", "D + F"],
          ["B.2.3-2", "D + H + F + L + T"],
          ["B.2.3-3", "D + H + F + (Lr ó G ó Le)"],
          ["B.2.3-4", "D + H + F + 0.75·L + T + 0.75·(Lr ó G ó Le)"],
          ["B.2.3-5", "D + H + F + W"],
          ["B.2.3-6", "D + H + F + 0.7·E"],
          ["B.2.3-7", "D + H + F + 0.75·W + 0.75·L + 0.75·(Lr ó G ó Le)"],
          ["B.2.3-8", "D + H + F + 0.75·(0.7E) + 0.75·L + 0.75·(Lr ó G ó Le)"],
          ["B.2.3-9", "0.6·D + W + H"],
          ["B.2.3-10", "0.6·D + 0.7·E + H"],
        ],
      },
      {
        type: "note",
        text: "Deben considerarse los efectos más desfavorables de viento y de sismo tomándolos independientemente.",
      },
    ],
    related: [
      { code: "B.2.3", title: "Combinaciones de carga — método de esfuerzos de trabajo" },
      { code: "B.2.3.2", title: "Fuerzas sísmicas" },
      { code: "B.2.4.2", title: "Combinaciones básicas — método de resistencia" },
    ],
  },

  {
    code: "B.2.3.2",
    title: "Fuerzas sísmicas — esfuerzos de trabajo",
    summary:
      "Las fuerzas sísmicas E usadas en las combinaciones B.2.3 corresponden a Fs/R con coeficiente 0.7. Para verificación de derivas deben usarse los Capítulos A.6 y A.12.",
    body: [
      {
        type: "paragraph",
        text: "Las fuerzas sísmicas reducidas, E, utilizadas en las combinaciones B.2.3-6, B.2.3-8 y B.2.3-10 corresponden al efecto Fs de los movimientos sísmicos de diseño del Título A, divididos por R (E = Fs/R). Cuando se diseña por el método de los esfuerzos de trabajo, el coeficiente de carga que afecta E es 0.7.",
      },
      {
        type: "subsection",
        code: "B.2.3.2.1",
        title: "Verificación de derivas — sismo de diseño",
        items: [
          {
            type: "paragraph",
            text: "Para evaluar las derivas por deflexiones horizontales causadas por el sismo de diseño, deben utilizarse los requisitos del Capítulo A.6, los cuales exigen verificar las derivas para las fuerzas sísmicas Fs sin dividir por R, empleando 1.0·E en vez de 0.7·E en las ecuaciones de B.2.3.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.2.3.2.2",
        title: "Verificación de derivas — sismo de umbral de daño",
        items: [
          {
            type: "paragraph",
            text: "Para evaluar las derivas causadas por el sismo de umbral de daño en edificaciones indispensables del grupo de uso IV, deben utilizarse los requisitos del Capítulo A.12, los cuales exigen verificar las derivas para las fuerzas sísmicas Ed.",
          },
        ],
      },
    ],
    related: [
      { code: "B.2.3", title: "Combinaciones de carga — método de esfuerzos de trabajo" },
      { code: "B.2.3.1", title: "Combinaciones básicas — esfuerzos de trabajo" },
      { code: "B.2.3.2.1", title: "Verificación de derivas — sismo de diseño" },
      { code: "B.2.3.2.2", title: "Verificación de derivas — sismo de umbral de daño" },
    ],
  },

  {
    code: "B.2.3.2.1",
    title: "Verificación de derivas — sismo de diseño",
    summary:
      "Para verificar derivas por sismo de diseño deben usarse los requisitos del Capítulo A.6 con Fs sin dividir por R (1.0·E en vez de 0.7·E).",
    body: [
      {
        type: "paragraph",
        text: "Para evaluar las derivas por deflexiones horizontales causadas por el sismo de diseño, deben utilizarse los requisitos del Capítulo A.6, los cuales exigen verificar las derivas para las fuerzas sísmicas Fs sin dividir por R, empleando 1.0·E en vez de 0.7·E en las ecuaciones de B.2.3.",
      },
    ],
    related: [
      { code: "B.2.3.2", title: "Fuerzas sísmicas — esfuerzos de trabajo" },
      { code: "B.2.3.2.2", title: "Verificación de derivas — sismo de umbral de daño" },
    ],
  },

  {
    code: "B.2.3.2.2",
    title: "Verificación de derivas — sismo de umbral de daño",
    summary:
      "Para edificaciones indispensables del grupo IV, las derivas por sismo de umbral de daño se verifican con las fuerzas Ed del Capítulo A.12.",
    body: [
      {
        type: "paragraph",
        text: "Para evaluar las derivas causadas por el sismo de umbral de daño en edificaciones indispensables del grupo de uso IV, deben utilizarse los requisitos del Capítulo A.12, los cuales exigen verificar las derivas para las fuerzas sísmicas Ed.",
      },
    ],
    related: [
      { code: "B.2.3.2", title: "Fuerzas sísmicas — esfuerzos de trabajo" },
      { code: "B.2.3.2.1", title: "Verificación de derivas — sismo de diseño" },
    ],
  },

  {
    code: "B.2.4.1",
    title: "Aplicabilidad — método de resistencia",
    summary:
      "Las combinaciones de B.2.4.2 aplican a todos los materiales de la NSR-10, excepto cuando se indique explícitamente el uso del método de esfuerzos de trabajo. No deben mezclarse factores de B.2.4 con coeficientes φ de la NSR-98.",
    body: [
      {
        type: "paragraph",
        text: "Las combinaciones de carga y factores de carga de B.2.4.2 deben usarse en todos los materiales estructurales permitidos por el Reglamento, con excepción de los casos en que se indique explícitamente el uso del método de esfuerzos de trabajo (sección B.2.3.1).",
      },
      {
        type: "note",
        text: "Nota importante: Las combinaciones de B.2.4.2 contienen factores de carga menores que los de la NSR-98, pero los coeficientes de reducción de resistencia φ también son menores, siendo concordantes con la probabilidad de falla que limita el Reglamento. Es incorrecto e inseguro usar las nuevas combinaciones de carga con los valores de φ de la NSR-98.",
      },
    ],
    related: [
      { code: "B.2.4", title: "Combinaciones de cargas mayoradas — método de resistencia" },
      { code: "B.2.4.2", title: "Combinaciones básicas — método de resistencia" },
      { code: "B.2.3", title: "Combinaciones de carga — método de esfuerzos de trabajo" },
    ],
  },

  {
    code: "B.2.4.2",
    title: "Combinaciones básicas — método de resistencia",
    summary:
      "Combinaciones de cargas mayoradas para el método de resistencia. El diseño debe hacerse para que las resistencias de diseño igualen o excedan los efectos de las cargas mayoradas.",
    body: [
      {
        type: "paragraph",
        text: "El diseño de estructuras, componentes y cimentaciones debe hacerse de tal forma que las resistencias de diseño igualen o excedan los efectos producidos por las cargas mayoradas en las siguientes combinaciones:",
      },
      {
        type: "table",
        caption: "Tabla B.2-3 — Combinaciones de cargas mayoradas (método de resistencia)",
        headers: ["Ecuación", "Combinación"],
        rows: [
          ["B.2.4-1", "1.4·(D + F)"],
          ["B.2.4-2", "1.2·(D + F + T) + 1.6·(L + H) + 0.5·(Lr ó G ó Le)"],
          ["B.2.4-3", "1.2·D + 1.6·(Lr ó G ó Le) + (L ó 0.8·W)"],
          ["B.2.4-4", "1.2·D + 1.6·W + 1.0·L + 0.5·(Lr ó G ó Le)"],
          ["B.2.4-5", "1.2·D + 1.0·E + 1.0·L"],
          ["B.2.4-6", "0.9·D + 1.6·W + 1.6·H"],
          ["B.2.4-7", "0.9·D + 1.0·E + 1.6·H"],
        ],
      },
      {
        type: "subsection",
        code: "B.2.4.2.1",
        title: "Fuerzas sísmicas reducidas de diseño",
        items: [
          {
            type: "paragraph",
            text: "Las fuerzas sísmicas reducidas de diseño E usadas en B.2.4-5 y B.2.4-7 corresponden a E = Fs/R. El coeficiente de carga que afecta E es 1.0, dado que las fuerzas sísmicas están prescritas al nivel de resistencia. Para verificación de derivas, deben utilizarse los requisitos del Capítulo A.6 con las fuerzas Fs sin dividir por R.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.2.4.2.2",
        title: "Reducción del factor de carga viva",
        items: [
          {
            type: "paragraph",
            text: "Se permite reducir a 0.5 el factor de carga viva L en las combinaciones B.2.4-3, B.2.4-4 y B.2.4-5, excepto para estacionamientos, áreas ocupadas como lugares de reunión pública y todas las áreas donde L0 sea superior a 4.8 kN/m².",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.2.4.2.3",
        title: "Factor de viento sin reducción por direccionalidad",
        items: [
          {
            type: "paragraph",
            text: "Cuando las cargas de viento del Capítulo B.6 no se reducen por el factor de direccionalidad, se permite utilizar 1.3·W en lugar de 1.6·W en las combinaciones B.2.4-4 y B.2.4-6.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.2.4.2.4",
        title: "Factor de sismo al nivel de servicio",
        items: [
          {
            type: "paragraph",
            text: "En las combinaciones B.2.4-5 y B.2.4-7 se puede usar 1.4·E en lugar de 1.0·E cuando los efectos de carga por sismo E se basan en los niveles de servicio de las fuerzas sísmicas.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.2.4.2.5",
        title: "Factor de carga H en combinaciones con viento o sismo",
        items: [
          {
            type: "paragraph",
            text: "El factor de carga para H debe fijarse igual a cero en las combinaciones B.2.4-6 y B.2.4-7 si la acción estructural debida a H neutraliza las causadas por W o E. Cuando las presiones laterales del suelo proporcionan resistencia, no deben incluirse en H sino en la resistencia de diseño.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.2.4.2.6",
        title: "Efectos de impacto",
        items: [
          {
            type: "paragraph",
            text: "Si los efectos del impacto deben tenerse en cuenta en el diseño, estos deben incluirse con la carga viva L.",
          },
        ],
      },
      {
        type: "subsection",
        code: "B.2.4.2.7",
        title: "Estimativos de deformaciones diferidas y variaciones de temperatura",
        items: [
          {
            type: "paragraph",
            text: "Los estimativos de asentamientos diferenciales, flujo plástico, retracción, expansión de concretos de retracción compensada o variaciones de temperatura deben basarse en una evaluación realista de los efectos que puedan ocurrir durante la vida útil de la estructura.",
          },
        ],
      },
    ],
    related: [
      { code: "B.2.4", title: "Combinaciones de cargas mayoradas — método de resistencia" },
      { code: "B.2.4.1", title: "Aplicabilidad" },
      { code: "B.2.3.1", title: "Combinaciones básicas — esfuerzos de trabajo" },
    ],
  },

  {
    code: "B.2.4.2.1",
    title: "Fuerzas sísmicas reducidas de diseño",
    summary:
      "Las fuerzas E en B.2.4-5 y B.2.4-7 corresponden a Fs/R con coeficiente 1.0. Para derivas usar A.6 con Fs sin dividir por R.",
    body: [
      {
        type: "paragraph",
        text: "Las fuerzas sísmicas reducidas de diseño E usadas en B.2.4-5 y B.2.4-7 corresponden a E = Fs/R. El coeficiente de carga que afecta E es 1.0, dado que las fuerzas sísmicas están prescritas al nivel de resistencia. Para verificación de derivas, deben utilizarse los requisitos del Capítulo A.6 con las fuerzas Fs sin dividir por R.",
      },
    ],
    related: [
      { code: "B.2.4.2", title: "Combinaciones básicas — método de resistencia" },
      { code: "B.2.4.2.4", title: "Factor de sismo al nivel de servicio" },
    ],
  },

  {
    code: "B.2.4.2.2",
    title: "Reducción del factor de carga viva",
    summary:
      "En B.2.4-3, -4 y -5 se permite reducir L a 0.5, excepto en estacionamientos, lugares de reunión pública y zonas con L0 > 4.8 kN/m².",
    body: [
      {
        type: "paragraph",
        text: "Se permite reducir a 0.5 el factor de carga viva L en las combinaciones B.2.4-3, B.2.4-4 y B.2.4-5, excepto para estacionamientos, áreas ocupadas como lugares de reunión pública y todas las áreas donde L0 sea superior a 4.8 kN/m².",
      },
    ],
    related: [
      { code: "B.2.4.2", title: "Combinaciones básicas — método de resistencia" },
      { code: "B.2.2", title: "Nomenclatura" },
    ],
  },

  {
    code: "B.2.4.2.3",
    title: "Factor de viento sin reducción por direccionalidad",
    summary:
      "Cuando el viento no se reduce por direccionalidad, se permite usar 1.3·W en lugar de 1.6·W en B.2.4-4 y B.2.4-6.",
    body: [
      {
        type: "paragraph",
        text: "Cuando las cargas de viento del Capítulo B.6 no se reducen por el factor de direccionalidad, se permite utilizar 1.3·W en lugar de 1.6·W en las combinaciones B.2.4-4 y B.2.4-6.",
      },
    ],
    related: [
      { code: "B.2.4.2", title: "Combinaciones básicas — método de resistencia" },
      { code: "B.2.4.2.4", title: "Factor de sismo al nivel de servicio" },
    ],
  },

  {
    code: "B.2.4.2.4",
    title: "Factor de sismo al nivel de servicio",
    summary:
      "En B.2.4-5 y B.2.4-7 se puede usar 1.4·E en lugar de 1.0·E cuando las fuerzas sísmicas E se basan en nivel de servicio.",
    body: [
      {
        type: "paragraph",
        text: "En las combinaciones B.2.4-5 y B.2.4-7 se puede usar 1.4·E en lugar de 1.0·E cuando los efectos de carga por sismo E se basan en los niveles de servicio de las fuerzas sísmicas.",
      },
    ],
    related: [
      { code: "B.2.4.2", title: "Combinaciones básicas — método de resistencia" },
      { code: "B.2.4.2.1", title: "Fuerzas sísmicas reducidas de diseño" },
    ],
  },

  {
    code: "B.2.4.2.5",
    title: "Factor de carga H en combinaciones con viento o sismo",
    summary:
      "H se fija en cero en B.2.4-6 y B.2.4-7 si neutraliza los efectos de W o E. Las presiones que proporcionan resistencia van en la resistencia de diseño, no en H.",
    body: [
      {
        type: "paragraph",
        text: "El factor de carga para H debe fijarse igual a cero en las combinaciones B.2.4-6 y B.2.4-7 si la acción estructural debida a H neutraliza las causadas por W o E. Cuando las presiones laterales del suelo proporcionan resistencia, no deben incluirse en H sino en la resistencia de diseño.",
      },
    ],
    related: [
      { code: "B.2.4.2", title: "Combinaciones básicas — método de resistencia" },
      { code: "B.2.2", title: "Nomenclatura" },
    ],
  },

  {
    code: "B.2.4.2.6",
    title: "Efectos de impacto",
    summary: "Los efectos de impacto deben incluirse con la carga viva L en el diseño.",
    body: [
      {
        type: "paragraph",
        text: "Si los efectos del impacto deben tenerse en cuenta en el diseño, estos deben incluirse con la carga viva L.",
      },
    ],
    related: [
      { code: "B.2.4.2", title: "Combinaciones básicas — método de resistencia" },
      { code: "B.2.2", title: "Nomenclatura" },
    ],
  },

  {
    code: "B.2.4.2.7",
    title: "Estimativos de deformaciones diferidas y variaciones de temperatura",
    summary:
      "Los estimativos de asentamientos, flujo plástico, retracción y variaciones de temperatura deben basarse en una evaluación realista durante la vida útil.",
    body: [
      {
        type: "paragraph",
        text: "Los estimativos de asentamientos diferenciales, flujo plástico, retracción, expansión de concretos de retracción compensada o variaciones de temperatura deben basarse en una evaluación realista de los efectos que puedan ocurrir durante la vida útil de la estructura.",
      },
    ],
    related: [
      { code: "B.2.4.2", title: "Combinaciones básicas — método de resistencia" },
      { code: "B.2.1.1", title: "Definiciones" },
    ],
  },
]
