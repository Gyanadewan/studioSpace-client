"use client";


import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BookingBtn = ({ studio }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleBooking = async () => {
    const user = session?.user;

    if (!user) {
      toast.error("Please login first");
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studioId: studio._id,
        studioName: studio.title,
        customerName: user.name,
        customerEmail: user.email,
        hourlyRate: studio.hourlyRate,
      }),
    });

    if (res.ok) {
      toast.success("Booking successful!")
      router.push("/mybooking");
    }
  };

  return (
    <button
      onClick={handleBooking}
      className="mt-6 rounded-lg bg-violet-700 px-6 py-3 font-semibold text-white hover:bg-violet-800"
    >
      Confirm Booking
    </button>
  );
};

export default BookingBtn;