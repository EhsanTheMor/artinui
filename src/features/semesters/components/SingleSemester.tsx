import { Card, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { deleteOneSemester } from "../slice/semesterSlice";

type TProps = {
  title: string;
  id: number;
};

export default function SingleSemester(props: TProps) {
  const isDeleting = useAppSelector((state) => state.semester.isDeleting);
  const dispatch = useAppDispatch();
  const handleDelete = (id: number) => {
    dispatch(deleteOneSemester(id));
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
