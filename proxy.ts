import { NextResponse } from "next/server";
import { auth } from "./auth";
import { NextAuthRequest } from "next-auth";
import { TRole } from "./types/validations.zod";  
import { getDashboard, isPublicPath, PUBLIC_ROUTES } from "@/lib/routing";

export default auth((request: NextAuthRequest) => {
  const { pathname } = request.nextUrl;
  const session = request.auth;
  const role = (session?.user as { role?: TRole } | undefined)?.role ?? null;

  // Stage 01: Alawys allow public paths and API routes
  if (isPublicPath(pathname)) {
    // If already authenticated and hitting a public auth page → force to dashbaord
    if (session && role && PUBLIC_ROUTES.includes(pathname)) {
      return NextResponse.redirect(
        new URL(getDashboard(role), request.nextUrl.origin),
      );
    }

    return NextResponse.next();
  }

  // Stage 02: Not authenticated → redirected to login
  if (!session || !role) {
    const loginUrl = new URL("/", request.nextUrl.origin);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // /d/* Guard
  if (pathname.startsWith("/d/")) {
    // Students must never enter /d/*
    if (role === "student") {
      return NextResponse.redirect(
        new URL(getDashboard("student"), request.nextUrl.origin),
      );
    }

    // if (role === "admin" || role === "faculty") {
    //   return NextResponse.redirect(
    //     new URL(getDashboard(role), request.nextUrl.origin),
    //   );
    // }

    return NextResponse.next();
  }

  // /s/* Guard
  if (pathname.startsWith("/s/") || pathname === "/s") {
    if (role === "admin" || role === "faculty") {
      return NextResponse.redirect(
        new URL(getDashboard(role), request.nextUrl.origin),
      );
    }

    return NextResponse.next();
  }

  // ── 5. Old /dashboard stub → redirect to role home ──────────────────────
  if (pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(
      new URL(getDashboard(role), request.nextUrl.origin),
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|git|webp)$).*)",
  ],
};




