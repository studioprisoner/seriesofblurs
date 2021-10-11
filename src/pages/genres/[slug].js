import { fetchAPI } from 'lib/api'

import Layout from 'components/Layout'

export default function Genres({ genre }) {

    return (
        <div>
            <Layout>
                <div className="mx-auto bg-maroon-oak-500 bg-transparent bg-gradient-to-t from-blue-charcoal-700">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap=4">
                        <h1>{genre.title}</h1>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export async function getStaticPaths() {
    const genres = await fetchAPI("/genres")

    return {
        paths: genres.map((genre) => ({
            params: {
                slug: genre.slug
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const genre = (await fetchAPI(`/genres?slug=${params.slug}`))[0]
    const genres = await fetchAPI("/genres")

    return {
        props: { genre, genres },
        revalidate: 1,
    }
}