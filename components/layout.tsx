import Head from 'next/head';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import utilStyles from '../styles/utils.module.css';

const navigation = [
    { name: 'Blog', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
];

export const siteTitle = 'wooo.ch';

export default function Layout ({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="relative overflow-hidden">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <div className="relative min-w-full z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <header className="bg-gray-800">
                    <div className={utilStyles.contentContainer}>
                        <Popover>
                            <div className="relative py-6 px-4 sm:px-6 lg:px-8">
                                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                        <div className="flex items-center justify-between w-full md:w-auto">
                                            <Link href="/">
                                                <a>
                                                    <span className="sr-only">Workflow</span>
                                                    <img
                                                        alt="Workflow"
                                                        className="h-8 w-auto sm:h-10"
                                                        src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"
                                                    />
                                                </a>
                                            </Link>
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                                                    <span className="sr-only">Open main menu</span>
                                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                        {navigation.map((item) => (
                                            <a key={item.name} href={item.href} className="font-medium text-white hover:text-gray-300">
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </nav>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="px-5 pt-4 flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                                                    <span className="sr-only">Close main menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-2 pb-3 space-y-1">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </div>
                </header>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}
