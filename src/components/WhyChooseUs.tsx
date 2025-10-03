import { IoCallOutline } from "react-icons/io5"
import XPaddinText from "./XPaddingText"
import { GoDotFill } from "react-icons/go"

const WhyChooseUs = () => {
    return (
        <div className="bg-[#1F1F1F] text-white p-4 rounded-2xl flex flex-row items-center gap-10 relative">
            <div className="w-2/5 bg-white rounded-2xl h-[550px]"></div>

            <div className="w-3/5 flex flex-col gap-10 justify-center py-10 max-w-xl mx-auto">
                <div className="flex flex-col gap-6 items-start">
                    <XPaddinText>why choose us</XPaddinText>

                    <h2 className="font-['Space_Grotesk'] text-5xl font-medium">
                        Top Reasons to Choose Our Gadget Repair
                    </h2>
                </div>

                <p className="sm:text-base text-sm font-[Manrope]">
                    We’re passionate about keeping your gadgets in top shape. Our team of experienced technicians combine technical expertise with exceptional customer service.
                </p>

                <div className="grid grid-cols-2 gap-4 font-[Manrope]">
                    {["Same-day Service", "Genuine Parts", "12-Month Warrenty", "Transparent Pricing", "Free Doorstep Pickup & Delivery"].map((tag) => (
                        <p className="flex flex-row items-center gap-2">
                            <GoDotFill className="text-2xl" />
                            {tag}
                        </p>
                    ))}
                </div>

                <div className="flex flex-row gap-3 font-[Manrope]">
                    <button className="cursor-pointer hover:bg-white p-3 rounded-full bg-[#EF644C] text-white hover:text-[#EF744C] transition">
                        <IoCallOutline className="text-xl" />
                    </button>

                    <div className="text-sm flex flex-col gap-0.5 justify-center">
                        <p className="text-[#D9D9D9]">Need any help?</p>
                        <p className="text-white">+91 - 8970081700</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs