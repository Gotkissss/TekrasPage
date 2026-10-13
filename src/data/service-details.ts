// Extended content for the detailed service pages, keyed by service slug.
// A service listed here gets the full layout (hero, overview, scope, process, deliverables, CTA);
// services not listed keep the simple layout.
// Icons: web api server network mobile people search key lock eyeoff fingerprint laptop activity alert bolt sliders file bug gear

import type { Lang } from '../i18n';

type L<T = string> = Record<Lang, T>;

export type ServiceDetails = {
  overview: L; // large intro statement
  highlights: { label: L; value: L }[];
  labels?: { scope?: L; process?: L; deliverables?: L }; // small "• Label" above each section (defaults in ui.ts)
  titles: { scope: L; process: L; deliverables: L }; // big title of each section
  scope: { icon: string; title: L; text: L }[];
  process: { title: L; text: L }[];
  deliverables: { eyebrow: L; title: L; text: L }[];
  note?: L; // small line under the deliverables
  noteLink?: { label: L; service: string }; // optional link after the note → contact form with that service preselected
  cta: { title: L; text: L; button?: L }; // button defaults to "Solicitar una evaluación"
};

export const serviceDetails: Record<string, ServiceDetails> = {
  pentesting: {
    overview: {
      es: 'Evaluamos la seguridad interna y externa de su empresa mediante técnicas controladas de hacking ético, simulando ataques reales para detectar vulnerabilidades y posibles brechas de datos antes de que sean explotadas.',
      en: 'We assess your company’s internal and external security using controlled ethical hacking techniques, simulating real attacks to detect vulnerabilities and potential data breaches before they can be exploited.',
    },
    highlights: [
      { label: { es: 'Enfoque', en: 'Approach' }, value: { es: 'Hacking ético controlado', en: 'Controlled ethical hacking' } },
      { label: { es: 'Alcance', en: 'Scope' }, value: { es: 'Externo, interno y Active Directory', en: 'External, internal & Active Directory' } },
      { label: { es: 'Metodología', en: 'Methodology' }, value: { es: 'OWASP', en: 'OWASP' } },
      { label: { es: 'Entregable', en: 'Deliverable' }, value: { es: 'Informe final ejecutivo y técnico', en: 'Final executive & technical report' } },
    ],
    titles: {
      scope: { es: 'Buscamos las debilidades antes que los atacantes.', en: 'We find the weaknesses before attackers do.' },
      process: { es: 'Un método claro, de principio a fin.', en: 'A clear method, from start to finish.' },
      deliverables: { es: 'Resultados que su equipo puede usar desde el primer día.', en: 'Results your team can act on from day one.' },
    },
    scope: [
      {
        icon: 'search',
        title: { es: 'OSINT', en: 'OSINT' },
        text: {
          es: 'Inteligencia de fuentes abiertas: qué información de su empresa y su personal está expuesta y cómo podría usarla un atacante.',
          en: 'Open-source intelligence: what information about your company and staff is exposed, and how an attacker could use it.',
        },
      },
      {
        icon: 'server',
        title: { es: 'Pentesting externo', en: 'External pentesting' },
        text: {
          es: 'Todo lo que su empresa expone a internet: servidores, servicios, portales de acceso y correo.',
          en: 'Everything your company exposes to the internet: servers, services, login portals and email.',
        },
      },
      {
        icon: 'network',
        title: { es: 'Red interna y Active Directory', en: 'Internal network & Active Directory' },
        text: {
          es: 'Qué podría lograr un atacante que ya está dentro: ataques a Active Directory, movimiento lateral y compromiso del dominio.',
          en: 'What an attacker who is already inside could achieve: Active Directory attacks, lateral movement and domain compromise.',
        },
      },
      {
        icon: 'key',
        title: { es: 'Escalamiento de privilegios', en: 'Privilege escalation' },
        text: {
          es: 'En sistemas Windows y Linux: cómo un usuario sin privilegios podría llegar a tener control total del equipo.',
          en: 'On Windows and Linux systems: how an unprivileged user could gain full control of the machine.',
        },
      },
      {
        icon: 'web',
        title: { es: 'Aplicaciones web', en: 'Web applications' },
        text: {
          es: 'Autenticación, control de acceso, inyecciones y lógica de negocio, siguiendo el OWASP Top 10.',
          en: 'Authentication, access control, injection and business logic, following the OWASP Top 10.',
        },
      },
      {
        icon: 'people',
        title: { es: 'Ingeniería social', en: 'Social engineering' },
        text: {
          es: 'Campañas de phishing controladas para medir qué tan preparado está su equipo.',
          en: 'Controlled phishing campaigns to measure how prepared your team is.',
        },
      },
    ],
    process: [
      {
        title: { es: 'Alcance y reglas', en: 'Scope & rules' },
        text: {
          es: 'Definimos juntos qué se evalúa, cuándo y bajo qué condiciones, para no afectar su operación.',
          en: 'Together we define what is tested, when and under which conditions, so your operations are not affected.',
        },
      },
      {
        title: { es: 'Reconocimiento y OSINT', en: 'Reconnaissance & OSINT' },
        text: {
          es: 'Recopilamos información y mapeamos su superficie de ataque como lo haría un adversario real.',
          en: 'We gather information and map your attack surface the way a real adversary would.',
        },
      },
      {
        title: { es: 'Explotación controlada', en: 'Controlled exploitation' },
        text: {
          es: 'Aprovechamos de forma segura las vulnerabilidades encontradas para obtener un primer acceso y medir su impacto real.',
          en: 'We safely exploit the vulnerabilities we find to gain an initial foothold and measure their real impact.',
        },
      },
      {
        title: { es: 'Escalamiento y movimiento lateral', en: 'Escalation & lateral movement' },
        text: {
          es: 'Desde ese acceso, evaluamos hasta dónde podría llegar un atacante: privilegios, otros equipos y Active Directory.',
          en: 'From that foothold, we assess how far an attacker could go: privileges, other machines and Active Directory.',
        },
      },
      {
        title: { es: 'Informe final', en: 'Final report' },
        text: {
          es: 'Documentamos cada hallazgo, lo clasificamos por nivel de riesgo y le presentamos los resultados.',
          en: 'We document every finding, rank it by risk level and walk you through the results.',
        },
      },
    ],
    deliverables: [
      {
        eyebrow: { es: 'Para la dirección', en: 'For leadership' },
        title: { es: 'Resumen ejecutivo', en: 'Executive summary' },
        text: {
          es: 'Una visión clara y sin tecnicismos del nivel de riesgo de su empresa, los hallazgos críticos y las prioridades para decidir dónde invertir.',
          en: 'A clear, jargon-free view of your company’s risk level, the critical findings and the priorities for deciding where to invest.',
        },
      },
      {
        eyebrow: { es: 'Para su equipo técnico', en: 'For your technical team' },
        title: { es: 'Hallazgos técnicos', en: 'Technical findings' },
        text: {
          es: 'Cada hallazgo clasificado por nivel de riesgo, con evidencia, pasos para reproducirlo y recomendaciones de remediación.',
          en: 'Every finding ranked by risk level, with evidence, steps to reproduce it and remediation recommendations.',
        },
      },
    ],
    note: {
      es: 'El pentesting concluye con la entrega del informe final. Si lo desea, en un servicio aparte nos sentamos con su equipo a revisar cada vulnerabilidad encontrada y definir juntos cómo mitigarla.',
      en: 'The pentest concludes with the delivery of the final report. If you wish, as a separate service, we sit down with your team to go over every vulnerability we found and plan together how to mitigate it.',
    },
    noteLink: {
      label: { es: 'Consultar sobre mitigación', en: 'Ask about mitigation' },
      service: 'mitigation',
    },
    cta: {
      title: { es: '¿Listo para poner a prueba su seguridad?', en: 'Ready to put your security to the test?' },
      text: {
        es: 'Cuéntenos sobre su infraestructura y diseñaremos una evaluación a la medida de su empresa.',
        en: 'Tell us about your infrastructure and we’ll design an assessment tailored to your company.',
      },
    },
  },

  sdp: {
    overview: {
      es: 'Como representantes de Appgate en Latinoamérica, implementamos Appgate SDP, una solución de Zero Trust Network Access (ZTNA) que da a cada usuario acceso solo a las aplicaciones que necesita, sin exponer su red. Sus recursos se vuelven invisibles para los atacantes y cada conexión se verifica antes de concederse.',
      en: 'As Appgate’s representatives in Latin America, we implement Appgate SDP, a Zero Trust Network Access (ZTNA) solution that gives each user access only to the applications they need, without exposing your network. Your resources become invisible to attackers, and every connection is verified before it is granted.',
    },
    highlights: [
      { label: { es: 'Tecnología', en: 'Technology' }, value: { es: 'Appgate SDP (ZTNA universal)', en: 'Appgate SDP (Universal ZTNA)' } },
      { label: { es: 'Modelo', en: 'Model' }, value: { es: 'Acceso por identidad', en: 'Identity-based access' } },
      { label: { es: 'Despliegue', en: 'Deployment' }, value: { es: 'En la nube, local o híbrido', en: 'Cloud, on-premises or hybrid' } },
      { label: { es: 'Tekras', en: 'Tekras' }, value: { es: 'Representante en Latinoamérica', en: 'Representative in Latin America' } },
    ],
    labels: {
      scope: { es: 'Capacidades', en: 'Capabilities' },
      process: { es: 'Implementación', en: 'Implementation' },
      deliverables: { es: 'Qué Obtiene', en: 'What You Get' },
    },
    titles: {
      scope: { es: 'Lo que Appgate SDP hace por su empresa.', en: 'What Appgate SDP does for your company.' },
      process: { es: 'Una transición ordenada, sin interrumpir su operación.', en: 'An orderly transition, without disrupting your operations.' },
      deliverables: { es: 'Menos superficie de ataque, más control.', en: 'Less attack surface, more control.' },
    },
    scope: [
      {
        icon: 'eyeoff',
        title: { es: 'Infraestructura invisible', en: 'Invisible infrastructure' },
        text: {
          es: 'Con Single Packet Authorization (SPA), sus recursos no exponen puertos: solo los usuarios validados criptográficamente pueden siquiera verlos.',
          en: 'With Single Packet Authorization (SPA), your resources expose no ports: only cryptographically validated users can even see them.',
        },
      },
      {
        icon: 'sliders',
        title: { es: 'Acceso dinámico según el riesgo', en: 'Dynamic, risk-based access' },
        text: {
          es: 'Los permisos se ajustan casi en tiempo real según la identidad, el dispositivo y el contexto de cada conexión.',
          en: 'Permissions adjust in near real time based on the identity, device and context of each connection.',
        },
      },
      {
        icon: 'laptop',
        title: { es: 'Verificación del dispositivo', en: 'Device posture checks' },
        text: {
          es: 'Se evalúa el estado de seguridad de cada equipo antes de permitir el acceso, para contener dispositivos de riesgo.',
          en: 'Each device’s security posture is evaluated before access is allowed, so risky devices are contained.',
        },
      },
      {
        icon: 'network',
        title: { es: 'Microsegmentación', en: 'Microsegmentation' },
        text: {
          es: 'Cada sesión tiene su propio microperímetro: el usuario llega solo a lo autorizado y se bloquea el movimiento lateral.',
          en: 'Every session gets its own micro-perimeter: users reach only what they’re authorized for, and lateral movement is blocked.',
        },
      },
      {
        icon: 'bolt',
        title: { es: 'Enrutamiento directo', en: 'Direct routing' },
        text: {
          es: 'El tráfico va directo a sus aplicaciones, sin pasar por una nube intermedia: menos latencia y más control sobre sus datos.',
          en: 'Traffic goes straight to your applications without passing through an intermediary cloud: lower latency and more control over your data.',
        },
      },
      {
        icon: 'people',
        title: { es: 'Acceso de terceros', en: 'Third-party access' },
        text: {
          es: 'Proveedores y contratistas acceden solo a lo necesario y por tiempo limitado, incluso desde el navegador y sin instalar nada.',
          en: 'Vendors and contractors reach only what they need, for a limited time, even from a browser with nothing to install.',
        },
      },
    ],
    process: [
      {
        title: { es: 'Diagnóstico', en: 'Assessment' },
        text: {
          es: 'Mapeamos sus aplicaciones, usuarios y proveedores, y la forma en que hoy acceden a ellas.',
          en: 'We map your applications, users and vendors, and how they access them today.',
        },
      },
      {
        title: { es: 'Diseño de políticas', en: 'Policy design' },
        text: {
          es: 'Definimos en Appgate SDP quién puede acceder a qué y bajo qué condiciones.',
          en: 'We define in Appgate SDP who can access what, and under which conditions.',
        },
      },
      {
        title: { es: 'Despliegue por fases', en: 'Phased rollout' },
        text: {
          es: 'Instalamos la solución en el modelo que usted elija y empezamos por las aplicaciones más críticas.',
          en: 'We deploy the solution in the model you choose, starting with your most critical applications.',
        },
      },
      {
        title: { es: 'Migración desde la VPN', en: 'Migration from the VPN' },
        text: {
          es: 'Appgate SDP convive con su VPN actual mientras trasladamos usuarios y aplicaciones de forma progresiva.',
          en: 'Appgate SDP runs alongside your current VPN while we move users and applications over progressively.',
        },
      },
      {
        title: { es: 'Validación y entrega', en: 'Validation & handover' },
        text: {
          es: 'Probamos cada política, documentamos la configuración y le entregamos la solución funcionando.',
          en: 'We test every policy, document the configuration and hand the solution over up and running.',
        },
      },
      {
        title: { es: 'Soporte y troubleshooting', en: 'Support & troubleshooting' },
        text: {
          es: 'Después de la implementación, nuestro propio equipo diagnostica y resuelve cualquier incidencia, sin depender de terceros.',
          en: 'After implementation, our own team diagnoses and resolves any issue, with no third parties involved.',
        },
      },
    ],
    deliverables: [
      {
        eyebrow: { es: 'Para la dirección', en: 'For leadership' },
        title: { es: 'Menor riesgo, acceso simple', en: 'Lower risk, simpler access' },
        text: {
          es: 'Una superficie de ataque drásticamente menor y acceso seguro para su equipo y sus proveedores desde cualquier lugar, sin exponer la red de la empresa.',
          en: 'A drastically smaller attack surface and secure access for your team and vendors from anywhere, without exposing the company network.',
        },
      },
      {
        eyebrow: { es: 'Para su equipo técnico', en: 'For your technical team' },
        title: { es: 'Appgate SDP en operación', en: 'Appgate SDP up and running' },
        text: {
          es: 'La solución instalada, con sus políticas de acceso configuradas y documentadas, y el respaldo directo de nuestro equipo para el troubleshooting cuando lo necesite.',
          en: 'The solution deployed, with its access policies configured and documented, and direct backing from our team for troubleshooting whenever you need it.',
        },
      },
    ],
    note: {
      es: 'Appgate y Appgate SDP son marcas de Appgate. Tekras es su representante en Latinoamérica.',
      en: 'Appgate and Appgate SDP are trademarks of Appgate. Tekras is its representative in Latin America.',
    },
    cta: {
      title: { es: '¿Listo para dejar atrás la VPN?', en: 'Ready to move beyond the VPN?' },
      text: {
        es: 'Cuéntenos cómo acceden hoy sus usuarios y le mostraremos cómo Appgate SDP puede proteger su empresa.',
        en: 'Tell us how your users access your systems today and we’ll show you how Appgate SDP can protect your company.',
      },
      button: { es: 'Solicitar una asesoría', en: 'Request a consultation' },
    },
  },

  'fraud-protection': {
    overview: {
      es: 'Protegemos la integridad financiera y reputacional de su negocio mediante el monitoreo inteligente de transacciones y la detección temprana de anomalías, neutralizando intentos de fraude antes de que impacten su operación.',
      en: 'We protect your business’s financial and reputational integrity through intelligent transaction monitoring and early anomaly detection, neutralizing fraud attempts before they impact your operations.',
    },
    highlights: [
      { label: { es: 'Enfoque', en: 'Approach' }, value: { es: 'Monitoreo de transacciones', en: 'Transaction monitoring' } },
      { label: { es: 'Detección', en: 'Detection' }, value: { es: 'Temprana, basada en anomalías', en: 'Early, anomaly-based' } },
      { label: { es: 'Respuesta', en: 'Response' }, value: { es: 'Inmediata', en: 'Immediate' } },
      { label: { es: 'Protege', en: 'Protects' }, value: { es: 'Sus finanzas y su reputación', en: 'Your finances & reputation' } },
    ],
    labels: {
      scope: { es: 'Qué Incluye', en: 'What’s Included' },
      process: { es: 'Cómo Funciona', en: 'How It Works' },
      deliverables: { es: 'Qué Obtiene', en: 'What You Get' },
    },
    titles: {
      scope: { es: 'Detectamos el fraude antes de que se concrete.', en: 'We catch fraud before it happens.' },
      process: { es: 'Protección continua, en cuatro pasos.', en: 'Continuous protection, in four steps.' },
      deliverables: { es: 'Menos pérdidas, más confianza.', en: 'Fewer losses, more trust.' },
    },
    scope: [
      {
        icon: 'activity',
        title: { es: 'Monitoreo de transacciones', en: 'Transaction monitoring' },
        text: {
          es: 'Análisis continuo de las transacciones para identificar patrones fuera de lo normal.',
          en: 'Continuous analysis of transactions to identify patterns out of the ordinary.',
        },
      },
      {
        icon: 'alert',
        title: { es: 'Detección de anomalías', en: 'Anomaly detection' },
        text: {
          es: 'Señales tempranas de actividad sospechosa: montos, horarios, ubicaciones o comportamientos atípicos.',
          en: 'Early signs of suspicious activity: unusual amounts, times, locations or behavior.',
        },
      },
      {
        icon: 'bolt',
        title: { es: 'Respuesta inmediata', en: 'Immediate response' },
        text: {
          es: 'Ante una anomalía, se activa la respuesta para contener el intento antes de que genere pérdidas.',
          en: 'When an anomaly is detected, a response kicks in to contain the attempt before it causes losses.',
        },
      },
      {
        icon: 'fingerprint',
        title: { es: 'Suplantación de identidad', en: 'Account takeover' },
        text: {
          es: 'Detección de intentos de tomar el control de cuentas y del uso de credenciales robadas.',
          en: 'Detection of attempts to take over accounts and of the use of stolen credentials.',
        },
      },
      {
        icon: 'sliders',
        title: { es: 'Reglas a la medida', en: 'Tailored rules' },
        text: {
          es: 'Criterios de detección adaptados a su negocio, sus canales y sus tipos de transacción.',
          en: 'Detection criteria adapted to your business, your channels and your transaction types.',
        },
      },
      {
        icon: 'file',
        title: { es: 'Reportes de incidentes', en: 'Incident reports' },
        text: {
          es: 'Informes de los intentos detectados y de las tendencias, para tomar mejores decisiones.',
          en: 'Reports on detected attempts and trends, so you can make better decisions.',
        },
      },
    ],
    process: [
      {
        title: { es: 'Análisis de su operación', en: 'Understanding your operation' },
        text: {
          es: 'Conocemos sus canales, sus tipos de transacción y los riesgos propios de su negocio.',
          en: 'We learn your channels, your transaction types and the risks specific to your business.',
        },
      },
      {
        title: { es: 'Configuración', en: 'Setup' },
        text: {
          es: 'Definimos las reglas y los umbrales de detección para su caso.',
          en: 'We define the detection rules and thresholds for your case.',
        },
      },
      {
        title: { es: 'Monitoreo continuo', en: 'Continuous monitoring' },
        text: {
          es: 'Vigilamos las transacciones de forma permanente en busca de anomalías.',
          en: 'We keep a permanent watch on transactions, looking for anomalies.',
        },
      },
      {
        title: { es: 'Respuesta y mejora', en: 'Response & improvement' },
        text: {
          es: 'Actuamos ante cada alerta y ajustamos las reglas a medida que cambian los patrones de fraude.',
          en: 'We act on every alert and fine-tune the rules as fraud patterns change.',
        },
      },
    ],
    deliverables: [
      {
        eyebrow: { es: 'Para la dirección', en: 'For leadership' },
        title: { es: 'Tranquilidad financiera', en: 'Financial peace of mind' },
        text: {
          es: 'Menos pérdidas por fraude, una reputación protegida y visibilidad clara de los riesgos a los que está expuesto su negocio.',
          en: 'Fewer fraud losses, a protected reputation and clear visibility of the risks your business is exposed to.',
        },
      },
      {
        eyebrow: { es: 'Para su equipo', en: 'For your team' },
        title: { es: 'Alertas accionables', en: 'Actionable alerts' },
        text: {
          es: 'Alertas claras y con contexto, para saber qué ocurrió y actuar con rapidez.',
          en: 'Clear alerts with context, so your team knows what happened and can act fast.',
        },
      },
    ],
    cta: {
      title: { es: '¿Qué tan expuesto al fraude está su negocio?', en: 'How exposed to fraud is your business?' },
      text: {
        es: 'Cuéntenos sobre sus canales y transacciones y le propondremos un esquema de protección a la medida.',
        en: 'Tell us about your channels and transactions and we’ll propose a tailored protection plan.',
      },
      button: { es: 'Solicitar una asesoría', en: 'Request a consultation' },
    },
  },

  'vulnerability-audit': {
    overview: {
      es: 'Realizamos un examen exhaustivo de sus aplicaciones, sistemas operativos y redes para identificar debilidades de seguridad conocidas y desconocidas. Mediante escaneos automatizados y análisis manual profundo, detectamos configuraciones erróneas y software desactualizado.',
      en: 'We perform a thorough examination of your applications, operating systems and networks to identify known and unknown security weaknesses. Through automated scans and in-depth manual analysis, we detect misconfigurations and outdated software.',
    },
    highlights: [
      { label: { es: 'Alcance', en: 'Scope' }, value: { es: 'Aplicaciones, sistemas y redes', en: 'Applications, systems & networks' } },
      { label: { es: 'Método', en: 'Method' }, value: { es: 'Escaneo automatizado + análisis manual', en: 'Automated scanning + manual analysis' } },
      { label: { es: 'Detecta', en: 'Detects' }, value: { es: 'Fallas conocidas y desconocidas', en: 'Known & unknown flaws' } },
      { label: { es: 'Entregable', en: 'Deliverable' }, value: { es: 'Plan de remediación detallado', en: 'Detailed remediation plan' } },
    ],
    titles: {
      scope: { es: 'Cerramos las puertas antes de que alguien las encuentre.', en: 'We close the doors before anyone finds them.' },
      process: { es: 'Del inventario al plan de acción.', en: 'From inventory to action plan.' },
      deliverables: { es: 'Un plan claro para cerrar cada brecha.', en: 'A clear plan to close every gap.' },
    },
    scope: [
      {
        icon: 'web',
        title: { es: 'Aplicaciones', en: 'Applications' },
        text: {
          es: 'Versiones, dependencias y configuración de sus aplicaciones y servicios web.',
          en: 'Versions, dependencies and configuration of your applications and web services.',
        },
      },
      {
        icon: 'server',
        title: { es: 'Sistemas operativos', en: 'Operating systems' },
        text: {
          es: 'Servidores y equipos Windows y Linux: parches faltantes, servicios innecesarios y configuraciones inseguras.',
          en: 'Windows and Linux servers and machines: missing patches, unnecessary services and insecure settings.',
        },
      },
      {
        icon: 'network',
        title: { es: 'Redes', en: 'Networks' },
        text: {
          es: 'Dispositivos, puertos y servicios expuestos dentro y fuera de su red.',
          en: 'Devices, ports and services exposed inside and outside your network.',
        },
      },
      {
        icon: 'bug',
        title: { es: 'Vulnerabilidades conocidas', en: 'Known vulnerabilities' },
        text: {
          es: 'Comparamos su software contra las bases públicas de vulnerabilidades (CVE).',
          en: 'We check your software against public vulnerability databases (CVE).',
        },
      },
      {
        icon: 'search',
        title: { es: 'Análisis manual', en: 'Manual analysis' },
        text: {
          es: 'Revisamos lo que las herramientas automáticas no ven y descartamos los falsos positivos.',
          en: 'We review what automated tools miss and rule out false positives.',
        },
      },
      {
        icon: 'gear',
        title: { es: 'Configuración y actualizaciones', en: 'Configuration & updates' },
        text: {
          es: 'Detectamos configuraciones erróneas y software desactualizado, las causas más comunes de un incidente.',
          en: 'We detect misconfigurations and outdated software, the most common causes of an incident.',
        },
      },
    ],
    process: [
      {
        title: { es: 'Alcance e inventario', en: 'Scope & inventory' },
        text: {
          es: 'Definimos junto a usted qué aplicaciones, sistemas y redes se evalúan.',
          en: 'Together we define which applications, systems and networks are assessed.',
        },
      },
      {
        title: { es: 'Escaneo automatizado', en: 'Automated scanning' },
        text: {
          es: 'Recorremos cada activo con herramientas especializadas en busca de debilidades.',
          en: 'We sweep every asset with specialized tools, looking for weaknesses.',
        },
      },
      {
        title: { es: 'Análisis manual', en: 'Manual analysis' },
        text: {
          es: 'Validamos cada resultado y buscamos lo que los escáneres no pueden detectar.',
          en: 'We validate every result and look for what scanners can’t detect.',
        },
      },
      {
        title: { es: 'Priorización', en: 'Prioritization' },
        text: {
          es: 'Clasificamos cada vulnerabilidad por nivel de riesgo e impacto en su negocio.',
          en: 'We rank every vulnerability by risk level and business impact.',
        },
      },
      {
        title: { es: 'Plan de remediación', en: 'Remediation plan' },
        text: {
          es: 'Le entregamos un plan detallado y priorizado para cerrar cada brecha.',
          en: 'We deliver a detailed, prioritized plan to close every gap.',
        },
      },
    ],
    deliverables: [
      {
        eyebrow: { es: 'Para la dirección', en: 'For leadership' },
        title: { es: 'Resumen de riesgo', en: 'Risk summary' },
        text: {
          es: 'Una visión clara del estado de seguridad de su software, los riesgos más importantes y dónde actuar primero.',
          en: 'A clear view of your software’s security posture, the most important risks and where to act first.',
        },
      },
      {
        eyebrow: { es: 'Para su equipo técnico', en: 'For your technical team' },
        title: { es: 'Plan de remediación', en: 'Remediation plan' },
        text: {
          es: 'Cada vulnerabilidad priorizada por riesgo, con evidencia y los pasos concretos para corregirla.',
          en: 'Every vulnerability prioritized by risk, with evidence and the concrete steps to fix it.',
        },
      },
    ],
    note: {
      es: 'La auditoría concluye con la entrega del plan de remediación. La implementación de las correcciones se ofrece como un servicio de mitigación independiente.',
      en: 'The audit concludes with the delivery of the remediation plan. Implementing the fixes is offered as a separate mitigation service.',
    },
    cta: {
      title: { es: '¿Sabe qué vulnerabilidades tiene hoy su software?', en: 'Do you know what vulnerabilities your software has today?' },
      text: {
        es: 'Cuéntenos qué sistemas quiere evaluar y le propondremos un alcance a la medida.',
        en: 'Tell us which systems you want assessed and we’ll propose a tailored scope.',
      },
    },
  },
};
