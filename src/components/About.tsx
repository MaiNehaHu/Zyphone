import ImgBg from '../assets/imgbg.svg'
import Gradient from '../assets/about-gradient.svg'

const About = () => {
    return (
        <div className="font-[Urbanist] bg-[#1B1B1B] lg:p-24 p-4 lg:py-24 py-12 flex flex-col md:gap-20 gap-10 items-center relative">
            <div>
                <h2 className="md:max-w-4xl md:text-[42px] sm:text-4xl text-3xl text-center font-bold text-[#02B1E6]">
                    About Zyphone
                </h2>
                <p className="mt-2 md:max-w-3xl w-full md:text-base text-center text-sm text-gray-300">
                    Bangalore's most trusted Apple device repair service since 2018
                </p>
            </div>

            <div className="flex md:flex-row flex-col items-center gap-10 xl:px-16">
                <div className="bg-white sm:py-6 py-4 sm:px-10 px-5 rounded-3xl space-y-3 md:w-[55%] w-full">
                    <h3 className="md:max-w-4xl md:text-[36px] sm:text-3xl text-xl text-start font-bold">
                        Our Story
                    </h3>

                    <p className="text-gray-600 md:text-lg sm:text-base text-sm">
                        Founded in 2018, Zyphon began as a small repair shop with a big vision: to provide professional, reliable Apple device repair services to the people of Bangalore.
                        <br />
                        <br />

                        What started as a passion project has grown into Bangalore's most trusted Apple repair service, with over 16,000 devices successfully repaired and counting.

                        <br />
                        <br />
                        Our team of Apple-certified technicians uses only genuine parts and state-of-the-art equipment to ensure your devices receive the highest quality care. We're committed to transparency, reliability, and customer satisfaction.
                    </p>
                </div>

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

            <img src={Gradient} className='absolute bottom-0 w-full h-fit object-fill pointer-events-none' />
        </div>
    )
}

export default About