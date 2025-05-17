import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const supportApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        sendSupportMessage: build.mutation({
            query: (data) => ({
                url: "/support-messages",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.support],
        }),
    }),
});

export const { useSendSupportMessageMutation } = supportApi;