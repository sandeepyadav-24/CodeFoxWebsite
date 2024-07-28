// /app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";

import GithubProvider from "next-auth/providers/github";
import { NextResponse } from "next/server";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: "Ov23li3EDVs5ZbdGb2Eo",
      clientSecret: "4aad1610b2bf575a69fd0ee0ce2fc1233331c8a2",
    }),
    // Add more providers here
  ],
  // Add more options here
});

export { handler as GET, handler as POST };
