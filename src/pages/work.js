import Head from 'next/head'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import { FaInstagram } from 'react-icons/fa'

const posts = [
    {
        name: '@2k',
        hashtag: '#borderlands',
        imageUrl: '/images/igposts/2k_borderlands.jpg',
    },
    {
        name: '@alienwareoz',
        name2: '@killercoffee',
        hashtag: null,
        imageUrl: '/images/igposts/alienware_killercoffee.jpg',
    },
    {
        name: '@alienware',
        name2: null,
        hashtag: '#PAX',
        imageUrl: '/images/igposts/alienware_pax.jpg',
    },
    {
        name: '@alienware',
        name2: null,
        hashtag: null,
        imageUrl: '/images/igposts/alienware.jpg',
    },
    {
        name: '@bandainamcoau',
        name2: null,
        hashtag: null,
        imageUrl: '/images/igposts/bandainamcoau.jpg',
    },
    {
        name: '@brightburnmovie',
        name2: '@viewinglounge',
        hashtag: '#FirdayFrightNight',
        imageUrl: '/images/igposts/brightburnmovie.jpg',
    },
    {
        name: '@DiDiAustralia',
        name2: null,
        hashtag: null,
        imageUrl: '/images/igposts/didiaustralia.jpg',
    },
    {
        name: '@EAInisder',
        name2: null,
        hashtag: '#StarWarsJediFallenOrder',
        imageUrl: '/images/igposts/eainsider.jpg',
    },
    {
        name: '@PlayStationAU',
        name2: null,
        hashtag: '#Returnal',
        imageUrl: '/images/igposts/playstationau.jpg',
    },
    {
        name: '@UniversalpicsAU',
        name2: null,
        hashtag: '#UsMovie',
        imageUrl: '/images/igposts/usmovie.jpg',
    },
]

export default function work() {
    return (
        <div className="bg-maroon-oak-500">
            <Head>
                <title>Series of Blurs - Work with me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <div className="mx-auto bg-maroon-oak-500 bg-transparent bg-gradient-to-t from-blue-charcoal-700">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <img src="/images/blurs_logo_2line.png" alt="" />
                </div>
                <div className="px-4 py-20 sm:px-6 lg:px-8 lg:py-16">
                    <div>
                    <p className="mt-2 text-white text-3xl font-extrabold uppercase font-poppins tracking-tight sm:text-4xl">
                        Work with me.
                    </p>
                    <p className="mt-3 text-base font-spacemono text-gray-300">
                    I'm a content creator and social media influencer. I work with brands and companies to help them reach their target audience through social media and content creation. If you have any questions about what I can offer you, or about working together on a project, don't hesitate to contact me!
                    </p>
                    </div>
                </div>
                </div>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="/images/logocloud/audiotechnica.png" alt="Audio Technica" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="/images/logocloud/ubisoft.png" alt="Ubisoft" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="/images/logocloud/logitech.png" alt="Logitech" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="/images/logocloud/elgato.png" alt="Elgato" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="/images/logocloud/universal.png" alt="Universal Australia" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="/images/logocloud/xbox.png" alt="Xbox Australia" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="/images/logocloud/alienware.png" alt="Alienware" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="/images/logocloud/playstation.png" alt="Playstation Australia" />
                        </div>
                    </div>
                </div>
                <section className="max-w-7xl mx-auto px-4 py-10">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:grid-cols-3">
                        {posts.map((igposts) => (
                            <div
                                key={igposts.name}
                                className="relative rounded-lg bg-scarlet-500 flex items-center space-x-3"
                            >
                                <div className="flex-shrink-0">
                                    <img className="h-32 w-32 sm:h-40 sm:w-40 rounded-l-lg object-cover" src={igposts.imageUrl} alt={igposts.name} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-poppins text-white text-lg sm:text-xl">{igposts.name}</h3>
                                    <h3 className="font-poppins text-white text-lg sm:text-xl">{igposts.name2}</h3>
                                    <p className="font-poppins text-xs sm:text-base text-blue-charcoal-500">{igposts.hashtag}</p>
                                    <FaInstagram className="h-6 w-6 text-white" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            <Footer />
            </div>
            
        </div>
    )
}