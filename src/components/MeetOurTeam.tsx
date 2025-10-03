import type { JSX } from "react";

const MeetOurTeam = () => {
    return (
        <div className="bg-black text-white flex flex-col items-center gap-20 p-10 mx-auto my-10">
            <h2 className="font-['Space_Grotesk'] text-5xl font-medium text-center">
                Meet Our Expert Team
            </h2>


            <div className="flex flex-row w-full gap-10">
                {teamList.slice(0, 4).map((team, index) => (
                    <Gradientbg key={index}>
                        <div className="px-6 py-12 flex flex-col items-center gap-3 bg-gradient-to-b from-[#161616] from-60% to-[#0a0a0a] rounded-2xl">
                            <img src={team.image} alt="Image" className="w-52 h-52 rounded-full object-cover" />

                            <p className="text-base">{team.name}</p>
                            <p className="text-sm">{team.role}</p>
                        </div>
                    </Gradientbg>
                ))}
            </div>
        </div>
    )
};

const Gradientbg = ({ children }: { children: JSX.Element }) => {
    return (
        <div
            className='p-[1px] bg-[linear-gradient(135deg,_#00000000_0%,_#757575_20%,_#00000000_60%,_#00000000_100%)] rounded-2xl flex-1'
        >
            {children}
        </div>
    )
};

const teamList = [
    {
        image: "https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg",
        name: "Nayaz Ahmed",
        role: "CEO & Founder"
    },
    {
        image: "https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg",
        name: "Nayaz Ahmed",
        role: "CEO & Founder"
    },
    {
        image: "https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg",
        name: "Nayaz Ahmed",
        role: "CEO & Founder"
    },
    {
        image: "https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg",
        name: "Nayaz Ahmed",
        role: "CEO & Founder"
    },
    {
        image: "https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg",
        name: "Nayaz Ahmed",
        role: "CEO & Founder"
    },
]

export default MeetOurTeam