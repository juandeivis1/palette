// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Palette} from '../../types';

export const palletsApi = createApi({
  reducerPath: 'palletsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://color-palette-api.kadikraman.vercel.app/palettes',
  }),
  endpoints: builder => ({
    getPalettes: builder.query<Palette[], void>({
      query: () => ({
        url: '',
        responseHandler: 'json',
      }),
    }),
  }),
});

export const {useGetPalettesQuery} = palletsApi;
