import { TRole } from "@/types/validations.zod";

export const PREDEFINE_ROUTES = {
  LOGIN: "/",
  REGISTER: "/register",
  RORGET_PASSWORD: "/forget_password",

  // ----- dashboards --------------------------------
  ADMIN: "/d",

  FACULTY: "/d",

  // -----
  STUDENT: "/s",

  // ---- shared ------------------------------------
  UNAUTHORISED: "/unauthorised",
} as const;

export const PUBLIC_ROUTES = ["/", "/register", "/forget-password"];

export const PUBLIC_PATHS = [
  PREDEFINE_ROUTES.LOGIN,
  PREDEFINE_ROUTES.REGISTER,
  PREDEFINE_ROUTES.RORGET_PASSWORD,
  PREDEFINE_ROUTES.UNAUTHORISED,
];

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

//export function getAllowedZone(role: TRole): string {
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

export function isPublicPath(pathname: string): boolean {
  return (
    (PUBLIC_PATHS as readonly string[]).includes(pathname) ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/public")
  );
}

export function getOriginalName(pathname: string): string {
  switch (pathname) {
    case "d":
      return "dashboard";
    case "s":
      return "dashboard";
    case "hr":
      return "human resource"
    case "notifications":
      return "notifications"
    case "modules":
      return "modules"
    case "sessions":
      return "sessions"
    case "analytics":
      return "analytics"
    case "students":
      return "students"
    case "facutlies":
      return "facutlies"
    default:
      return ""
  }
}