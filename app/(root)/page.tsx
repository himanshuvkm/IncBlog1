import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;  // Updated: Now a Promise
}) {
  // Await searchParams to resolve it
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query ;
  const params = { search: query || null };

  const session = await auth();


 const { data: posts } = await sanityFetch({
  query: STARTUPS_QUERY,
  params,
  perspective: "published",
});


  return (
    <>
      <section className="pink_container relative overflow-hidden !min-h-[280px] flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12">
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <h1 className="heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Share Your Tech Insights, <br />
            Connect With Innovators
          </h1>

          <p className="sub-heading !max-w-3xl mx-auto text-base md:text-lg px-4">
           Publish blogs, explore trending ideas, and join a community of tech enthusiasts and creators.
          </p>

          <SearchForm query={query} />
        </div>
      </section>

      <section className="section_container py-10 md:py-12 px-4 md:px-8 lg:px-12 max-w-[1200px] mx-auto">
        <h2 className="text-30-semibold text-2xl md:text-3xl font-bold mb-7">
          {query ? (
            <>
              Search results for <span className="text-primary">"{query}"</span>
            </>
          ) : (
            "Latest Articles"
          )}
        </h2>

        <ul className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <div className="no-results col-span-full">
              <div className="max-w-lg mx-auto text-center py-16 px-8">
                <div className="text-6xl mb-5">🔍</div>
                <p className="text-2xl font-bold text-gray-800 mb-3">
                  No startups found
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {query
                    ? "Try adjusting your search or explore all pitches."
                    : "Be the first to share your innovative idea!"}
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