export type Blog = {
  map(arg0: (blog: { slug: React.Key | null | undefined; coverImage: string | import("next/dist/shared/lib/get-img-props").StaticImport; }) => import("react").JSX.Element): import("react").ReactNode;
  id?: number;
  title?: string;
  type?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
  date: string;
};
