import Warrenty from '../assets/warrenty.png';
import Certified from '../assets/5years.svg';
import Repaired from '../assets/16000.svg';
import FreePickup from '../assets/pickup.svg';
import AppleProducts from '../assets/apple-product.svg';
import Repair from '../assets/time-to-repair.svg';

const ImagesCollection = () => {
    const images = [
        { src: Warrenty, alt: "12 Months Warrenty" },
        { src: Certified, alt: "5 Years" },
        { src: Repaired, alt: "16000+ Devices Repaired" },
        { src: FreePickup, alt: "Apple Certified Technicians" },
        { src: AppleProducts, alt: "Genuine Apple Products" },
        { src: Repair, alt: "Same Day Repair Delivery" },
    ];

    return (
        <div className="overflow-hidden bg-white sm:mb-16 mb-8">
            <div className="flex gap-6 animate-marquee">
                {[...images, ...images].map((img, idx) => (
                    <div key={idx} className="flex-shrink-0 w-60 sm:w-80">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-auto rounded-3xl"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImagesCollection;
