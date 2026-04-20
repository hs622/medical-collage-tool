import NextAuth, { User, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialProvider from "next-auth/providers/credentials";
import { LoginSchema } from "./types/validations.zod";
import { AdapterUser } from "next-auth/adapters";   

const dummyUsers: User[] = [
  {
    id: 1,
    email: "hassan.ali@aku.edu",
    image: "#",
    name: "Hassan Ali",
    role: "admin",
  },
  {
    id: 2,
    email: "student@aku.edu",
    image: "#",
    name: "Student",
    role: "student",
  },
  {
    id: 3,
    email: "faculty@aku.edu",
    image: "#",
    name: "faculty",
    role: "faculty",
  },
];

const Credentials = CredentialProvider({
  name: "Credentials",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  authorize: async (credentials) => {
    const parsed = LoginSchema.safeParse(credentials);
    if (!parsed.success) return null;

    const { email, password } = parsed.data;
    console.log(email, password);

    const user = dummyUsers.find((user) => user.email === email);
    if (user && password === process.env.SEED_ADMIN_PASSWORD) return user;

    return null;
  },
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/",
    error: "/",
    signOut: "/",
  },
  session: { strategy: "jwt" },
  trustHost: true,
  providers: [Credentials],
  callbacks: {
    jwt: ({ user, token }: { token: JWT; user: User | AdapterUser }) => {
      if (user) {
        token.id = user.id as number;
        token.role = user.role || "idle";
      }

      return token;
    },
    session: ({ session, token }: { session: Session; token: JWT }) => {
      if (session.user) {
        session.user.id = token.id as number;
        session.user.role = token.role;
      }

      return session;
    },
  },
});
