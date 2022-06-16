import Link from "next/link";
import Head from "next/head";
import Layout from "/components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Le title</title>
            </Head>
            <h1 className="block text-red-600">This is my first post</h1>
        </Layout>
    )
}
