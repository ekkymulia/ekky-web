import { Outlet, useLoaderData } from "@remix-run/react";
import ButtonCard from "~/Components/MicroComponents/button-card";
import SpanLink from "~/Components/MicroComponents/span-link";
import FootNote from "~/Components/foot-note";
import moment from "moment";
import { getPostsData } from "~/models/post.server";

export const loader = async () => {
  return getPostsData();
}


export default function Journal() {
    const { result } = useLoaderData();

    return (
        <>
        <div className="flex flex-col mx-auto border-x-2 border-black 2xl:max-w-[1280px] min-h-screen">
          <div className="grid grid-cols-12 lg:mx-20 lg:my-24 mt-16 mx-3">
            <div className="col-span-12 lg:col-span-6">
              <Outlet/>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:flex lg:justify-center">
              <div className="hidden lg:block">
                <div>
                  <h4 className="text-5xl">Post Statistics</h4>
                  <h5 className="text-3xl mt-4 font-normal">published posts: {result.count}</h5>
                  <h5 className="text-3xl mt-3 font-normal">latest post: {moment(result.latestPost.publishedAt).format('DD MMM, YYYY')}</h5>
                </div>
                <h4 className="text-4xl mt-12 mb-8">or another post below!</h4>
                <div className="lg:min-w-[120%] lg:max-w-[120%]">
                  <ButtonCard textProps={result.latestPost.title} linkTo={`${result.latestPost.slug.current}`}/>
                  <div className="mt-12 mb-8 lg:max-w-">
                    {
                      result.allPost.map((post, key) => (
                        <SpanLink key={key} text={`Read ${post.title}`} linkto={`${post.slug.current}`}/>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="block lg:hidden">
                <div className="lg:mt-12 mb-8 lg:max-w-">
                  <h5 className="mb-2">Other post:</h5>
                  {
                    result.allPost.map((post, key) => (
                      <SpanLink key={key} text={`Read ${post.title}`} linkto={`${post.slug.current}`}/>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

