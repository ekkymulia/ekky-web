import ButtonCard from "./MicroComponents/button-card";
import ContactsIcon from "./MicroComponents/contacts-icons";

const Footer = () => {
    return (
        <div className="mx-4 lg:mx-20 mt-12 grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
                <h3 className="text-2xl mb-2">Let's call it a day!😉</h3>
                <p>
                    You've reached the end of my page, but why don't you checkout my blog or contact me if you wanted to collaborate!
                </p>
                    <ButtonCard additionalClass="my-12 lg:my-12" textProps="Contact Page"/>

                    <ButtonCard additionalClass="mb-12 lg:my-12" textProps="Checkout my<br/>blogs"/>
            </div>
            <div className="col-span-12 lg:col-span-6 items-center lg:px-12">
                <p className="mx-auto text-justify">
                    
                    This website was created with Remix.JS and React.JS for JS (Frontend) Framwork and also Tailwind CSS for CSS (Styling) Framework. I deployed this to cloudflare pages and getting a domain from github student.<br/><br/>
                    This website was inspired by Flat and Neo-Brutalism Design such as Gumroad and Notion while i was designing it with figma.<br/><br/>
                    if you want to do a project or get to know me better, don't hesitate to contact me via social media below!.<br/>
                </p>
                <div className="grid grid-cols-6">
                    <div className="col-span-3">
                        <ContactsIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;