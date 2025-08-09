import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const CategoryAdventure = () => {

    const data = useLoaderData();

    console.log(data);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {
                data.map((adventure) => (
                    <Card key={adventure.id} adventure={adventure}></Card>
                ))
            }
        </div>
    );
};

export default CategoryAdventure;