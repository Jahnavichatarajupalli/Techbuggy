import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
const apiUrl = "https://techbuggy-1.onrender.com";

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destinations = useSelector((state) => state.destinations);
  const destination = destinations.find((d) => d.id === parseInt(id));

  const [date, setDate] = useState("");
  const [persons, setPersons] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  const handleBooking = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // redirect if not logged in
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/api/bookings/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // send token
        },
        body: JSON.stringify({
          destinationId: destination.id,
          destinationName: destination.name,
          date,
          persons,
          price: destination.price * persons,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Booking failed");
        return;
      }

      setConfirmed(true);
    } catch (err) {
      setError("Something went wrong, try again!");
    }
  };

  if (!destination)
    return <h2 className="pt-24 text-center">Destination not found</h2>;

  return (
    <div className="pt-24 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row gap-10">
      {/* Image + Details */}
      <div className="flex-1">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-80 object-cover rounded-xl shadow-lg"
        />
        <h2 className="text-3xl font-bold mt-4">{destination.name}</h2>
        <p className="text-gray-500">{destination.location}</p>
        <p className="text-lg mt-3">{destination.description}</p>

        {/* Rating & Price */}
        <div className="mt-4 flex items-center gap-6">
          <p className="text-yellow-500 font-semibold text-lg">
            ⭐ {destination.rating} / 5
          </p>
          <p className="text-orange-600 font-bold text-xl">
            ₹{destination.price} / person
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold mb-4">Book Your Trip</h3>

        {confirmed ? (
          <p className="text-green-600 font-bold text-xl">
            🎉 Order Confirmed!
          </p>
        ) : (
          <>
            {error && (
              <p className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</p>
            )}

            <label className="block mb-2 font-medium">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full mb-4"
            />

            <label className="block mb-2 font-medium">Number of Persons</label>
            <input
              type="number"
              value={persons}
              onChange={(e) => setPersons(Number(e.target.value))}
              className="border rounded-lg px-3 py-2 w-full mb-4"
              min="1"
            />

            {/* Show total price */}
            <p className="text-lg font-semibold mb-4">
              Total Price:{" "}
              <span className="text-orange-600">
                ₹{destination.price * persons}
              </span>
            </p>

            <button
              onClick={handleBooking}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
            >
              Book Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DestinationDetails;
