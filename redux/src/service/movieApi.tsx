import { BaseQueryFn, createApi , EndpointBuilder, EndpointDefinitions, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from "@reduxjs/toolkit/query/react";

const BASEURL = import.meta.env.VITE_APP_MOVIE_IMAGES_URL
const APIKEY = import.meta.env.VITE_APP_BASE_URL

export const Movie_API = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}`}),
    endpoints:(builder)=>({
        getPopularMovies: builder.query({
            query:()=>(`${BASEURL}/movie/popular?api_key=${APIKEY}`)
        }),
    })
    // endpoints: function (build: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {
    // }, FetchBaseQueryMeta>, never, "movieApi">): EndpointDefinitions {
    //     throw new Error("Function not implemented.");
    
    // }
})

// `use${getPopularMovies}Mutation`
export const {useGetPopularMoviesQuery} = Movie_API