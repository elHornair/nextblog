import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';

export default function Post ({
    postData: {
        id,
        title,
        title1,
        title2,
        description,
        imageUrl,
        imageAlt,
        date,
        tags,
        contentHtml
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                    key="desc"
                />
            </Head>
            <>
                <div className={utilStyles.contentContainer}>
                    <nav className="mt-4 mb-8 sm:mt-6 sm:mb-12 md:mt-8 md:mb-16">
                        <Link href="/"><a className={utilStyles.contentLink}>Home</a></Link>
                        {' '}/{' '}
                        <Link href="/articles"><a className={utilStyles.contentLink}>Articles</a></Link>
                        {' '}/{' '}
                        <span>{title}</span>
                    </nav>
                </div>
                <article>
                    <div className={utilStyles.contentContainer}>
                        <div className="max-w-2xl mx-auto">
                            <h1
                                className="
                                text-4xl
                                tracking-tight
                                font-extrabold
                                text-gray-900
                                sm:text-5xl
                                md:text-6xl
                            "
                            >
                                <span className="block xl:inline">{title1}</span>{' '}
                                <span className="block text-orange-600 xl:inline">{title2}</span>
                            </h1>
                            <p
                                className="
                                mt-3
                                text-base text-gray-600
                                sm:mt-5 sm:text-lg sm:mx-auto
                                md:text-xl
                                lg:mx-0
                            "
                            >
                                {description}
                            </p>
                            <p
                                className="
                                mt-3
                                mb-4
                                text-sm text-gray-600
                                sm:mt-5 sm:mb-6 sm:text-base
                                lg:mx-0
                            "
                            >
                                <Date dateString={date} />
                            </p>
                        </div>
                    </div>

                    <Image
                        src={imageUrl}
                        layout="responsive"
                        width={7200}// TODO: adapt image ratio so it's what the layout actually expects (wide). Then always cut the original images correctly.
                        height={4800}
                        alt={imageAlt}
                    />
                    <div className={utilStyles.contentContainer}>
                        <div
                            className="prose md:prose-md lg:prose-lg mt-10 sm:mt-18 max-w-2xl mx-auto"
                            dangerouslySetInnerHTML={{ __html: contentHtml }}
                        />
                    </div>
                </article>

                <div className={utilStyles.contentContainer}>
                    <div className="max-w-2xl mx-auto mt-4 sm:mt-6 md:mt-8 text-right">
                        <Link href="/articles"><a className={utilStyles.contentLink}>← All Articles</a></Link>
                    </div>
                </div>
            </>
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
