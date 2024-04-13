import { Card, IconButton, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { deleteOneTutorial } from "../slice/tutorialSlice";
import DeleteIcon from "@mui/icons-material/Delete";

type TProps = {
  id: number;
  title: string;
};

export default function SingleTutorial(props: TProps) {
  const isDeleting = useAppSelector((state) => state.tutorial.isDeleting);
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteOneTutorial(id));
  };

  return (
    <Card>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ padding: 1 }}
        alignItems="center"
      >
        <Typography>{props.title}</Typography>
        <IconButton
          onClick={() => handleDelete(props.id)}
          color="error"
          disabled={isDeleting}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Card>
  );
}
