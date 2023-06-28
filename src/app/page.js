import Image from 'next/image'
import { Hero } from '@/comps/Hero'
import { SubHero } from '@/comps/SbHero'
import Footer from '@/comps/Footer'
import About from '@/comps/About'

export default function Home() {



  return (
    <main className='box-border'>
      <Hero />
      <SubHero />
      <About />
      <Footer />



    </main>
  )
}
