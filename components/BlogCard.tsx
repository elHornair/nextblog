import Link from 'next/link';
import React from 'react';
import Date from './date';

export default function BlogCard ({
    id,
    title,
    description,
    imageUrl,
    date,
    tags
}) {
    return <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={imageUrl} alt="TODO"/>
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
                <p className="text-sm font-medium text-orange-600">
                    <span>{tags}</span>
                </p>
                <Link href={`/posts/${id}`} className="block mt-2">
                    <a>
                        <p className="text-xl font-semibold text-gray-900">{title}</p>
                        <p className="mt-3 text-base text-gray-500">{description}</p>
                    </a>
                </Link>
            </div>
            <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                    <Link href={'/about'}>
                        <a >
                            <span className="sr-only">Alain</span>
                            <img className="h-10 w-10 rounded-full" src="/" alt="Profile picture of Alain"/>
                        </a>
                    </Link>
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                        <Link href={'/about'}>
                            <a className="hover:underline">Alain</a>
                        </Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                        <Date dateString={date}/>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
