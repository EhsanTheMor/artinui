import { adminApi } from "../../../interceptors/adminInterceptor";
import { CreateSemesterResponseDto } from "../dtos/create-semester-response.dto";

export const fetchSemesterData = async () => {
  const res = await adminApi.get<CreateSemesterResponseDto[]>("/semester");

  return res.data;
};
