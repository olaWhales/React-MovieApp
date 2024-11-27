import { useGetUpcomingMoviesQuery} from '../service/movieApi';

const UpcomingMovies = () => {
    const data = useGetUpcomingMoviesQuery(UpcomingMovies);
    console.log(data)
  return (
    <div>UpcomingMovies</div>
  )
}

export default UpcomingMovies
