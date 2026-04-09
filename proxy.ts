import { NextResponse } from "next/server";
import { auth } from "./auth";
import { NextAuthRequest } from "next-auth";
import { TRole } from "./types/zod";

const PREDEFINE_ROUTES = {
  LOGIN: "/",
  REGISTER: "/register",
  RORGET_PASSWORD: "/forget_password",

  // ----- dashboards --------------------------------
  ADMIN: "/d",
  FACULTY: "/d",
  STUDENT: "/s",

  // ---- shared ------------------------------------
  UNAUTHORISED: "/unauthorised",
} as const;

const PUBLIC_ROUTES = ["/", "/register", "/forget-password"];
const PUBLIC_PATHS = [
  PREDEFINE_ROUTES.LOGIN,
  PREDEFINE_ROUTES.REGISTER,
  PREDEFINE_ROUTES.RORGET_PASSWORD,
  PREDEFINE_ROUTES.UNAUTHORISED,
];

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

    if (role === "admin" || role === "faculty") {
      return NextResponse.redirect(
        new URL(getDashboard(role), request.nextUrl.origin),
      );
    }

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

export function getDashboard(role: TRole): string {
  switch (role) {
    case "admin":
      return PREDEFINE_ROUTES.ADMIN;
    case "faculty":
      return PREDEFINE_ROUTES.FACULTY;
    case "student":
      return PREDEFINE_ROUTES.STUDENT;
    default:
      return PREDEFINE_ROUTES.LOGIN;
  }
}

// function getAllowedZone(role: TRole): string {
//   switch (role) {
//     case "admin":
//       return "/d";
//     case "faculty":
//       return "/d";
//     case "student":
//       return "/s";
//     default:
//       return "/";
//   }
// }

function isPublicPath(pathname: string): boolean {
  return (
    (PUBLIC_PATHS as readonly string[]).includes(pathname) ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/public")
  );
}
