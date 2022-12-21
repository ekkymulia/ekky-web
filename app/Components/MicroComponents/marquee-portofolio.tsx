import Marquee from "react-fast-marquee";

const MarqueePortofolio = () => {
    return (
        <div className="text-8xl overflow-hidden border-y-2 border-black py-3">
            <Marquee gradient={false} direction="right" style={{ overflow: 'hidden' }}>
            ‎ Portfolio and Works ‎ 
             Portfolio and Works ‎ 
             Portfolio and Works ‎ 
             Portfolio and Works ‎ 
             Portfolio and Works ‎ 
             Portfolio and Works ‎ 
             Portfolio and Works 
            </Marquee>

            <Marquee gradient={false} direction="left" style={{ overflow: 'hidden' }}>
             Portfolio and Works
             Portfolio and Works
             Portfolio and Works
             Portfolio and Works
             Portfolio and Works
             Portfolio and Works
             Portfolio and Works
            </Marquee>

            <Marquee gradient={false} speed={10} direction="right" style={{ overflow: 'hidden' }}>
            ‎ Portfolio and Works ‎ 
             Portfolio and Works ‎ 
             Portfolio and Works ‎ 
             Portfolio and Works ‎ 
             Portfolio and Works ‎ 
             Portfolio and Works ‎ 
             Portfolio and Works 
            </Marquee>
        </div>
    );
};

export default MarqueePortofolio;