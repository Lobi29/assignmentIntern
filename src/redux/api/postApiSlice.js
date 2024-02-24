import { UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `${UPLOAD_URL}`,
            providesTags: ['Post']
        })
    })
})

export const {
    useGetPostsQuery
} = postApiSlice