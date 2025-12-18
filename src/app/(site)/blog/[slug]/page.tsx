import { getAllPosts, getPostBySlug } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = (): Array<{ slug: string }> => {
  const posts = getAllPosts(["slug"]);
  return posts.map((p) => ({ slug: p.slug }));
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug, [
    "title",
    "author",
    "content",
    "metadata",
  ]);

  const siteName = process.env.SITE_NAME || "Your Site Name";
  const authorName = process.env.AUTHOR_NAME || "Your Author Name";

  if (post) {
    const metadata = {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      author: authorName,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };

    return metadata;
  } else {
    return {
      title: "Negăsit",
      description: "Nu am găsit articolul de blog.",
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug, [
    "title",
    "author",
    "authorImage",
    "content",
    "coverImage",
    "date",
  ]);

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <section className="relative pt-44 z-1 pb-20 dark:bg-dark dark:bg-darkmode">
        <div className="w-full h-full absolute -z-1 bg-heroBg rounded-b-[119px] -left-1/4 top-0 dark:bg-search"></div>
        <div className="container lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) mx-auto px-4">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center">
            <div className="col-span-8">
              <div className="flex flex-col sm:flex-row">
                <span className="text-base text-midnight_text font-medium dark:text-white pr-7 border-r border-solid border-grey dark:border-white w-fit">
                  {format(new Date(post.date), "dd MMM yyyy")}
                </span>
                <span className="text-base text-midnight_text font-medium dark:text-white sm:pl-7 pl-0 w-fit">
                  13 comentarii
                </span>
              </div>
              <h2 className="text-midnight_text dark:text-white text-[40px] leading-tight font-bold pt-7">
                {post.title}
              </h2>
            </div>
            <div className="flex items-center md:justify-center justify-start gap-6 col-span-4 pt-4 md:pt-0">
              <Image
                src={post.authorImage}
                alt="image"
                className="bg-no-repeat bg-contain inline-block rounded-full w-20! h-20!"
                width={40}
                height={40}
                layout="responsive"
                quality={100}
              />
              <div className="">
                <span className="text-[22px] leading-tight font-bold text-midnight_text dark:text-white">
                  Silicaman
                </span>
                <p className="text-xl text-gray dark:text-white">Autor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 dark:bg-darkmode">
        <div className="container lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="z-20 mb-16 h-150 overflow-hidden rounded-sm md:h-45">
                <Image
                  src={post.coverImage}
                  alt="image"
                  width={1170}
                  height={766}
                  quality={100}
                  className="h-full w-full object-cover object-center rounded-3xl"
                />
              </div>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-8/12">
                  <div className="blog-details markdown xl:pr-10">
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <div>
                    <div className="-mx-4 mb-8 flex flex-col">
                      <div className="w-full py-12 px-11 bg-white dark:bg-dark_b shadow-lg border-b-2 border-border dark:border-dark_border rounded-t-lg">
                        <h2
                          className="wow fadeInUp relative mb-5 text-2xl dark:text-white text-black  sm:text-3xl"
                          data-wow-delay=".1s"
                        >
                          Distribuie
                        </h2>
                        <div className="flex gap-4 flex-col">
                          <Link
                            href="#"
                            className="bg-[#526fa3] py-4 px-6 text-20 rounded-lg flex items-center text-white"
                          >
                            <svg
                              className="svg-inline--fa fa-facebook-f me-3"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fab"
                              data-icon="facebook-f"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 320 512"
                              width="12.5px"
                              height="20px"
                            >
                              <path
                                fill="white"
                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                              />
                            </svg>
                            Facebook
                          </Link>
                          <Link
                            href="#"
                            className="bg-[#46C4FF] py-4 px-6 text-20 rounded-lg flex items-center text-white"
                          >
                            <svg
                              className="svg-inline--fa fa-twitter me-3"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fab"
                              data-icon="twitter"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              height="21.5px"
                              width="25px"
                            >
                              <path
                                fill="currentColor"
                                d="M459.4 151.7c.325 4.548.325 9.097.325 13.745 0 140.966-107.416 303.213-303.213 303.213-60.452 0-116.426-17.781-163.725-48.265 8.447.974 16.568 1.299 25.34 1.299 50.236 0 96.56-17.206 133.26-46.258-46.832-.975-86.185-31.188-99.675-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.828-9.797-85.417-52.628-85.417-103.766v-1.299c14.33 7.92 30.748 12.67 48.364 13.32-28.264-18.843-46.832-51.014-46.832-87.391 0-19.492 5.197-37.36 14.33-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.794-2.599-15.91-2.599-24.029 0-57.502 46.833-104.335 104.334-104.335 30.137 0 57.502 12.67 76.67 33.137 23.715-4.548 46.182-13.32 66.599-25.34-7.793 24.366-24.366 44.833-46.182 57.502 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                              />
                            </svg>
                            twitter
                          </Link>
                          <Link
                            href="#"
                            className="bg-[#3C86AD] py-4 px-6 flex items-center text-20 rounded-lg text-white"
                          >
                            <svg
                              className="svg-inline--fa fa-linkedin-in me-3"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fab"
                              data-icon="linkedin-in"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="21.5px"
                              height="25px"
                            >
                              <path
                                fill="currentColor"
                                d="M100.28 448H7.4V148.9h92.78zM53.79 108.1C24.09 108.1 0 83.79 0 54.14 0 24.37 24.09 0 53.79 0 83.3 0 107.6 24.37 107.6 54.14c.1 29.64-24.2 53.96-53.81 53.96zM447.4 448h-92.68V302.4c0-34.7-.7-79.29-48.32-79.29-48.32 0-55.7 37.72-55.7 76.79V448H157.3V148.9h88.94v40.8h1.28c12.4-23.41 42.62-48.32 87.76-48.32 93.9 0 111.18 61.81 111.18 142.3V448z"
                              />
                            </svg>
                            linkedin
                          </Link>
                        </div>
                      </div>
                      <div className="w-full py-12 px-11 bg-white dark:bg-dark_b shadow-lg rounded-b-lg">
                        <p className="text-24 mb-4">Hai în comunitate</p>
                        <input
                          placeholder="Adresă de email"
                          className="p-3 dark:bg-search border border-border dark:border-dark_border rounded-lg mb-2 w-full focus:outline-0 focus:border-primary dark:focus:border-primary"
                        />
                        <button className="bg-primary w-full px-7 border text-base text-white border-primary py-4 rounded-sm hover:bg-transparent hover:text-primary">
                          Hai cu noi
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
