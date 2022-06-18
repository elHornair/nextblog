import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import Link from 'next/link';

export default function Post ({
    postData
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
        description: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta
                    name="description"
                    content={postData.description}
                    key="desc"
                />
            </Head>
            <article>
                <h1>{postData.title}</h1>
                <div>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string);
    return {
        props: {
            postData
        }
    };
};
