import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";


export default function Home() {
  const stats = {
      totalEvents: 30,
      totalAtteends:4000,
      totalOrgs: 10

  }
  return (
   <>
     <Hero/>
     
     <WhyChoose/>
     <Statistics stats={stats}/>
     <Testimonials/>
   </>
  );
}
