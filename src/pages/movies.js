import Head from 'next/head'
import Layout from 'components/Layout'
import { fetchAPI } from 'lib/api'

export default function Movies({ categories }) {
    
    return (
        <div className="bg-maroon-oak-500">
            <Head>
                <title>Series of Blurs - Movies</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="mx-auto">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <img src="images/blurs_logo_2line.png" alt="Series of Blurs"/>
                        </div>
                        <div className="px-4 py-20 sm:px-6 lg:px-8 lg:py-16">
                            <div>
                                <p className="mt-2 text-white text-3xl font-extrabold uppercase font-poppins tracking-tight sm:text-4xl">Movies</p>
                                <p className="mt-3 text-base font-spacemono text-gray-300">I have kept track of some of the best horror movies and came up with a curated list below. This list is constantly updated so make sure you keep coming back to check it out.</p>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className=" max-w-7xl mx-auto mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {categories.map((category) => {
                                return (
                                    <div key={category.id}
                                        className="p-5 bg-scarlet-500 rounded-md">
                                        <h1 className="font-poppins font-bold text-2xl uppercase text-blue-charcoal-500">{category.name}</h1>
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

    const [categories, movies] = await Promise.all([
        fetchAPI('/categories'),
        fetchAPI('/movies')
    ])

    return {
        props: { categories, movies},
        revalidate: 1,
    }
}