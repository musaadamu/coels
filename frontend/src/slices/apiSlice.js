// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseQuery = fetchBaseQuery({ baseUrl: '' })

// export const apiSlice = createApi({
//     baseQuery,
//     tagTypes: ['User'],
//     endpoints: (builder) => ({})
// });

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Set the base URL to your backend API
// const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5000' })

// export const apiSlice = createApi({
//     baseQuery,
//     tagTypes: ['User'],
//     endpoints: (builder) => ({})
// });

// Frontend configuration (appSlice.js)
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://coels.vercel.app' 
  : 'http://localhost:5000';

const baseQuery = fetchBaseQuery({ baseUrl });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({})
});