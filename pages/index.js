import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { events } from '@/data';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
    </main>
  )
}
