import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { events } from '@/data';
import Hero from '@/components/Hero';
import SubHero from '@/components/SubHero';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SubHero />
    </main>
  )
}
