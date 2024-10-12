import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://l2ass4-fitness-tools-server.vercel.ap",
  }),
  tagTypes: ["Product"],
  endpoints: () => ({}),
});

export default baseApi;
