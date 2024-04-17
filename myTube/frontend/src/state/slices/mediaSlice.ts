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
    }),
});

export const { useGetMediaQuery } = mediaSlice;