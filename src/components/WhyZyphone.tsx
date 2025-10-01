import { FiArrowUpRight } from "react-icons/fi"

const Whyzyphon = () => {
    return (
        <div className="font-[Urbanist] flex flex-col items-center gap-6 sm:p-8 p-4 sm:mb-10 mb-6">
            <h1 className="md:max-w-4xl md:text-[42px] sm:text-4xl text-3xl text-center font-bold leading-tight">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-[#01C3D9] to-[#062899] bg-clip-text text-transparent">
                    zyphon
                </span>
                {" "}for Apple Repair?
            </h1>

            <p className="md:max-w-4xl w-full md:text-base text-center text-sm text-gray-600">
                Bangalore's most trusted Apple device repair service with unmatched quality, reliability, and customer satisfaction. Here's what makes us the #1 choice for iPhone, MacBook, iPad, and Apple Watch repairs.
            </p>

            <button className="group flex items-center justify-center gap-2 sm:px-6 px-4 sm:py-3 py-2 rounded-full cursor-pointer bg-gradient-to-r from-[#01C3D9] to-[#062899] text-white font-medium hover:opacity-90 transition">
                Book Service Now
                <FiArrowUpRight className="sm:text-lg text-sm transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
        </div>
    )
}

export default Whyzyphon