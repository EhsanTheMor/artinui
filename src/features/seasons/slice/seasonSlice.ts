import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { CreateSeasonResponseDto } from "../dtos/create-season-response";
import { CreateSeasonDto } from "../dtos/create-season.dto";
import { adminApi } from "../../../interceptors/adminInterceptor";

export type SemesterState = {
  isDeleting: boolean;
  loading: boolean;
  isSending: boolean;
  seasons: CreateSeasonResponseDto[];
};

const initialState: SemesterState = {
  isDeleting: false,
  isSending: false,
  loading: true,
  seasons: [],
};

const createSeasonSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const seasonSlice = createSeasonSlice({
  name: "season",
  initialState,
  reducers: (create) => ({
    addSeason: create.asyncThunk(
      async (season: CreateSeasonDto) => {
        const data = await adminApi.post(`/season`, season);

        return data.data;
      },
      {
        pending: (state) => {
          state.isSending = true;
        },
        rejected: (state) => {
          state.isSending = false;
        },
        fulfilled: (state, action) => {
          state.seasons.push(action.payload);
          state.isSending = false;
        },
      }
    ),
    deleteOneSeason: create.asyncThunk(
      async (id: number) => {
        await adminApi.delete(`/season/${id}`);

        return id;
      },
      {
        pending: (state) => {
          state.isDeleting = true;
        },
        rejected: (state) => {
          state.isDeleting = false;
        },
        fulfilled: (state, action) => {
          state.seasons = state.seasons.filter((i) => i.id !== action.payload);
          state.isDeleting = false;
        },
      }
    ),
    fetchSeasons: create.asyncThunk(
      async (semesterId: number | null) => {
        const data = await adminApi.get<CreateSeasonResponseDto[]>(
          `/season?semesterId=${semesterId}`
        );
        return data.data;
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state) => {
          state.loading = false;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.seasons = action.payload;
        },
      }
    ),
  }),
});

export const { addSeason, deleteOneSeason, fetchSeasons } = seasonSlice.actions;
export default seasonSlice.reducer;
