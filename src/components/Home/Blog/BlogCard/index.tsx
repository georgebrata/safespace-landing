import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";

const BlogCard: FC<{ blog: Blog }> = ({ blog }) => {
  const { title, coverImage, type, excerpt, date, slug } = blog;
  return (
    <Link href={`/blog/${slug}`} aria-label="blog cover" className="group">
      <div className="overflow-hidden rounded-lg shrink-0 mb-6">
        <Image
          src={coverImage!}
          alt="image"
          className="transition group-hover:scale-125"
          width={190}
          height={163}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="-mb-10">
        <p className="text-20 text-midnight_text dark:text-white">{type}</p>
        <div className="my-4">
          <p className="text-24 font-medium text-midnight_text dark:text-white group-hover:text-primary">
            {title}
          </p>
        </div>
        <p className="text-17 font-medium text-muted leading-loose mb-0">
          {format(new Date(date), "MMM dd, yyyy")}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
