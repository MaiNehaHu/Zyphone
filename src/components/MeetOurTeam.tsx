import { FiArrowUpRight } from "react-icons/fi"

const MeetOurTeam = () => {
    return (
        <div className="font-[Urbanist] sm:mb-10 mb-6">
            <div className="sm:p-8 p-4">
                <div className="flex flex-row justify-between gap-3 items-start">
                    <h2 className="md:text-[42px] sm:text-4xl text-3xl text-start font-bold">
                        Meet Our Expert Team
                    </h2>

                    <button className="group text-nowrap dm:flex hidden w-fit items-center justify-center gap-2 sm:px-6 px-4 sm:py-3 py-2 rounded-full cursor-pointer bg-gradient-to-r from-[#01C3D9] to-[#062899] text-white font-medium hover:opacity-90 transition">
                        Book Service Now
                        <FiArrowUpRight className="sm:text-lg text-sm transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </div>

                <p className="mt-2 w-full md:text-base text-start text-sm text-gray-500">
                    Apple-certified technicians with years of experience
                </p>
            </div>

            <div className="bg-[#E6F3F2] sm:p-6 p-4 flex sm:flex-row flex-col gap-4">
                {people.map((peo) => {
                    const { name, designation, department, image } = peo;
                    return (
                        <div className="sm:p-4 p-2 rounded-2xl flex-1 bg-white">
                            <img src={image} className="w-full lg:h-[400px] md:h-[300px] sm:h-[250px] h-[300px] rounded-2xl object-cover object-top" />

                            <div className="lg:p-10 p-6 lg:pb-6 pb-3">
                                <p className="sm:text-base text-xs bg-gradient-to-b from-[#01C3D9] to-[#062899] bg-clip-text text-transparent">{designation}</p>
                                <p className="text-2xl font-semibold">{name}</p>
                                <p className="sm:text-base text-xs text-gray-400">{department}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

const people = [
    {
        name: "Priya Reddy",
        designation: "Senior Technician",
        department: "IPhone & iPad Repairs",
        image: "https://i.pinimg.com/236x/da/fd/f2/dafdf25168edcb2f0e1d8702797946cc.jpg"
    },
    {
        name: "Priya Reddy",
        designation: "Senior Technician",
        department: "IPhone & iPad Repairs",
        image: "https://i.pinimg.com/236x/da/fd/f2/dafdf25168edcb2f0e1d8702797946cc.jpg"
    },
    {
        name: "Priya Reddy",
        designation: "Senior Technician",
        department: "IPhone & iPad Repairs",
        image: "https://i.pinimg.com/236x/da/fd/f2/dafdf25168edcb2f0e1d8702797946cc.jpg"
    },
]

export default MeetOurTeam