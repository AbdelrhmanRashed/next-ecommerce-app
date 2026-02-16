import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const result = NextAuth(authOptions);
export const auth = result.auth;
export const GET = result.handlers.GET;
export const POST = result.handlers.POST;
