import { FC } from "react";
import { Link } from "react-router-dom";

export type ButtonCardProps = {
    additionalClass?: string,
    textProps: string,
    linkTo:string
}

const ButtonCard: FC<ButtonCardProps> = ({ additionalClass, textProps, linkTo }) => {
    return (
        <div className="group relative min-w-[80%]">
            <Link to={linkTo}>
                <span className="absolute inset-0 p-6 border-2 group-hover:bg-black border-black rounded-xl transition  group-hover:opacity-100"></span>
                <div className={`grid grid-cols-2 p-8 border-2 bg-white border-black rounded-xl ${additionalClass} transition-transform border-current group-hover:-translate-x-3 group-hover:-translate-y-3`}>
                <div className="col-span-2 flex justify-end">
                    <svg className="place-self-end" width="105" height="24" viewBox="0 0 135 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M134.061 13.0606C134.646 12.4748 134.646 11.5251 134.061 10.9393L124.515 1.39335C123.929 0.807566 122.979 0.807566 122.393 1.39335C121.808 1.97914 121.808 2.92889 122.393 3.51467L130.879 12L122.393 20.4852C121.808 21.071 121.808 22.0208 122.393 22.6066C122.979 23.1923 123.929 23.1923 124.515 22.6066L134.061 13.0606ZM0 13.5H133V10.5H0V13.5Z" fill="black"></path></svg>
                </div>
                <h1 className="col-span-2 text-3xl translate-y-1" dangerouslySetInnerHTML={{__html: textProps}}></h1>
                </div>
            </Link>
        </div>

    );
};



export default ButtonCard;