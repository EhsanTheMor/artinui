import { useEffect, useState } from "react";
import { CreateSemesterDto } from "../dtos/create-semester.dto";
import axios from "axios";
import { sendSemesterData } from "../api/sendSemester";
import { fetchSemesterData } from "../api/fetchSemesters";

const useSemesterData = () => {
  const [semesters, setSemesters] = useState<CreateSemesterDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSendingData, setIsSendingData] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    fetchData();
  }, []);

  const sendData = async (data: CreateSemesterDto) => {
    try {
      setIsSendingData(true);
      await sendSemesterData(data);
      await fetchData();
    } catch (e) {
      setError(e);
    } finally {
      setIsSendingData(false);
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchSemesterData();
      setSemesters(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { semesters, isLoading, error, sendData, isSendingData };
};

export default useSemesterData;
