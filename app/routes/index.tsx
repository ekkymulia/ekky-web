import { CSSProperties } from "react";
import ButtonCard from "~/Components/MicroComponents/button-card";
import Hero from "~/Components/hero";
import Identity from "~/Components/identitiy";
import MarqueePortofolio from "~/Components/MicroComponents/marquee-portofolio";
import Portofolio from "~/Components/portofolio";
import Footer from "~/Components/footer";
import FootNote from "~/Components/foot-note";

export default function Index() {
  return (
    <>
      <div className="flex flex-col mx-auto border-x-2 border-black 2xl:max-w-[1280px]">
        <Hero/>

        <Identity/>

        <MarqueePortofolio/>

        <Portofolio/>

        <Footer/>

        <FootNote/>
      </div>
    </>
  );
}

