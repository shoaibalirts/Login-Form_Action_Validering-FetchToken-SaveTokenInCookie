import { NextResponse } from "next/server";

export default function middleware(request) {
  const tokenCookie = request.cookies.has("landrup_token");

  if (!tokenCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (
    request.pathname.includes("/edit-activity") &&
    (!request.cookies.has("landrup_role") ||
      request.cookies.get("landrup_role") !== "instructor")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ["/calendar/:path*", "/edit-activity/:path*"],
};
