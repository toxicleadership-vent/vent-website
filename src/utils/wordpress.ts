// Page ID mapping for easy reference
const PAGE_IDS = {
  imprint: 19,
  contact: 56,
} as const

// Generic WordPress page fetcher with robust error handling
export async function fetchWordPressPage(
  pageId: number,
  lang: string
): Promise<any> {
  const res = await fetch(
    `https://vent.great-site.net/wp-json/acf/v3/pages/${pageId}?lang=${lang}`,
    {
      // No revalidation - content is generated at build time
      next: {
        tags: [`wordpress-page-${pageId}-${lang}`], // Cache tag for manual invalidation only
      },
    }
  )

  if (!res.ok) {
    throw new Error(`WordPress API returned ${res.status} for page ${pageId}`)
  }

  const data = await res.json()

  // Validate the response structure
  if (!data.acf) {
    throw new Error(
      `WordPress API returned invalid data structure for page ${pageId}`
    )
  }

  return data.acf
}

// Specific page functions

// export async function fetchAboutPage(lang: string): Promise<any> {
//   return fetchWordPressPage(PAGE_IDS.about, lang)
// }

export async function fetchContactPage(lang: string): Promise<any> {
  return fetchWordPressPage(PAGE_IDS.contact, lang)
}

// export async function fetchPrivacyPage(lang: string): Promise<any> {
//   return fetchWordPressPage(PAGE_IDS.privacy, lang)
// }

// export async function fetchExperiencesPage(lang: string): Promise<any> {
//   return fetchWordPressPage(PAGE_IDS.experiences, lang)
// }

// export async function fetchGettingInformedPage(lang: string): Promise<any> {
//   return fetchWordPressPage(PAGE_IDS.gettingInformed, lang)
// }

export async function fetchImprintPage(lang: string): Promise<any> {
  return fetchWordPressPage(PAGE_IDS.imprint, lang)
}

// export async function fetchSupportPage(lang: string): Promise<any> {
//   return fetchWordPressPage(PAGE_IDS.support, lang)
// }

// export async function fetchSurveysPage(lang: string): Promise<any> {
//   return fetchWordPressPage(PAGE_IDS.surveys, lang)
// }

// export async function fetchOverviewPage(lang: string): Promise<any> {
//   return fetchWordPressPage(PAGE_IDS.overview, lang)
// }

// Function to get all available languages for SSG
export async function getAvailableLanguages(): Promise<string[]> {
  // You can expand this to fetch from WordPress or define statically
  return ['en', 'de'] // Add more languages as needed
}

// Utility to generate static params for any page with language support
export async function generateLanguageStaticParams(): Promise<
  { lang: string }[]
> {
  const languages = await getAvailableLanguages()
  return languages.map((lang) => ({ lang }))
}

// Manual cache invalidation utility (for when you want to update content)
export async function invalidateWordPressCache(pageId: number, lang: string) {
  // This would be used with Next.js revalidateTag when you manually want to update
  // await revalidateTag(`wordpress-page-${pageId}-${lang}`)
}

// Function to check if API is available (useful for health checks)
export async function checkWordPressAPI(): Promise<boolean> {
  try {
    const res = await fetch('https://vent.great-site.net/wp-json/')
    return res.ok
  } catch {
    return false
  }
}

// Function to get page by slug
export async function fetchPageBySlug(
  slug: keyof typeof PAGE_IDS,
  lang: string
): Promise<any> {
  const pageId = PAGE_IDS[slug]
  return fetchWordPressPage(pageId, lang)
}

// Build-time validation function
export async function validateBuildTimeContent(): Promise<void> {
  const languages = await getAvailableLanguages()

  for (const lang of languages) {
    for (const [slug, pageId] of Object.entries(PAGE_IDS)) {
      try {
        const page = await fetchWordPressPage(pageId, lang)
        console.log(`✅ Successfully validated ${slug} page for ${lang}`)
      } catch (error) {
        console.error(`❌ Failed to validate ${slug} page for ${lang}:`, error)
        throw error // Fail the build if content is not available
      }
    }
  }
}
