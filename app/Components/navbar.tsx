const Navbar = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="p-2 border-solid border-y-2 border-r-2 border-black col-span-1 flex justify-center">
                <span>ekkymulia</span>
            </div>
            <div className="p-2 border-solid border-y-2 border-black col-span-11">
                <ul className="grid grid-cols-7">
                    <li className="col-span-1">Greetings Section</li>
                    <li className="col-span-5">
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