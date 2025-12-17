import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, type, excerpt, date, slug } = blog;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center group">
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <Link
            href={`/blog/${slug}`}
            aria-label="blog cover"
            className="block"
          >
            <div className="overflow-hidden rounded-lg shrink-0">
              <Image
                src={coverImage!}
                alt="image"
                className="transition group-hover:scale-125"
                width={190}
                height={163}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <p className="text-14 sm:text-16 md:text-18 font-medium text-muted leading-loose mb-0">
          {format(new Date(date), "MMMM dd, yyyy")}
        </p>
        <div className="my-4">
          <Link
            href={`/blog/${slug}`}
            className="text-20 sm:text-22 md:text-24 font-medium text-midnight_text dark:text-white group-hover:text-primary"
          >
            {title}
          </Link>
        </div>
        <div>
          <Link
            href={`/blog/${slug}`}
            className="text-20 text-primary hover:text-blue-700"
          >
            {type}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
