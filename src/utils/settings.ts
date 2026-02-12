import { getEntry } from "astro:content";

export async function getSiteSettings() {
    const result = await getEntry("settings", "global");
    const data = (result?.data || {}) as Record<string, any>;

    return {
        siteTitle: data.siteTitle ?? "Lumen Arkhé",
        siteDescription: data.siteDescription ?? "Ensayos sobre política, técnica y vida pública.",
        twitterUrl: data.twitterUrl ?? "",
        instagramUrl: data.instagramUrl ?? "",
        substackUrl: data.substackUrl ?? "https://gregorioaugusto.substack.com/subscribe",
        newsletterTitle: data.newsletterTitle ?? "Suscríbete al boletín",
        newsletterText: data.newsletterText ?? "Recibe nuevos ensayos y actualizaciones directamente en tu correo.",
    };
}
