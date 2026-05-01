import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about-page" },
        { label: "Services", href: "/service-page" },
        // { label: "Portfolio", href: "#portfolio" },
        // { label: "Team", href: "#team" },
        { label: "Career", href: "/career-page" },
        { label: "Contact", href: "/contact-page" },
        // { label: "FAQ", href: "#faq" },
    ];

    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between md:px-6 md:py-4 px-2">

                {/* Logo */}
                <a href="/">
                    <img src="/logoEdurech.png" alt="logo" className="h-20" />
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:block">
                    <ul className="flex gap-6 text-lg text-white font-medium">
                        {menuItems.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Animated Hamburger */}
                <div
                    className="md:hidden w-7 h-7 relative cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <span
                        className={`absolute h-[3px] w-7 bg-white transition-all duration-300 ${open ? "rotate-45 top-3" : "top-1"
                            }`}
                    ></span>

                    <span
                        className={`absolute h-[3px] w-7 bg-white transition-all duration-300 ${open ? "opacity-0" : "top-3"
                            }`}
                    ></span>

                    <span
                        className={`absolute h-[3px] w-7 bg-white transition-all duration-300 ${open ? "-rotate-45 top-3" : "top-5"
                            }`}
                    ></span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white/90 backdrop-blur-md transition-all duration-300 overflow-hidden ${open ? "max-h-[500px] py-6" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col items-center gap-6 text-gray-700 font-medium">
                    {menuItems.map(({ label, href }) => (
                        <li key={label}>
                            <a
                                href={href}
                                onClick={() => setOpen(false)}
                                className="hover:text-orange-500 transition"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;