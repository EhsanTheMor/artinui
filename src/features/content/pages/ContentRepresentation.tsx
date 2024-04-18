import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { useState } from "react";
import { fetchTutorials } from "../../tutorials/slice/tutorialSlice";

export default function ContentRepresentation() {
  const dispatch = useAppDispatch();
  const { tutorials } = useAppSelector((state) => state.tutorial);

  const [title, setTitle] = useState("");
  const [tutorialId, setTutorialId] = useState<number | null>(null);

  const { contents, isSending, loading } = useAppSelector(
    (state) => state.content
  );

  const changeTutorialId = (id: number) => {
    if (!id) return;
    setTutorialId(id);
    dispatch(fetchTutorials(id));
  };

  const sendData = () => {};

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
            <FormLabel required htmlFor="semester-name"></FormLabel>
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
            {tutorials.map((i) => (
              <Button
                onClick={() => changeTutorialId(i.id)}
                variant={tutorialId == i.id ? "outlined" : "contained"}
              >
                {i.title}
              </Button>
            ))}
          </Stack>

          {/* {semesterId && (
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
          )} */}
        </Stack>
      </Stack>
    </>
  );
}
