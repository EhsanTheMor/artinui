import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { CreateTutorialResponseDto } from "../dtos/create-tutorial-response.dto";
import { CreateTutorialDto } from "../dtos/create-tutorial.dto";
import { adminApi } from "../../../interceptors/adminInterceptor";

export type TutorialState = {
  isDeleting: boolean;
  loading: boolean;
  isSending: boolean;
  tutorials: CreateTutorialResponseDto[];
};

const initialState: TutorialState = {
  isDeleting: false,
  isSending: false,
  loading: true,
  tutorials: [],
};

const createTutorialSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const tutorialSlice = createTutorialSlice({
  name: "tutorial",
  initialState,
  reducers: (create) => ({
    addTutorial: create.asyncThunk(
      async (tutorial: CreateTutorialDto) => {
        const data = await adminApi.post(`/tutorial`, tutorial);

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
          state.tutorials.push(action.payload);
          state.isSending = false;
        },
      }
    ),
    deleteOneTutorial: create.asyncThunk(
      async (id: number) => {
        await adminApi.delete(`/tutorial/${id}`);

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
          state.tutorials = state.tutorials.filter(
            (i) => i.id !== action.payload
          );
          state.isDeleting = false;
        },
      }
    ),
    fetchTutorials: create.asyncThunk(
      async (seasonId: number | null) => {
        const data = await adminApi.get<CreateTutorialResponseDto[]>(
          `/tutorial?seasonId=${seasonId}`
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
          state.tutorials = action.payload;
        },
      }
    ),
  }),
});

export const { addTutorial, deleteOneTutorial, fetchTutorials } =
  tutorialSlice.actions;
export default tutorialSlice.reducer;
