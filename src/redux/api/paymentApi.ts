import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createPayment: build.mutation({
            query: (data) => ({
                url: "/payments/create-session",
                method: "POST",
                body: data,
            }),
        })
    }),
})


export const {useCreatePaymentMutation} = paymentApi;