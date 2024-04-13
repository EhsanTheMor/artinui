import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import SingleSemester from "../components/SingleSemester";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { addSemester, fetchSemesters } from "../slice/semesterSlice";

export default function SemesterRespresentation() {
  const dispatch = useAppDispatch();
  const { semesters, loading, isSending } = useAppSelector(
    (state) => state.semester
  );

  const sendData = () => {
    dispatch(addSemester({ title: title }));
  };

  const [title, setTitle] = useState<string>("");

  return (
    <>
      <Stack>
        <Stack direction="row" spacing={1}>
          <FormControl
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <FormLabel required htmlFor="semester-name">
              اضافه کردن ترم:
            </FormLabel>
            <TextField
              id="semester-name"
              label="نام ترم"
              sx={{ flex: 1 }}
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </FormControl>
          <Button
            onClick={() => sendData()}
            variant="contained"
            disabled={isSending}
          >
            اضافه کردن ترم
          </Button>
        </Stack>

        {!loading && (
          <Stack
            spacing={1}
            sx={{ width: "50%", margin: "auto", marginTop: 10 }}
          >
            {semesters.map((semester) => (
              <SingleSemester
                key={semester.title}
                title={semester.title}
                id={semester.id}
              />
            ))}
          </Stack>
        )}
      </Stack>
    </>
  );
}
