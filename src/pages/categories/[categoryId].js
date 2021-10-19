import { fetchAPI } from "lib/api"

export default function Categories({  category }) {
    return (
        <div>
            <h1>{category.title}</h1>
        </div>
    )
}

export async function getStaticPaths() {
    const categories = await fetch('http://localhost:8082/categories/').then(r => r.json());

    return {
        paths: categories.map(category => {
            const categoryId = category.name.toLowerCase();
            return {
                params: {
                    categoryId
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const results = await fetch(`http://localhost:8082/categories/${params.categoryId}`).then(r => r.json())

    return {
        props: {
            category: results
        }
    }
}

