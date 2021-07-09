import Head from 'next/head'
import Nav from 'components/Nav'

export default function Movies() {
    
    return (
        <div className="">
            <Head>
                <title>Series of Blurs - Movies</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

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

                </div>
            </div>

        </div>
    )
}