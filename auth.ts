import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user, profile }) {
      // Cast GitHub profile to a safe custom type
      const githubProfile = profile as {
        id?: string;
        login?: string;
        bio?: string;
      };

      if (!githubProfile?.id) {
        console.error("GitHub profile ID missing");
        return false;
      }

      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: githubProfile.id });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id: githubProfile.id,
          name: user.name,
          username: githubProfile.login || user.name,
          email: user.email,
          image: user.image,
          bio: githubProfile.bio || "",
        });
      }

      return true;
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const githubProfile = profile as { id?: string };
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: githubProfile?.id });

        token.id = user?._id;
      }
      return token;
    },

    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
