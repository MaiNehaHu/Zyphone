import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri';
import Logo from '../assets/react.svg'
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="font-[Urbanist] bg-[#1B1B1B] text-white">
            <div className="w-full py-10 sm:px-10 px-4 flex sm:flex-row flex-col gap-10 md:justify-around justify-between">
                <div className='space-y-4 md:w-1/4 w-fit'>
                    <img src={Logo} alt="ZyPhone" />
                    <p className='sm:text-base text-sm text-gray-200'>Optix seamlessly connects your members with the community, resources.</p>

                    <div className="flex items-center gap-4">
                        <button className='text-2xl cursor-pointer hover:text-blue-500 transition'>
                            <RiFacebookFill />
                        </button>
                        <button className='text-2xl cursor-pointer hover:text-blue-500 transition'>
                            <FaTwitter />
                        </button>
                        <button className='text-2xl cursor-pointer hover:text-blue-500 transition'>
                            <RiLinkedinFill />
                        </button>
                    </div>
                </div>

                <div className='sm:flex-none flex-1 flex flex-wrap flex-row gap-10'>
                    {footerLinks.map((footer) => (
                        <div className='space-y-3 flex flex-col'>
                            <p className="text-base font-medium">{footer.heading}</p>

                            {footer.links.map((link, index) => {
                                const [text, url] = Object.entries(link)[0]; // extract key & value
                                return (
                                    <Link key={index} to={url} className='text-sm'>
                                        {text}
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-r from-white to-[#1B1B1B] to-98% h-[1px]" />
            <div className="w-full p-6 flex justify-center">
                <p className='text-[#787878] sm:text-base text-sm text-center'>
                    &copy; 2024 Zyphon. All rights reserved. | Professional Device Repair Services
                </p>
            </div>
        </div>
    )
};

const footerLinks = [
    {
        heading: "Services",
        links: [
            { "iPhone Repair": "/" },
            { "iPad Repair": "/" },
            { "MacBook Repair": "/" },
            { "Apple Watch": "/" },
            { "Repair": "/" },
        ]
    },
    {
        heading: "Company",
        links: [
            { "About Us": "/" },
            { "Careers": "/" },
            { "Warrenty": "/" },
            { "Privacy Policy": "/" },
            { "Terms and Services": "/" },
        ]
    }
]

export default Footer;