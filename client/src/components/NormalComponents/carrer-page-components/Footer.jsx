import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-14">

            {/* Top Footer */}
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* About */}
                <div>
                    <h4 className="text-white font-semibold mb-4">About Us</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-orange-400">Home</a></li>
                        <li><a href="#about" className="hover:text-orange-400">About us</a></li>
                        <li><a href="#service" className="hover:text-orange-400">Our services</a></li>
                        <li><a href="#" className="hover:text-orange-400">Terms & Condition</a></li>
                        <li><a href="#" className="hover:text-orange-400">Privacy policy</a></li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Useful Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#portfolio" className="hover:text-orange-400">Portfolio</a></li>
                        <li><a href="#team" className="hover:text-orange-400">Team</a></li>
                        <li><a href="/careers" className="hover:text-orange-400">Career</a></li>
                        <li><a href="/contact-page" className="hover:text-orange-400">Contact</a></li>
                        <li><a href="#faq" className="hover:text-orange-400">FAQ</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact Us</h4>

                    <p className="text-sm mb-4">
                        <strong className="text-white">United States</strong><br />
                        1300 Center Avenue<br />
                        Fresno, California<br />
                        Phone: +123-456-7890
                    </p>

                    <p className="text-sm mb-4">
                        <strong className="text-white">India</strong><br />
                        Noida 63<br />
                        Uttar Pradesh<br />
                        Phone: +123-456-7890
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-3">
                        <Facebook className="cursor-pointer hover:text-orange-400" />
                        <Twitter className="cursor-pointer hover:text-orange-400" />
                        <Linkedin className="cursor-pointer hover:text-orange-400" />
                        <Instagram className="cursor-pointer hover:text-orange-400" />
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Subscription</h4>
                    <p className="text-sm mb-4">
                        Subscribe here to get our latest updates.
                    </p>

                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 text-black rounded-l-md"
                        />
                        <button className="bg-orange-500 px-4 py-2 text-white rounded-r-md hover:bg-orange-600">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 mt-10 py-6 text-center text-sm text-gray-400">
                © 2025 Edurech Technology. All Rights Reserved.
            </div>

            {/* Back To Top */}
            <a
                href="#top"
                className="fixed bottom-6 right-6 bg-orange-500 p-3 rounded-full text-white shadow-lg hover:bg-orange-600"
            >
                <ArrowUp size={18} />
            </a>

        </footer>
    );
};

export default Footer;