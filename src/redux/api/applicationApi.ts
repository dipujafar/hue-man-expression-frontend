import { baseApi } from "./baseApi";

const applicationApi = baseApi.injectEndpoints({
    endpoints: (build) =>({
        sendApplication: build.mutation({
            query: (data) => ({
                url: "/applications",
                method: "POST",
                body: data,
            })
        })
    }) 
})

export const { useSendApplicationMutation } = applicationApi;