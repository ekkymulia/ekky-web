import { Link, useLoaderData, useTransition } from "@remix-run/react";
import moment from "moment";
import { getPostData } from "~/models/post.server";
import urlFor from '../../../sanityClient'
import {PortableText} from '@portabletext/react'

//fetching data from sanity
export async function loader({ params }) {
    const { result } = await getPostData(params.slug)
    console.log(result, params)
    return result[0];
}

const Slug = () => {
    const transition = useTransition()
    const resultQuery = useLoaderData();

    return (
        <div className={ `lg:mb-0 mb-12 transition ${transition.state == 'idle' ? 'opacity-100' : 'opacity-0'}` }>
            <div>
                <Link to='/journal'>◀ Back to Journal</Link><br/><br/>
                <span>Publised at {moment(resultQuery.publishedAt).format('DD MMM, YYYY')}</span>

                <h2 className="text-2xl">{ resultQuery.title }</h2>

                {
                    resultQuery && resultQuery.mainImage ? (
                        <div className="mt-4 mb-8 flex">
                            <img className="lg:min-w-[100%] lg:max-w-[100%] min-w-[100%] mb-2" src={urlFor(resultQuery.mainImage.asset._ref).url()} alt="profile-pict"/>
                        </div>
                    ) : undefined
                }
            </div>
            <div>
                {
                    <PortableText value={resultQuery.body}/>
                }
            </div>
        </div>
    );
};

export default Slug;