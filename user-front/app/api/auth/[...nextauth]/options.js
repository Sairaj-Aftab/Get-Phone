import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { isEmail, isPhoneNumber } from "@/utils/validate";

const prisma = new PrismaClient();

//please write as it  is
export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        auth: { label: "Auth", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const isAuthEmail = isEmail(credentials.auth);
        const isAuthPhone = isPhoneNumber(credentials.auth);
        try {
          const user = await prisma.user.findFirst({
            where: {
              OR: [
                { email: isAuthEmail ? credentials.auth : undefined },
                { phone: isAuthPhone ? credentials.auth : undefined },
              ],
            },
          });

          if (!user) {
            throw new Error("User not found");
          }

          const checkPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!checkPassword) {
            throw new Error("Invalid password");
          }

          return user;
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],

  callbacks: {
    //it is used to store token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.verified = user.verified;
        token.phone = user.phone;
        token.picture = user.image;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.verified = token.verified;
        session.user.phone = token.phone;
        session.user.image = token.picture;
      }

      return session;
    },
  },

  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
