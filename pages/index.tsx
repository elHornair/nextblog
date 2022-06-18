import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Image from 'next/image';
import React from 'react';

export async function getStaticProps () {
    return {
        props: {
            allPostsData: getSortedPostsData()
        }
    };
}

export default function Home ({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="relative bg-gray-800">
                <div className={utilStyles.contentContainer}>
                    <div className="py-10 px-4 sm:pt-12 sm:px-6 md:pt-16 lg:w-1/2 lg:mx-0 lg:pt-20 lg:px-8 lg:pr-16 xl:pt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                                <span className="sm:block">Let&apos;s go cycling </span>{' '}
                                <span className="text-orange-400 sm:block">instead</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            This blog is all about bikepacking, bicycle travelling and all the <span className="line-through">pain</span> fun that comes with it.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-36 lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:-mt-24 lg:w-1/2">
                        <svg
                            className="hidden lg:block absolute z-10 left-0 inset-y-0 h-full w-48 text-gray-800 transform -translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <Image
                            priority
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                            src="/images/hero.jpg"
                            layout="fill"
                            alt='Bikepacking bicycle in nature.'
                        />
                    </div>
                </div>
            </section>

            <section>
                <h2>From the blog</h2>
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
