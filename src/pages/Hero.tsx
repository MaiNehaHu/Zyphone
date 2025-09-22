import React from "react"
import { BsChatDots } from "react-icons/bs"
import { FiArrowUpRight } from "react-icons/fi"
import { TiStarFullOutline } from "react-icons/ti"
import Gradient from '../assets/gradient.svg'
import RepairServices from "../components/RepairServices"
import WhyChooseUs from "../components/WhyChooseUs"
import TruestedBy from "../components/TruestedBy"
import OurCertifications from "../components/OurCertifications"
import HowItWorks from "../components/HowItWorks"
import WhyZyphone from "../components/WhyZyphone"
// import Phones from '../assets/iphones.svg'

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="font-[Urbanist] text-white bg-black flex flex-col gap-8 items-center w-full lg:px-20 sm:px-10 px-4 xl:pt-16 pt-0 md:pb-22 pb-10 z-0 relative"
      >
        <h1 className="md:max-w-2xl md:text-[64px] sm:text-5xl text-4xl text-center font-semibold leading-tight">
          Bengaluru's #1 Apple Device{" "}
          <span className="bg-gradient-to-r from-[#01C3D9] to-[#062899] bg-clip-text text-transparent">
            Repair Center
          </span>
        </h1>

        <p className="md:max-w-3xl w-full md:text-base text-center text-sm text-gray-300">
          Expert iPhone, iPad, MacBook & Apple Watch repair services in Bangalore. Same-day repairs with genuine Apple parts, Apple-certified technicians, free doorstep pickup & delivery. 12-month warranty guaranteed.
        </p>

        <div className="flex sm:flex-row flex-col flex-wrap gap-4 text-sm">
          <button className="group flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer bg-[#1E1E1E] text-white font-medium hover:bg-[#2b2b2b] transition">
            Book Repair Now – Same Day Service
            <FiArrowUpRight className="sm:text-lg text-sm transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full cursor-pointer bg-gradient-to-r from-[#01C3D9] to-[#062899] text-white font-medium hover:opacity-90 transition">
            <BsChatDots className="text-lg" />
            Get FREE Quote
            <FiArrowUpRight className="sm:text-lg text-sm transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="md:max-w-4xl w-full md:my-8 flex md:flex-row flex-col xl:gap-4 md:gap-1 gap-4 justify-between items-center">
          {[
            <>Genuine Apple Parts Only</>,
            <>Free Doorstep Service</>,
            <>12-Month Warrenty</>,
            <>4.9<TiStarFullOutline className="mr-1" /> Rating (500+ Reviews)</>
          ].map((text) =>
            <p className="md:text-base text-sm text-gray-300 flex flex-row items-center">
              {text}
            </p>
          )}
        </div>

        <div className="md:p-6 sm:p-4 p-2 h-full bg-[#1B1B1B] text-white flex flex-row justify-between items-center w-full sm:rounded-3xl rounded-2xl relative">
          {[
            { num: 16000, sign: "+", text: "Devices Repaired" },
            { num: 25, sign: "+", text: "Areas in Bangalore" },
            { num: 98, sign: "%", text: "Success Rate" },
          ].map(({ num, sign, text }: { num: number; sign: string; text: string }, index: number) => (
            <React.Fragment key={index}>
              {index == 1 &&
                <div className="sm:h-20 h-12 w-0.5 bg-white/10 mx-1" />
              }

              <div className="md:py-6 sm:py-4 py-2 mx-auto sm:text-start text-center">
                <h1 className="md:text-6xl sm:text-4xl text-2xl">{num}{sign}</h1>
                <p className="md:text-base sm:text-sm text-xs text-gray-200">{text}</p>
              </div>

              {index == 1 &&
                <div className="sm:h-20 h-12 w-0.5 bg-white/10 mx-1" />
              }
            </React.Fragment>
          ))}
        </div>

        {/* <div className="absolute left-0 -translate-y-10 translate-x-6 -z-40">
          <img src={Phones} className="w-full h-full object-cover" />
        </div> */}

        <div className="backdrop-blur-sm w-full -z-50 absolute bottom-0 lg:translate-y-40 md:translate-y-28 translate-y-20 lg:h-[70%] md:h-[55%] h-[40%]">
          <img src={Gradient} className="w-full h-full sm:object-fill object-cover" />
        </div>
      </div>

      <RepairServices />

      <WhyChooseUs />

      <TruestedBy />

      <HowItWorks />

      <WhyZyphone />

      <OurCertifications />
    </>
  )
}

export default Hero