import { NextRequest, NextResponse } from "next/server";

import authTestConfig from "./authTestConfig";

interface RefreshResponseProps {
  accessToken: string;
  refreshToken: string;
}

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/logout")) {
    const res = NextResponse.redirect(new URL("/login", req.url));
    res.cookies.delete(authTestConfig.accessToken);
    res.cookies.delete(authTestConfig.refreshToken);
    return res;
  }
  else if (req.nextUrl.pathname.startsWith("/protected")) {
    const token = req.cookies.get(authTestConfig.accessToken)?.value;
    const refreshToken = req.cookies.get(authTestConfig.refreshToken)?.value;

    if (!refreshToken && !token) {
      return NextResponse.redirect(new URL("/logout", req.url));
    }

    const refreshRequest = await fetch(`${process.env.BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refreshToken: refreshToken,
        expiresInMins: 30,
      }),
      credentials: "include",
    })

    if (refreshRequest.ok) {
      const refreshResponse: RefreshResponseProps = await refreshRequest.json();
      const res = NextResponse.next();
      res.cookies.set(authTestConfig.accessToken, refreshResponse.accessToken);
      res.cookies.set(authTestConfig.refreshToken, refreshResponse.refreshToken);
      return res;
    }
    else {
      return NextResponse.redirect(new URL("/logout", req.url));
    }
  }
  else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
  ]
};
