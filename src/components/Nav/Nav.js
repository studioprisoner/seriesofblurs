import { FaTwitter, FaTwitch, FaInstagram } from 'react-icons/fa'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    return (
        <div>
            <Disclosure as="nav">
            {({ open }) => (
                <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a href="/" className="text-white px-3 py-2 text-lg font-sporting">
                            Home
                            </a>
                            <a
                            href="/movies"
                            className="text-white hover:text-scarlet-500 px-3 py-2 text-lg font-sporting"
                            >
                            Movies
                            </a>
                            <a
                            href="/work"
                            className="text-white hover:text-scarlet-500 px-3 py-2 text-lg font-sporting"
                            >
                            Work With Me
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block z-50">
                        <div className="flex items-center">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex items-center">
                                <a href="#" className="p-5 rounded-full text-white hover:text-scarlet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-scarlet-500">
                                    <span className="sr-only">Twitch</span>
                                    <FaTwitch className="h-6 w-6" ayarnria-hidden="true" />
                                </a>
                                <a href="#" className="p-5 text-white hover:text-scarlet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-scarlet-500">
                                    <span className="sr-only">Twitter</span>
                                    <FaTwitter className="h-6 w-6" ayarnria-hidden="true" />
                                </a>
                                <a href="#" className="p-5 text-white hover:text-scarlet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-scarlet-500">
                                    <span className="sr-only">Instagram</span>
                                    <FaInstagram className="h-6 w-6" ayarnria-hidden="true" />
                                </a>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    <div className="-mr-2 flex sm:hidden z-50">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-scarlet-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    </div>
                </div>
                <Disclosure.Panel className="sm:hidden relative">
                        <div className="pt-2 pb-3 space-y-1">
                            <a
                                href="/"
                                className="text-white block pl-3 pr-4 py-2 text-base hover:text-scarlet-500 font-sporting"
                            >
                                Home
                            </a>
                            <a
                                href="/movies"
                                className="text-white block pl-3 pr-4 py-2 text-base hover:text-scarlet-500 font-sporting"
                            >
                                Movies
                            </a>
                            <a
                                href="/work"
                                className="text-white block pl-3 pr-4 py-2 text-base hover:text-scarlet-500 font-sporting"
                            >
                                Work With Me
                            </a>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
            </Disclosure>
            </div>
    )
}