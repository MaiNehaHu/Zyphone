import { FiArrowUpRight } from 'react-icons/fi';
import SideImg from '../assets/how-it-works.svg';
import FAQ from './QandA';

const HowItWorks = () => {
    return (
        <div id="process" className="font-[Urbanist] lg:px-20 sm:px-10 px-4 sm:mb-16 mb-8">
            <div className="bg-[#EEEEEE] sm:rounded-4xl rounded-2xl lg:flex flex-row gap-8">
                <div className='lg:w-1/2 w-full sm:p-10 p-6 flex flex-col gap-4 justify-between items-start'>
                    <div>
                        <h2 className="md:max-w-4xl md:text-[42px] sm:text-4xl text-3xl font-bold">
                            How It Works?
                        </h2>
                        <p className="md:max-w-3xl w-full md:text-base text-start text-sm text-gray-600">
                            Simple 4-step process to get your Apple device repaired
                        </p>
                    </div>

                    <FAQ />

                    <button className="group mt-auto flex w-fit items-center justify-center gap-2 sm:px-6 px-4 sm:py-3 py-2 rounded-full cursor-pointer bg-gradient-to-r from-[#01C3D9] to-[#062899] text-white font-medium hover:opacity-90 transition">
                        Book Service Now
                        <FiArrowUpRight className="sm:text-lg text-sm transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </div>

                <img src={SideImg} className='lg:w-1/2 w-full lg:h-fit sm:h-96 h-60 mt-auto px-8 object-fill pointer-events-none' />
            </div>
        </div>
    )
}

export default HowItWorks