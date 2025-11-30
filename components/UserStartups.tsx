// UserStartups.tsx
import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { Card, CardContent } from "@/components/ui/card";

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <Card className="no-result bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 border-2 border-purple-100 rounded-2xl shadow-xl">
          <CardContent className="py-20 text-center">
            <div className="mb-6 text-7xl animate-bounce">🚀</div>
            <p className="text-3xl font-black text-gray-900 mb-3 tracking-tight">No startups yet</p>
            <p className="text-base text-gray-600 max-w-md mx-auto leading-relaxed font-medium">
              Get started by submitting your first pitch and showcase your innovative ideas to the world!
            </p>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default UserStartups;
