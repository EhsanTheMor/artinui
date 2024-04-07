import { Box, Card, Stack } from "@mui/material";
import MenuBar from "../components/MenuBar";
import { Outlet } from "react-router-dom";

export default function AdminRepresentation() {
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
