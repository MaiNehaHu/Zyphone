import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi';
import { IoChevronDownOutline } from 'react-icons/io5';

const RequestServiceForm = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [deviceType, setDeviceType] = useState("");

    return (
        <div id="contact" className='bg-white font-[Urbanist] lg:px-16 sm:px-10 px-4 lg:py-16 sm:py-10 py-6 flex md:flex-row flex-col gap-6 lg:w-[85%] w-full mx-auto'>
            <div className="bg-[#EEEEEE] sm:p-4 p-3 rounded-xl lg:w-2/3 md:w-3/5 w-full space-y-3 flex flex-col">
                <p className="sm:text-lg text-base font-semibold bg-gradient-to-b from-[#01C3D9] to-[#062899] bg-clip-text text-transparent">Request Service</p>

                <div className="flex sm:flex-row flex-col gap-3">
                    <Input
                        title='Full Name'
                        value={fullName}
                        setValue={setFullName}
                        type='text'
                    />
                    <Input
                        title='Phone Number'
                        value={phoneNum}
                        setValue={setPhoneNum}
                        type='number'
                    />
                </div>

                <DropDown
                    value={deviceType}
                    setValue={setDeviceType}
                    title='Device Type'
                    options={["iPhone", "iPad", "MacBook"]}
                />

                <div className='space-y-2 flex-1'>
                    <p className="text-sm">Issue Description *</p>

                    <textarea
                        name="issue description"
                        id="issue description"
                        className='border border-gray-300 rounded-xl w-full p-3 text-sm bg-white focus:outline-0 resize-none'
                    />
                </div>

                <button className="group mt-auto sm:text-base text-sm flex w-fit items-center justify-center gap-2 px-4 py-2 rounded-full cursor-pointer bg-gradient-to-r from-[#01C3D9] to-[#062899] text-white font-medium hover:opacity-90 transition">
                    Send WhatsApp Message
                    <FiArrowUpRight className="sm:text-base text-sm transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
            </div>

            <div className="space-y-3 lg:w-1/3 md:w-2/5 w-full">
                <div className="bg-[#1B1B1B] sm:p-4 p-3 rounded-xl space-y-2">
                    <p className='sm:text-lg text-base text-[#02B1E6]'>Contact Information</p>

                    <HeadingValue heading='Phone' value={['+91 91480 78233']} />
                    <HeadingValue heading='Email' value={['Nayaz377@gmail.com']} />
                    <HeadingValue heading='Address' value={['D-1001, Aakruti Amity Apartments Anatha Nagar Layout, Kammasandra Bangalore, 560100', '(Take lift from CSA block ground floor to 10th floor)']} />
                    <HeadingValue heading='Hours' value={['Mon-Sat: 9AM-8PM', 'Sunday: 10AM-6PM']} />

                </div>
                <div className="bg-[#EEEEEE] sm:p-4 p-3 rounded-xl space-y-2">
                    <p className='sm:text-lg text-base font-medium'>Emergency Repair</p>
                    <p className='text-gray-600 text-sm'>Need urgent repair? We offer 24/7 emergency service for critical devices.</p>

                    <button className="group mt-auto sm:text-base text-sm flex w-fit items-center justify-center gap-2 px-4 py-2 rounded-full cursor-pointer bg-black text-white font-medium hover:opacity-90 transition">
                        Call Emergency Line
                        <FiArrowUpRight className="sm:text-base text-sm transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </div>
            </div>
        </div>
    )
};

const Input = ({ title, type, value, setValue }: { title: string; type: "text" | "number"; value: string; setValue: (value: string) => void; }) => {
    return (
        <div className='space-y-2 flex-1'>
            <p className="text-sm">{title}</p>

            <input
                type={type}
                value={value}
                placeholder={title}
                onChange={(e) => setValue(String(e.target.value))}
                className='border border-gray-300 rounded-xl w-full p-3 text-sm bg-white focus:outline-0'
            />
        </div>
    )
};

const DropDown = ({ title, value, setValue, options }: { title: string; value: string; setValue: (value: string) => void; options: string[]; }) => {
    return (
        <div className='space-y-2'>
            <p className="text-sm">{title}</p>

            <div className="flex items-center relative">
                <select
                    name={title}
                    id={title}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='border border-gray-300 rounded-xl w-full p-3 text-sm bg-white focus:outline-0 appearance-none'
                >
                    {options.map((op) => (
                        <option value={op}>{op}</option>
                    ))}
                </select>

                <IoChevronDownOutline className='text-gray-500 absolute right-4' />
            </div>
        </div>
    )
};

const HeadingValue = ({ heading, value }: { heading: string; value: string[] }) => {

    return (
        <div>
            <p className='text-white text-base'>{heading}</p>

            {value.map((val) => (
                <p className='text-gray-400 text-sm'>
                    {val}
                </p>
            ))}
        </div>
    )
}

export default RequestServiceForm