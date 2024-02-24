import { apiSlice } from "./apiSlice";

export const commentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getComments: builder.query({
            query: (comment) => `/api/posts/${comment.postId}/comments`,
            providesTags: ["Comment"]
        }),
        createComment: builder.mutation({
            query: (comment) => ({
                url: `/api/posts/${comment.postId}/comment`,
                method: 'POST',
                body: comment
            }),
            invalidatesTags: ['Comment']
        })
    })
})

export const {
    useGetCommentsQuery,
    useCreateCommentMutation
} = commentApiSlice;
