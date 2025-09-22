import RepairSwitch from "./RepairSwitch"

const RepairServices = () => {
  return (
    <div id="services" className="font-[Urbanist] text-black bg-white lg:mt-42 md:mt-32 mt-20 sm:mb-16 mb-8 lg:px-20 sm:px-10 px-4 flex flex-col items-center gap-6">
      <h2 className="md:max-w-4xl md:text-[42px] sm:text-4xl text-3xl text-center font-bold leading-tight">
        Apple Device Repair Services in {" "}
        <span className="bg-gradient-to-r from-[#E60283] via-[#F1D507] to-[#DA4A02] bg-clip-text text-transparent">
          Bengaluru
        </span>
      </h2>

      <p className="md:max-w-3xl w-full md:text-base text-center text-sm text-gray-600">
        Expert Apple device repair services with genuine parts, certified technicians, and same-day service. We fix iPhones, MacBooks, iPads, and Apple Watches across Bangalore with 12-month warranty.
      </p>

      <RepairSwitch />
    </div>
  )
}

export default RepairServices