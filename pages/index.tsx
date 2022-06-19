import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import React from 'react';
import HeroSection from '../components/HeroSection';

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

            <HeroSection/>

            <section>
                <h2>From the blog</h2>
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            <small>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
