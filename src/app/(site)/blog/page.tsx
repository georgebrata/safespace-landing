import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Acasă" },
    { href: "/blog", text: "Blog" },
  ];
  return (
    <>
      <HeroSub
        title="Blog"
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      <BlogList />
    </>
  );
};

export default Page;
