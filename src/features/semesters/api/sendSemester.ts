import { CreateSemesterDto } from "../dtos/create-semester.dto";
import { adminApi } from "../../../interceptors/adminInterceptor";
import { CreateSemesterResponseDto } from "../dtos/create-semester-response.dto";

export const sendSemesterData = async (data: CreateSemesterDto) => {
  const res = await adminApi.post<CreateSemesterResponseDto[]>("/semester", {
    title: data.title,
  });

  return res.data;
};
