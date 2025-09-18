import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const apiUrl = "https://techbuggy-1.onrender.com";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await fetch(`${apiUrl}/api/auth/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          console.error(data.message);
          return;
        }

        setUser(data.user);
        setBookings(data.user.bookings || []);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const cancelBooking = async (bookingId) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${apiUrl}/api/bookings/${bookingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to cancel booking");
        return;
      }

      // Remove booking from UI
      setBookings((prev) => prev.filter((b) => b._id !== bookingId));
    } catch (err) {
      console.error("Error canceling booking:", err);
    }
  };

  if (loading) return <p className="pt-24 text-center">Loading profile...</p>;

  return (
    <div className="pt-24 px-6 md:px-12 lg:px-20">
      {user ? (
        <>
          <h1 className="text-3xl font-bold mb-6">
            Welcome, <span className="text-orange-600">{user.name}</span>
          </h1>

          <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>

          {bookings.length === 0 ? (
            <p className="text-gray-500">No bookings yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="bg-white shadow-lg rounded-lg p-5 border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-orange-600">
                    {booking.destinationName}
                  </h3>
                  <p className="text-gray-600">
                    Date: {new Date(booking.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">Persons: {booking.persons}</p>
                  <p className="text-gray-800 font-semibold">
                    Price: ₹{booking.price}
                  </p>
                  <p
                    className={`mt-2 font-medium ${
                      booking.status === "cancelled"
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    Status: {booking.status}
                  </p>

                  {booking.status !== "cancelled" && (
                    <button
                      onClick={() => cancelBooking(booking._id)}
                      className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="text-red-500">User not found</p>
      )}
    </div>
  );
};

export default Profile;
