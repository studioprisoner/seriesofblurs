import Head from 'next/head'
import { FaTwitter, FaTwitch, FaInstagram } from 'react-icons/fa'

export default function Test({ reaches }) {
    return (
    <div>
        <Head>
            <title>Test Page</title>
        </Head>
        <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reaches && reaches.map((reaches) => (
                <a key={reaches.id} href="#">
                    <div className="relative bg-scarlet-500 pt-5 px-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                            <div className="absolute bg-white text-scarlet-500 rounded-md p-3">
                                
                            </div>
                            <p className="ml-16 text-sm font-medium font-spacemono text-white truncate">Total Followers</p>
                        </dt>
                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7 text-white">
                            {reaches.followers}
                        </dd>
                    </div>
                </a>
            ))}
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