import { CreateSemesterDto } from "../dtos/create-semester.dto";
import { adminApi } from "../../../interceptors/adminInterceptor";

export const sendSemesterData = async (data: CreateSemesterDto) => {
  const res = await adminApi.post<CreateSemesterDto[]>("/semester", {
    title: data.title,
  });

  return res.data;
};
