// import SearchForm from "@/components/SearchForm";
// import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
// import { STARTUPS_QUERY } from "@/sanity/lib/queries";
// import { sanityFetch, SanityLive } from "@/sanity/lib/live";
// import { auth } from "@/auth";

// export default async function Home({
//   searchParams,
// }: {
//   searchParams: Promise<{ query?: string }>;
// }) {
//   const query = (await searchParams).query;
//   const params = { search: query || null };

//   const session = await auth();

//   console.log(session?.id);

//   const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

//   return (
//     <>
//       <section className="pink_container relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/70 to-rose-50/60 opacity-70"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,150,124,0.12),transparent_50%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(232,168,124,0.12),transparent_50%)]"></div>
        
//         <div className="relative z-10">
//           <h1 className="heading bg-gradient-to-r from-amber-900/90 via-orange-800/85 to-rose-800/80 bg-clip-text text-transparent">
//             Pitch Your Startup, <br />
//             Connect With Entrepreneurs
//           </h1>

//           <p className="sub-heading !max-w-3xl text-amber-900/70 font-medium">
//             Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
//             Competitions.
//           </p>

//           <SearchForm query={query} />
//         </div>
//       </section>

//       <section className="section_container">
//         <p className="text-30-semibold text-amber-950/90">
//           {query ? (
//             <>
//               Search results for <span className="text-primary">"{query}"</span>
//             </>
//           ) : (
//             "All Startups"
//           )}
//         </p>

//         <ul className="mt-7 card_grid">
//           {posts?.length > 0 ? (
//             posts.map((post: StartupTypeCard) => (
//               <StartupCard key={post?._id} post={post} />
//             ))
//           ) : (
//             <p className="no-results bg-gradient-to-br from-amber-50/80 to-orange-50/60 border border-amber-200/70 rounded-2xl py-16 px-8 text-center shadow-sm">
//               <span className="block text-6xl mb-5">🔍</span>
//               <span className="block text-2xl font-bold text-amber-900/90 mb-3">No startups found</span>
//               <span className="block text-sm text-amber-700/70">
//                 {query 
//                   ? "Try adjusting your search or explore all pitches." 
//                   : "Be the first to share your innovative idea!"}
//               </span>
//             </p>
//           )}
//         </ul>
//       </section>

//       <SanityLive />
//     </>
//   );
// }