import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { CreateContentResponseDto } from "../dtos/create-content-response";
import { CreateContentDto } from "../dtos/create-content.dto";
import { adminApi } from "../../../interceptors/adminInterceptor";

export type ContentState = {
  isDeleting: boolean;
  loading: boolean;
  isSending: boolean;
  contents: CreateContentResponseDto[];
};

const initialState: ContentState = {
  isDeleting: false,
  isSending: false,
  loading: true,
  contents: [],
};

const createContentSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const contentSlice = createContentSlice({
  name: "content",
  initialState,
  reducers: (create) => ({
    addContent: create.asyncThunk(
      async (content: CreateContentDto) => {
        const data = await adminApi.post(`/content`, content);

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
          state.contents.push(action.payload);
          state.isSending = false;
        },
      }
    ),
    deleteOneContent: create.asyncThunk(
      async (id: number) => {
        await adminApi.delete(`/content/${id}`);

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
          state.contents = state.contents.filter(
            (i) => i.id !== action.payload
          );
          state.isDeleting = false;
        },
      }
    ),
    fetchContents: create.asyncThunk(
      async (tutorialId: number | null) => {
        const data = await adminApi.get<CreateContentResponseDto[]>(
          `/content?tutorialId=${tutorialId}`
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
          state.contents = action.payload;
        },
      }
    ),
  }),
});

export const { addContent, deleteOneContent, fetchContents } =
  contentSlice.actions;
export default contentSlice.reducer;
