import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

// Callback URL for Facebook (set in Facebook App dashboard):
// https://yourdomain.com/api/auth/callback/facebook
// For local dev: http://localhost:3000/api/auth/callback/facebook
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
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
