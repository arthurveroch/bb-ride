import { getPayload } from 'payload'
import config from '@payload-config'
import Hero from '../components/professionnals-page/hero/Hero'
import Solutions from '../components/professionnals-page/solutions/Solutions'
import Secteurs from '../components/professionnals-page/secteurs/Secteurs'
import Services from '@/app/(frontend)/components/professionnals-page/services/Services'
import Personnalisation from '../components/professionnals-page/personnalisation/Personnalisation'
import Selection from '../components/professionnals-page/selection/Selection'
import Offre from '../components/professionnals-page/offre/Offre'
import Histoire from '../components/professionnals-page/histoire/Histoire'
import Arguments from '../components/home-page/arguments/Arguments'
import { unstable_cache } from 'next/cache'

export const revalidate = 604800

const getPage = unstable_cache(
  async () => {
    const payload = await getPayload({ config })

    return payload.findGlobal({ slug: 'professionnal', depth: 2 })
  },
  ['pro'],
  { revalidate: 604800 },
)

export default async function ProfessionnalPage() {
  const data = await getPage()

  console.log(data)

  return (
    <main>
      <Hero heroData={data.hero} />
      <Solutions solutionsData={data.solution} />
      <Secteurs secteursData={data.secteurs} />
      <Services servicesData={data.services} />
      <Personnalisation persoData={data.equipements} />
      <Selection selectionData={data.selection} />
      <Offre offreData={data.offre} />
      <Histoire histoireData={data.histoire} />
      <Arguments argumentsData={data.arguments} />
    </main>
  )
}
