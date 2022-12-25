import { useTransition } from "@remix-run/react";
import ContactsIcon from "~/Components/MicroComponents/contacts-icons";
import FootNote from "~/Components/foot-note";
import Footer from "~/Components/footer";

const Contact = () => {
    const transition = useTransition()

    return (
        <div className={ `flex flex-col mx-auto border-x-2 border-black 2xl:max-w-[1280px] transition ${transition.state == 'idle' ? 'opacity-100' : 'opacity-0'} min-h-screen` }>
            <div className="grid grid-cols-12 lg:mx-20 lg:my-24  mt-16 mx-3">
                <div className="col-span-12 lg:col-span-6 grid grid-cols-6">
                    <div className="col-span-12 lg:col-span-6">
                        <h3 className="text-2xl mb-2">Say hi to me when you have time!😉</h3>
                        <p>
                            You've reached the end of my page, but why don't you checkout my blog or contact me if you wanted to collaborate!
                        </p>
                    </div>
                    <div className="col-span-4 lg:col-span-3">
                        <ContactsIcon/>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 mt-4 lg:mt-0">
                    <p className="mx-auto text-justify">
                        This website was created with Remix.JS and React.JS for JS (Frontend) Framwork and also Tailwind CSS for CSS (Styling) Framework. I deployed this website to cloudflare pages and getting data dynamicly from Sanity.io as the Headless CMS provider.<br/><br/>
                        This website was inspired by Flat and Neo-Brutalism Design such as Gumroad and Notion while i was designing it with figma.<br/><br/>
                        if you want to do a project or get to know me better, don't hesitate to contact me via social media!.<br/>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;