import BookingBtn from "@/components/booking/BookingBtn";
import { getTokenFromServer } from "@/lib/getTokenFromserver";


const BookingPage = async ({ searchParams }) => {
  const { studioId } = await searchParams;

   const token = await getTokenFromServer()
   
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/studios/${studioId}`,
    {
      cache: "no-store",
      headers: {
         Authorization: `Bearer ${token}`
      }
    }
  );

  if (!res.ok) {
    return <p>Studio not found</p>;
  }

  const studio = await res.json();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Book This Studio</h1>

      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="w-full text-left">
          <tbody>
            <tr className="border-b">
              <th className="p-4">Studio Name</th>
              <td className="p-4">{studio.title}</td>
            </tr>

            <tr className="border-b">
              <th className="p-4">Category</th>
              <td className="p-4">{studio.category}</td>
            </tr>

            <tr className="border-b">
              <th className="p-4">Location</th>
              <td className="p-4">{studio.location}</td>
            </tr>

            <tr className="border-b">
              <th className="p-4">Hourly Rate</th>
              <td className="p-4">${studio.hourlyRate}</td>
            </tr>

            <tr className="border-b">
              <th className="p-4">Security Deposit</th>
              <td className="p-4">${studio.securityDeposit}</td>
            </tr>

            <tr>
              <th className="p-4">Maximum Capacity</th>
              <td className="p-4">{studio.maxCapacity} People</td>
            </tr>
          </tbody>
        </table>

        <div className="p-4">
          <BookingBtn
            studio={{
              ...studio,
              _id: studio._id.toString(),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;