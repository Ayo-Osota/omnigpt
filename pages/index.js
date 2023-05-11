import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import SubHero from '@/components/subHero';
import TesimonyCard from '@/components/testimonyCard';
import Footer from '@/components/footer';

export default function Home({ testimonies }) {
  return (
    <main>
      <Navbar />
      <Hero />
      <SubHero />
      <section className='-container my-28'>
        <h1 className="font-header text-7xl max-w-[18ch] leading-[6rem]">
          See What People <br />
          Are <span className='text-green-400'>Saying About Us</span>
        </h1>
        <div className='flex gap-11 overflow-scroll max-w-full mt-10'>
          {testimonies.slice(0, 9).map((testimony) => {
            const { id, name, body } = testimony;
            return (
              <TesimonyCard key={id} name={name} body={body} />
            )
          })}
        </div>
      </section>
      <Footer />
    </main>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      testimonies: data
    }
  }
};
