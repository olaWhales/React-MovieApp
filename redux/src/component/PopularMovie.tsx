import { useGetPopularMoviesQuery } from '../service/movieApi'

const PopularMovies = () => {
    const data = useGetPopularMoviesQuery('popular');
    console.log(data)
  return (
    <div>PopularMovies</div>
  )
}

export default PopularMovies
