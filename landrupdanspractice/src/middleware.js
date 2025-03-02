import { NextResponse } from "next/server";

export default function middleware(request) {
  
const tokenCookie = request.cookies.has("cookieToken");

  if (!tokenCookie){
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: "/calendar/:path*",
};