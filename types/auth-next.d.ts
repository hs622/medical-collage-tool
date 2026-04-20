import { DefaultSession, User as DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import { TRole } from "./validations.zod";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      role: TRole;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: number;
    role: TRole;
  }
}
declare module "next-auth/adapters" {
  interface AdapterUser extends DefaultUser {
    id: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: number;
    role: TRole;
  }
}

