import { CreateSemesterDto } from "../dtos/create-semester.dto";
import { adminApi } from "../../../interceptors/adminInterceptor";

export const fetchSemesterData = async () => {
  const res = await adminApi.get<CreateSemesterDto[]>("/semester");

  return res.data;
};
