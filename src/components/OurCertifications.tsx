import { FaShieldAlt } from "react-icons/fa";
import { IoCheckbox } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";

const OurCertifications = () => {
    return (
        <div id="partners" className="font-[Urbanist] lg:px-20 sm:px-10 px-4 sm:mb-16 mb-8">
            <div className="bg-[#1B1B1B] sm:p-8 p-6 sm:rounded-4xl rounded-2xl flex flex-col items-center gap-8">
                <h2 className="md:max-w-4xl md:text-[42px] sm:text-4xl text-3xl bg-gradient-to-r from-[#E60283] via-[#F1D507] to-[#DA4A02] bg-clip-text text-transparent text-center font-bold leading-tight">
                    Our Certifications & Achievements
                </h2>

                <div className="flex flex-row flex-wrap md:gap-6 gap-4 bg-[#1B1B1B] w-full rounded-2xl">
                    {reasons.map((reas) => {
                        const { reason, subtitle, icon } = reas;
                        return (
                            <div className="flex-1 space-y-1 w-fit">
                                {icon}

                                <h3 className='sm:text-2xl text-lg text-white whitespace-nowrap'>{reason}</h3>

                                <p className="sm:text-sm text-xs text-gray-300 whitespace-nowrap">{subtitle}</p>
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
        subtitle: "Certified Service Provider"
    },
    {
        icon: <IoCheckbox className="text-emerald-500 md:text-5xl sm:text-4xl text-2xl mb-2" />,
        reason: "ISO Certified",
        subtitle: "Quality Management System"
    },
    {
        icon: <FaShieldAlt className="text-[#e9ecf0] md:text-5xl sm:text-4xl text-2xl mb-2" />,
        reason: "Industry Leader",
        subtitle: "Bangalore's #1 Apple Repair"
    },
]

export default OurCertifications