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
        }),
        setBookmarked: builder.mutation({
            query: (post) => ({
                url: `/api/posts/${post.postId}/bookmark`,
                method: 'POST',
                // body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: builder.mutation({
            query: (post) => ({
                url: `/api/posts/${post.postId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        })
    })
})

export const {
    useGetPostsQuery,
    useCreatePostMutation,
    useSetBookmarkedMutation,
    useDeletePostMutation
} = postApiSlice