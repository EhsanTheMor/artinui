import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { addTutorial, fetchTutorials } from "../slice/tutorialSlice";
import SingleTutorial from "../components/SingleTutorial";

export default function TutorialRepresentation() {
  const dispatch = useAppDispatch();
  const { tutorials, loading, isSending } = useAppSelector(
    (state) => state.tutorial
  );

  const { seasons } = useAppSelector((state) => state.season);

  const [seasonId, setSeasonId] = useState<number | null>(null);
  const [title, setTitle] = useState<string>();

  const changeSeason = (id: number) => {
    if (!id) return;
    setSeasonId(id);
    dispatch(fetchTutorials(id));
  };

  const sendData = () => {
    if (!seasonId || !title) return;
    dispatch(addTutorial({ title: title, seasonId }));
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
              اضافه کردن درس:
            </FormLabel>
            <TextField
              id="semester-name"
              label="نام درس"
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
            اضافه کردن درس
          </Button>
        </Stack>

        <Stack direction="row">
          <Stack
            spacing={1}
            direction="column"
            sx={{ width: "10vw", marginTop: 10 }}
          >
            {seasons.map((i) => (
              <Button
                onClick={() => changeSeason(i.id)}
                variant={seasonId == i.id ? "outlined" : "contained"}
              >
                {i.title}
              </Button>
            ))}
          </Stack>

          {seasonId && (
            <>
              {!loading && (
                <Stack
                  spacing={1}
                  sx={{ width: "50%", margin: "auto", marginTop: 10 }}
                >
                  {tutorials.map((season) => (
                    <SingleTutorial
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
