import axios from "axios";
import { CreateSemesterDto } from "../dtos/create-semester.dto";

export const fetchSemesterData = async () => {
  const res = await axios.get<CreateSemesterDto[]>(
    "http://localhost:3000/semester",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJlaHNhbjFAZ21haWwuY29tIiwiaWF0IjoxNzEyNTE4MDEyLCJleHAiOjE3MjAyOTQwMTJ9.YZ2EBRZj2DjGnRfAV-2mRpmal1gRCjUwydGg4mzXgTs",
      },
    }
  );

  return res.data;
};
