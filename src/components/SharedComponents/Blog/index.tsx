import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import BlogCard from "./blogCard";
import { getAllPosts } from "@/utils/markdown";

const Blog: React.FC = () => {
  const posts = getAllPosts([
    "title",
    "date",
    "excerpt",
    "coverImage",
    "slug",
  ]).slice(0, 3);

  return (
    <section
      className="flex overflow-x-hidden flex-wrap justify-center lg:py-24 py-16 lg:pb-40 pb-28 dark:bg-darkmode border-t border-border dark:border-dark_border -mb-24"
      id="blog"
    >
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="flex items-baseline justify-between flex-wrap">
          <h2 className="sm:mb-11 mb-3 text-36 font-bold text-secondary dark:text-white">
            Latest blog & news
          </h2>
          <Link
            href="/blog"
            className="flex items-center gap-3 text-17 text-secondary dark:text-white dark:hover:text-primary font-medium hover:text-primary sm:pb-0 pb-3"
          >
            View More
            <span>
              <Icon icon="solar:arrow-right-outline" width="30" height="30" />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-7">
          {posts.map((blog, i) => (
            <div
              key={i}
              className="w-full lg:col-span-4 md:col-span-6 col-span-12"
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
