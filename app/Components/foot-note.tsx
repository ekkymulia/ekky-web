import Marquee from "react-fast-marquee";

const FootNote = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="p-2 border-solid border-y-2 border-r-2 border-black col-span-4 lg:col-span-2 flex justify-center">
                <a href="#"><span>⬆ Back to top</span></a>
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