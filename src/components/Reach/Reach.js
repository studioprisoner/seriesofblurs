import { FaTwitter, FaTwitch, FaInstagram } from 'react-icons/fa'

export default function Reach({ reaches }) {

    return (
        <div>
            <div className="max-w-7xl mx-auto w-full pb-10 px-4 py-6">
                        <h2 className="font-poppins text-white text-center sm:text-right font-bold text-6xl uppercase">Reach</h2>
                        
                            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {reaches && reaches.map((reaches) => (
                                <a key={reaches.id} href="#">
                                    <div className="relative bg-scarlet-500 pt-5 px-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                        <dt>
                                            <div className="absolute bg-white text-scarlet-500 rounded-md p-3">
                                                <FaTwitch className="h6 w-6" />
                                            </div>
                                            <p className="ml-16 text-sm font-medium font-spacemono text-white truncate">Total Followers</p>
                                        </dt>
                                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7 text-white">
                                            {reaches.Followers}
                                        </dd>
                                    </div>
                                </a>
                                ))}
                            </dl>
                        
                        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <a href="https://twitch.com/seriesofblurs">
                            <div className="relative bg-scarlet-500 pt-5 px-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                <dt>
                                    <div className="absolute bg-white text-scarlet-500 rounded-md p-3">
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
                                    <div className="absolute bg-white text-scarlet-500 rounded-md p-3">
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
                                    <div className="absolute bg-white text-scarlet-500 rounded-md p-3">
                                        <FaTwitter className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-sm font-medium font-spacemono text-white truncate">Total Followers</p>
                                </dt>
                                <dd className="ml-16 pb-6 flex items-baseline sm:pb-7 text-white">
                                    4.3K
                                </dd>
                            </div>
                            </a>
                        </dl>
                    </div> 
        </div>
    )
}

export async function getStaticProps() {

    const res = await fetch('http://localhost:1337/reaches');
    const reaches = await res.json();


    return {
        props: { reaches },
    };
}