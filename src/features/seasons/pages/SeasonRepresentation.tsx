import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { useState } from "react";
import { addSeason, fetchSeasons } from "../slice/seasonSlice";
import SingleSeason from "../components/SingleSeason";

export default function SeasonRepresentation() {
  const dispatch = useAppDispatch();
  const { seasons, loading, isSending } = useAppSelector(
    (state) => state.season
  );
  const { semesters } = useAppSelector((state) => state.semester);

  const [semesterId, setSemesterId] = useState<number | null>(null);
  const [title, setTitle] = useState<string>();

  const changeSemester = (id: number) => {
    if (!id) return;
    setSemesterId(id);
    dispatch(fetchSeasons(id));
  };

  const sendData = () => {
    if (!semesterId || !title) return;
    dispatch(addSeason({ title: title, semesterId }));
    setTitle("");
  };

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
              اضافه کردن فصل:
            </FormLabel>
            <TextField
              id="semester-name"
              label="نام فصل"
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
            اضافه کردن فصل
          </Button>
        </Stack>

        <Stack direction="row">
          <Stack
            spacing={1}
            direction="column"
            sx={{ width: "10vw", marginTop: 10 }}
          >
            {semesters.map((i) => (
              <Button
                onClick={() => changeSemester(i.id)}
                variant={semesterId == i.id ? "outlined" : "contained"}
              >
                {i.title}
              </Button>
            ))}
          </Stack>

          {semesterId && (
            <>
              {!loading && (
                <Stack
                  spacing={1}
                  sx={{ width: "50%", margin: "auto", marginTop: 10 }}
                >
                  {seasons.map((season) => (
                    <SingleSeason
                      key={season.title}
                      title={season.title}
                      id={season.id}
                    />
                  ))}
                </Stack>
              )}
            </>
          )}
        </Stack>
      </Stack>
    </>
  );
}
