import { useTransition } from "@remix-run/react";
import SpanLink from "~/Components/MicroComponents/span-link";
import Marquee from "react-fast-marquee";

const index = () => {
    const transition = useTransition();
    
    return (
        <div className={ `transition ${transition.state == 'idle' ? 'opacity-100' : 'opacity-0'}` }>
            <div>
                <h2 className="text-3xl font-medium lg:text-6xl">Featured Post</h2>
                <h3 className="font-medium lg:text-6xl">Read Ekky's Stories!</h3>

                <div className="mt-4 lg:mt-12 mb-3 lg:mb-8 flex">
                  <SpanLink text="Read Chapter 1" linkto="#"/>
                  <SpanLink text="Read Chapter 2" linkto="#"/>
                </div>
            </div>
            <Marquee gradient={false} autoFill={true}>
            <div className="hidden lg:block mx-2">
                <img className="lg:min-w-[100%] lg:max-w-[100%] min-w-[100%] mb-2" src="/asset/image/profile-pic.png" alt="profile-pict"/>
                <span className="text-sm font-normal ml-2">📍 Taken in IPB Bogor - 2022 by Ferrol Azki</span>
            </div>
            <div className="hidden lg:block mx-2">
                <img className="lg:min-w-[100%] lg:max-w-[100%] min-w-[10%] mb-2 border-4 border-black rounded-lg" src="/asset/image/gallery/ekky-atgoogleindo.JPG" alt="ekky-at-google-indo"/>
                <span className="text-sm font-normal ml-2">📍 Taken in Google Indonesia - 2023 by Luthfi Dika Chandra</span>
            </div>
            <div className="hidden lg:block mx-2">
                <img className="lg:min-w-[100%] lg:max-w-[100%] min-w-[10%] mb-2 border-4 border-black rounded-lg" src="/asset/image/gallery/ekky-atlabkom-cbprg.jpeg" alt="ekky-at-labkom-cb-prg"/>
                <span className="text-sm font-normal ml-2">📍 Taken in IPB Bogor - 2023 by Mia Putri Yeza</span>
            </div>
        
            </Marquee>
        </div>
    );
};

export default index;