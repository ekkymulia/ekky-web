import Marquee from "react-fast-marquee";
import { Link } from "@remix-run/react";

const FootNote = () => {
    return (
        <div className="grid grid-cols-12 border-x-2 border-black 2xl:max-w-[1280px] mx-auto">
            <div className="p-2 border-solid border-y-2 border-r-2 border-black col-span-4 lg:col-span-2 flex justify-center">
                <Link to="#"><span>⬆ Back to top</span></Link>
            </div>
            <div className="p-2 border-solid border-y-2 border-black col-span-8 lg:col-span-10 items-center">
                <Marquee gradient={false}>
                    ‎💼 Made by Ekky Mulia Lasardi - Dec.2022 😺‎ 
                    Made by Ekky Mulia Lasardi - Dec.2022 👻‎ 
                    Made by Ekky Mulia Lasardi - Dec.2022 🐱‍💻‎ 
                    Made by Ekky Mulia Lasardi - Dec.2022 🐾‎ 
                    Made by Ekky Mulia Lasardi - Dec.2022 🎇‎ 
                    Made by Ekky Mulia Lasardi - Dec.2022 📝‎ 
                    Made by Ekky Mulia Lasardi - Dec.2022 
                </Marquee>
            </div>
        </div>
    );
};

export default FootNote;