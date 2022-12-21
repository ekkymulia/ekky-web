import Marquee from "react-fast-marquee";
import Cards from "./MicroComponents/cards";
import SpanLink from "./MicroComponents/span-link";

const PaidPortfolioData = [
    {
        id: 1,
        jobType: "Freelance/Internship",
        projectName: "SICOC Project",
        year: 2021,
        projectType: "Website - ERP",
        linkTo: "#"
    },
    {
        id: 2,
        jobType: "Internship",
        projectName: "Ehisos Project",
        year: 2021,
        projectType: "Website - WebApp",
        linkTo: "#"
    },
    {
        id: 3,
        jobType: "Internship",
        projectName: "Haidepok",
        year: 2021,
        projectType: "Website - WebApp",
        linkTo: "#"
    },
    {
        id: 4,
        jobType: "Freelance",
        projectName: "SMKN 1 Depok V3 Web",
        year: 2021,
        projectType: "Website - Company Profile/CMS",
        linkTo: "#"
    },
]

const PersonalPortfolioData = [
    {
        id: 1,
        jobType: "Personal",
        projectName: "Portfolio Website",
        year: 2022,
        projectType: "Website",
        linkTo: "#"
    },
    {
        id: 2,
        jobType: "Competition",
        projectName: "Indonesia Recovery",
        year: 2022,
        projectType: "Website",
        linkTo: "#"
    },
    {
        id: 3,
        jobType: "Personal",
        projectName: "Manga Fest",
        year: 2021,
        projectType: "Flutter",
        linkTo: "#"
    },
    {
        id: 4,
        jobType: "Personal",
        projectName: "Cetakku",
        year: 2021,
        projectType: "Java - Android",
        linkTo: "#"
    },

]

const Portofolio = () => {
    return (
        <div className="mx-4 lg:mx-20 mt-12">
            <h2 className="text-2xl">
                Portfolio and Works
            </h2>

            <span className="text-2xl">Paid Projects</span>
            <SpanLink text="Click for details" linkto="#"/>

            <div className="my-12 flex justify-between">
                <Marquee gradient={false} style={{ padding: '20px' }} pauseOnClick={true}>
                {
                    PaidPortfolioData.map((data) => (
                        <Cards key={data.id} jobType={data.jobType} projectName={data.projectName} year={data.year} projectType={data.projectType} linkTo={data.linkTo}/>
                    ))
                }
                </Marquee>
            </div>

            <span className="text-2xl">Personal Projects</span>
            <SpanLink text="Click for details" linkto="#"/>
            <div className="my-12 flex justify-between">
                <Marquee gradient={false} style={{ padding: '20px' }} pauseOnClick={true} direction="right">
                {
                    PersonalPortfolioData.map((data) => (
                        <Cards key={data.id} jobType={data.jobType} projectName={data.projectName} year={data.year} projectType={data.projectType} linkTo={data.linkTo}/>
                    ))
                }
                </Marquee>
            </div>
        </div>
    );
};

export default Portofolio;