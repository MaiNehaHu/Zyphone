import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import ScreenReplace from '../assets/screenReplace';

const buttons = {
    iphoneRepair: "iPhone Repair",
    ipadRepair: "iPad Repair",
    macbookRepair: "MacBook Repair",
    appleWatchRepait: "Apple Watch Repair"
}

const RepairSwitch = () => {
    const [activeButton, setActiveButton] = useState(buttons.iphoneRepair);

    return (
        <>
            <div className="sm:text-base text-sm flex bg-gray-200 rounded-full sm:p-2 p-1 sm:gap-2 gap-1 w-fit">
                {["iPhone Repair", "iPad Repair", "MacBook Repair", "Apple Watch Repair"].map((btn) => (
                    <button
                        onClick={() => setActiveButton(btn)}
                        className={`${activeButton == btn ? "bg-white" : "bg-transparent"} rounded-full px-4 py-2 cursor-pointer transition hover:bg-white`}
                    >{btn}
                    </button>
                ))}
            </div>

            <div className="bg-[#F3EEE6] sm:p-8 p-4 sm:rounded-4xl rounded-2xl w-full">
                {activeButton === buttons.iphoneRepair
                    && <>
                        <p className="w-full sm:my-0 my-2 md:text-lg sm:text-base text-sm text-center text-gray-800 font-medium">
                            Same-day iPhone repair in Bangalore with genuine Apple parts and 12-month warranty. Free pickup and delivery across all areas.
                        </p>

                        <div className="flex flex-row flex-wrap gap-4 mt-6 xl:px-28 px-0">
                            {servicesJson.screenReplacement.map((card) => {
                                const { title, price, description } = card;
                                return (
                                    <div className="flex-1 sm:p-8 p-4 sm:min-w-[330px] sm:rounded-3xl rounded-2xl bg-[#1B1B1B] space-y-3">
                                        <div className="flex flex-row items-center justify-between gap-4">
                                            <p className='sm:text-2xl text-lg text-[#02B1E6]'>{title}</p>

                                            <ScreenReplace />
                                        </div>

                                        <p className='sm:text-3xl text-xl text-white'>₹{price}</p>

                                        <p className='sm:text-sm text-xs text-gray-200'>{description}</p>

                                        <div className='sm:text-sm text-xs bg-gradient-to-r from-[#01C3D9] to-[#062899] p-[1px] w-fit rounded-full'>
                                            <button className="group bg-[#1B1B1B] flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer text-white font-medium transition">
                                                Book Now - ₹{price}
                                                <FiArrowUpRight className="text-lg transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                }
            </div>
        </>
    )
};

const servicesJson = {
    screenReplacement: [
        {
            title: "Screen Replacement",
            price: 1500,
            description: "Cracked screen repair with genuine parts",
        },
        {
            title: "Screen Replacement",
            price: 1500,
            description: "Cracked screen repair with genuine parts",
        },
        {
            title: "Screen Replacement",
            price: 1500,
            description: "Cracked screen repair with genuine parts",
        },
        {
            title: "Screen Replacement",
            price: 1500,
            description: "Cracked screen repair with genuine parts",
        },
        {
            title: "Screen Replacement",
            price: 1500,
            description: "Cracked screen repair with genuine parts",
        },
        {
            title: "Screen Replacement",
            price: 1500,
            description: "Cracked screen repair with genuine parts",
        },
    ]
}


export default RepairSwitch