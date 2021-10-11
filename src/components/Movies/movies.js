export default function Movies({ movies }) {

    const leftMovieCount = Math.ceil(movies.length / 5)
    const leftMovies = movies.slice(0, leftMovieCount)
    const rightMovies = articles.slice(leftMovieCount, movies.length)

    return (
        <div>
            
        </div>
    )
}