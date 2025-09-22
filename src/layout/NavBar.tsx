import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../logo.svg";

interface NavItem {
    name: string;
    targetId: string;
}

const NavBar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems: NavItem[] = [
        { name: "Home", targetId: "home" },
        { name: "Services", targetId: "services" },
        { name: "Partners", targetId: "partners" },
        { name: "Process", targetId: "process" },
        { name: "Why Us", targetId: "why-us" },
        { name: "Reviews", targetId: "reviews" },
        { name: "FAQ", targetId: "faq" },
        { name: "About", targetId: "about" },
        { name: "Contact", targetId: "contact" },
    ];

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -100; // offset from top
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setMenuOpen(false); // close menu after click
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={`sticky top-0 z-50 transition-colors ${scrolled ? "bg-transparent" : "bg-black"}`}>
            <div className="font-[Inter] py-4 sm:px-10 px-4 flex flex-row items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <img className="sm:w-16 w-14 sm:h-16 h-14" src={logo} alt="Logo" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex gap-0.5 bg-[#00000020] backdrop-blur-lg rounded-full border-2 border-[#E5F0F336] px-4">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(item.targetId)}
                            className={`p-4 cursor-pointer rounded-full transition-colors duration-200
                                ${activeSection === item.targetId
                                    ? "text-[#02B1E6] font-semibold"
                                    : "text-white hover:text-[#02B1E6]"}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <div className="lg:block hidden"></div>

                {/* Hamburger for mobile */}
                <button
                    className="lg:hidden text-white text-2xl bg-[#000000] backdrop-blur-lg rounded-full border-2 border-[#E5F0F336] px-4 py-2.5 cursor-pointer"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Full-Screen Dropdown */}
            {menuOpen && (
                <div className="fixed inset-0 h-fit bg-black backdrop-blur-lg flex flex-wrap gap-2 flex-row items-start sm:px-8 px-4 pt-16 sm:pb-10 pb-6 space-y-6 z-50 rounded-b-3xl shadow-2xl shadow-gray-900 border border-t-0 border-gray-700">
                    {/* Close Button (top-right) */}
                    <button
                        className="absolute top-6 right-6 text-white text-3xl cursor-pointer hover:text-blue-500"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FiX />
                    </button>

                    {/* Nav Items */}
                    {navItems.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleScroll(item.targetId)}
                            className={`text-left sm:text-base text-sm font-medium transition-colors bg-[#00000020] backdrop-blur-lg rounded-full border-2 border-[#E5F0F336] px-4 sm:py-2.5 py-2 mb-0 cursor-pointer
                                ${activeSection === item.targetId
                                    ? "text-[#02B1E6]"
                                    : "text-white hover:text-[#02B1E6]"}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavBar;
