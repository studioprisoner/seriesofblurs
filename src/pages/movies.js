import Head from 'next/head'
import Nav from 'components/Nav'

export default function Movies() {
    
    return (
        <div className="">
            <Head>
                <title>Series of Blurs - Movies</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

<<<<<<< HEAD
            <div className="relative h-full sm:h-screen bg-maroon-oak-500 sm:bg-transparent bg-gradient-to-t from-blue-charcoal-700">
                <Nav />
                <div className="max-w-7xl mx-auto px-4 sm:py-4 sm:px-6 lg:px-8">
                    <h1 className="grid justify-items-center sm:justify-items-start">
                        <img
                            className="h-60 sm:h-72"
                            src="images/blurs_logo_2line.png"
                            alt="Series of Blurs"
                        />
                        <img
                            className=""
                            src="images/film-reel.png"
                            alt="Films"
                        />
                    </h1>
                </div>
                <div className="grid justify-items-center sm:justify-items-start">

=======
            <main>
                <div className="bg-maroon-oak-500">
                    <div className="mx-auto">
                        <div className="h-full relative">
                            <div className="max-w-7xl mx-auto relative px-4 py-16 sm:px-6 sm:py-24 lg:py-24 lg:px-8">
                                <div className="max-w-7xl sm:w-full sm:p-4 h-40 flex flex-col sm:flex-row gap-5">
                                    <div className="bg-film-reel h-64 sm:h-full sm:w-72 bg-left bg-no-repeat" />
                                    <div className="flex sm:flex-1 flex-col gap-2 p-1">
                                        <h1 className="font-extrabold tracking-tight uppercase"><span className="text-5xl sm:text-6xl lg:text-7xl text-white">Series of </span><span className="text-5xl sm:text-6xl lg:text-8xl text-scarlet-500">Movies</span></h1>
                                    </div>
                                    <div className="flex sm:flex-1 flex-col gap-2 p-1">
                                        <p className="text-white font-spacemono">I have kept track of some of the best horror movies and came up with a curated list below. This list is constantly updated so make sure you keep coming back to check it out.</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="max-w-7xl mx-auto relative px-4 py-16 sm:px-6 sm:py-24 lg:py-24 lg:px-8">
                                        <div>
                                            <h3>Modern</h3>
                                            <ul>
                                                <li>Hereditary</li>
                                                <li>The Witch</li>
                                                <li>Black Swan</li>
                                                <li>Babadook</li>
                                                <li>Us</li>
                                                <li>Green Room</li>
                                                <li>Get Out</li>
                                                <li>Raw</li>
                                                <li>It Follows</li>
                                                <li>A Quiet Place</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
>>>>>>> f010c386de0f19f4b20bf3e57139148d13e6b877
                </div>
            </div>

        </div>
    )
}