import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import UserDropdown from "./UserDropdown"

 
 function UserMenu() {
    const {data:session} = authClient.useSession()
    const user = session?.user
   return (
     <div>
         {
         user? 
             <div>
                 <UserDropdown></UserDropdown>
             </div> 
            :
              <div className="flex items-center gap-2">
          <Link href='/signin'>
            <button className="rounded-lg border border-indigo-600 px-3 py-2 text-sm font-medium text-indigo-600 transition hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 md:px-5">
              SignIn
            </button>
          </Link>

            <Link href="/signup">
            <button className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:from-indigo-700 hover:to-purple-700 md:px-5">
             SignUp
            </button>
            </Link>
          </div>
        }
     </div>
   )
 }
 
 export default UserMenu
 