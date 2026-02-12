/**
 * Sistema i18n de Lumen Arkhé
 * Soporta: es (español, por defecto) y en (inglés)
 */

export type Lang = "es" | "en";
export const defaultLang: Lang = "es";
export const supportedLangs: Lang[] = ["es", "en"];

/**
 * Detecta el idioma a partir de la URL.
 * Si la ruta empieza con /en/ → "en", de lo contrario → "es"
 */
export function getLangFromUrl(url: URL): Lang {
    const seg = url.pathname.split("/").filter(Boolean);
    if (seg[0] === "en") return "en";
    return "es";
}

/**
 * Devuelve el prefijo de ruta: "" para español, "/en" para inglés
 */
export function langPrefix(lang: Lang): string {
    return lang === "es" ? "" : "/en";
}

/**
 * Dado un pathname actual, devuelve la URL equivalente del otro idioma
 */
export function switchLangPath(pathname: string, targetLang: Lang): string {
    // quitar /en/ del inicio si existe
    const clean = pathname.replace(/^\/en(\/|$)/, "/");
    if (targetLang === "es") return clean || "/";
    return `/en${clean === "/" ? "" : clean}` || "/en";
}
