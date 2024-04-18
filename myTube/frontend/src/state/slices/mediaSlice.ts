import { MEDIA_URL } from "../../constants";
import { apiSlice } from "./apiSlice";

export const mediaSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMedia: builder.query({
            query: () => ({
                url: `${MEDIA_URL}/getmedias`,
                method: "GET",
            }),
            providesTags: ["Media"],
        }),
        getMediaById: builder.query({
            query: (id) => ({
                url: `${MEDIA_URL}/getmedia/${id}`,
                method: "GET",
            }),
            providesTags: ["Media"],
        }),
        postMedia: builder.mutation({
            query: (media) => ({
                url: `${MEDIA_URL}/addmedias`,
                method: "POST",
                body: media,
            }),
            invalidatesTags: ["Media"],
        }),
    }),
});

export const { useGetMediaQuery, useGetMediaByIdQuery, usePostMediaMutation } = mediaSlice;