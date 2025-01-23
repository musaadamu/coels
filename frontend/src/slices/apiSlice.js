// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseQuery = fetchBaseQuery({ baseUrl: '' })

// export const apiSlice = createApi({
//     baseQuery,
//     tagTypes: ['User'],
//     endpoints: (builder) => ({})
// });

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Set the base URL to your backend API
const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.REACT_APP_API_URL || 'https://coels-b7uynpbko-musa-adamus-projects.vercel.app/' })

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({})
});