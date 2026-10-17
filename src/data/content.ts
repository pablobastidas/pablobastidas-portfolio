import { getCollection, type CollectionEntry } from "astro:content";

export type SiteContent = CollectionEntry<"site">["data"];
export type SiteLanguage = SiteContent["lang"];

export async function loadSiteContent(lang: SiteLanguage): Promise<SiteContent> {
  const entries = await getCollection("site");
  const entry = entries.find((candidate) => candidate.data.lang === lang);

  if (!entry) {
    throw new Error(`Missing portfolio content for language: ${lang}`);
  }

  return entry.data;
}
