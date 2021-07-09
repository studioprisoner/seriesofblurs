import Head from 'next/head'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

export default function Movies() {
    
    return (
        <div className="bg-maroon-oak-500">
            <Head>
                <title>Series of Blurs - Movies</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="2xl:h-screen bg-maroon-oak-500 bg-transparent bg-gradient-to-t from-blue-charcoal-700">
                <Nav />
                <main className="max-w-7xl mx-auto py-4 px-4 sm:py-6 sm:px-6 lg:px-8 lg:flex">
                    <div className="">
                        <img
                            className=""
                            src="/images/blurs_logo_2line.png"
                            alt="Series of Blurs"
                        />
                    </div>
                    <div className="flex-grow py-4 sm:py-20 px-10">
                        <h2 className="text-scarlet-500 font-sporting tracking-tight text-5xl">Movies</h2>
                        <p className="text-white font-spacemono">I have kept track of some of the best horror movies and came up with a curated list below. This list is constantly updated so make sure you keep coming back to check it out.</p>
                    </div>
                </main>
                <section>
                <div className="max-w-7xl mx-auto px-8">
                        <div className="bg-scarlet-500 rounded-lg p-5">
                            <h3 className="text-blue-charcoal-500 font-sporting text-3xl">Modern</h3>
                            <ul className="m-auto text-white text-xs font-spacemono list-none">
                                <li className="float-left block w-2/4 sm:w-1/5">Hereditary</li>
                                <li className="float-left block w-2/4 sm:w-1/5">The Witch</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Black Swan</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Babadook</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Us</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Green Room</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Get Out</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Raw</li>
                                <li className="float-left block w-2/4 sm:w-1/5">It Follows</li>
                                <li className="float-left block w-2/4 sm:w-1/5">A Quiet Place</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Midsommar</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Don't Breath</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Evil Dead (remake)</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Doctor Sleep</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Cabin in the Woods</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Under The Skin</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Annihilation</li>
                                <li className="float-left block w-2/4 sm:w-1/5">You're Next</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Starry Eyes</li>
                                <li className="float-left block w-2/4 sm:w-1/5">We need to talk about Kevin</li>
                                <li className="float-left block w-2/4 sm:w-1/5">IT</li>
                                <li className="float-left block w-2/4 sm:w-1/5">The Autopsy of Jane Doe</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Happy Death Day</li>
                                <li className="float-left block w-2/4 sm:w-1/5">The Invitation</li>
                                <li className="float-left block w-2/4 sm:w-1/5">10 Cloverfiled Lane</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Oculas</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Honeymoon</li>
                                <li className="float-left block w-2/4 sm:w-1/5">The Visit</li>
                                <li className="float-left block w-2/4 sm:w-1/5">The Ritual</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Mother!</li>
                                <li className="float-left block w-2/4 sm:w-1/5">The Conjuring</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Insidous</li>
                                <li className="float-left block w-2/4 sm:w-1/5">The Woman</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Blackcoat's Daughter</li>
                                <li className="float-left block w-2/4 sm:w-1/5">The Monster</li>
                                <li className="float-left block w-2/4 sm:w-1/5">The Eyes if my Mother</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Unsane</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Overlord</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Crawl</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Ready or Not</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Gerald's Game</li>
                                <li className="float-left block w-2/4 sm:w-1/5">Housebound</li>
                                <li className="float-left block w-2/4 sm:w-1/5">The Loved Ones</li>
                            </ul>
                            <div className="clear-both" />
                        </div>
                        <div className="grid grid-cols-none sm:grid-cols-3 gap-4 mt-6">
                        <div className="bg-scarlet-500 rounded-lg p-5">
                            <h3 className="text-blue-charcoal-500 font-sporting text-3xl">Foreign</h3>
                            <ul className="m-auto text-white text-xs font-spacemono list-none">
                                <li className="float-left block w-2/4">Backbone</li>
                                <li className="float-left block w-2/4">A Tale of Two Sisters</li>
                                <li className="float-left block w-2/4">The Host</li>
                                <li className="float-left block w-2/4">The Wailing</li>
                                <li className="float-left block w-2/4">Sleep Tight</li>
                                <li className="float-left block w-2/4">Troll Hunter</li>
                                <li className="float-left block w-2/4">Under The Shadow</li>
                                <li className="float-left block w-2/4">REC</li>
                                <li className="float-left block w-2/4">Let The Right One In</li>
                                <li className="float-left block w-2/4">I Saw The Devil</li>
                                <li className="float-left block w-2/4">Pans Labyrinth</li>
                                <li className="float-left block w-2/4">Train to Busan</li>
                                <li className="float-left block w-2/4">Inside</li>
                                <li className="float-left block w-2/4">High Tension</li>
                                <li className="float-left block w-2/4">Martyrs</li>
                                <li className="float-left block w-2/4">The Orphanage</li>
                                <li className="float-left block w-2/4">The Devils</li>
                            </ul>
                            <div className="clear-both" />
                        </div>
                        <div className="bg-scarlet-500 rounded-lg p-5">
                            <h3 className="text-blue-charcoal-500 font-sporting text-3xl">Classics</h3>
                            <ul className="m-auto text-white text-xs font-spacemono list-none">
                                <li className="float-left block w-full">Alien</li>
                                <li className="float-left block w-full">The Shining</li>
                                <li className="float-left block w-full">Rosemarys Baby</li>
                                <li className="float-left block w-full">The Thing</li>
                                <li className="float-left block w-full">Halloween</li>
                                <li className="float-left block w-full">Texas Chainsaw Massacre</li>
                                <li className="float-left block w-full">Nightmare on Elm Street</li>
                                <li className="float-left block w-full">Jaws</li>
                            </ul>
                            <div className="clear-both" />
                        </div>
                        <div className="bg-scarlet-500 rounded-lg p-5">
                            <h3 className="text-blue-charcoal-500 font-sporting text-3xl">The 90's</h3>
                            <ul className="m-auto text-white text-xs font-spacemono list-none">
                                <li className="float-left block w-full">Bram Strokers Dracula: Interview With A Vampire</li>
                                <li className="float-left block w-full">The Faculty</li>
                                <li className="float-left block w-full">Misery</li>
                                <li className="float-left block w-full">Scream</li>
                                <li className="float-left block w-full">Urban Legend</li>
                            </ul>
                            <div className="clear-both" />
                        </div>
                        </div>
                        <div className="bg-scarlet-500 rounded-lg p-5 sm:w-2/5 mt-6">
                            <h3 className="text-blue-charcoal-500 font-sporting text-3xl">2000's</h3>
                            <ul className="m-auto text-white text-xs font-spacemono list-none">
                                <li className="float-left block w-full">The Ring</li>
                                <li className="float-left block w-full">28 Days Later</li>
                                <li className="float-left block w-full">The Decent</li>
                                <li className="float-left block w-full">The Strangers</li>
                                <li className="float-left block w-full">The Others</li>
                                <li className="float-left block w-full">Funny Games</li>
                            </ul>
                            <div className="clear-both" />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>

        </div>
    )
}