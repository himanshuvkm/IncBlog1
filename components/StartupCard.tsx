import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Author, Startup } from "@/sanity/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className="startup-card group">
      <Card className="group relative overflow-hidden rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 bg-white h-full flex flex-col">
        <CardHeader className="pb-3 pt-5 px-5">
          <div className="flex-between items-center">
            <p className="startup_card_date text-xs text-gray-500 font-medium">
              {formatDate(_createdAt)}
            </p>
            <div className="flex items-center gap-1.5 text-sm text-gray-600">
              <EyeIcon className="h-4 w-4" />
              <span className="text-16-medium font-medium">{views}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 pb-4 space-y-4 px-5">
          <div className="flex-between items-start gap-4">
            <div className="flex-1 min-w-0">
              {author && (
                <Link href={`/user/${author._id}`} className="block mb-2 hover:text-blue-600 transition-colors duration-200">
                  <p className="text-16-medium line-clamp-1 text-sm font-medium text-gray-600 truncate">
                    {author.name}
                  </p>
                </Link>
              )}
              <Link href={`/startup/${_id}`} className="block hover:text-blue-600 transition-colors duration-200">
                <CardTitle className="text-26-semibold line-clamp-2 leading-snug text-gray-900 text-xl font-bold">
                  {title}
                </CardTitle>
              </Link>
            </div>
            {author && (
              <Link href={`/user/${author._id}`} className="flex-shrink-0">
                <Image
                  src={author.image || ""}
                  alt={`${author.name}'s avatar`}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                />
              </Link>
            )}
          </div>

          <Link href={`/startup/${_id}`} className="block space-y-3">
            <CardDescription className="startup-card_desc line-clamp-2 text-sm leading-relaxed text-gray-600">
              {description}
            </CardDescription>

            <div className="relative overflow-hidden rounded-lg border border-gray-200">
              <Image
                src={image || ""}
                alt={`${title} thumbnail`}
                width={400}
                height={200}
                className="startup-card_img w-full h-44 object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltckU21SgQ4DJx0LNRpSU9Q2HnI8bJ4o4LdX6BVSJ5dU8tJ4KkNT//Z"
              />
            </div>
          </Link>
        </CardContent>

        <CardFooter className="pt-4 px-5 pb-5 border-t border-gray-100 flex-between gap-3">
          {category && (
            <Link 
              href={`/?query=${category.toLowerCase()}`} 
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <Badge 
                variant="secondary" 
                className="text-xs font-medium px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200 border-0"
              >
                {category}
              </Badge>
            </Link>
          )}
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="startup-card_btn font-medium border border-gray-300 hover:bg-gray-400 hover:text-white hover:border-gray-900 transition-all duration-200 h-9 px-4 rounded-lg text-sm"
          >
            <Link href={`/startup/${_id}`}>Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </li>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Card className="startup-card_skeleton border border-gray-200 rounded-xl shadow-sm">
          <CardHeader className="pb-3 pt-5 px-5">
            <div className="flex-between">
              <Skeleton className="h-4 w-28 rounded bg-gray-200" />
              <Skeleton className="h-5 w-14 rounded bg-gray-200" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4 px-5">
            <div className="flex-between">
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-3/4 rounded bg-gray-200" />
                <Skeleton className="h-6 w-full rounded bg-gray-200" />
              </div>
              <Skeleton className="h-12 w-12 rounded-full bg-gray-200" />
            </div>
            <Skeleton className="h-4 w-4/5 rounded bg-gray-200" />
            <Skeleton className="h-44 w-full rounded-lg bg-gray-200" />
          </CardContent>
          <CardFooter className="pt-4 px-5 pb-5">
            <Skeleton className="h-7 w-20 rounded bg-gray-200" />
            <Skeleton className="h-9 w-24 rounded-lg bg-gray-200" />
          </CardFooter>
        </Card>
      </li>
    ))}
  </>
);

export default StartupCard;