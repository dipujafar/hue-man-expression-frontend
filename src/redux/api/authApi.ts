import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.auth],
    }),
    login: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.auth],
    }),
    verifyOtp: build.mutation({
      query: (data) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.auth],
    }),
    forgetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/send-otp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.auth],
    }),
    resendOtp: build.mutation({
      query: (data) => ({
        url: "/otp/resend-otp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.auth],
    }),
    reSetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/reset-forgotten-password",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.auth],
    }),
    getAllUser: build.query({
      query: (data) => ({
        url: "/users",
        method: "GET",
        params: data,
      }),
      providesTags: [tagTypes.user],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/create-new-password",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.auth],
    })
  }),
});

export const {
  useCreateUserMutation,
  useLoginMutation,
  useVerifyOtpMutation,
  useForgetPasswordMutation,
  useReSetPasswordMutation,
  useResendOtpMutation,
  useGetAllUserQuery,
  useChangePasswordMutation
} = authApi;
