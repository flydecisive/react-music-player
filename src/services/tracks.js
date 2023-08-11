import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const DATA_TAG =

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => '/catalog/track/all/',
    }),
    getFavoritesTracks: builder.query({
      query: (token) => ({
        url: '/catalog/track/favorite/all/',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    // addFavoritesTracks: builder.mutation({
    //   query: (token, id) => ({
    //     url: `/catalog/track/${id}/favorite/`,
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }),
    // }),
  }),
});

export const { useGetAllTracksQuery, useGetFavoritesTracksQuery } = tracksApi;
