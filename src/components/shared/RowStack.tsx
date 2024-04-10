import { Stack, StackProps, styled } from "@mui/material";

export const RowStack = styled((props: StackProps) => (
  <Stack direction="row" alignItems="center" {...props} />
))({});
