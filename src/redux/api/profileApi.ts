import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getProfile: build.query({
            query: () => ({
                url: "/users/profile",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetProfileQuery } = profileApi;