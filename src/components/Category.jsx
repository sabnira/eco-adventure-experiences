import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/categories.json")
        .then((res) => res.json())
        .then((data) => setCategories(data))
    }, [])

    return (
        <div className="py-16">
            <div className="text-center">
                <h2 className="text-4xl font-thin mb-2">Adventure Experiences</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Discover thrilling eco-friendly adventures crafted to inspire your next journey
                </p>
            </div>

            <div className="text-center category">
                {
                    categories.map((category) => (
                        <NavLink to={`/category/${category.id}`} key={category.id} className="btn my-2 mx-6 bg-[#D5E880] border-none shadow-none p-8 text-lg font-thin rounded-br-3xl hover:bg-[#2A445E] hover:text-white hover:rounded-br-sm transition-all duration-300 ease-in-out">{category.category}</NavLink>
                    ))
                }
            </div>
           
        </div>
    );
};

export default Category;