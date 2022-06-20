import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import React from 'react';

export default function HeroSection () {
    return <section className="relative bg-gray-800">
        <div className={utilStyles.contentContainer}>
            <div className="pt-1 pb-10 lg:w-1/2 lg:mx-0 lg:pt-20 lg:pr-20 xl:pt-28">
                <div className="sm:text-center lg:text-left">
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                        <span className="sm:block">Instead, let&apos;s go</span>{' '}
                        <span className="text-orange-400 sm:block">cycling</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        This blog is all about bikepacking, bicycle travelling and all the <span
                            className="line-through">pain</span> fun that comes with it.
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
                    <polygon points="50,0 100,0 50,100 0,100"/>
                </svg>
                <Image
                    priority
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="/images/hero.jpg"
                    layout="fill"
                    alt="Bikepacking bicycle in nature."
                />
            </div>
        </div>
    </section>;
}
