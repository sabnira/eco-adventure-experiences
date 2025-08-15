import { FaCar } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { SiHelpdesk } from "react-icons/si";
import { FaBusinessTime } from "react-icons/fa6";
import about from "../assets/about.jpg"

const About = () => {
    return (
        <div id="about" className="my-16 bg-[#E6F3F6] py-20">
            <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="p-8 bg-[#0D3A48] text-white rounded-xl transition-all duration-500 ease-in-out hover:rounded-br-[70px] hover:bg-[#D9E588] hover:text-[#0D3A48]">
                        <FaCar className="w-16 h-16"></FaCar>
                        <h4 className="text-2xl font-gloock py-4">Customized Packages</h4>
                        <p className="text-lg">Crafted eco-adventures that fit your pace, passion, and love for nature.</p>
                    </div>

                    <div className="p-8 bg-[#0D3A48] text-white rounded-xl transition-all duration-500 ease-in-out hover:rounded-br-[70px] hover:bg-[#D9E588] hover:text-[#0D3A48]">
                        <MdPriceChange className="w-16 h-16"></MdPriceChange>
                        <h4 className="text-2xl font-gloock py-4">Unbeatable Prices</h4>
                        <p className="text-lg">Experience the wild without breaking the bank sustainable and affordable.</p>
                    </div>

                    <div className="p-8 bg-[#0D3A48] text-white rounded-xl transition-all duration-500 ease-in-out hover:rounded-br-[70px] hover:bg-[#D9E588] hover:text-[#0D3A48]">
                        <SiHelpdesk className="w-16 h-16"></SiHelpdesk>
                        <h4 className="text-2xl font-gloock py-4">24/7 Support</h4>
                        <p className="text-lg">From first booking to the last campfire, we’re here for you day and night.</p>
                    </div>

                    <div className="p-8 bg-[#0D3A48] text-white rounded-xl transition-all duration-500 ease-in-out hover:rounded-br-[70px] hover:bg-[#D9E588] hover:text-[#0D3A48]">
                        <FaBusinessTime className="w-16 h-16"></FaBusinessTime>
                        <h4 className="text-2xl font-gloock py-4">Expert Advisors</h4>
                        <p className="text-lg">Guided by seasoned explorers who know the land, trails, and hidden gems.</p>
                    </div>


                </div>

                <div className="text-center">
                    <h2 className="text-5xl font-gloock">About Us</h2>
                    <p className="text-xl py-4 font-thin md:px-16">Connecting you with natures wonders, one unforgettable journey at a time.</p>
                    <div className="w-full h-[430px]">
                        <img src={about} className="w-full h-full object-cover rounded-4xl" alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;