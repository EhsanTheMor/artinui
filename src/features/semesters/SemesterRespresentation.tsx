import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useSemesterData from "./api-hooks/useSemesterData";
import { useState } from "react";

export default function SemesterRespresentation() {
  const { error, isLoading, semesters, isSendingData, sendData } =
    useSemesterData();

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
          <Button onClick={() => sendData({ title })} variant="contained">
            اضافه کردن ترم
          </Button>
        </Stack>

        {isLoading ? (
          <>Is Loading...</>
        ) : (
          semesters.map((semester) => <Typography>{semester.title}</Typography>)
        )}
      </Stack>
    </>
  );
}
