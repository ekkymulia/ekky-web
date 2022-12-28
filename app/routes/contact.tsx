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
                    I created this website using Remix.JS, React.JS, and Tailwind CSS, and deployed it to Cloudflare Pages. I used Sanity.io as the headless CMS provider to power the dynamic content on the site. The design of the website was inspired by flat and neo-brutalist designs, such as Gumroad and Notion, and was created using Figma. If you're interested in working on a project together or getting to know me better, don't hesitate to reach out to me through social media!.<br/>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;