"use client";
import { useState, useEffect } from 'react'
import Axios from 'axios';
import Image from 'next/image';

function blogs({ startIndex,setFinalPage }) {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const source = Axios.CancelToken.source();
        Axios.get(`https://dev.to/api/articles?username=shubhamtiwari909&page=${startIndex}`, {
            cancelToken: source.token
        }).then((response) => {
            setBlogs(response.data);
            setFinalPage(response.data.length)
        }).catch((error) => {
            if (Axios.isCancel(error)) return;
        });

        return () => source.cancel();

    }, [startIndex])

    return (
        <>

            {blogs.length > 0 ? blogs?.map(blog => {
                return (
                    <article key={blog.id} className='px-4 py-2 border-2 border-blue-700 rounded-lg relative bg-slate-200'>
                        <div className='min-h-200 md:min-h-250 flex flex-col justify-between'>
                            <div>
                                <div className='flex justify-between items-start mb-3 mt-2'>
                                    <h1 className='text-lg text-slate-800 font-semibold  min-h-70'>{blog.title}</h1>
                                    <Image
                                        src={blog.user.profile_image_90}
                                        width="0"
                                        height="0"
                                        sizes="10vw"
                                        className="w-12 h-auto rounded-full outline outline-2 outline-blue-600 outline-offset-2"
                                        alt='blog cover' />
                                </div>
                                <Image
                                    src={blog.cover_image !== null ? blog.cover_image : blog.social_image}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full min-h-150 max-h-150 mx-auto outline outline-2 outline-blue-500 outline-offset-2 rounded-lg mb-6"
                                    alt='blog cover'
                                    loading="lazy" />
                                <p className='text-sm md:text-base text-slate-800 mb-6'>Description: {blog.description}</p>
                            </div>
                            <div className='flex justify-between mb-6'>
                                <a href={blog.url} className='text-sm md:text-base text-slate-800 
                              px-4 py-1 rounded-xl border border-blue-500 outline outline-blue-600 outline-offset-2
                              hover:bg-blue-500 hover:text-white' target='_blank'>Read Blog</a>
                                <p className='text-sm md:text-lg text-slate-800' >{blog.created_at.slice(0, 10)}</p>
                            </div>
                        </div>
                        <p className='text-sm md:text-base font-semibold text-slate-800 mb-6'>Tags: {blog.tags}</p>
                    </article>
                )
            }) : null}
        </>
    )
}

export default blogs