import { baseApi } from "./baseApi";

const subscriptionApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMySubscription: build.query({
            query: () => ({
                url: "/subscriptions/my?web=true",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetMySubscriptionQuery } = subscriptionApi;