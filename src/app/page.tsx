import PromoLabel from '@/components/atoms/PromoLabel'
import Featured from '@/components/templates/Featured'
import Hero from '@/components/templates/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" flex flex-col  ">
      <PromoLabel />
      <Hero />
      <Featured />
    </main>
  )
}
