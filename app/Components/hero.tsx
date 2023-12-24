import { CSSProperties } from "react";
import ButtonCard from "./MicroComponents/button-card";
import SpanLink from "./MicroComponents/span-link";
import ContactsIcon from "./MicroComponents/contacts-icons";
import AIChat from "./aichat";

const verticalText:CSSProperties = {
    writingMode: 'vertical-lr',
    transform:'rotate(180deg)'
}

const Hero = () => {
    return (
        <div className="grid grid-cols-12 ">
            <div className="col-span-12 lg:col-span-6 grid grid-cols-12 border-b-2 lg:border-r-2 border-black py-4 pl-3">
                <div className="hidden lg:block my-4" style={verticalText}>
                    <span className="m-0 p-0 col-span-2 text-3xl mt-2 flex items-center">
                        <svg style={verticalText} className="mb-3" width="24" height="61" viewBox="0 0 24 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9393 60.0607C11.5251 60.6464 12.4749 60.6464 13.0607 60.0607L22.6066 50.5147C23.1924 49.9289 23.1924 48.9792 22.6066 48.3934C22.0208 47.8076 21.0711 47.8076 20.4853 48.3934L12 56.8787L3.51472 48.3934C2.92893 47.8076 1.97919 47.8076 1.3934 48.3934C0.807611 48.9792 0.807611 49.9289 1.3934 50.5147L10.9393 60.0607ZM10.5 0V59H13.5V0L10.5 0Z" fill="black"/>
                        </svg>
                        You can scroll for more info
                    </span>
                </div>
                <div className="col-span-12 lg:col-span-10 p-5 m-5 flex flex-col justify-evenly">
                    <h2 className="text-2xl mb-6 lg:mb-0">
                        Hellooooo ! 👋 <br/>
                        Thanks for dropping by!
                    </h2>

                    <div className="grid grid-cols-8">
                        <h1 className="col-span-8 text-2xl">
                        Ekky here,<br/> 
                        I’m a Software Developer, but 
                        now mainly focused on Fullstack and Generative AI
                        </h1>

                            <ContactsIcon/>


                        <div className="col-span-8">
                        <SpanLink text="Figure out how do i make my website" linkto="/contact"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 pb-10 mb-10 lg:pb-0 lg:mb-0  lg:col-span-6 col-span-12 lg:flex flex-col justify-evenly gap-1 px-4 border-b-2 border-black">
                <div>
                    <span className="text-2xl">🤖🤖</span>
                    <h3 className="text-2xl mb-6 lg:mb-0">Checkout New Experiment here! Try: Ekky AI</h3>
                    <h4 className="mb-4 lg:mb-4">
                        Prototype v1 - Experiment (Dec 24, 2023)
                    </h4>
                    <p className="mb-2 lg:mb-2">This AI is a prototype experiment using a hosted llama-2-7b-chat model hosted with serverless method. the model is preconfigured with ekky basic information and supports conversational chain stored in client. </p>
                    <p className="text-sm font-thin mb-6 lg:mb-6">Please Notice: only supports in english right now, because of the model i used. currently it only have small data about me, so it may make up some answer</p>
                </div>
                <AIChat/>

                {/* <ButtonCard textProps="See all the things about<br/>my life!" linkTo="/journal"/> */}
            </div>
        </div>
    );
};

export default Hero;
