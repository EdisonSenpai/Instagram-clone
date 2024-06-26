import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
    }),
    // ...add more providers here
  ],

//   theme: {
//     logo: "https://links.papareact.com/sq0",
//     brandColor: "#F12387",
//     colorScheme: "auto",
//   },


  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);