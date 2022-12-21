import { CSSProperties } from "react";
import ButtonCard from "~/Components/MicroComponents/button-card";
import Hero from "~/Components/hero";
import Identity from "~/Components/identitiy";

export default function Index() {
  return (
    <>
      <div className="flex flex-col">
        <Hero/>

        <Identity/>
      </div>
    </>
  );
}

