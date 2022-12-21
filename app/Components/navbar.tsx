const Navbar = () => {
    return (
        <div className="grid grid-cols-12 border-x-2 border-black 2xl:max-w-[1280px] mx-auto">
            <div className="p-2 border-solid border-y-2 border-r-2 border-black col-span-3 lg:col-span-1 flex justify-center">
                <span>ekkymulia</span>
            </div>
            <div className="p-2 border-solid border-y-2 border-black col-span-9 lg:col-span-11">
                <ul className="grid grid-cols-7">
                    <li className="col-span-7 lg:col-span-1">Greetings Section</li>
                    <li className="hidden lg:block lg:col-span-5">
                        <ul className="flex justify-start">
                            <li>Ekky's Story:</li>
                            <li className="ml-4">
                                Chapter 1
                            </li>
                            <li className="ml-4">
                                Chapter 2
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;