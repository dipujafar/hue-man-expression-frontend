import { baseApi } from "./baseApi";

const cardPrintApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        printCard: build.mutation({
            query: (id) => ({
                url: `/prints/${id}`,
                method: "PATCH",    
            })
        })
    }),
});

export const { usePrintCardMutation } = cardPrintApi;