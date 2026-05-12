import { getPayload } from 'payload'
import config from '@payload-config'
import Hero from '../components/professionnals-page/hero/Hero'
import Solutions from '../components/professionnals-page/solutions/Solutions'
import Secteurs from '../components/professionnals-page/secteurs/Secteurs'

export const revalidate = 3600 * 24 * 7

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
    </main>
  )
}
