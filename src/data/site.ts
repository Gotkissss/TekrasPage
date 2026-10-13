// Company info and service content. Edit texts here; every page reads from this file.
// Texts that change with the language have an `es` and an `en` version.
// Interface texts (buttons, labels, form) live in src/i18n/ui.ts.

import type { Lang } from '../i18n';

type Localized<T = string> = Record<Lang, T>;

export const site = {
  name: 'Tekras',
  description: {
    es: 'Consultora de ciberseguridad en Guatemala: pentesting, Appgate SDP, protección contra fraude y auditoría de vulnerabilidades.',
    en: 'Cybersecurity consultancy in Guatemala: pentesting, Appgate SDP, fraud protection and vulnerability audits.',
  } as Localized,
  phone: '+502 3647-9866',
  phoneHref: 'tel:+50236479866',
  email: 'ventas@tekras.com',
  office: {
    line1: '30 Calle 23-10 Hacienda Real',
    line2: 'Guatemala, Guatemala',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=30+Calle+23-10+Hacienda+Real+Guatemala',
  },
  rep: {
    role: { es: 'Gerente de Ventas', en: 'Sales Manager' } as Localized,
    company: { es: 'En Tekras®', en: 'At Tekras®' } as Localized,
    name: 'Cecilia Amezquita',
    // Pre-shrunk versions at the exact display size (100×116) so fine pencil lines don't turn into moiré
    photo: '/images/team/gerente-ventas-card-1x.jpg',
    photoSet: '/images/team/gerente-ventas-card-1x.jpg 1x, /images/team/gerente-ventas-card-2x.jpg 2x, /images/team/gerente-ventas-card-3x.jpg 3x',
  },
};

export type Service = {
  slug: string;
  icon: string; // name in src/data/icons.ts
  tags: Localized<string[]>; // short technical tags on the home card
  image: string;
  date: string; // YYYY-MM-DD, shown in each language's format
  title: Localized;
  summary: Localized;
  body: Localized<string[]>;
};

