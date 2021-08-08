import Head from 'next/head'
import Nav from 'components/Nav'
import Reach from 'components/Reach'
import Footer from 'components/Footer'

export default function Home() {

    return (
        <div className="bg-maroon-oak-700 bg-gradient-to-t from-blue-charcoal-700 min-h-screen">
            <Head>
                <title>Series of Blurs</title>
            </Head>
            <Nav />
            <main className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 px-4">
                <div>
                    <img
                        src="images/blurs_logo_2line.png"
                        className="sm:w-4/6"
                    />
                    <p className="py-6 text-2xl sm:text-3xl text-center sm:text-left text-white font-poppins font-medium uppercase">Video Games &amp; Horror Movies</p>
                    <p className="py-6 text-base sm:text-xl text-white font-spacemono">Follow Series of Blurs for all your horror movie suggestions. This is the place to be for everyone who loves video games,  ghosts, aliens, monsters, flesh-eating-zombies and much more.</p>
                    <a
                        href="/work" 
                        className="w-full sm:w-1/2 flex mt-6 justify-center py-2 px-4 border border-transparent rounded-2xl text-white bg-scarlet-500 hover:bg-scarlet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-scarlet-500 font-poppins font-medium uppercase"
                    >
                        Work With Me
                    </a>
                </div>
                <div className="py-5">
                    <div className="flex items-center justify-center">
                        <img
                            src="images/mia-godzilla.png"
                            className="sm:w-4/5"
                        />
                    </div>
                </div>
                
            </main>
            <Reach /> 
            <Footer />
        </div>
    )
}