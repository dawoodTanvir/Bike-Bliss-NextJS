import Image from "next/image";
import BikeHero from "@/components/BikeHero";
import Rides from "@/components/Rides";
import Review from "@/components/Review";
import FAQ from "@/components/FAQ";
import TheEnd from "@/components/TheEnd";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BikeHero />
      <Rides />
      <Review />
      <FAQ />
      <TheEnd />
      <Footer />
    </>

  );
}
