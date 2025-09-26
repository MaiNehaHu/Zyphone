import { FiArrowUpRight } from "react-icons/fi"
import FAQ_QandA from "./FAQ_QandA";

const FAQ = () => {
  return (
    <div className="font-[Urbanist] sm:space-y-8 space-y-4 lg:px-16 sm:px-10 px-4 lg:py-16 sm:py-10 py-6 flex flex-col items-center bg-[#EEEEEE]">
      <div>
        <h2 className="md:max-w-4xl md:text-[42px] sm:text-4xl text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 md:max-w-3xl w-full md:text-base text-sm text-gray-600">
          Get answers to common questions about our Apple device repair services
        </p>
      </div>

      <FAQ_QandA />

      <StillHaveQuestion />
    </div>
  )
};

const StillHaveQuestion = () => {
  return (
    <div className="sm:py-6 py-3 sm:px-16 px-6 bg-[#1B1B1B] sm:rounded-4xl rounded-2xl">
      <h2 className="md:max-w-4xl md:text-[42px] sm:text-4xl text-3xl text-start font-bold text-white">
        Still have questions?
      </h2>
      <p className="md:max-w-3xl w-full md:text-base text-sm text-[#787878]">
        Our support team is available 24/7 to help with any queries
      </p>

      <div className="flex sm:flex-row flex-col mt-3 gap-2 justify-center">
        <button className="group text-sm flex w-fit items-center justify-center gap-2 px-4 py-2 rounded-full cursor-pointer bg-transparent hover:bg-black border border-white text-white font-medium hover:opacity-90 transition">
          WhatsApp Support
          <FiArrowUpRight className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <button className="group text-sm flex w-fit items-center justify-center gap-2 px-4 py-2 rounded-full cursor-pointer bg-gradient-to-r from-[#01C3D9] to-[#062899] text-white font-medium hover:opacity-90 transition">
          Call: +91 91480 78233
          <FiArrowUpRight className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  )
}

export default FAQ