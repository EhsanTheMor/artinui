import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../constants/routes";

export default function MenuBarRepresentation() {
  const adminRoutes = AppRoutes.find((i) => i.path === "/admin");

  return (
    <>
      <Stack
        direction="column"
        sx={{ height: "100%", justifyContent: "space-between" }}
      >
        <Typography>نام و نام خانوادگی</Typography>

        <Stack spacing={2}>
          {adminRoutes?.children.map((route) => (
            <Link key={route.name} to={route.path}>
              {route.name}
            </Link>
          ))}
        </Stack>

        <Button variant="outlined">خروج</Button>
      </Stack>
    </>
  );
}
