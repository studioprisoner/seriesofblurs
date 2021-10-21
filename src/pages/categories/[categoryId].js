export default function Categories({ category }) {
    return (
        <div>
            <h1>{category.title}</h1>
        </div>
    )
}


export async function getStaticProps({ params }) {
    const categoryId = params.characterId
    const results = await fetch(`https://seriesofblurs-cms.herokuapp.com/categories/${params.categoryId}`).then(res => res.json())

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

