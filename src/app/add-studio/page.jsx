
"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";


const categories = [
  "Photo Studio",
  "Film Stage",
  "Podcast Lounge",
  "Music Suite",
  "Workshop",
];

const amenitiesList = [
  "WiFi",
  "Air Conditioning",
  "Parking",
  "Professional Lighting",
  "Soundproof Room",
  "Camera Equipment",
  "Microphones",
  "Editing Setup",
  "Power Backup",
  "Restroom",
  "Piano",
  "Studio Monitors",
];

export default function AddStudioPage() {
  const [amenities, setAmenities] = useState([]);
  
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleAmenity = (item) => {
    setAmenities((prev) =>
      prev.includes(item)
        ? prev.filter((amenity) => amenity !== item)
        : [...prev, item]
    );
  };

  const handleSubmit = async (event) => {
  event.preventDefault();
  

  const formData = new FormData(event.currentTarget);
  const  data = Object.fromEntries(formData.entries());

  data.hourlyRate = Number(data.hourlyRate);
  data.securityDeposit = Number(data.securityDeposit);
  data.maxCapacity = Number(data.maxCapacity);
  data.amenities = amenities;

  if (!user) {
  alert("Please login first");
  return;
   }
  data.hostName = user.name;
  data.hostEmail = user.email;

  const res = await fetch(`http://localhost:8000/studios`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const resdata = await res.json();
   if (res.ok) {
  toast.success("Studio added successfully!");
     redirect("/studios")
  } else {
  toast.error("Failed to add studio");
    }
  

};

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600">
            StudioSpace
          </p>

          <h1 className="text-3xl font-bold text-gray-900">
            Add New Studio
          </h1>

          <p className="mt-2 text-gray-500">
            Share your creative space with creators and start
            receiving bookings.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-7 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
        >

          <div>
            <h2 className="mb-5 text-lg font-semibold text-gray-900">
              Studio Information
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Studio Title
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter studio title"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category
                </label>

                <select
                  name="category"
                  defaultValue=""
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-violet-500"
                >
                  <option value="" disabled>
                    Select category
                  </option>

                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Hourly Rate ($)
                </label>

                <input
                  type="number"
                  name="hourlyRate"
                  placeholder="e.g. 85"
                  min="0"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Security Deposit ($)
                </label>

                <input
                  type="number"
                  name="securityDeposit"
                  placeholder="e.g. 200"
                  min="0"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Max Capacity
                </label>

                <input
                  type="number"
                  name="maxCapacity"
                  placeholder="e.g. 25"
                  min="1"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Location / Address
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Banani, Dhaka, Bangladesh"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Studio Image URL
                </label>

                <input
                  type="url"
                  name="imageUrl"
                  placeholder="Enter studio image URL"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
                />

                <p className="mt-2 text-xs text-gray-400">
                  Add a valid image URL to display your studio.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              Studio Amenities
            </h2>

            <p className="mb-4 text-sm text-gray-500">
              Select all facilities available in your studio.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {amenitiesList.map((item) => (
                <label
                  key={item}
                  className={`flex cursor-pointer items-center gap-2 rounded-lg border p-3 text-sm transition ${
                    amenities.includes(item)
                      ? "border-violet-500 bg-violet-50 text-violet-700"
                      : "border-gray-200 text-gray-600 hover:border-violet-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={amenities.includes(item)}
                    onChange={() => handleAmenity(item)}
                    className="accent-violet-600"
                  />

                  {item}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Detailed Overview
            </label>

            <textarea
              name="overview"
              rows={5}
              placeholder="Describe your studio, facilities and services..."
              required
              className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              Host Information
            </h2>

            <p className="mb-4 text-sm text-gray-500">
              Your account information will be used as host details.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Host Name
                </label>

                <input
                  type="text"
                  placeholder="Automatically from your account"
                  disabled
                  className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Host Email
                </label>

                <input
                  type="email"
                  placeholder="Automatically from your account"
                  disabled
                  className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-400"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-violet-700 py-3.5 font-semibold text-white transition hover:bg-violet-800"
          >
            + Add Studio
          </button>

        </form>
      </div>
    </div>
  );
}
