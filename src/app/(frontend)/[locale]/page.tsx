import { getPayload } from 'payload'
import config from '@payload-config'

import { unstable_cache } from 'next/cache'

import Moments from './components/home-page/moments/Moments'
import Hero from './components/home-page/hero/Hero'
import Spots from './components/home-page/spots/Spots'
import Vehicles from './components/home-page/vehicles/Vehicles'
import Experiences from './components/home-page/experiences/Experiences'
import Arguments from './components/home-page/arguments/Arguments'
import Pricing from './components/home-page/pricing/Pricing'
import Faq from './components/home-page/faq/Faq'
import { getLocale, getTranslations } from 'next-intl/server'

export const dynamic = 'force-dynamic'

const locale = await getLocale()

export const generateMetadata = async () => {
  const t = await getTranslations('home')

  return {
    title: t('metadata.title'),
    descritption: t('metadata.description'),

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}`,
    },
  }
}

const getHomePage = unstable_cache(
  async () => {
    const payload = await getPayload({ config })

    return payload.findGlobal({ slug: 'home-page', depth: 2 })
  },
  ['home'],
  { revalidate: 604800 },
)

export default async function HomePage() {
  const data = await getHomePage()

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
