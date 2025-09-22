import { FaTrophy } from 'react-icons/fa';
import Img from '../assets/dac.png'
import { HiWrench } from 'react-icons/hi2';
import { TiStarFullOutline } from 'react-icons/ti';

const TruestedBy = () => {
    return (
        <div id="partners" className="font-[Urbanist] lg:px-20 sm:px-10 px-4 sm:mb-16 mb-8">
            <div className="bg-[#1B1B1B] sm:px-8 px-4 sm:py-16 py-8  sm:rounded-4xl rounded-2xl flex flex-col items-center gap-6">
                <h2 className="md:max-w-4xl md:text-[42px] sm:text-4xl text-3xl text-white text-center font-bold leading-tight">
                    Trusted by Leading Companies
                </h2>

                <p className="md:max-w-3xl w-full md:text-base text-center text-sm text-gray-400">
                    Certified by leading technology brands and trusted by businesses across Bangalore
                </p>

                <div className="flex flex-row flex-wrap gap-x-4 gap-y-6 w-full sm:my-10 my-6">
                    {companies.map((com) => {
                        const { img, name } = com;
                        return (
                            <div className="flex flex-1 flex-col items-center gap-2 w-fit">
                                <img src={img} className='sm:w-20 w-10 sm:h-20 h-10' />

                                <p className='sm:text-2xl md:text-lg text-sm text-white whitespace-nowrap'>{name}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="flex sm:flex-row flex-col items-center gap-3">
                    {[
                        {
                            icon: <FaTrophy className='text-yellow-500' />,
                            tag: "Apple Authorized Service Provider"
                        },
                        {
                            icon: <HiWrench className='text-[#808790]' />,
                            tag: "Certified Technicians"
                        },
                        {
                            icon: <TiStarFullOutline className='text-yellow-500' />,
                            tag: "4.9/5 Rating",
                        }]
                        .map((tagg) => (
                            <p className="flex flex-row gap-1 items-center sm:text-base text-sm text-gray-400">
                                {tagg.icon}
                                {tagg.tag}
                            </p>
                        ))}
                </div>
            </div>
        </div>
    )
};

const companies = [
    {
        img: Img,
        name: "Digital API Corp"
    },
    {
        img: Img,
        name: "Digital API Corp"
    },
    {
        img: Img,
        name: "Digital API Corp"
    },
    {
        img: Img,
        name: "Digital API Corp"
    },
    {
        img: Img,
        name: "Digital API Corp"
    },
]

export default TruestedBy