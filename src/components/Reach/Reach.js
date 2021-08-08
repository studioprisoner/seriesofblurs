import { FaTwitter, FaTwitch, FaInstagram } from 'react-icons/fa'

export default function Reach() {

    return (
        <div>
            <div className="max-w-7xl mx-auto w-full pb-20 px-4 lg:py-12">
                        <h2 className="font-poppins text-white text-6xl uppercase">Reach</h2>
                        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <a href="https://twitch.com/seriesofblurs">
                            <div className="relative bg-scarlet-500 pt-5 px-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                <dt>
                                    <div className="absolute bg-white rounded-md p-3">
                                        <FaTwitch className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-sm font-medium font-spacemono text-white truncate">Total Followers</p>
                                </dt>
                                <dd className="ml-16 pb-6 flex items-baseline sm:pb-7 text-white">
                                    33.3K
                                </dd>
                            </div>
                            </a>
                            <a href="https://instagram.com/seriesofblurs">
                            <div className="relative bg-scarlet-500 pt-5 px-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                <dt>
                                    <div className="absolute bg-white rounded-md p-3">
                                        <FaInstagram className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-sm font-medium font-spacemono text-white truncate">Total Followers</p>
                                </dt>
                                <dd className="ml-16 pb-6 flex items-baseline sm:pb-7 text-white">
                                    11.3K
                                </dd>
                            </div>
                            </a>
                            <a href="https://twitter.com/seriesofblursx">
                            <div className="relative bg-scarlet-500 pt-5 px-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                <dt>
                                    <div className="absolute bg-white rounded-md p-3">
                                        <FaTwitter className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-sm font-medium font-spacemono text-white truncate">Total Followers</p>
                                </dt>
                                <dd className="ml-16 pb-6 flex items-baseline sm:pb-7 text-white">
                                    4.1K
                                </dd>
                            </div>
                            </a>
                        </dl>
                    </div> 
        </div>
    )
}