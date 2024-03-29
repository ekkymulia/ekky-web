import { Link } from "@remix-run/react";
import { FC } from "react";

type SpanLinkProps = {
    text: string,
    linkto: string,
    aref?: boolean
}


const SpanLink:FC<SpanLinkProps> = ({text, linkto, aref}) => {
    if (aref){
        return (
            <a href={linkto}>
                <span className="font-normal flex text-sm items-center">
                    {text}
                    <svg className="mr-2" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 0.999999C10.5 0.723857 10.2761 0.499999 10 0.499999L5.5 0.499999C5.22386 0.499999 5 0.723857 5 0.999999C5 1.27614 5.22386 1.5 5.5 1.5L9.5 1.5L9.5 5.5C9.5 5.77614 9.72386 6 10 6C10.2761 6 10.5 5.77614 10.5 5.5L10.5 0.999999ZM1.35355 10.3536L10.3536 1.35355L9.64645 0.646446L0.646447 9.64645L1.35355 10.3536Z" fill="black"/>
                    </svg>
                </span>
            </a>
        );
    }
    return (
        <Link to={linkto}>
            <span className="font-normal flex text-sm items-center">
                {text}
                <svg className="mr-2" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 0.999999C10.5 0.723857 10.2761 0.499999 10 0.499999L5.5 0.499999C5.22386 0.499999 5 0.723857 5 0.999999C5 1.27614 5.22386 1.5 5.5 1.5L9.5 1.5L9.5 5.5C9.5 5.77614 9.72386 6 10 6C10.2761 6 10.5 5.77614 10.5 5.5L10.5 0.999999ZM1.35355 10.3536L10.3536 1.35355L9.64645 0.646446L0.646447 9.64645L1.35355 10.3536Z" fill="black"/>
                </svg>
            </span>
        </Link>
    );
};

export default SpanLink;