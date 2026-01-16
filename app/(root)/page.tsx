export const revalidate = 0;
export const dynamic = "force-dynamic";
export const dynamicParams = true;

import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query;
  const params = { search: query || null };

  const session = await auth();

  const { data: posts } = await sanityFetch({
    query: STARTUPS_QUERY,
    params,
    perspective: "published",
  });

  return (
    <>
      <section className="relative w-full min-h-[500px] flex flex-col justify-center items-center text-center px-4 md:px-6 py-20 bg-[#fafafa] overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Subtle top spotlight */}
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            The Developer's Hub
          </div>

          <h1 className="heading text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
            Share Your Tech Insights <br className="hidden md:block" />
            <span className="text-primary relative inline-block">
              Connect With Innovators
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="sub-heading max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Connect with founders, explore innovative pitches, and stay ahead of the curve in the tech ecosystem.
          </p>

          <div className="w-full max-w-xl mx-auto">
            <SearchForm query={query} />
          </div>
        </div>
      </section>

      <section className="section_container py-16 md:py-24 px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-200 pb-6 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              {query ? (
                <>
                  Search results for <span className="text-primary">"{query}"</span>
                </>
              ) : (
                "Latest Pitches"
              )}
            </h2>
            <p className="text-gray-500 mt-2 text-lg">
              {query ? "Browse the results below matching your criteria." : "Explore the freshest ideas from our community."}
            </p>
          </div>

          {!query && (
            <div className="hidden md:block">
              <a href="/blog" className="text-primary hover:text-primary/80 font-semibold flex items-center gap-1 transition-colors">
                View all posts &rarr;
              </a>
            </div>
          )}
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <div className="no-results col-span-full py-20">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="bg-gray-100 p-6 rounded-full mb-6">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No startups found</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  {query
                    ? "We couldn't find any startups matching your search. Try different keywords."
                    : "Be the first to share your startup with the world!"}
                </p>
              </div>
            </div>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}