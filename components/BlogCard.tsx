import Link from 'next/link';
import React from 'react';
import Date from './date';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function BlogCard ({
    id,
    title,
    description,
    imageUrl,
    imageAlt,
    date,
    tags
}) {
    return <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
            <div className="relative h-48 w-full object-cover overflow-hidden">
                <Image
                    src={imageUrl}
                    layout="responsive"
                    width={7200}// TODO: adapt image ratio so it's what the layout actually expects (wide). Then always cut the original images correctly.
                    height={4800}
                    alt={imageAlt}
                />
            </div>
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
                <p className="text-sm font-medium text-orange-600">
                    <span>{tags}</span>
                </p>
                <Link href={`/${id}`} className="block mt-2">
                    <a>
                        <p className="text-xl font-semibold text-gray-900">{title}</p>
                        <p className="mt-3 text-base text-gray-500">{description}</p>
                    </a>
                </Link>
            </div>
            <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                    <Link href={'/about'}>
                        <a className="block relative h-10 w-10 rounded-full overflow-hidden">
                            <span className="sr-only">Alain</span>
                            <Image
                                src="/images/profile.jpg"
                                layout="fill"
                                alt="Male face wearing sunglasses and bicyle helmet in the foreground, road in the background."
                            />
                        </a>
                    </Link>
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                        <Link href={'/about'}>
                            <a className={utilStyles.contentLink}>Alain</a>
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
