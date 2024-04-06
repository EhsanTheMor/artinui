import { ReactNode } from "react";
import Providers from "./Providers";
import { Box, Card, Stack } from "@mui/material";
import MenuBar from "./shared/menubar/MenuBar";

export default function Layout(props: { children?: ReactNode }) {
  return (
    <Providers>
      <Stack width="100%" direction="row" height="100vh">
        <Card sx={{ flex: 1, padding: 5 }}>
          <MenuBar />
        </Card>
        <Box flex={5} padding={5}>
          {props.children}
        </Box>
      </Stack>
    </Providers>
  );
}
