import { Box, Card, Stack } from "@mui/material";
import MenuBar from "../components/MenuBar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { fetchSemesters } from "../../semesters/slice/semesterSlice";
import { fetchSeasons } from "../../seasons/slice/seasonSlice";

export default function AdminRepresentation() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSemesters(null));
    dispatch(fetchSeasons(null));
  }, []);
  return (
    <Stack width="100%" direction="row" height="100vh">
      <Card sx={{ flex: 1, padding: 5 }}>
        <MenuBar />
      </Card>
      <Box flex={5} padding={5}>
        <Outlet />
      </Box>
    </Stack>
  );
}
