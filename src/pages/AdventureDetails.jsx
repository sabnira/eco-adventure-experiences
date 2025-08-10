import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";

const AdventureDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const [adventure, setAdventure] = useState({});

    useEffect(() => {
        const singleAdventure = data.find(item => item.id == id)
        setAdventure(singleAdventure);
    }, [data, id])


    const { title, image, shortDescription, location, duration, includedItems, ecoFriendlyFeatures, specialInstructions, maxGroupSize, adventureLevel, adventureCost } = adventure;


    return (
        <div>
            <Navbar></Navbar>

            <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2 py-10">

                <div className="lg:col-span-2 w-full md:w-[90%] h-[600px] overflow-hidden">
                    <img className="w-full h-full object-cover rounded-3xl" src={image} alt="" />
                </div>

                <div className="lg:col-span-2">

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
                        <button className="btn px-16 py-6 bg-[#D5E880] border-none shadow-none text-lg rounded-br-3xl hover:bg-[#2A445E] hover:text-white hover:rounded-br-sm transition-all duration-300 ease-in-out">
                                Talk with Expert
                        </button>
                    </div>

                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default AdventureDetails;