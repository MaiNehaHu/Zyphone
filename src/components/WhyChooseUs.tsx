import { FaShieldAlt, FaTruck } from "react-icons/fa";
import { IoCheckbox } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";

const WhyChooseUs = () => {
    return (
        <div id="why-us" className="font-[Urbanist] lg:px-20 sm:px-10 px-4 sm:mb-16 mb-8">
            <div className="bg-[#E6F3F2] sm:px-8 px-4 sm:py-16 py-8 sm:rounded-4xl rounded-2xl flex flex-col items-center gap-6">
                <h2 className="md:max-w-4xl md:text-[42px] sm:text-4xl text-3xl text-center font-bold leading-tight">
                    Why Choose Our iPhone Repair Service?
                </h2>

                <p className="md:max-w-3xl w-full md:text-base text-center text-sm text-gray-600">
                    Expert Apple device repair services with genuine parts, certified technicians, and same-day service. We fix iPhones, MacBooks, iPads, and Apple Watches across Bangalore with 12-month warranty.
                </p>

                <div className="flex flex-row flex-wrap md:gap-6 gap-4 bg-[#1B1B1B] w-full sm:p-8 p-6 rounded-2xl">
                    {reasons.map((reas) => {
                        const { reason, subtitle, icon } = reas;
                        return (
                            <div className="flex-1 space-y-1 xl:min-w-auto lg:min-w-[300px] md:min-w-[260px] min-w-[180px]">
                                {icon}

                                <h3 className='sm:text-2xl text-lg text-white sm:whitespace-normal whitespace-nowrap'>{reason}</h3>

                                <p className="sm:text-sm text-xs text-gray-300 sm:whitespace-normal whitespace-nowrap">{subtitle}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

const reasons = [
    {
        icon: <MdElectricBolt className="text-yellow-500 md:text-5xl sm:text-4xl text-2xl mb-2" />,
        reason: "Same Day Service",
        subtitle: "Most reapirs in 2-4 hours"
    },
    {
        icon: <IoCheckbox className="text-emerald-500 md:text-5xl sm:text-4xl text-2xl mb-2" />,
        reason: "Genuine Parts",
        subtitle: "Only authentic Apple components"
    },
    {
        icon: <FaShieldAlt className="text-[#e9ecf0] md:text-5xl sm:text-4xl text-2xl mb-2" />,
        reason: "12-Month Warrenty",
        subtitle: "Comprehensive repair warranty"
    },
    {
        icon: <FaTruck className="text-yellow-500 md:text-5xl sm:text-4xl text-2xl mb-2" />,
        reason: "Free Doorstep",
        subtitle: "Pickup & delivery in Bangalore"
    },
]

export default WhyChooseUs