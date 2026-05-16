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

export const revalidate = 604800

const getPage = async () => {
  const payload = await getPayload({ config })

  const data = payload.findGlobal({ slug: 'professionnal', depth: 2 })

  return data
}

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
627.2
