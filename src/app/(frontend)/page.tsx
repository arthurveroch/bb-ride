import { getPayload } from 'payload'
import config from '@payload-config'
import Hero from './components/home-page/hero/Hero'
import Spots from './components/home-page/spots/Spots'
import Moments from './components/home-page/moments/Moments'
import Experiences from './components/home-page/experiences/Experiences'
import Vehicles from './components/home-page/vehicles/Vehicles'
import Pricing from './components/home-page/pricing/Pricing'
import Faq from './components/home-page/faq/Faq'
import Arguments from './components/home-page/arguments/Arguments'

export const revalidate = 3600 * 24 * 7

const getHomePage = async () => {
  const payload = await getPayload({ config })

  return payload.findGlobal({ slug: 'home-page', depth: 2 })
}

export default async function HomePage() {
  const data = await getHomePage()

  console.log(data)

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
