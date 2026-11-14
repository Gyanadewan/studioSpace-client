
"use client";

import { authClient } from "@/lib/auth-client";
import { getTokenFromClient } from "@/lib/getTokenFromclient";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyBookingsPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  if (!user?.email) return;

  const fetchBookings = async () => {
    try {
      const token = await getTokenFromClient();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/my-bookings/${encodeURIComponent(user.email)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setBookings(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  fetchBookings();
}, [user?.email]);

 
  const handleCancel = async (id) => {
     const token = await getTokenFromClient()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`, {
    method: "DELETE",
     headers: {
       Authorization: `Bearer ${token}`,
     }
  });

  if (res.ok) {
    setBookings((prev) =>
      prev.filter((booking) => booking._id !== id)
    );

    toast.success("Booking cancelled successfully!");
  } else {
    toast.error("Failed to cancel booking!");
  }
  };


  if (loading) {
    return <p className="py-20 text-center">Loading bookings...</p>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">My Bookings</h1>

      <p className="mb-8 text-gray-500">
        Manage and view your studio bookings.
      </p>

      {bookings.length === 0 ? (
        <p className="rounded-xl border p-8 text-center text-gray-500">
          You have no bookings yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Studio Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Hourly Rate</th>
                <th className="p-4">Booking Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="border-t">
                  <td className="p-4 font-medium">
                    {booking.studioName}
                  </td>

                  <td className="p-4">{booking.category}</td>

                  <td className="p-4">
                    ${booking.hourlyRate}
                  </td>

                  <td className="p-4">
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                      {booking.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => handleCancel(booking._id)}
                      className="rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-200"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
