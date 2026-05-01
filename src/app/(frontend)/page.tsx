import { getPayload } from 'payload'
import config from '@payload-config'
import Hero from './components/home-page/hero/Hero'

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
    </main>
  )
}
