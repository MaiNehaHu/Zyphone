import WhoWeAre from "../components/WhoWeAre"
import HowWeWork from "../components/HowWeWorks"
import GradientBackground from "../components/GradientBg"
import Phones from '../assets/iphones.svg'
import ActionGradientButton from "../components/ActionGradientButton"
import { FaIndianRupeeSign } from "react-icons/fa6"
import { IoFlash } from "react-icons/io5"
import ServicesCounts from "../components/ServicesCounts"
import XPaddinText from "../components/XPaddinText"
import OurServices from "../components/OurServices"
import AnimatedContactUs from "../components/AnimatedContactUs"
import WhyChooseUs from "../components/WhyChooseUs"
import MeetOurTeam from "../components/MeetOurTeam"
import About from "../components/About"
import Review from "../components/Review"
import FAQ from "../components/FAQ"


const Hero = () => {
  return (
    <>
      <div className="p-4">
        <div
          id="home"
          className="font-[Urbanist] text-white bg-gradient-to-r from-[#0C0C0C] from-60% to-black rounded-2xl p-4 w-full z-0 relative -translate-y-30"
        >
          <div className="flex flex-row gap-6 items-center h-screen pt-20 px-20">
            <img src={Phones} alt="Iphones" className="h-full w-2/5 pointer-events-none select-none" />


            <div className="space-y-8 w-3/5">
              <div className="flex flex-row gap-2 font-[Vazirmatn]">
                <GradientBackground>
                  <>
                    🏆 Apple Authorized Service Provider
                  </>
                </GradientBackground>
                <GradientBackground>
                  <>
                    🔧 Certified Technicians
                  </>
                </GradientBackground>
                <GradientBackground>
                  <>
                    ⭐ 4.9/5 Rating
                  </>
                </GradientBackground>
              </div>

              <XPaddinText>
                your device
              </XPaddinText>

              <h1 className="font-['Space_Grotesk'] text-7xl font-medium">
                Bengaluru’s #1 Apple Device Repair Center
              </h1>

              <p className="sm:text-base text-sm">
                Expert iPhone, iPad, Macbook, & Apple Watch repair services in Bengaluru. Same-day repairs with genuine
                Apple parts, Apple-certified technicians, free doorstep pickup & delivery. 12-month warranty guaranteed.
              </p>

              <div className="flex gap-6 flex-row">
                <ActionGradientButton text="Book Repair now - Same Day Service" icon={<IoFlash />} />
                <ActionGradientButton text="Get FREE Quote" icon={<FaIndianRupeeSign />} />
              </div>
            </div>
          </div>
        </div>

        <ServicesCounts />

        <WhoWeAre />

        <OurServices />

        <HowWeWork />
      </div>

      <AnimatedContactUs />

      <div className="p-4">
        <WhyChooseUs />

        <About />

        <MeetOurTeam />

        <Review />

        <FAQ />
      </div>
      {/* 

      <TruestedBy />

      <Whyzyphon />

      <ImagesCollection />

      <OurCertifications />




      <RequestServiceForm />

      <Footer /> */}
    </>
  )
}

export default Hero