import { useState } from "react";
import XPaddinText from "./XPaddinText"

const HowWeWorks = () => {
    const [opened, setOpened] = useState("02"); // Start with the first step open

    return (
        <div
            id='process'
            className='w-full text-white flex flex-col gap-4 py-10 items-center relative'
        >
            <XPaddinText>
                how we work
            </XPaddinText>

            <h2 className="font-['Space_Grotesk'] text-5xl font-medium">
                Fast 4-Step Service
            </h2>

            <div className="flex border-[1px] border-gray-500 rounded-2xl mt-10 z-10 w-full">
                {steps.map((st, index) => {
                    const { step, heading, description } = st;
                    const isOpened = opened === step; // Check if the current step is open

                    return (
                        <div
                            key={index}
                            onClick={() => setOpened(step)}
                            // Add transition classes for smooth width and color change
                            className={`h-[400px] ${isOpened ? "w-sm bg-[#0c0c0c]" : "w-xs"} ${index === 0 ? "rounded-l-2xl" : index === steps.length - 1 ? "rounded-r-2xl" : ""} py-6 overflow-hidden flex flex-col transition-all duration-500 ease-in-out cursor-pointer`}
                        >
                            <h2 className={`${(index % 2) === 0 ? "text-[#EF644C]" : "text-white"}` + " font-['Space_Grotesk'] font-bold text-9xl -translate-x-10"}>
                                {step}
                            </h2>

                            <div className={"p-8 " + `${isOpened ? "my-12" : "mt-auto"}`}>
                                <h2 className={`${isOpened ? "text-3xl" : "text-2xl"}` + " font-['Space_Grotesk'] font-medium"}>
                                    {heading}
                                </h2>

                                {/* Animated Description Container */}
                                <div
                                    className={`
                                        overflow-hidden transition-all duration-500 ease-in-out
                                        ${isOpened ? "opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
                                    `}
                                >
                                    <p className="sm:text-base text-sm font-[Manrope]">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <>
                <svg className="absolute right-0 -top-1/2 z-0 translate-x-4" width="500" height="1222" viewBox="0 0 631 1222" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_235_1896)">
                        <circle cx="611" cy="611" r="157" fill="#C25340" fill-opacity="0.9" />
                    </g>
                    <defs>
                        <filter id="filter0_f_235_1896" x="0" y="0" width="1222" height="1222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="227" result="effect1_foregroundBlur_235_1896" />
                        </filter>
                    </defs>
                </svg>

                <svg className="absolute left-0 top-0 z-0 -translate-x-4" width="598" height="1222" viewBox="0 0 598 1222" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_235_2212)">
                        <circle cx="-13" cy="611" r="157" fill="#C25340" fill-opacity="0.9" />
                    </g>
                    <defs>
                        <filter id="filter0_f_235_2212" x="-624" y="0" width="1222" height="1222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="227" result="effect1_foregroundBlur_235_2212" />
                        </filter>
                    </defs>
                </svg>
            </>
        </div>
    )
};

const steps = [
    {
        step: "01",
        heading: "Book your Service",
        description: "Book your service now"
    },
    {
        step: "02",
        heading: "Diagnosis",
        description: "Our skilled team will run diagnostics to identify the issue"
    },
    {
        step: "03",
        heading: "Repair the Device",
        description: "We repair it within 4-5 hours"
    },
    {
        step: "04",
        heading: "Test and Deliver",
        description: "Before delivering we test it to confirm the fitness"
    }
]

export default HowWeWorks