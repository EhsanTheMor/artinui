import {
  asyncThunkCreator,
  buildCreateSlice,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { CreateSemesterResponseDto } from "../dtos/create-semester-response.dto";
import { adminApi } from "../../../interceptors/adminInterceptor";
import { CreateSemesterDto } from "../dtos/create-semester.dto";

export type SemesterState = {
  isDeleting: boolean;
  loading: boolean;
  isSending: boolean;
  semesters: CreateSemesterResponseDto[];
};

const initialState: SemesterState = {
  isDeleting: false,
  isSending: false,
  loading: true,
  semesters: [],
};

const createSemesterSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const semesterSlice = createSemesterSlice({
  name: "semester",
  initialState,
  reducers: (create) => ({
    addSemester: create.asyncThunk(
      async (semester: CreateSemesterDto) => {
        const data = await adminApi.post(`/semester`, semester);

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
          state.semesters.push(action.payload);
          state.isSending = false;
        },
      }
    ),
    deleteOneSemester: create.asyncThunk(
      async (id: number) => {
        await adminApi.delete(`/semester/${id}`);

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
          state.semesters = state.semesters.filter(
            (i) => i.id !== action.payload
          );
          state.isDeleting = false;
        },
      }
    ),
    fetchSemesters: create.asyncThunk(
      async () => {
        const data = await adminApi.get<CreateSemesterResponseDto[]>(
          "/semester"
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
          state.semesters = action.payload;
        },
      }
    ),
  }),
});

export const { fetchSemesters, deleteOneSemester, addSemester } =
  semesterSlice.actions;
export default semesterSlice.reducer;
