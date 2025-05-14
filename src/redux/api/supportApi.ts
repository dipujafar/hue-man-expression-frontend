import { baseApi } from "./baseApi";

const supportApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        sendSupportMessage: build.mutation({
            query: (data) => ({
                url: "/support",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["support"],
        }),
    }),
});

export const { useSendSupportMessageMutation } = supportApi;