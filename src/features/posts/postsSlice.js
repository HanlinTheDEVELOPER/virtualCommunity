import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

export const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState();

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      transformResponse: (responseData) => {
        const loadedPosts = responseData.map((post) => {
          if (!post?.date) post.date = new Date().toISOString();
          return post;
        });
        return postsAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: (result, arg, err) => [
        { type: "Post", id: "LIST" },
        ...result.ids.map((id) => ({ type: "User", id })),
      ],
    }),
  }),
});

export const { useGetPostsQuery } = postsApiSlice;

export const selectPostsResult = postsApiSlice.endpoints.getPosts.select();

export const selectPostsData = createSelector(
  selectPostsResult,
  (state) => state.data
);

export const { selectAll } = postsAdapter.getSelectors(
  (state) => selectPostsData(state) ?? initialState
);
