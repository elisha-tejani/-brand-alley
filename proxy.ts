import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "admin_session";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the login page and the login API route through.
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  const isProtectedPage = pathname.startsWith("/admin");
  const isProtectedApi = pathname.startsWith("/api/admin");

  if (!isProtectedPage && !isProtectedApi) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(COOKIE_NAME)?.value;
  const expected = process.env.ADMIN_SESSION_SECRET ?? "";
  const authed = !!cookie && !!expected && cookie === expected;

  if (!authed) {
    if (isProtectedApi) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
