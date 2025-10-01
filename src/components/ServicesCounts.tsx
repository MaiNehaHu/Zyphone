
const ServicesCounts = () => {
    return (
        <div className="bg-[#1F1F1F] text-white py-10 rounded-2xl flex flex-row gap-10 justify-evenly w-full -translate-y-24">
            {[
                { count: 15, sign: "+", text: "Years Of Experience" },
                { count: 20, sign: "K", text: "Years Of Experience" },
                { count: 25, sign: "+", text: "Areas Covered" },
                { count: 16, sign: "+", text: "Areas Covered" },
            ].map((obj) => (
                <DataMapper count={obj.count} sign={obj.sign} text={obj.text} />
            ))}
        </div>
    )
};

const DataMapper = ({ count, sign, text }: { count: number; sign: string; text: string }) => {

    return (
        <div className="flex flex-row items-center gap-2">
            <h2 className="text-7xl font-medium font-['Space_Grotesk']">
                {count}
                <span className="text-[#EF644C]">
                    {sign}
                </span>
            </h2>

            <p className="sm:text-base text-sm max-w-24">
                {text}
            </p>
        </div>
    )
}

export default ServicesCounts