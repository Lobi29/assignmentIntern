import { UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `${UPLOAD_URL}`,
            providesTags: ['Post']
        }),
        createPost: builder.mutation({
            query: (post) => ({
                url: `${UPLOAD_URL}`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        })
    })
})

export const {
    useGetPostsQuery,
    useCreatePostMutation
} = postApiSlice