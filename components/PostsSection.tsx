import BlogCard from './BlogCard';
import React from 'react';
import utilStyles from '../styles/utils.module.css';

export default function PostsSection ({ allPosts }) {
    return (
        <div className="relative bg-gray-50">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className={utilStyles.contentContainer}>
                <div className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Latest articles</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            You&apos;re probably busy riding. But in case you&apos;re looking for inspiration,
                            check out the latest blog posts:
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {allPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                description={post.description}
                                imageUrl={post.imageUrl}
                                imageAlt={post.imageAlt}
                                date={post.date}
                                tags={post.tags}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
