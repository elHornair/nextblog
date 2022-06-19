import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import React from 'react';
import HeroSection from '../components/HeroSection';
import PostsSection from '../components/PostsSection';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps () {
    return {
        props: {
            allPosts: getSortedPostsData()
        }
    };
}

export default function Home ({ allPosts }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <HeroSection/>
            <PostsSection allPosts={allPosts}/>
        </Layout>
    );
}
