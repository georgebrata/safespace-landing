import React from "react";
import BlogCard from "./BlogCard";
import { getAllPosts } from "@/utils/markdown";
import Link from "next/link";
import { Icon } from "@iconify/react";

const BlogSmall: React.FC = () => {
  const posts = getAllPosts([
    "title",
    "date",
    "type",
    "excerpt",
    "coverImage",
    "slug",
  ]);

  return (
    <section className="dark:bg-darkmode overflow-x-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="flex sm:flex-row flex-col justify-between sm:items-end sm:gap-0 gap-4 mb-16">
          <div className="">
            <p className="text-16 text-primary uppercase tracking-widest font-bold">
              Blogul nostru
            </p>
            <h2 className="sm:text-55 text-40 font-bold text-midnight_text dark:text-white">
              Cele mai recente <br /> articole
            </h2>
          </div>
          <div className="">
            <Link
              href="/blog"
              className="text-midnight_text border-2 text-16 font-semibold flex gap-2 px-7 py-3 items-center rounded-full border-midnight_text bg-transparent w-fit hover:bg-midnight_text hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-midnight_text"
            >
              Vezi toate
              <Icon icon="solar:arrow-right-linear" width="24" height="24" />
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.slice(0, 3).map((blog, i) => (
            <div key={i} className="w-full">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSmall;
