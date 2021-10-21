import Head from 'next/head'
import Layout from 'components/Layout'

export default function Categories({ category }) {
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
                            <img src="/images/blurs_logo_2line.png" alt="Series of Blurs"/>
                        </div>
                        <div className="px-4 py-20 sm:px-6 lg:px-8 lg:py-16">
                            <div>
                                <p className="mt-2 text-white text-3xl font-extrabold uppercase font-poppins tracking-tight sm:text-4xl">Movies</p>
                                <p className="mt-3 text-base font-spacemono text-gray-300">I have kept track of some of the best horror movies and came up with a curated list below. This list is constantly updated so make sure you keep coming back to check it out.</p>
                            </div>
                        </div>
                    </div>
                    <section>
                        {category.name}
                    </section>
                </div>
            </Layout>

        </div>
    )
}


export async function getStaticProps({ params }) {
    const categoryId = params.characterId
    const results = await fetch(`https://seriesofblurs-cms.herokuapp.com/categories?=${params.categoryId}`).then(res => res.json())

    return {
        props: {
            category: results
        }
    }
}

export async function getStaticPaths() {
    const categories = await fetch('https://seriesofblurs-cms.herokuapp.com/categories').then(res => res.json());
    return {
        paths: categories.map(category => {
            const categoryId = category.slug
            return {
                params: {
                    categoryId
                }
            }
        }),
        fallback: false
    }
}

