import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getProfile: build.query({
            query: () => ({
                url: "/users/profile",
                method: "GET",
            }),
            providesTags: [tagTypes?.profile],
        }),
        updateProfile: build.mutation({
            query: (data) => ({
                url: "/users",
                method: "PUT",
                body: data,
            }),
            invalidatesTags: [tagTypes?.profile],
        })
    }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;