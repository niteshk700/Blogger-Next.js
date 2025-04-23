import * as React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage?: any;
  author?: string;
  date?: string;
  className?: string;
}

export default function BlogPostCard({
  title,
  excerpt,
  slug,
  coverImage="https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png",
  author,
  date,
  className = "",
}: BlogPostCardProps) {
  return (
    <Link href={slug}>
      {coverImage && (
        <div className="relative h-48 w-full">
          <Image src={coverImage} alt={title} layout="fill" objectFit="cover" />
        </div>
      )}

      <div className="bg-white p-4">
        {date || author ? (
          <div className="text-xs text-gray-500 mb-2 flex flex-wrap gap-2">
            {date && <time>{date}</time>}
            {author && <span>by {author}</span>}
          </div>
        ) : null}

        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{excerpt}</p>
      </div>
    </Link>
  );
}
