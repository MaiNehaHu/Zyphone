
const AnimatedContactUs = () => {
    return (
        <div className="overflow-hidden z-0 py-10">
            <TextMoving
                bgColor="#EF644C"
                textColor="#000000"
                rotateAngle={"rotate-1"}
                translateY={"translate-y-1/4"}
                animateClass="animate-to-left"
            />

            <TextMoving
                bgColor="#FFFFFF"
                textColor="#000000"
                rotateAngle={"-rotate-1"}
                translateY={"-translate-y-1/4"}
                animateClass="animate-to-right"
            />
        </div>
    )
};

const TextMoving = ({ bgColor, textColor, rotateAngle, translateY, animateClass }: { bgColor: string; textColor: string; rotateAngle: string; translateY: string; animateClass: string }) => {
    return (
        <div
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
            className={"font-['Space_Grotesk'] text-5xl font-medium flex gap-16 py-6 overflow-x-visible select-none " + `${translateY} ${rotateAngle} ${animateClass}`}
        >
            <div className="flex gap-6">
                <p>
                    Need a Quick Fix? Contact Us
                </p>
                <p>
                    +91 - 91480 78233
                </p>
            </div>
            <div className="flex gap-16">
                <p>
                    Need a Quick Fix? Contact Us
                </p>
                <p>
                    +91 - 91480 78233
                </p>
            </div>
            <div className="flex gap-16">
                <p>
                    Need a Quick Fix? Contact Us
                </p>
                <p>
                    +91 - 91480 78233
                </p>
            </div>
        </div>
    )
}

export default AnimatedContactUs