import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Destinations = () => {
  const destinations = useSelector((state) => state.destinations);

  return (
    <div className="pt-24 px-6 md:px-12 lg:px-20 bg-gray-50 min-h-screen">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-12">
        Explore Our Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {destinations.map((place) => (
          <div
            key={place.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{place.name}</h3>
              {/* Location + Rating in one line */}
              <div className="flex justify-between text-gray-500 text-sm">
                <p>{place.location}</p>
                <p>⭐ {place.rating}</p>
              </div>

              {/* Price + Button in one line */}
              <div className="flex justify-between items-center mt-3">
                <p className="text-lg font-semibold text-orange-500">
                  ${place.price}
                </p>
                <Link to={`/destination/${place.id}`}>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition transform hover:scale-105">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