// Order matters: it is the order of the home grid, the footer and the "‹ previous" links.
export const services: Service[] = [
  {
    slug: 'pentesting',
    icon: 'target',
    tags: { es: ['OWASP', 'Active Directory', 'OSINT'], en: ['OWASP', 'Active Directory', 'OSINT'] },
    image: '/images/pentesting.png',
    date: '2025-06-11',
    title: { es: 'Pentesting', en: 'Pentesting' },
    summary: {
      es: 'Simulamos ataques reales sobre su red, sus aplicaciones y su Active Directory para encontrar las vulnerabilidades antes que un atacante, y le entregamos un plan priorizado para corregirlas.',
      en: 'We simulate real attacks on your network, applications and Active Directory to find vulnerabilities before an attacker does, and hand you a prioritized plan to fix them.',
    },
    body: {
      es: [
        'Evaluamos la seguridad interna y externa de su empresa mediante técnicas controladas de hacking ético, simulando ataques reales para detectar vulnerabilidades y posibles brechas de datos antes de que sean explotadas.',
        'Entregamos un informe ejecutivo y técnico, con los hallazgos priorizados por nivel de riesgo y recomendaciones claras y accionables para su mitigación y el fortalecimiento de la postura de seguridad.',
      ],
      en: [
        'We assess your company’s internal and external security using controlled ethical hacking techniques, simulating real attacks to detect vulnerabilities and potential data breaches before they can be exploited.',
        'We deliver an executive and technical report, with findings prioritized by risk level and clear, actionable recommendations to mitigate them and strengthen your security posture.',
      ],
    },
  },
  {
    slug: 'sdp',
    icon: 'lock',
    tags: { es: ['Zero Trust', 'ZTNA', 'Reemplazo de VPN'], en: ['Zero Trust', 'ZTNA', 'VPN replacement'] },
    image: '/images/sdp.png',
    date: '2025-07-30',
    title: { es: 'Perímetro Definido por Software', en: 'Software Defined Perimeter' },
    summary: {
      es: 'Implementamos Appgate SDP: acceso Zero Trust basado en identidad que oculta sus aplicaciones críticas a usuarios no autorizados y reemplaza a la VPN tradicional.',
      en: 'We implement Appgate SDP: identity-based Zero Trust access that hides your critical applications from unauthorized users and replaces the traditional VPN.',
    },
    body: {
      es: [
        'Implementamos una arquitectura de Perímetro Definido por Software (SDP) basada en el modelo de Zero Trust, donde la infraestructura deja de estar expuesta a usuarios no autorizados. A diferencia de las VPN tradicionales, SDP autentica la identidad del usuario y la seguridad del dispositivo antes de conceder acceso limitado a aplicaciones específicas, limitando el movimiento lateral y reduciendo la superficie de ataque.',
      ],
      en: [
        'We implement a Software Defined Perimeter (SDP) architecture based on the Zero Trust model, in which your infrastructure is no longer exposed to unauthorized users. Unlike traditional VPNs, SDP verifies the user’s identity and the device’s security before granting limited access to specific applications, limiting lateral movement and reducing the attack surface.',
      ],
    },
  },
  {
    slug: 'fraud-protection',
    icon: 'activity',
    tags: { es: ['Transacciones', 'Anomalías', 'Canales digitales'], en: ['Transactions', 'Anomalies', 'Digital channels'] },
    image: '/images/fraud-protection.png',
    date: '2025-05-14',
    title: { es: 'Protección contra Fraude', en: 'Fraud Protection' },
    summary: {
      es: 'Detectamos señales de fraude en sus transacciones y canales digitales para que pueda actuar antes de que se conviertan en pérdidas.',
      en: 'We detect signs of fraud in your transactions and digital channels so you can act before they turn into losses.',
    },
    body: {
      es: [
        'Protegemos la integridad financiera y reputacional de su negocio mediante el monitoreo inteligente de transacciones y la detección temprana de anomalías, neutralizando intentos de fraude antes de que impacten su operación.',
      ],
      en: [
        'We protect your business’s financial and reputational integrity through intelligent transaction monitoring and early anomaly detection, neutralizing fraud attempts before they impact your operations.',
      ],
    },
  },
  {
    slug: 'vulnerability-audit',
    icon: 'search',
    tags: { es: ['Escaneo', 'Análisis manual', 'Remediación'], en: ['Scanning', 'Manual analysis', 'Remediation'] },
    image: '/images/vulnerability-audit.png',
    date: '2025-06-12',
    title: { es: 'Auditoría de Vulnerabilidades de Software', en: 'Software Vulnerability Audit' },
    summary: {
      es: 'Revisamos sus aplicaciones, sistemas y redes para identificar y priorizar las vulnerabilidades conocidas, con un plan de remediación claro para su equipo.',
      en: 'We review your applications, systems and networks to identify and prioritize known vulnerabilities, with a clear remediation plan for your team.',
    },
    body: {
      es: [
        'Realizamos un examen exhaustivo de sus aplicaciones, sistemas operativos y redes para identificar debilidades de seguridad conocidas y desconocidas. Mediante escaneos automatizados y análisis manual profundo, detectamos configuraciones erróneas y software desactualizado, entregando un plan de remediación detallado que cierra las puertas a los exploits más comunes del mercado.',
      ],
      en: [
        'We perform a thorough examination of your applications, operating systems and networks to identify known and unknown security weaknesses. Through automated scans and in-depth manual analysis, we detect misconfigurations and outdated software, delivering a detailed remediation plan that shuts the door on the most common exploits.',
      ],
    },
  },
];

export const formatDate = (iso: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'es' ? 'es-GT' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(iso));

// Frameworks shown in the home trust strip.
export const standards = ['OWASP WSTG', 'PTES', 'NIST SP 800-115', 'MITRE ATT&CK', 'NIST SP 800-207'];
