import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const TRACKS_TAG = 'Tracks';

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => '/catalog/track/all/',
      providesTags: () => [TRACKS_TAG],
    }),
    getFavoritesPlaylist: builder.query({
      query: (token) => ({
        url: '/catalog/track/favorite/all/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [TRACKS_TAG],
    }),
    likeTrack: builder.mutation({
      query: ({ id, token }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [TRACKS_TAG],
    }),
    dislikeTrack: builder.mutation({
      query: (id, token) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [TRACKS_TAG],
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
  useLazyGetFavoritesPlaylistQuery,
} = tracksApi;
