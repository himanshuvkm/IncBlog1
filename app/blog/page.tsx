import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { auth } from "@/auth";

export const metadata = {
    title: "All Blogs | IncBlog",
    description: "Explore all technical insights and startup pitches.",
};

export default async function Blog({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const resolvedParams = await searchParams;
    const query = resolvedParams?.query;
    const params = { search: query || null };

    const { data: posts } = await sanityFetch({
        query: STARTUPS_QUERY,
        params,
        perspective: "published",
    });

    return (
        <>
            <section className="pink_container relative overflow-hidden !min-h-[200px] flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12 bg-white">
                <div className="relative z-10 w-full max-w-5xl mx-auto">
                    <h1 className="heading text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                        All Blogs
                    </h1>
                    <p className="sub-heading !max-w-2xl mx-auto text-base md:text-lg px-4 mb-8">
                        Explore the latest articles, tutorials, and startup pitches from our community.
                    </p>
                    <SearchForm query={query} />
                </div>
            </section>

            <section className="section_container py-10 md:py-12 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-30-semibold text-2xl md:text-3xl font-bold mb-7">
                    {query ? (
                        <>
                            Search results for <span className="text-primary">"{query}"</span>
                        </>
                    ) : (
                        "All Articles"
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
                                    No blogs found
                                </p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {query
                                        ? "Try adjusting your search or explore all posts."
                                        : "Check back later for new content!"}
                                </p>
                            </div>
                        </div>
                    )}
                </ul>
            </section>
        </>
    );
}
