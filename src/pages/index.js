import Layout from 'components/Layout'
import Reach from 'components/Reach'

export default function Home() {

    return (
        <Layout>
            <main>
                <div className="mx-auto max-w-7xl w-full">
                    <div className="flex justify-end">
                    <div className="px-4 lg:w-1/2 text-center sm:text-left sm:px xl:pr-16">
                        <h1>
                            <img
                                src="images/blurs_logo_2line.png"
                                alt="Series of Blurs"
                                className="w-3/4 mx-auto"
                            />
                        </h1>
                        <h2 className="py-6 text-2xl sm:text-3xl text-center sm:text-left text-white font-poppins font-medium uppercase">Video Games &amp; Horror Movies</h2>
                        <p className="mt-3 mx-w-md mx-auto text-lg text-white sm:text-base md:mt-5 md:max-w-3xl font-spacemono">
                        Follow Series of Blurs for all your horror movie suggestions. This is the place to be for everyone who loves video games,  ghosts, aliens, monsters, flesh-eating-zombies and much more.
                        </p>
                        <a
                        href="/work" 
                        className="w-full sm:w-1/2 flex mt-6 justify-center py-2 px-4 border border-transparent rounded-2xl text-white bg-scarlet-500 hover:bg-scarlet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-scarlet-500 font-poppins font-medium uppercase"
                    >
                        Work With Me
                    </a>
                    </div>
                    </div>
                </div>
            </main>
            <Reach />
        </Layout>
    )
}