import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Post"],
    endpoints: () => ({})
});

// export const apiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
//     tagTypes: ['Post'],
//     endpoints: (builder) => ({
//         getPosts:  builder.query({
//             query: () => '/api/posts',
//             providesTags: ['Post']
//         })
//     })
// })

// export const { useGetPostQuery } = apiSlice;