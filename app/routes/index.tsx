import Hero from "~/Components/hero";
import Identity from "~/Components/identitiy";
import MarqueePortofolio from "~/Components/MicroComponents/marquee-portofolio";
import Portofolio from "~/Components/portofolio";
import Footer from "~/Components/footer";
import FootNote from "~/Components/foot-note";

export const loader = async () => {
  //fetching data from sanity
  const response = await fetch(
    `https://tgh6xlex.api.sanity.io/v2021-10-21/data/query/production?query=%7B%0A%20%20%22paid%22%3A%20*%5B_type%20%3D%3D%20'portfolio'%20%26%26%20portfolioType%20%3D%3D%20'paid'%5D%5B%5D%7Corder(year%20desc)%7B%0A%20%20%20%20jobType%2C%0A%20%20%20%20linkTo%2C%0A%20%20%20%20portfolioType%2C%0A%20%20%20%20projectName%2C%0A%20%20%20%20year%0A%20%20%7D%5B0...6%5D%2C%0A%20%20%22personal%22%3A%20*%5B_type%20%3D%3D%20'portfolio'%20%26%26%20portfolioType%20%3D%3D%20'personal'%5D%5B%5D%7Corder(year%20desc)%7B%0A%20%20%20%20jobType%2C%0A%20%20%20%20linkTo%2C%0A%20%20%20%20portfolioType%2C%0A%20%20%20%20projectName%2C%0A%20%20%20%20year%0A%20%20%7D%5B0...6%5D%0A%7D%0A`
  )
  return response.json();
}


export default function Index() {
  return (
    <>
      <div className="flex flex-col mx-auto border-x-2 border-black 2xl:max-w-[1280px] min-h-screen">
        <Hero/>
        <Identity/>
        <MarqueePortofolio/>
        <Portofolio/>
        <Footer/>
      </div>
    </>
  );
}

