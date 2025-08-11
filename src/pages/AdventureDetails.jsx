import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const AdventureDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const [adventure, setAdventure] = useState({});

    useEffect(() => {
        const singleAdventure = data.find(item => item.id == id)
        setAdventure(singleAdventure);
    }, [data, id])


    const { title, image, shortDescription, location, duration, includedItems, ecoFriendlyFeatures, specialInstructions, maxGroupSize, adventureLevel, adventureCost } = adventure;

    const handleClick = () => {

        const now = new Date();
        const hour = now.getHours();

        // const hour = 11;

        if (hour >= 10 && hour < 20) {
            window.open("https://meet.google.com/landing", "_blank");
        } else {

            const modal = document.getElementById("consultation_modal");
            if (modal)
                modal.showModal();
        }
    };

    const handleBooking = () => {
        const modal = document.getElementById("bookNow_modal");
            if (modal)
                modal.showModal();
    }


    return (
        <div>
            <Navbar></Navbar>

            <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 py-10">

                <div className="lg:col-span-2 w-full h-[560px] overflow-hidden">
                    <img className="w-full h-full object-cover rounded-3xl" src={image} alt="" />
                </div>

                <div className="lg:col-span-3">

                    <h2 className="font-gloock text-4xl text-[#2A445E] pb-5">{title}</h2>
                    <p className="text-justify text-gray-600 pb-8">{shortDescription}</p>

                    <div className="stats stats-vertical lg:stats-horizontal shadow mb-6 bg-[#2A445E] text-white">

                        <div className="stat">
                            <div className="stat-title text-white">Price Per Person</div>
                            <div className="stat-value text-2xl font-semibold">{adventureCost}$</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title text-white">Location</div>
                            <div className="stat-value text-2xl font-semibold">{location}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title text-white">Duration</div>
                            <div className="stat-value text-2xl font-semibold">{duration}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title text-white">Max Group Size</div>
                            <div className="stat-value text-2xl font-semibold">{maxGroupSize}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title text-white">Adventure Level</div>
                            <div className="stat-value text-2xl font-semibold">{adventureLevel}</div>
                        </div>
                    </div>

                    <div className="overflow-x-auto mb-6">
                        <table className="table">
                            <tbody>

                                <tr>
                                    <td className="text-2xl">Included Items:</td>
                                    <td>
                                        <ul>
                                            {
                                                includedItems?.map((items, idx) => (<li key={idx}>
                                                    <div className="flex items-center gap-2 text-lg">
                                                        <IoCheckmarkDoneSharp className="text-green-700"></IoCheckmarkDoneSharp>{items}
                                                    </div>
                                                </li>))
                                            }
                                        </ul>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-2xl">Eco Friendly Features:</td>
                                    <td>
                                        <ul>
                                            {
                                                ecoFriendlyFeatures?.map((items, idx) => (<li key={idx}>
                                                    <div className="flex items-center gap-2 text-lg">
                                                        <IoCheckmarkDoneSharp className="text-green-700"></IoCheckmarkDoneSharp>{items}
                                                    </div>
                                                </li>))
                                            }
                                        </ul>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-2xl">Special Instructions:</td>
                                    <td>
                                        <ul>
                                            {
                                                specialInstructions?.map((items, idx) => (<li key={idx}>
                                                    <div className="flex items-center gap-2 text-lg">
                                                        <RiErrorWarningLine className="text-yellow-500"></RiErrorWarningLine>{items}
                                                    </div>
                                                </li>))
                                            }
                                        </ul>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div>
                        <button onClick={handleBooking} className="btn px-16 py-6 bg-[#D5E880] border-none shadow-none mr-2 mb-2 md:mb-0 text-lg rounded-br-3xl hover:bg-[#2A445E] hover:text-white hover:rounded-br-sm transition-all duration-300 ease-in-out">
                            Book Now
                        </button>
                        <button onClick={handleClick} className="btn px-16 py-6 bg-[#D5E880] border-none shadow-none text-lg rounded-br-3xl hover:bg-[#2A445E] hover:text-white hover:rounded-br-sm transition-all duration-300 ease-in-out">
                            Talk with Expert
                        </button>
                    </div>

                </div>

            </div>

            <dialog
                id="bookNow_modal"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box text-center mx-auto">
                    <p className="text-5xl text-green-700 flex justify-center"><IoCheckmarkDoneCircleSharp></IoCheckmarkDoneCircleSharp></p>
                    <p className="text-xl font-medium">Your booking has been confirmed!</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <dialog
                id="consultation_modal"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Consultation Time</h3>
                    <p className="py-4">
                        Our experts are available from <strong>10:00 AM</strong> to{" "}
                        <strong>8:00 PM</strong>. Please try again during these hours.
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <Footer></Footer>
        </div>
    );
};

export default AdventureDetails;