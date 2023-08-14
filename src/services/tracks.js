import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const DATA_TAG = {type: 'Favorites', }

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => '/catalog/track/all/',
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  useGetFavoritesTracksQuery,
  useAddFavoritesTracksMutation,
} = tracksApi;
