import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../constants/routes";

export default function MenuBarRepresentation() {
  return (
    <>
      <Stack
        direction="column"
        sx={{ height: "100%", justifyContent: "space-between" }}
      >
        <Typography>نام و نام خانوادگی</Typography>

        <Stack>
          {AppRoutes.map((route) => (
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
