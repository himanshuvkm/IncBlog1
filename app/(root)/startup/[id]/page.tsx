import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import {
  PLAYLIST_BY_SLUG_QUERY,
  STARTUP_BY_ID_QUERY,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

import markdownit from "markdown-it";

import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

const md = markdownit();

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const [post, playlistResponse] = await Promise.all([
    client.fetch(STARTUP_BY_ID_QUERY, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, {
      slug: "editor-picks-new",
    }),
  ]);

  const editorPosts = playlistResponse?.select || [];

  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="pink_container !min-h-[230px] flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12">
        <p className="tag text-sm text-muted-foreground mb-2">
          {formatDate(post?._createdAt)}
        </p>

        <h1 className="heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          {post.title}
        </h1>

        <p className="sub-heading !max-w-5xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          {post.description}
        </p>
      </section>

      <section className="section_container py-8 px-4 md:px-8 lg:px-12">
        <Image
          src={post.image}
          alt={`${post.title} thumbnail`}
          width={1200}
          height={600}
          className="w-full h-auto rounded-xl object-cover shadow-lg"
          priority
        />

        <div className="space-y-6 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5 items-center">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-3 items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src={post.author.image}
                alt={`${post.author.name}'s avatar`}
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg flex-shrink-0"
              />

              <div className="min-w-0">
                <p className="text-20-medium truncate">{post.author.name}</p>
                <p className="text-16-medium !text-black-300 truncate">
                  @{post.author.username}
                </p>
              </div>
            </Link>

            <p className="category-tag px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {post.category}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-30-bold text-2xl md:text-3xl font-bold">
              Pitch Details
            </h3>
            {parsedContent ? (
              <article
                className="prose max-w-4xl font-work-sans break-all prose-headings:text-foreground prose-a:text-primary prose-strong:font-semibold prose-img:rounded-lg prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
              />
            ) : (
              <p className="no-result text-muted-foreground italic">
                No details provided
              </p>
            )}
          </div>
        </div>

        <hr className="divider my-12 border-muted-foreground/30" />

        {editorPosts?.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-30-semibold text-2xl md:text-3xl font-semibold mb-7">
              Editor Picks
            </h2>

            <ul className="mt-7 card_grid-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {editorPosts.map((post: StartupTypeCard, i: number) => (
                <StartupCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )}

        <Suspense
          fallback={
            <Skeleton className="view_skeleton h-12 w-full md:w-96 mx-auto" />
          }
        >
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default Page;
