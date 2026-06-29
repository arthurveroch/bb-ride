import { getPayload } from 'payload'
import config from '@payload-config'
import { getLocale, getTranslations } from 'next-intl/server'
import { unstable_cache } from 'next/cache'

import Hero from '../components/professionnals-page/hero/Hero'
import Solutions from '../components/professionnals-page/solutions/Solutions'
import Secteurs from '../components/professionnals-page/secteurs/Secteurs'
import Services from '@/app/(frontend)/[locale]/components/professionnals-page/services/Services'
import Personnalisation from '../components/professionnals-page/personnalisation/Personnalisation'
import Selection from '../components/professionnals-page/selection/Selection'
import Offre from '../components/professionnals-page/offre/Offre'
import Histoire from '../components/professionnals-page/histoire/Histoire'
import Arguments from '../components/home-page/arguments/Arguments'

export const dynamic = 'force-dynamic'

export const generateMetadata = async () => {
  const locale = await getLocale()
  const t = await getTranslations('pro.metadata')

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/professionnels`,
    },
  }
}

const getPage = (locale: string) =>
  unstable_cache(
    async () => {
      const payload = await getPayload({ config })
      return payload.findGlobal({ slug: 'professionnal', depth: 2, locale: locale as 'all' })
    },
    [`pro`],
    { tags: ['pro'], revalidate: 604800 },
  )()

export default async function ProfessionnalPage() {
  const locale = await getLocale()
  const data = await getPage(locale)

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
