"use client";
import React, { useEffect, useState } from "react";
import BlogPostCard from "@/components/common/postCard/page";

interface DummyPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

export default function LatestPosts() {
  const [posts, setPosts] = useState<DummyPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data: { posts: DummyPost[] }) => setPosts(data.posts))
      .catch((err) => console.error("Failed to fetch posts:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading posts…</div>;
  }

  // split out hero vs. rest
  const heroPosts = posts.slice(0, 1);
  const otherPosts = posts.slice(1);

  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          {heroPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              slug={`/posts/${post.id}`}
              title={post.title}
              excerpt={
                post.body.length > 150
                  ? post.body.slice(0, 150) + "…"
                  : post.body
              }
              coverImage="https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png"
              className="h-80"      // make hero cards taller
            />
          ))}
        </div>
      </section>

      {/* Rest of posts in 2-column grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {otherPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              slug={`/posts/${post.id}`}
              title={post.title}
              excerpt={
                post.body.length > 100
                  ? post.body.slice(0, 100) + "…"
                  : post.body
              }
              coverImage="https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png"
            />
          ))}
        </div>
      </section>
    </>
  );
}
