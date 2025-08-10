import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CategoryAdventure = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const [category, setCategory] = useState([]);

    
    useEffect(() => {
        const singleCategory = data.filter(item => item.categoryId.toString() === id)
        setCategory(singleCategory)
    }, [data, id])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {
                category.map((adventure) => (
                    <Card key={adventure.id} adventure={adventure}></Card>
                ))
            }
        </div>
    );
};

export default CategoryAdventure;