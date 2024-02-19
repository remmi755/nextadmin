import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "@/app/authconfig";
import { connectToDb } from "@/app/lib/utils";
import bcrypt from "bcrypt";
import { User } from "@/app/lib/models";

const login = async (credentials) => {
  try {
   await connectToDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});

// const login = async (credentials) => {
//   try {
//     await connectToDb();
//     const user = await User.findOne({ username: credentials.username });
//
//     if (!user) throw new Error("Wrong credentials!");
//     const isPasswordCorrect = await bcrypt.compare(
//       credentials.password,
//       user.password
//     );
//     console.log("is:", isPasswordCorrect);
//     if (!isPasswordCorrect) throw new Error("Wrong credentials!");
//     return user;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to login!");
//   }
// };
// export const { signIn, signOut, auth } = NextAuth({
//   ...authConfig,
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         try {
//           const user = await login(credentials);
//           return user;
//         } catch (err) {
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.username = user.username;
//         token.img = user.img;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.username = token.username;
//         session.user.img = token.img;
//       }
//       return session;
//     },
//   },
// });
