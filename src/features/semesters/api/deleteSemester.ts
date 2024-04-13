import { adminApi } from "../../../interceptors/adminInterceptor";

export const delelteSemester = async (id: number) => {
  const res = await adminApi.delete(`/semester/${id}`);

  return res.data;
};
