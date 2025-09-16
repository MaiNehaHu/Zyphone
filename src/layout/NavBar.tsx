import { useState, type JSX } from "react";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { LuLayoutGrid } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../logo.svg";

interface NavItem {
    name: string;
    slug: string;
}

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems: NavItem[] = [
        { name: "Home", slug: "/" },
        { name: "Services", slug: "/services" },
        { name: "Partners", slug: "/partners" },
        { name: "Process", slug: "/process" },
        { name: "Why Us", slug: "/why-us" },
        { name: "Reviews", slug: "/reviews" },
        { name: "FAQ", slug: "/faq" },
        { name: "About", slug: "/about" },
        { name: "Contact", slug: "/contact" },
    ];

    return (
        <>
            {/* Top Nav */}
            <div className="font-[Inter] bg-transparent py-4 sm:px-10 px-2 flex flex-row items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <img
                        className="sm:w-16 w-14 sm:h-16 h-14"
                        src={logo}
                        alt="Logo"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="xl:flex hidden gap-0.5 bg-[#FFFFFF1C] rounded-full border-2 border-[#E5F0F336] px-4">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(item.slug)}
                            className={`p-4 cursor-pointer rounded-full transition-colors duration-200
                                ${location.pathname.includes(item.slug)
                                    ? "text-[#02B1E6]"
                                    : "hover:text-[#02B1E6] text-white"
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="xl:flex hidden flex-row gap-2 items-center">
                    <button className="px-6 py-3.5 cursor-pointer  transition-colors rounded-full border-2 border-[#E5F0F336] bg-[#FFFFFF1C] text-[#02B1E6] hover:bg-[#02B1E6] hover:text-white">
                        WhatsApp
                    </button>
                    <button className="px-6 py-3.5 cursor-pointer transition-colors rounded-full border-2 border-[#E5F0F336] bg-[#FFFFFF1C] text-[#02B1E6] hover:bg-[#02B1E6] hover:text-white">
                        <FiShoppingCart className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Mobile Bottom Nav */}
            <BottomNav />
        </>
    );
};

const BottomNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [openMore, setOpenMore] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const navItems = [
        { label: "Home", icon: <FiHome className="text-lg" />, path: "/" },
        { label: "More", icon: <LuLayoutGrid className="text-lg" />, path: "/more" },
        { label: "Cart", icon: <FiShoppingCart className="text-lg" />, path: "/cart" },
    ];

    const moreItems = [
        { name: "Services", slug: "/services" },
        { name: "Partners", slug: "/partners" },
        { name: "Process", slug: "/process" },
        { name: "Why Us", slug: "/why-us" },
        { name: "Reviews", slug: "/reviews" },
        { name: "FAQ", slug: "/faq" },
        { name: "About", slug: "/about" },
        { name: "Contact", slug: "/contact" },
    ];

    const isActive = (path: string) => location.pathname === path;

    function handleClick(item: { path: string }) {
        if (item.path === "/more") {
            setOpenMore((p) => !p);
            setOpenCart(false);
        } else if (item.path === "/cart") {
            setOpenCart((p) => !p);
            setOpenMore(false);
        } else {
            navigate(item.path);
            setOpenMore(false);
            setOpenCart(false);
        }
    }

    return (
        <div className="font-[Inter] xl:hidden flex items-center justify-center w-full fixed sm:bottom-2 bottom-1 left-0 right-0 z-30 sm:px-0 px-1">
            <div className="bg-black/70 border border-gray-600 text-white flex flex-row justify-between rounded-full w-full max-w-md sm:py-2 py-1 px-4 backdrop-blur-lg shadow-lg">
                {navItems.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleClick(item)}
                        className={`flex gap-1 flex-col items-center cursor-pointer py-2 flex-1 rounded-lg transition-colors ${isActive(item.path) ||
                            (item.path === "/more" && openMore) ||
                            (item.path === "/cart" && openCart)
                            ? "text-[#02B1E6]"
                            : "text-gray-400"
                            }`}
                    >
                        {item.icon}
                        <span className="text-xs">{item.label}</span>
                    </button>
                ))}
            </div>

            {/* Floating More Menu */}
            {openMore && (
                <Floater>
                    <>
                        {moreItems.map((item, idx) => {
                            const isActiveMore = location.pathname === item.slug;
                            return (
                                <button
                                    key={idx}
                                    className={`cursor-pointer text-left px-3 sm:py-3 py-2 rounded-lg border transition text-sm ${isActiveMore
                                        ? "bg-black/90 text-[#02B1E6] border-[#02B1E6]"
                                        : "text-white hover:text-[#02B1E6] border-white/20 bg-black/10 hover:bg-black/40"
                                        }`}
                                    onClick={() => {
                                        setOpenMore(false);
                                        navigate(item.slug);
                                    }}
                                >
                                    {item.name}
                                </button>
                            );
                        })}
                    </>
                </Floater>
            )}

            {/* Floating Cart */}
            {openCart && (
                <Floater>
                    <p className="text-white text-sm">Your cart is empty.</p>
                </Floater>
            )}
        </div>
    );
};

const Floater = ({ children }: { children: JSX.Element }) => {

    return (
        <div className="fixed sm:bottom-22 bottom-20 left-1/2 -translate-x-1/2 sm:w-[95%] w-[97%] border border-white/30 max-w-md bg-black/70 backdrop-blur-xl rounded-2xl shadow-xl sm:p-4 p-3 grid grid-cols-2 gap-2 z-40">
            {children}
        </div>
    )
}


export default NavBar;
