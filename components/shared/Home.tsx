import Link from "next/link";
import { Button } from "../ui/button";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <section className="mainWrapper">
      <Header />


      <section className="bg-[url('/images/banner.webp')] bg-cover bg-center min-h-[90vh] md:min-h-screen ">
      
        <div className="h-full bg-black/60 py-5 md:py-10">
          <div className="wrapper flex flex-col md:justify-center h-full gap-10 md:gap-16 text-white">
          
            <div className="md:w-1/2">
              <h1 className="h1-bold mt-10 md:mt-0">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
            </div>

            <div className="md:w-1/2">
              <p className="text-lg md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
            </div>

            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>
        </div>

      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trusted by <br /> Thousands of Events!</h2>

        <div className="flex flex-col md:flex-row w-full gap-5">
          <div>search</div>
          <div>catergory filter</div>
        </div>
    
      </section>


      <Footer />
    </section>
  )
}

export default Home;