import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const KEY_API = "43093131-6aaad8110d954fdeab2747c5d";
const URL_API = "https://pixabay.com/api/videos/";
interface PixabayResponse {
  total: number;
  totalHits: number;
  hits: Video[];
  // ... другие свойства
}

// Интерфейс для видео
interface Video {
  id: number;
  webformatURL: string;
  tags: string;
  user: string;
  // ... другие свойства
}

export const api = createApi({
  tagTypes: ["videos"],
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: URL_API,
  }),
  refetchOnMountOrArgChange:false,
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => ({
        url: "/",
        params: { key: KEY_API },
      }),
      transformResponse: (data: PixabayResponse) => {
        return data.hits;
      },
    }),
  }),
  
});

export const {
  useGetVideosQuery
} = api;
