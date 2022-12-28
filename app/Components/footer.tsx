import ButtonCard from "./MicroComponents/button-card";
import ContactsIcon from "./MicroComponents/contacts-icons";

const Footer = () => {
    return (
        <div className="mx-4 lg:mx-20 mt-12 mb-4 grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
                <h3 className="text-2xl mb-2">Let's call it a day!😉</h3>
                <p>
                    You've reached the end of my page, but why don't you checkout my blog or contact me if you wanted to collaborate!
                </p>
                    <ButtonCard additionalClass="my-12 lg:my-12" textProps="Contact Page" linkTo="/contact"/>

                    <ButtonCard additionalClass="mb-12 lg:my-12" textProps="Checkout my<br/>blogs" linkTo="/journal"/>
            </div>
            <div className="col-span-12 lg:col-span-6 items-center lg:px-12">
                <p className="mx-auto text-justify">
                I created this website using Remix.JS, React.JS, and Tailwind CSS, and deployed it to Cloudflare Pages. I used Sanity.io as the headless CMS provider to power the dynamic content on the site. The design of the website was inspired by flat and neo-brutalist designs, such as Gumroad and Notion, and was created using Figma. If you're interested in working on a project together or getting to know me better, don't hesitate to reach out to me through social media!<br/>
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