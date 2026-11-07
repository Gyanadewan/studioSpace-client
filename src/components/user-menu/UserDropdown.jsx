"use client"

import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { HiOutlineArrowUturnLeft } from "react-icons/hi2"
import { toast } from "react-toastify"

function UserDropdown() {
  const { data: session } = authClient.useSession()
  const user = session?.user
  const [isOpen, setIsOpen] = useState(false)

  const handleSignout = async () => {
    await authClient.signOut()
    setIsOpen(false)
    toast.success("সফলভাবে সাইন আউট হয়েছে!")
  }

  return (
    <div className="relative text-gray-700">
      <button onClick={() => setIsOpen(!isOpen)} className="flex gap-1">
        <img
          src={
            user.image ||
            "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
          }
          alt={user.name || "User"}
          className="h-10 w-10 rounded-full "
        />
         <span className="flex justify-center items-center">{user.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-3 rounded-xl bg-white p-5 shadow-xl">
          <div>
             <h3 className="text-black font-semibold text-xl">{user.name}</h3>
          <p>{user.email}</p>
          </div>

            <div className="py-4">
             <Link href="/myprofile" onClick={() => setIsOpen(false)} className="py-3">
            👤 আমার প্রোফাইল
          </Link>
            </div>
                 <button
             onClick={handleSignout}
            className="flex w-full items-center justify-start gap-2 text-red-500"
                 >
          <HiOutlineArrowUturnLeft />
           <span>সাইন আউট</span>
         </button>
        </div>
      )}
    </div>
  )
}

export default UserDropdown