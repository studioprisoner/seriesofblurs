import Head from 'next/head'
import Layout from 'components/Layout'
import Link from 'next/link'
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
                    <section className="max-w-7xl mx-auto mt-8 px-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {categories.map(category => {
                                return (
                                    <Link
                                        key={category.id}
                                        href={`/categories/${category.name.toLowerCase()}`}
                                    >
                                        <a className="relative">
                                            <div className="inset-0">
                                                <img
                                                src={category.imagename}
                                                className="w-full h-full object-center object-cover rounded-lg"
                                                />
                                            </div>
                                            <div className="absolute inset-x-0 bottom-0 p-6 rounded-bl-lg rounded-br-lg sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start">
                                            <div>
                                                <h2 className="font-poppins font-bold uppercase text-4xl text-white">{category.name}</h2>
                                            </div>
                                        </div>
                                        </a>                                    
                                    </Link>
                                )
                            })}
                    </section>
                </div>
            </Layout>

        </div>
    )
}

export async function getStaticProps() {
    const categories = await fetch('https://seriesofblurs-cms.herokuapp.com/categories/').then(res => res.json());

    return {
      props: {
        categories
      }
    }
  }