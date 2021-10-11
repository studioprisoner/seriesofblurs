import Head from 'next/head'
import Nav from 'components/Nav'
import Layout from 'components/Layout'
import Link from 'next/link'
import { fetchAPI } from 'lib/api'
import genres from './genres/[slug]'

export default function Movies({ genres }) {
    
    return (
        <div className="bg-maroon-oak-500">
            <Head>
                <title>Series of Blurs - Movies</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="mx-auto bg-maroon-oak-500 bg-transparent bg-gradient-to-t from-blue-charcoal-700">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap=4">
                        <div>
                            <img src="/blurs_logo_2line.png" alt="Series of Blurs"/>
                        </div>
                        <div className="px-4 py-20 sm:px-6 lg:px-8 lg:py-16">
                            <div>
                                <p className="mt-2 text-white text-3xl font-extrabold uppercase font-poppins tracking-tight sm:text-4xl">Movies</p>
                                <p className="mt-3 text-base font-spacemono text-gray-300">I have kept track of some of the best horror movies and came up with a curated list below. This list is constantly updated so make sure you keep coming back to check it out.</p>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {genres.map((genre) => {
                            return (
                                <div key={genre.id} className="elative rounded-lg border border-gray-300 bg-scarlet-500 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <div className="flex-1 min-w-0">
                                        <Link as={`/genres/${genre.slug}`} href="/genres/[id]">
                                            <a className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            <p className="text-base text-white font-bold">{genre.title}</p></a>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </section>
                </div>
            </Layout>

        </div>
    )
}

export async function getStaticProps() {

    const [genres, movies] = await Promise.all([
        fetchAPI("/genres"),
        fetchAPI("/movies"),
    ])

    return {
        props: { genres, movies },
        revalidate: 1,
    }
}