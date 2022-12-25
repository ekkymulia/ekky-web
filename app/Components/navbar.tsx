import { NavLink, useTransition } from "@remix-run/react";
import { useState } from "react";

type PAGE_META_OBJECT = {
    text: string,
    order: number,
    slugMeta: string
}

const activeStyle = {
    textDecoration: "underline",
};

const activeClassName = "underline";

export const PAGE_META = {
    INDEX: {
        text: 'Greetings',
        order: 1,
        slugMeta: 'Website'
    },
    JOURNAL: {
        text: 'Stories',
        order: 2,
        slugMeta: 'Journal'
    },
    CONTACT: {
        text: 'Contact',
        order: 3,
        slugMeta: 'Contact'
    }
}

const Navbar = () => {
    const transition = useTransition();
    
    const [section, setSection] = useState({text: 'Greetings',order: 1});
    const [navAnim, setNavAnim] = useState({before: '-translate-x-full opacity-0', after: 'translate-x-0 opacity-100'})

    const navAnimChanger = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page:PAGE_META_OBJECT) => {

        console.log(page, section)
        if(page.order < section.order){
            return setNavAnim({before: '-translate-x-full opacity-0', after: 'translate-x-0 opacity-100'})
        }

        if(page.order > section.order){
            return setNavAnim({before: 'translate-x-full opacity-0', after: 'translate-x-0 opacity-100'})
        }

        return setNavAnim({before: 'opacity-0', after: 'opacity-100'})
    }


    const sectionChanger = (page:PAGE_META_OBJECT) => {
        setSection(page)
        if(page != PAGE_META.INDEX){
            return activeStyle;
        }
        return undefined;
    }
    

    return (
        <nav className="grid grid-cols-12 border-x-2 border-black 2xl:max-w-[1280px] mx-auto">
            <div className="p-2 border-solid border-y-2 bg-white border-r-2 border-black col-span-3 lg:col-span-1 flex justify-center">
                <NavLink
                    to="/"
                    onClick={(e) => navAnimChanger(e, PAGE_META.INDEX)}
                    style={
                        ({ isActive }) =>
                        isActive ? sectionChanger(PAGE_META.INDEX) : undefined
                    }
                >
                    ekkymulia
                </NavLink>
            </div>
            <div className="p-2 border-solid border-y-2 border-black col-span-9 lg:col-span-11 overflow-hidden">
                <ul className={`grid grid-cols-12 transition duration-1000 delay-150 ease-in-out overflow-hidden ${ transition.state == 'idle' ? navAnim.after : navAnim.before}`}>
                    <li className="col-span-12 lg:col-span-3">
                        {section.text} Section
                    </li>
                    <li className="hidden lg:block lg:col-span-5">
                        <ul className="flex justify-start">
                            <li>Ekky's Story:</li>
                            <li className="ml-4">
                                <NavLink
                                    to="/journal/ekky-s-stories-chapter-1"
                                    onClick={(e) => navAnimChanger(e, PAGE_META.JOURNAL)}
                                    style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                    }
                                >
                                    Chapter 1
                                </NavLink>
                            </li>
                            <li className="ml-4">
                                <NavLink
                                    to="/journal/ekky-s-stories-chapter-2"
                                    onClick={(e) => navAnimChanger(e, PAGE_META.JOURNAL)}
                                    style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                    }
                                >
                                    Chapter 2
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="hidden lg:block ml-4 col-span-2">
                        <NavLink
                            to="/journal"
                            onClick={(e) => navAnimChanger(e, PAGE_META.JOURNAL)}
                            style={
                            ({ isActive }) =>
                            isActive ? sectionChanger(PAGE_META.JOURNAL) : undefined
                            }
                        >
                            Journal (Blog)
                        </NavLink>
                    </li>
                    <li className="hidden lg:block ml-4 col-span-2">
                        <NavLink
                            to="/contact"
                            onClick={(e) => navAnimChanger(e, PAGE_META.CONTACT)}
                            style={({ isActive }) =>
                            isActive ? sectionChanger(PAGE_META.CONTACT) : undefined
                            }
                        >
                            Contact Page
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;