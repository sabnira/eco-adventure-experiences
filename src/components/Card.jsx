import { Link } from "react-router-dom";

const Card = ({ adventure }) => {
  const { title, image, ecoFriendlyFeatures, link } = adventure;

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden group shadow-lg transition-all duration-500 ease-in-out hover:rounded-br-[70px]">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient shadow bottom → top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      {/* Text + feature */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>
        
        <ul className="text-white text-xl">
            {
                ecoFriendlyFeatures.map((features,idx) => (<li key={idx}>{features}</li>))
            }
        </ul>

        {/* Browse Trips link - fade & slide in */}
        <Link
          to={link}
          className="mt-4 inline-block underline text-xl text-white font-semibold hover:text-gray-200 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
        >
          Explore Now
        </Link>
      </div>

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default Card;

