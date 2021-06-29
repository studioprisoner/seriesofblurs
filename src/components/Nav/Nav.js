import { FaTwitter, FaTwitch, FaInstagram } from 'react-icons/fa'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                <div className="max-w-7xl bg-transparent mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">

                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <a
                                href="/"
                                className="text-white hover:text-scarlet-500 inline-flex items-center px-1 pt-1 text-lg font-sporting"
                            >
                                Home
                            </a>
                            <a
                                href="/movies"
                                className="text-white hover:text-scarlet-500 inline-flex items-center px-1 pt-1 text-lg font-sporting"
                            >
                                Movies
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-scarlet-500 inline-flex items-center px-1 pt-1 text-lg font-sporting"
                            >
                                Work With Me
                            </a>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
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

                        {/* Profile dropdown */}
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-scarlet-500 hover:bg-maroon-oak-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-scarlet-500">
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
                <Disclosure.Panel className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <a
                        href="/"
                        className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                        Movies
                    </a>
                    <a
                        href="/movies"
                        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                        Work With Me
                    </a>
                    </div>
                </Disclosure.Panel>
        </>
            )}
        </Disclosure>
    )
}