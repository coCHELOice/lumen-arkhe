import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
    const entries = await getCollection("articulos");
    const published = entries.filter((e) => !e.data.draft);
    const sorted = published.sort((a, b) => {
        const da = a.data.date ? new Date(a.data.date).getTime() : 0;
        const db = b.data.date ? new Date(b.data.date).getTime() : 0;
        return db - da;
    });

    return rss({
        title: "Lumen Arkhé",
        description: "Revista de ensayos: política, burocracia, técnica y vida pública.",
        site: context.site ?? "https://lumenarkhe.com",
        items: sorted.map((entry) => ({
            title: entry.data.title,
            description: String(entry.data.deck ?? entry.data.description ?? ""),
            pubDate: entry.data.date ?? new Date(),
            link: `/articulos/${entry.slug}/`,
        })),
        customData: `<language>es</language>`,
    });
}
