
"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { LogOut, UserRound, Sparkles } from "lucide-react";
import UpdateProfile from "@/components/user-menu/UpdateProfile";

function Page() {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error("Failed to sign out!");
      return;
    }

    toast.success("Successfully signed out!");
    router.push("/signin");
    router.refresh();
  };

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
      <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Please sign in to view your profile.
        </h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-12">
      <div className="mx-auto max-w-2xl">

        {/* Heading */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-indigo-600">
            <Sparkles size={17} />
            StudioSpace Account
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your profile information and account.
          </p>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-lg shadow-indigo-100/50">

          {/* Cover */}
          <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600" />

          <div className="p-6 sm:p-8">

            {/* User Info */}
            <div className="-mt-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

              <div className="flex items-end gap-4">
                <img
                  src={
                    user.image ||
                    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  }
                  alt={user.name || "User"}
                  className="h-24 w-24 rounded-full border-4 border-white bg-white object-cover shadow-md"
                />

                <div className="pb-1">
                  <h2 className="text-xl font-bold text-gray-900">
                    {user.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {user.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleSignout}
                className="flex items-center justify-center gap-2 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
              >
                <LogOut size={17} />
                Sign Out
              </button>
            </div>

            {/* Update Profile */}
            <div className="mt-10 border-t border-gray-100 pt-7">
              <div className="mb-5">
                <div className="flex items-center gap-2">
                  <UserRound className="text-indigo-600" size={20} />
                  <h3 className="text-lg font-bold text-gray-900">
                     Update your name
                  </h3>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                 Change your name to keep your profile up to date.
                </p>
              </div>

             <UpdateProfile></UpdateProfile>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}

export default Page;
