import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import avatar from "../../assets/icons8-male-user-50.png";

export const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      transformResponse: (responseData) => {
        const loadedUsers = responseData.map((user) => {
          if (!user?.avatar) user.avatar = avatar;
          return user;
        });
        return usersAdapter.setAll(initialState, loadedUsers);
      },
      providesTags: (result, arg, err) => [
        { type: "User", id: "LIST" },
        ...result.ids.map((id) => ({ type: "User", id })),
      ],
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;

export const selectUserResult = usersApiSlice.endpoints.getUsers.select();

export const selectUserData = createSelector(
  selectUserResult,
  (state) => state.data
);

export const {
  selectIds: selectUsersIds,
  selectAll: selectAllUser,
  selectById: selectUserById,
} = usersAdapter.getSelectors((state) => selectUserData(state) ?? initialState);
