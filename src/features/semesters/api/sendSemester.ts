import axios from "axios";
import { CreateSemesterDto } from "../dtos/create-semester.dto";

export const sendSemesterData = async (data: CreateSemesterDto) => {
  const res = await axios.post<CreateSemesterDto[]>(
    "http://localhost:3000/semester",
    {
      title: data.title,
    },
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJlaHNhbjFAZ21haWwuY29tIiwiaWF0IjoxNzEyNTE4MDEyLCJleHAiOjE3MjAyOTQwMTJ9.YZ2EBRZj2DjGnRfAV-2mRpmal1gRCjUwydGg4mzXgTs",
      },
    }
  );

  return res.data;
};
