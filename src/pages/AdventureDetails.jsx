import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const AdventureDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();

    const [adventure, setAdventure] = useState({});

    useEffect(() => {
        const singleAdventure = data.find(item => item.id ==id)
        setAdventure(singleAdventure);
    }, [data, id])


    const {title} = adventure;

    
    return (
        <div>
            detail {title}
        </div>
    );
};

export default AdventureDetails;