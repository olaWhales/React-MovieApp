import {createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BASEURL = import.meta.env.VITE_APP_BASE_URL;
const APIKEY = import.meta.env.VITE_APP_KEY ;
export const MOVIEIMAGEURL = import.meta.env.VITE_APP_MOVIE_IMAGES_URL;

export const Movie_API = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}`}),
    endpoints:(builder)=>({
        getPopularMovies: builder.query({
            query:()=>(`/movie/popular?api_key=${APIKEY}`)
        }),
        getUpcomingMovies: builder.query({
            query:()=>(`/movie/upcoming?api_key=${APIKEY}`)
        }),
        getNowPlayingMovies: builder.query({
            query:()=>(`/movie/now_playing?api_key=${APIKEY}`)
        }),     
        getTopRatedMovies: builder.query({
            query:()=>(`/movie/top_rated?api_key=${APIKEY}`)
        }), 
    })
    // endpoints: function (build: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {
    // }, FetchBaseQueryMeta>, never, "movieApi">): EndpointDefinitions {
    //     throw new Error("Function not implemented.");
    
    // }
})

// `use${getPopularMovies}Mutation`
export const {
  useGetPopularMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetTopRatedMoviesQuery,
} = Movie_API;