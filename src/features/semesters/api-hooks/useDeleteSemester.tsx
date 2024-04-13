import { useState } from "react";
import { delelteSemester } from "../api/deleteSemester";

export default function useDeleteSemester() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleDelete = (id: number) => {
    try {
      setIsDeleting(true);
      delelteSemester(id);
    } catch (error) {
      setError(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return { isDeleting, handleDelete };
}
