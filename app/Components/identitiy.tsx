import SpanLink from "./MicroComponents/span-link";

const Identity = () => {
    return (
        <div className="grid grid-cols-12 px-4">
            <div className="col-span-6 flex flex-col ml-20 mt-12">
                <div>
                    <h2 className="text-2xl">
                        Ekky's Story
                    </h2>
                    <h3 className="text-2xl">
                        Get to know me (Summary)
                    </h3>
                </div>
                <div className="my-12">
                    <div className="group relative min-w-[85%] max-w-[85%]">
                        <span className="absolute inset-0 p-6 border-2 bg-black border-black rounded-xl transition  opacity-100"></span>
                        <div className={`grid grid-cols-2 p-8 border-2 bg-white border-black rounded-xl transition-transform border-current -translate-x-3 -translate-y-3`}>
                        <h5 className="col-span-2 text-2xl translate-y-1">
                            Hi there,<br/>
                            My name is Ekky Mulia Lasardi<br/>
                            I’m from Depok, Indonesia
                        </h5>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl">
                        What i can do:
                    </h3>
                    <div className="flex">
                        <SpanLink text="see glossary" linkto="#"/>
                        <SpanLink text="download resume" linkto="#"/>
                    </div>
                </div>
            </div>
            <div className="col-span-6 p-8 flex flex-col justify-center">
                <div className="m-8">
                    <img className="m-auto items-center min-w-[85%] max-w-[85%]" src="/asset/image/profile-pic.png" alt="profile-pict"/>
                </div>
                <div className="flex justify-end group ">
                    <span className="m-auto flex items-center transition-all duration-500 ease-in-out group-hover:translate-x-2">
                        Intrested in my story? why not continue
                        <svg className="ml-4" width="97" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M96.0607 13.0607C96.6464 12.4749 96.6464 11.5251 96.0607 10.9393L86.5147 1.3934C85.9289 0.807611 84.9792 0.807611 84.3934 1.3934C83.8076 1.97919 83.8076 2.92893 84.3934 3.51472L92.8787 12L84.3934 20.4853C83.8076 21.0711 83.8076 22.0208 84.3934 22.6066C84.9792 23.1924 85.9289 23.1924 86.5147 22.6066L96.0607 13.0607ZM0 13.5H95V10.5H0V13.5Z" fill="black"/>
                        </svg>
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Identity;