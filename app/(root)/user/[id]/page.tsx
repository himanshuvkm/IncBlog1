import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import UserStartups from "@/components/UserStartups";
import { Suspense } from "react";
import { StartupCardSkeleton } from "@/components/StartupCard";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) return notFound();

  return (
    <section className="profile_container min-h-screen py-12 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Profile Card */}
        <div className="profile_card bg-white rounded-2xl shadow-sm p-10 md:p-16 flex flex-col items-center text-center border border-gray-200">
          
          <div className="relative z-10 w-full">
            <div className="profile_title mb-6">
              <h3 className="text-24-black text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                {user.name}
              </h3>
            </div>

            <div className="relative inline-block mb-6">
              <Image
                src={user.image}
                alt={`${user.name}'s profile image`}
                width={200}
                height={200}
                className="profile_image rounded-full object-cover shadow-md border-2 border-gray-200 w-48 h-48 md:w-56 md:h-56 relative z-10"
                priority
              />
            </div>

            <p className="text-30-extrabold text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
              @{user?.username}
            </p>
            <p className="mt-4 text-center text-base md:text-lg max-w-2xl mx-auto text-gray-600 leading-relaxed px-4">
              {user?.bio || "No bio available."}
            </p>
          </div>
        </div>

        {/* Startups Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-30-bold text-2xl md:text-3xl font-bold text-gray-900 tracking-tight"> 
              {session?.user?.id === id ? "Your" : `${user.name}'s`} Blogs
            </h2>
          </div>
          
          <ul className="card_grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Suspense fallback={<StartupCardSkeleton />}>
              <UserStartups id={id} />
            </Suspense>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Page;