import { Stack } from "@mui/material";
import { ReactNode } from "react";

export default function CenterStack(props: {
  children: ReactNode;
  height: string;
}) {
  return (
    <Stack
      sx={{ height: props.height, width: "100%" }}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      {props.children}
    </Stack>
  );
}
