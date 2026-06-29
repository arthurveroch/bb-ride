import { getPayload } from 'payload'
import config from '@payload-config'
import { getLocale, getTranslations } from 'next-intl/server'
import { unstable_cache } from 'next/cache'

import Hero from './components/home-page/hero/Hero'
import Spots from './components/home-page/spots/Spots'
import Moments from './components/home-page/moments/Moments'
import Vehicles from './components/home-page/vehicles/Vehicles'
import Experiences from './components/home-page/experiences/Experiences'
import Arguments from './components/home-page/arguments/Arguments'
import Pricing from './components/home-page/pricing/Pricing'
import Faq from './components/home-page/faq/Faq'

export const dynamic = 'force-dynamic'

export const generateMetadata = async () => {
  const locale = await getLocale()
  const t = await getTranslations('home.metadata')

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}`,
    },
  }
}

const getHomePage = (locale: string) =>
  unstable_cache(
    async () => {
      const payload = await getPayload({ config })
      return payload.findGlobal({ slug: 'home-page', depth: 2, locale: locale as 'all' })
    },
    [`home`],
    { tags: ['home'], revalidate: 604800 },
  )()

export default async function HomePage() {
  const locale = await getLocale()
  const data = await getHomePage(locale)

  return (
    <main>
      <Hero heroData={data.Hero} />
      <Spots spotsData={data.spots} />
      <Moments momentsData={data.about} />
      <Vehicles vehiclesData={data.vehicules} />
      <Experiences experiencesData={data.experiences} />
      <Arguments argumentsData={data.arguments} />
      <Pricing pricingData={data.etapes} />
      <Faq faqData={data.faq} />
    </main>
  )
}
