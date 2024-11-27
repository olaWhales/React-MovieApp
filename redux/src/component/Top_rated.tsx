import React from 'react'
import { useGetTopRatedMoviesQuery } from '../service/movieApi';

const Top_rated = () => {
    const data = useGetTopRatedMoviesQuery('popular');
    console.log(data)
  return (
    <div>
      Top_rated
    </div>
  )
}

export default Top_rated
