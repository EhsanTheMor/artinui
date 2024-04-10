import { Stack, StackProps, styled } from "@mui/material";

export const ColStack = styled((props: StackProps) => (
  <Stack direction="column" {...props} />
))({});
