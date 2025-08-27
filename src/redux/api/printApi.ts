import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const printApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPrints: build.query({
            query: () => ({
                url: "/prints",
                method: "GET",
            }),
            providesTags: [tagTypes.print],
        }),
        updatePrintData: build.mutation({
            query: (id) => ({
                url: `/prints/${id}`,
                method: "PATCH",
            }),
            invalidatesTags: [tagTypes.print],
        }),

    }),
});

export const { useGetPrintsQuery, useUpdatePrintDataMutation } = printApi;