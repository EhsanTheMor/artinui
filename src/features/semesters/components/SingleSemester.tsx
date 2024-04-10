import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type TProps = {
  title: string;
};

export default function SingleSemester(props: TProps) {
  return (
    <Card>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ padding: 1 }}
        alignItems="center"
      >
        <Typography>{props.title}</Typography>
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Card>
  );
}
