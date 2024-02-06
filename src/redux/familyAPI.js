import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const familyApi = createApi({
  reducerPath: "familyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getFamily: builder.query({
      query: (limit = "") => `family?${limit && `_limit=${limit}`}`,
    }),
    addFamily: builder.mutation({
      query: (body) => ({
        url: "family",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetFamilyQuery, useAddFamilyMutation } = familyApi;
