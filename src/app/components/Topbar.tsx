import { MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Topbar = () => {
    return (
        <div className="bg-blackshed text-gray-300 px-4 py-1.5 text-sm hidden md:block">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left Section: Location & Contact */}
                <div className="flex items-center space-x-4 ml-3">
                    <span className="flex items-center text-lg">
                        <MapPin size={16} className="text-primary mr-1" />
                        Hyderabad, Telangana
                    </span>
                    <span className="flex items-center text-lg">
                        <Phone size={16} className="text-primary mr-1" />
                        +91-8009944335
                    </span>
                </div>

                {/* Right Section: Social Media Icons */}
                <div className="flex space-x-3 mt-2 md:mt-0 mr-10">
                    <a href="#" className="text-primary bg-white hover:bg-hovershed hover:text-white border rounded-full p-1">
                        <Facebook size={22} />
                    </a>
                    <a href="#" className="text-primary bg-white hover:bg-hovershed hover:text-white border rounded-full p-1">
                        <Twitter size={22} />
                    </a>
                    <a href="#" className="text-primary bg-white hover:bg-hovershed hover:text-white border rounded-full p-1">
                        <Instagram size={22} />
                    </a>
                    <a href="#" className="text-primary bg-white hover:bg-hovershed hover:text-white border rounded-full p-1">
                        <Linkedin size={22} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
