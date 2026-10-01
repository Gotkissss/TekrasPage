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

// Hero: "<prefix> <word>", cycling through the words. Colors are shared by both languages.
export const hero = {
  prefix: { es: 'tekras es', en: 'tekras is' } as Localized,
  words: [
    { color: 'rgb(176, 181, 87)', text: { es: 'tecnología', en: 'technology' } as Localized },
    { color: 'rgb(191, 124, 49)', text: { es: 'disponibilidad', en: 'availability' } as Localized },
    { color: 'rgb(159, 53, 27)', text: { es: 'confiabilidad', en: 'reliability' } as Localized },
    { color: 'rgb(32, 77, 145)', text: { es: 'soporte', en: 'serviceability' } as Localized },
  ],
};

export type Service = {
  slug: string;
  image: string;
  date: string; // YYYY-MM-DD, shown in each language's format
  title: Localized;
  summary: Localized;
  body: Localized<string[]>;
};

// Order matters: it is the order of the home grid, the footer and the "‹ previous" links.
export const services: Service[] = [
  {
    slug: 'luna-craft',
    image: '/images/pentesting.png',
    date: '2025-06-11',
    title: { es: 'Pentesting', en: 'Pentesting' },
    summary: {
      es: 'Fortalecemos su empresa mediante hacking ético preventivo, transformando vulnerabilidades detectadas en estrategias de blindaje accionables.',
      en: 'We strengthen your company through preventive ethical hacking, turning the vulnerabilities we find into actionable hardening strategies.',
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
    image: '/images/sdp.png',
    date: '2025-07-30',
    title: { es: 'Perímetro Definido por Software', en: 'Software Defined Perimeter' },
    summary: {
      es: 'Implementamos Appgate SDP para volver invisible su infraestructura crítica, con acceso seguro basado en identidad que reemplaza a la VPN tradicional.',
      en: 'We implement Appgate SDP to make your critical infrastructure invisible, with secure, identity-based access that replaces the traditional VPN.',
    },
    body: {
      es: [
        'Implementamos una arquitectura de Perímetro Definido por Software (SDP) basada en el modelo de Zero Trust, donde la infraestructura se vuelve invisible para los atacantes. A diferencia de las VPN tradicionales, SDP autentica la identidad del usuario y la seguridad del dispositivo antes de conceder acceso limitado a aplicaciones específicas, eliminando el movimiento lateral de amenazas y reduciendo drásticamente la superficie de ataque.',
      ],
      en: [
        'We implement a Software Defined Perimeter (SDP) architecture based on the Zero Trust model, in which your infrastructure becomes invisible to attackers. Unlike traditional VPNs, SDP verifies the user’s identity and the device’s security before granting limited access to specific applications, eliminating the lateral movement of threats and drastically reducing the attack surface.',
      ],
    },
  },
  {
    slug: 'fraud-protection',
    image: '/images/fraud-protection.png',
    date: '2025-05-14',
    title: { es: 'Protección contra Fraude', en: 'Fraud Protection' },
    summary: {
      es: 'Neutralizamos intentos de fraude mediante monitoreo inteligente y respuesta inmediata ante cualquier anomalía.',
      en: 'We neutralize fraud attempts through intelligent monitoring and an immediate response to any anomaly.',
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
    slug: 'brand-forge',
    image: '/images/vulnerability-audit.png',
    date: '2025-06-12',
    title: { es: 'Auditoría de Vulnerabilidades de Software', en: 'Software Vulnerability Audit' },
    summary: {
      es: 'Identificamos y cerramos las brechas de seguridad en su software antes de que los atacantes las conviertan en su punto de entrada.',
      en: 'We identify and close the security gaps in your software before attackers turn them into their way in.',
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
