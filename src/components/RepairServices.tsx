import { FiArrowUpRight } from "react-icons/fi";
import ScreenReplace from "../assets/ScreenReplace";
import { BsCheckLg } from "react-icons/bs";

const RepairServices = () => {
  return (
    <div id="services" className="font-[Urbanist] text-black bg-white lg:mt-26 md:mt-20 mt-12 sm:mb-16 mb-8 lg:px-20 sm:px-10 px-4 flex flex-col items-center gap-6">
      <h2 className="md:max-w-4xl md:text-[42px] sm:text-4xl text-3xl text-center font-bold leading-tight">
        Apple Device Repair Services in {" "}
        <span className="bg-gradient-to-r from-[#E60283] via-[#F1D507] to-[#DA4A02] bg-clip-text text-transparent">
          Bengaluru
        </span>
      </h2>

      <p className="md:max-w-3xl w-full md:text-base text-center text-sm text-gray-600">
        Expert Apple device repair services with genuine parts, certified technicians, and same-day service. We fix iPhones, MacBooks, iPads, and Apple Watches across Bangalore with 12-month warranty.
      </p>

      <div className="bg-[#F3EEE6] sm:p-8 p-4 sm:rounded-4xl rounded-2xl w-full">
        <p className="w-full sm:my-0 my-2 md:text-lg sm:text-base text-sm text-center text-gray-800 font-medium">
          Same-day iPhone repair in Bangalore with genuine Apple parts and 12-month warranty. Free pickup and delivery across all areas.
        </p>

        <div className="flex flex-row flex-wrap gap-4 mt-6 xl:px-18 px-0">
          {servicesJson.screenReplacement.map((card) => {
            const { title, services } = card;
            return (
              <div className="flex-1 flex flex-col sm:p-8 p-4 sm:rounded-3xl rounded-2xl bg-[#1B1B1B] space-y-3">
                <div className="flex flex-row items-center justify-between gap-4">
                  <p className='sm:text-2xl text-lg text-[#02B1E6]'>{title}</p>

                  <ScreenReplace />
                </div>

                <div className="space-y-1">
                  {services?.map((ser) => (
                    <div className="flex flex-row gap-2 items-start text-white">
                      <BsCheckLg className="mt-1" />
                      <p className='sm:text-sm text-xs text-gray-200 flex-1'>
                        {ser}
                      </p>
                    </div>
                  ))}
                </div>


                <div className='sm:text-sm text-xs bg-gradient-to-r from-[#01C3D9] to-[#062899] p-[1px] w-fit rounded-full mt-auto'>
                  <button className="group bg-[#1B1B1B] flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer text-white font-medium transition whitespace-nowrap">
                    Book {title}
                    <FiArrowUpRight className="sm:text-lg text-sm transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

const servicesJson = {
  screenReplacement: [
    {
      title: "iPhone Repair",
      services: [
        "Screen & Backglass Replacement (All Models)",
        "Battery & Charging Port Replacement",
        "Water Damage Repair",
        "Camera & Face ID Fix",
        "Network & Wifi Fix",
        "Logic Board & Physical damage Repair",
      ]
    },
    {
      title: "iPad Repair",
      services: [
        "Screen replacement",
        "Battery & Charging",
        "Touch Digitizer",
        "Logic board, Water damage & physical damages",
        "iPadOS Software Issues"
      ]
    },
    {
      title: "Apple Watch Repairs",
      services: [
        "Screen replacement",
        "Touch Digitizer",
        "Battery & Back glass"
      ]
    },
    {
      title: "MacBook and Mac",
      services: [
        "Screen replacement",
        "Battery & Charging",
        "Keyboard & light",
        "Logic board, Water damage & physical damages",
        "SSD & RAM Upgrades",
        "Overheating & Fan Issues",
        "macOS Software Troubleshooting"
      ]
    }
  ]
}


export default RepairServices