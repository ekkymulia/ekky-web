import Marquee from "react-fast-marquee";
import Cards from "./MicroComponents/cards";
import SpanLink from "./MicroComponents/span-link";

import { useLoaderData } from "@remix-run/react";
import { portfolioSummaryType } from "~/models/type";

const Portofolio2 = () => {
    const { result } = useLoaderData()

    return (
        <div className="mx-4 lg:mx-20 mt-12">
            <h2 className="text-2xl">
                Portfolio and Works
            </h2>

            <span className="text-2xl">Paid Projects</span>
            <div className="my-12 flex justify-between">
                <Marquee gradient={false} style={{ padding: '20px' }} pauseOnClick={true}>
                {
                    result.paid.map((data:portfolioSummaryType) => (
                        <Cards key={data.id} jobType={data.jobType} projectName={data.projectName} year={data.year} projectType={data.projectType} linkTo={data.linkTo}/>
                    ))
                }
                </Marquee>
            </div>

            <span className="text-2xl">Personal Projects</span>
            <div className="my-12 flex justify-between">
                <Marquee gradient={false} style={{ padding: '20px' }} pauseOnClick={true} direction="right">
                {
                    result.personal.map((data:portfolioSummaryType) => (
                        <Cards key={data.id} jobType={data.jobType} projectName={data.projectName} year={data.year} projectType={data.projectType} linkTo={data.linkTo}/>
                    ))
                }
                </Marquee>
            </div>
        </div>
    );
};

export default Portofolio2;