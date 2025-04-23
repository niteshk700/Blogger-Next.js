import { NavbarMenu } from "@/components/common/navbar/page";
import LatestPosts from "@/components/containers/blog/listBlog/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Latest Posts</h1>
        <LatestPosts />
      </main>
    </>
  );
}
