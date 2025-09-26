import { useEffect, useState } from 'react'
import Gradient from '../assets/about-gradient.svg'
import Stars from './Stars';
import Check from '../assets/Check';
import ReviewDesign from '../assets/ReviewDesign';

const Review = () => {
    const [active, setActive] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(2);

    const handleDotClick = (index: number) => {
        setActive(index);
    };

    // ✅ Update cards per page on resize
    useEffect(() => {
        const updateCardsPerPage = () => {
            if (window.innerWidth < 640) {
                setCardsPerPage(1);
            } else {
                setCardsPerPage(2);
            }
        };

        updateCardsPerPage(); // run on mount
        window.addEventListener("resize", updateCardsPerPage);

        return () => window.removeEventListener("resize", updateCardsPerPage);
    }, []);

    return (
        <div className="font-[Urbanist] bg-[#1B1B1B] lg:px-24 md:px-10 px-4 lg:py-16 sm:py-12 py-6 flex flex-col sm:gap-20 gap-10 items-center relative z-0">
            <div>
                <h2 className="md:max-w-7xl md:text-[42px] sm:text-4xl text-3xl text-center font-bold text-white">
                    Customer Reviews - Apple Device Repair in Bangalore
                </h2>
                <p className="mt-2 md:max-w-7xl w-full md:text-base text-center text-sm text-gray-300">
                    Over 3000+ satisfied Apple device customers in Bangalore trust Zyphon for iPhone, iPad, MacBook repairs
                </p>
            </div>

            {/* Reviews slider */}
            <div className="flex flex-wrap md:gap-6 gap-3 w-full justify-center">
                {reviewsList
                    .slice(active, active + cardsPerPage)
                    .map((review) => (
                        <div
                            key={review.id}
                            className="flex-1 sm:basis-[45%] basis-full md:p-6 p-4 rounded-2xl bg-[#1B1B1B] border border-gray-700 relative"
                        >
                            <Stars rating={review.rating} />

                            <p className="my-6 text-gray-300 md:text-base text-sm leading-relaxed min-h-[130px]">
                                {review.reviewText}
                            </p>

                            <div className="my-6 bg-gradient-to-r from-white to-[#1B1B1B] to-98% h-[1px]" />

                            <div className="flex items-center justify-between gap-1">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={review.reviewer.avatar}
                                        alt={review.reviewer.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium md:text-lg text-sm text-white">
                                            {review.reviewer.name}
                                        </p>
                                        <p className="text-xs text-gray-400 break-all">{review.reviewer.email}</p>
                                    </div>
                                </div>

                                {review.verified && (
                                    <span className="text-sm text-white flex flex-row items-center gap-1">
                                        <Check />
                                        Verified
                                    </span>
                                )}
                            </div>

                            <div className="absolute right-1/12 md:-top-12 -top-6 md:w-22 md:h-22 w-12 h-12 object-contain">
                                <ReviewDesign />
                            </div>
                        </div>
                    ))}
            </div>

            {/* Dots */}
            <div className="flex flex-row gap-3 items-center">
                {Array.from({ length: Math.ceil(reviewsList.length / cardsPerPage) }).map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleDotClick(idx * cardsPerPage)}
                        className={`${active === idx * cardsPerPage
                            ? 'sm:w-7 w-5 sm:h-7 h-5 bg-gradient-to-br from-[#01C3D9] to-[#062899]'
                            : 'bg-white sm:w-4 w-3 sm:h-4 h-3'
                            } rounded-full cursor-pointer`}
                    />
                ))}
            </div>

            <img
                src={Gradient}
                className="absolute bottom-0 w-full h-fit object-fill pointer-events-none -z-10"
            />
        </div>
    );
};

const reviewsList = [
    {
        id: 1,
        rating: 5,
        reviewText:
            'Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, Curabitur id nibh id sem dignissim finibus ac sit amet magna.',
        reviewer: {
            name: 'James Hall',
            email: 'K.R.Mastrangelo@Outlook.Com',
            avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
        },
        verified: true,
    },
    {
        id: 2,
        rating: 2,
        reviewText:
            'Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, Curabitur id nibh id sem dignissim finibus ac sit amet magna.',
        reviewer: {
            name: 'James Hall',
            email: 'K.R.Mastrangelo@Outlook.Com',
            avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
        },
        verified: true,
    },
    {
        id: 3,
        rating: 4,
        reviewText:
            'Excellent service and support! They repaired my MacBook quickly and professionally. Highly recommend Zyphon.',
        reviewer: {
            name: 'Alice Brown',
            email: 'alice.brown@example.com',
            avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
        },
        verified: true,
    },
    {
        id: 4,
        rating: 5,
        reviewText:
            'Quick pickup and fast repair for my iPhone screen. Customer service was top-notch!',
        reviewer: {
            name: 'Rahul Kumar',
            email: 'rahul.k@example.com',
            avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
        },
        verified: true,
    },
];

export default Review;
