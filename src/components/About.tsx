import ImgBg from '../assets/imgbg.svg'
// import Gradient from '../assets/about-gradient.svg'
import type { JSX } from 'react';

const About = () => {
    return (
        <div id="about" className="font-[Urbanist] bg-gradient-to-b from-[#30303547] from-40% t-[#3030350A] lg:px-24 md:px-10 px-4 lg:py-16 sm:py-12 py-6 flex flex-col md:gap-20 gap-10 items-center relative z-0 rounded-2xl my-6">
            <h2 className="font-['Space_Grotesk'] text-5xl font-medium bg-gradient-to-r from-[#E60283] via-[#F1D507] to-[#DA4A02] bg-clip-text text-transparent">
                About Zyphone
            </h2>

            <div className="flex md:flex-row flex-col items-center gap-10 xl:px-16">
                <Gradientbg>
                    <div className="bg-[#0e0e0e] text-white sm:py-6 py-4 sm:px-10 px-5 rounded-3xl space-y-6 w-full">
                        <h3 className="md:max-w-4xl md:text-[36px] sm:text-3xl text-xl text-start font-semibold">
                            Our Story
                        </h3>

                        <p className="text-[#7E7E7E] md:text-lg sm:text-base text-sm">
                            Founded in 2018, Zyphon began as a small repair shop with a big vision: to provide professional, reliable Apple device repair services to the people of Bangalore.
                            <br />
                            <br />

                            What started as a passion project has grown into Bangalore's most trusted Apple repair service, with over 16,000 devices successfully repaired and counting.

                            <br />
                            <br />
                            Our team of Apple-certified technicians uses only genuine parts and state-of-the-art equipment to ensure your devices receive the highest quality care. We're committed to transparency, reliability, and customer satisfaction.
                        </p>
                    </div>
                </Gradientbg>

                <div className="grid grid-cols-2 gap-4 justify-between md:w-[45%] w-full">
                    {[
                        { img: "", number: "16,000+", sub: "Devices Repaired" },
                        { img: "", number: "98%", sub: "Success Rate" },
                        { img: "", number: "25+", sub: "Areas Covered" },
                        { img: "", number: "24/7", sub: "Support Available" },
                    ].map((data) => (
                        <div className="flex flex-col sm:gap-3 gap-0 items-center text-white">
                            <img src={ImgBg} alt="Img Bg" className='w-32 h-32 rounded-full' />

                            <p className='sm:text-4xl text-xl'>{data.number}</p>
                            <p className='sm:text-base text-sm'>{data.sub}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* <img src={Gradient} className='absolute bottom-0 w-full h-1/2 object-cover pointer-events-none -z-10' /> */}
        </div>
    )
};

const Gradientbg = ({ children }: { children: JSX.Element }) => {
    return (
        <div
            className='md:w-[55%] w-full p-[0.8px] bg-[linear-gradient(150deg,#757575,#00000000,#757575)] rounded-3xl flex-1'
        >
            {children}
        </div>
    )
}

export default About