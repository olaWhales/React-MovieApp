import { useGetNowPlayingMoviesQuery } from '../service/movieApi'
import Card from '../reuseables/Card';


const Now_playing = () => {
    const {data } = useGetNowPlayingMoviesQuery("Now_playing");
    console.log(data)
  return (
    
        
            // data?.div?.results.map((movie: any) =>(
            // <div key={movie.id}>
            //      <img
            //      src={`${MOVIEIMAGEURL}${movie.poster_path}`}
            //     alt={`${movie.title}`}
            //      />
            // </div>   
            //  )) 
            <div>
              <Card data={data} isLoading={false} isError={false}/>
            </div>
        
    
  )
}

export default Now_playing
