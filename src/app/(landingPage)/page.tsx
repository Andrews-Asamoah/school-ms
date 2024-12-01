import AboutUs from "@/components/landingPage/aboutUs";
import Contact from "@/components/landingPage/contact";
import Events from "@/components/landingPage/events";
import Gallery from "@/components/landingPage/gallery";
import Hero from "@/components/landingPage/hero";
import News from "@/components/landingPage/news";
import Programs from "@/components/landingPage/programs";
import Features from "@/components/landingPage/whyChooseUs";

const page = () => {
  return (
    <div className=" h-full flex-1 flex-grow">
      <Hero />
      <Features />
      <AboutUs />
      <Programs />
      <Gallery />
      <Events />
      <News />
      <Contact />
    </div>
  );
};

export default page;
