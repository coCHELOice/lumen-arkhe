/**
 * Diccionario de traducciones UI — Lumen Arkhé
 *
 * Clave: identificador dot-notation
 * Valor: { es: "...", en: "..." }
 */

const ui = {
    /* ── Header / Nav ─────────────────────────── */
    "nav.ensayos": { es: "Ensayos", en: "Essays" },
    "nav.resenas": { es: "Reseñas", en: "Reviews" },
    "nav.cronica": { es: "Crónica", en: "Chronicle" },
    "nav.archivo": { es: "Archivo PDF", en: "PDF Archive" },
    "nav.newsletter": { es: "Newsletter", en: "Newsletter" },
    "nav.busqueda": { es: "Búsqueda", en: "Search" },
    "nav.ingresa": { es: "Ingresa", en: "Sign In" },
    "nav.abrir_menu": { es: "Abrir menú", en: "Open menu" },

    /* ── Hero / Home ──────────────────────────── */
    "hero.destacado": { es: "Destacado", en: "Featured" },
    "hero.abrir": { es: "Abrir", en: "Open" },
    "hero.destacados": { es: "Destacados", en: "Featured" },
    "home.articulos_destacados": { es: "Artículos destacados", en: "Featured articles" },
    "home.temas": { es: "Temas", en: "Topics" },

    /* ── Newsletter popup ─────────────────────── */
    "nl.titulo": { es: "Newsletter", en: "Newsletter" },
    "nl.desc": { es: "Recibe ensayos y actualizaciones editoriales (sin spam).", en: "Receive essays and editorial updates (no spam)." },
    "nl.cerrar": { es: "Cerrar", en: "Close" },
    "nl.form_label": { es: "Formulario de suscripción", en: "Subscription form" },
    "nl.alt": { es: "Si no carga el formulario:", en: "If the form doesn't load:" },
    "nl.alt_link": { es: "suscríbete aquí", en: "subscribe here" },
    "nl.iframe_title": { es: "Suscripción Substack", en: "Substack Subscription" },

    /* ── Newsletter page ──────────────────────── */
    "nlp.titulo": { es: "Suscripción", en: "Subscribe" },
    "nlp.desc": { es: "Recibe ensayos y actualizaciones editoriales (sin spam).", en: "Receive essays and editorial updates (no spam)." },
    "nlp.formulario": { es: "Formulario", en: "Form" },
    "nlp.toma": { es: "Toma 10 segundos.", en: "Takes 10 seconds." },
    "nlp.alt": { es: "Si no carga el formulario:", en: "If the form doesn't load:" },
    "nlp.alt_link": { es: "suscríbete aquí", en: "subscribe here" },
    "nlp.volver": { es: "← Volver al Home", en: "← Back to Home" },
    "nlp.que_recibiras": { es: "Qué recibirás", en: "What you'll receive" },
    "nlp.li1": { es: "Ensayos: política, burocracia, técnica y vida pública.", en: "Essays: politics, bureaucracy, technology and public life." },
    "nlp.li2": { es: "Archivo curado: textos recomendados y relecturas.", en: "Curated archive: recommended texts and re-readings." },
    "nlp.li3": { es: "Notas breves: avances editoriales y publicaciones.", en: "Brief notes: editorial updates and publications." },
    "nlp.frecuencia": { es: "Frecuencia: 1–2 envíos por semana (aprox.).", en: "Frequency: 1–2 emails per week (approx.)." },
    "nlp.baja": { es: "Puedes darte de baja en cualquier momento. Tu correo no se comparte.", en: "You can unsubscribe at any time. Your email is never shared." },

    /* ── Footer ───────────────────────────────── */
    "foot.desc": { es: "Revista de ensayos: política, burocracia, técnica y vida pública.", en: "Essay journal: politics, bureaucracy, technology and public life." },
    "foot.secciones": { es: "Secciones", en: "Sections" },
    "foot.mas": { es: "Más", en: "More" },
    "foot.sobre": { es: "Sobre Lumen Arkhé", en: "About Lumen Arkhé" },
    "foot.derechos": { es: "Todos los derechos reservados.", en: "All rights reserved." },

    /* ── Sobre (About) ───────────────────────── */
    "sobre.kicker": { es: "Sobre", en: "About" },
    "sobre.h1": { es: "Qué es Lumen Arkhé", en: "What is Lumen Arkhé" },
    "sobre.lede": { es: "Revista de ensayos y archivo: política, burocracia, técnica y vida pública. Lectura larga, series y dossier.", en: "Essay journal and archive: politics, bureaucracy, technology and public life. Long reads, series and dossiers." },
    "sobre.contacto": { es: "Contacto", en: "Contact" },
    "sobre.volver": { es: "← Volver al inicio", en: "← Back to home" },

    /* ── Series ───────────────────────────────── */
    "series.kicker": { es: "Series", en: "Series" },
    "series.h1": { es: "Series y dossiers", en: "Series & dossiers" },
    "series.lede": { es: "Investigaciones editoriales de largo aliento, publicadas en entregas sucesivas.", en: "Long-form editorial investigations, published in successive installments." },
    "series.en_desarrollo": { es: "En desarrollo", en: "In development" },
    "series.en_preparacion": { es: "En preparación", en: "In preparation" },
    "series.volver": { es: "← Volver al inicio", en: "← Back to home" },

    /* ── Series contenido ─────────────────────── */
    "series.burocracia.title": { es: "Burocracia mínima", en: "Minimal Bureaucracy" },
    "series.burocracia.desc": { es: "Exploración de las estructuras burocráticas y su impacto en la vida pública contemporánea.", en: "Exploration of bureaucratic structures and their impact on contemporary public life." },
    "series.tecnica.title": { es: "Técnica y límite material", en: "Technology and Material Limits" },
    "series.tecnica.desc": { es: "Reflexiones sobre los márgenes de la técnica y las restricciones materiales del hacer.", en: "Reflections on the margins of technology and the material constraints of making." },
    "series.promesa.title": { es: "Promesa pública y régimen de métricas", en: "Public Promise and Metrics Regime" },
    "series.promesa.desc": { es: "Análisis del discurso público, la cuantificación y la rendición de cuentas.", en: "Analysis of public discourse, quantification and accountability." },

    /* ── PDF / Archive ────────────────────────── */
    "pdf.kicker": { es: "ARCHIVO", en: "ARCHIVE" },
    "pdf.titulo": { es: "PDF", en: "PDF" },
    "pdf.sub": { es: "Números semestrales listos para imprimir / vender.", en: "Biannual issues ready to print / sell." },
    "pdf.vacio": { es: "Aún no hay números publicados.", en: "No issues published yet." },
    "pdf.abrir": { es: "Abrir PDF", en: "Open PDF" },
    "pdf.ver_numero": { es: "Ver número", en: "View issue" },
    "pdf.exportar": { es: "Exportar PDF", en: "Export PDF" },
    "pdf.comprar": { es: "Comprar", en: "Buy" },
    "pdf.nota": { es: "Los artículos siguen disponibles en web. El PDF es la edición maquetada (colección).", en: "Articles remain available online. The PDF is the typeset edition (collection)." },

    /* ── Artículos (index) ────────────────────── */
    "art.titulo": { es: "Artículos", en: "Articles" },
    "art.archivo": { es: "Archivo editorial.", en: "Editorial archive." },
    "art.buscar": { es: "Buscar", en: "Search" },
    "art.placeholder": { es: "Búsqueda", en: "Search" },
    "art.limpiar": { es: "Limpiar filtros", en: "Clear filters" },
    "art.seccion": { es: "Sección", en: "Section" },
    "art.tema": { es: "Tema", en: "Topic" },
    "art.resultados": { es: "Resultados", en: "Results" },

    /* ── Issue detail ─────────────────────────── */
    "issue.back_pdf": { es: "← Archivo PDF", en: "← PDF Archive" },
    "issue.back_art": { es: "Artículos", en: "Articles" },
    "issue.kicker": { es: "NÚMERO", en: "ISSUE" },
    "issue.abrir_pdf": { es: "Abrir PDF", en: "Open PDF" },
    "issue.comprar_pdf": { es: "Comprar PDF", en: "Buy PDF" },
    "issue.exportar": { es: "Exportar (Ctrl+P)", en: "Export (Ctrl+P)" },
    "issue.nota": { es: "Web: artículos públicos. PDF: edición maquetada (colección) para vender.", en: "Web: public articles. PDF: typeset edition (collection) for sale." },
    "issue.indice": { es: "Índice", en: "Contents" },
    "issue.sin_articulos": { es: "Este número no tiene artículos (slugs vacíos o inválidos).", en: "This issue has no articles (empty or invalid slugs)." },
    "issue.muestra": { es: "Muestra", en: "Preview" },
    "issue.muestra_desc": { es: "Esta página muestra el índice y enlaces a los artículos. El PDF del número (maquetado) es el producto vendible. En local (DEV) puedes ver el número completo y exportarlo.", en: "This page shows the table of contents and links to articles. The issue PDF (typeset) is the sellable product. In local (DEV) you can view the full issue and export it." },
    "issue.ver_web": { es: "Ver en web", en: "View online" },

    /* ── Artículo detalle ─────────────────────── */
    "artd.obra": { es: "Obra", en: "Work" },
    "artd.hecho": { es: "Hecho", en: "Fact" },
    "artd.no_encontrado": { es: "Artículo no encontrado", en: "Article not found" },

    /* ── Meta / SEO ───────────────────────────── */
    "meta.desc_home": { es: "Revista de ensayos: política, burocracia, técnica y vida pública.", en: "Essay journal: politics, bureaucracy, technology and public life." },
    "meta.desc_sobre": { es: "Acerca de Lumen Arkhé.", en: "About Lumen Arkhé." },
    "meta.desc_series": { es: "Series y dossiers en desarrollo.", en: "Series and dossiers in development." },
    "meta.desc_pdf": { es: "Números semestrales listos para imprimir / vender.", en: "Biannual issues ready to print / sell." },
    "meta.desc_art": { es: "Archivo de textos.", en: "Text archive." },
} as const;

export type UIKey = keyof typeof ui;

import type { Lang } from "./languages";

/**
 * Devuelve la traducción de una clave para el idioma dado.
 */
export function t(key: UIKey, lang: Lang): string {
    const entry = ui[key];
    if (!entry) return key;
    return entry[lang] ?? entry["es"];
}

export default ui;
