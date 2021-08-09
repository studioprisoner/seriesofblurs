import Head from 'next/head'
import Nav from 'components/Nav'
import MovieList from 'components/MovieLists'
import Footer from 'components/Footer'

export default function Movies() {
    
    return (
        <div className="bg-maroon-oak-500">
            <Head>
                <title>Series of Blurs - Movies</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <div className="mx-auto bg-maroon-oak-500 bg-transparent bg-gradient-to-t from-blue-charcoal-700">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <img src="/images/blurs_logo_2line.png" alt="" />
                </div>
                <div className="px-4 py-20 sm:px-6 lg:px-8 lg:py-16">
                    <div>
                    <p className="mt-2 text-white text-3xl font-extrabold uppercase font-poppins tracking-tight sm:text-4xl">
                        Movies
                    </p>
                    <p className="mt-3 text-base font-spacemono text-gray-300">
                    I have kept track of some of the best horror movies and came up with a curated list below. This list is constantly updated so make sure you keep coming back to check it out.
                    </p>
                    </div>
                </div>    
                </div>
                <MovieList />
                <Footer />
            </div>

        </div>
    )
}