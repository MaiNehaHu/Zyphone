// import React from 'react'
import Warrenty from '../assets/warrenty.png';
import Certified from '../assets/5years.svg';
import Repaired from '../assets/16000.svg';
import FreePickup from '../assets/pickup.svg';
import AppleProducts from '../assets/apple-product.svg';
import Repair from '../assets/time-to-repair.svg';

const ImagesCollection = () => {
    return (
        <div className="sm:p-6 p-4 flex flex-col gap-4 bg-[#F3EEE6] sm:mb-16 mb-8">
            <div className="flex sm:flex-row flex-col gap-4">
                <button className='cursor-pointer flex-1 sm:w-1/2 w-full'>
                    <img src={Warrenty} alt="12 Months Warrenty" className="flex-1 w-full rounded-4xl pointer-events-none" />
                </button>
                <button className='cursor-pointer flex-1 sm:w-1/2 w-full'>
                    <img src={Certified} alt="5 Years" className="flex-1 w-full rounded-4xl pointer-events-none" />
                </button>
            </div>
            <div className="flex sm:flex-row flex-col gap-4">
                <button className='cursor-pointer flex-1 sm:w-1/2 w-full'>
                    <img src={Repaired} alt="16000+ Devices Repaired" className="flex-1 w-full rounded-4xl pointer-events-none" />
                </button>
                <button className='cursor-pointer flex-1 sm:w-1/2 w-full'>
                    <img src={FreePickup} alt="Apple Certified Technicians" className="flex-1 w-full rounded-4xl pointer-events-none" />
                </button>
            </div>
            <div className="flex sm:flex-row flex-col gap-4">
                <button className='cursor-pointer flex-1 sm:w-1/2 w-full'>
                    <img src={AppleProducts} alt="Genuine Apple Products" className="flex-1 w-full rounded-4xl pointer-events-none" />
                </button>
                <button className='cursor-pointer flex-1 sm:w-1/2 w-full'>
                    <img src={Repair} alt="Same Day Repair Delivery" className="flex-1 w-full rounded-4xl pointer-events-none" />
                </button>
            </div>
        </div>
    )
}

export default ImagesCollection