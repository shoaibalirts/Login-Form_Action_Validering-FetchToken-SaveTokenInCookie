import Link from "next/link";
import { FiHome } from "react-icons/fi"; // home icon
import { CiSearch } from "react-icons/ci"; // search icon
import { IoCalendarClearOutline } from "react-icons/io5"; // calendar icon
import { cookies } from "next/headers";
export default async function Footer() {

  const cookieStore = await cookies();
  const hasRole = cookieStore.has("cookieRole");
  const hasToken = cookieStore.has("cookieToken");
  const hasUserId = cookieStore.has("cookieUserId");

  function loginPageOrCalendarPage() {
    if (!hasRole || !hasToken || !hasUserId) {
      return "/login";
    } else {
      return "/calendar";
    }
  }
    
  return (
    <>
      <footer className="fixed bottom-0 left-0 w-full max-w-screen-sm bg-mehroonish text-white p-4 text-center shadow-md flex justify-between">
        <Link href="/activities" className="text-white">
          <FiHome className="w-4 h-4"/>
        </Link>
        <Link href="/search" className="text-white">
          <CiSearch className="w-4 h-4" />
        </Link>
        <Link href={loginPageOrCalendarPage()} className="text-white">
          <IoCalendarClearOutline className="w-4 h-4" />
        </Link>
      </footer>
    </>
  );
}
