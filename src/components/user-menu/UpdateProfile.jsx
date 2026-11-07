
"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useState } from "react";
import { UserRound, Save } from "lucide-react";

function UpdateProfile() {
  const [loading, setLoading] = useState(false);

  const handleUpdateName = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    if (!user.name.trim()) {
      toast.error("Please enter your name!");
      return;
    }

    setLoading(true);

    const { data, error } = await authClient.updateUser({
      name: user.name.trim(),
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Your name has been updated successfully!");
    e.target.reset();
  };

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">

      <form onSubmit={handleUpdateName}>
        <fieldset className="space-y-3">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-indigo-700 hover:to-purple-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            <Save size={17} />
            {loading ? "Updating..." : "Update Name"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default UpdateProfile;
