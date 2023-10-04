import { Theme, ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

export type ModeType = "dark" | "light";

const colorToken = (mode: ModeType) => ({
    ...(mode === "light"
        ? {
              redAccent: {
                  100: "#fdccd9",
                  200: "#fa9ab4",
                  300: "#f8678e",
                  400: "#f53569",
                  500: "#f30243",
                  600: "#c20236",
                  700: "#920128",
                  800: "#61011b",
                  900: "#31000d",
              },
              cyanAccent: {
                  100: "#ccfdfb",
                  200: "#99fbf6",
                  300: "#67f8f2",
                  400: "#34f6ed",
                  500: "#01f4e9",
                  600: "#01c3ba",
                  700: "#01928c",
                  800: "#00625d",
                  900: "#00312f",
              },
              blueAccent: {
                  100: "#d0d2df",
                  200: "#a1a6be",
                  300: "#71799e",
                  400: "#424d7d",
                  500: "#13205d",
                  600: "#0f1a4a",
                  700: "#0b1338",
                  800: "#080d25",
                  900: "#040613",
              },
              indigoAccent: {
                  100: "#cee2e9",
                  200: "#9ec6d3",
                  300: "#6da9be",
                  400: "#3d8da8",
                  500: "#0c7092",
                  600: "#0a5a75",
                  700: "#074358",
                  800: "#052d3a",
                  900: "#02161d",
              },
          }
        : {
              redAccent: {
                  100: "#31000d",
                  200: "#61011b",
                  300: "#920128",
                  400: "#c20236",
                  500: "#f30243",
                  600: "#f53569",
                  700: "#f8678e",
                  800: "#fa9ab4",
                  900: "#fdccd9",
              },
              cyanAccent: {
                  100: "#00312f",
                  200: "#00625d",
                  300: "#01928c",
                  400: "#01c3ba",
                  500: "#01f4e9",
                  600: "#34f6ed",
                  700: "#67f8f2",
                  800: "#99fbf6",
                  900: "#ccfdfb",
              },
              blueAccent: {
                  100: "#040613",
                  200: "#080d25",
                  300: "#0b1338",
                  400: "#0f1a4a",
                  500: "#13205d",
                  600: "#424d7d",
                  700: "#71799e",
                  800: "#a1a6be",
                  900: "#d0d2df",
              },
              indigoAccent: {
                  100: "#02161d",
                  200: "#052d3a",
                  300: "#074358",
                  400: "#0a5a75",
                  500: "#0c7092",
                  600: "#3d8da8",
                  700: "#6da9be",
                  800: "#9ec6d3",
                  900: "#cee2e9",
              },
          }),
});

const themeSettings = (mode: ModeType) => {
    const colors = colorToken(mode);

    const theme: ThemeOptions = {
        palette: {
            mode: mode,
            ...(mode === "light"
                ? {
                      primary: {
                          main: colors.blueAccent[500],
                      },
                      secondary: {
                          main: colors.cyanAccent[500],
                      },
                      neutral: {
                          dark: colors.indigoAccent[700],
                          main: colors.indigoAccent[500],
                          light: colors.indigoAccent[100],
                      },
                      background: {
                          default: colors.indigoAccent[300],
                      },
                  }
                : {
                      primary: {
                          main: colors.blueAccent[100],
                      },
                      secondary: {
                          main: colors.cyanAccent[500],
                      },
                      neutral: {
                          dark: colors.indigoAccent[700],
                          main: colors.indigoAccent[500],
                          light: colors.indigoAccent[100],
                      },
                      background: {
                          default: colors.indigoAccent[300],
                      },
                  }),
        },
        typography: {
            fontFamily: ["Sans-sarif"].join(","),
            fontSize: 14,
            h1: {
                fontFamily: ["Sans-sarif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Sans-sarif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Sans-sarif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Sans-sarif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Sans-sarif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Sans-sarif"].join(","),
                fontSize: 14,
            },
            body1: {
                fontFamily: ["Sans-sarif"].join(","),
                fontSize: 14,
            },
            body2: {
                fontFamily: ["Sans-sarif"].join(","),
                fontSize: 12,
            },
        },
    };

    return theme;
};

// Created a hook for generating theme, colors, and toggleColorMode function.
const useMode = (): [
    Theme,
    { toggleColorMode: () => void },
    ReturnType<typeof colorToken>
] => {
    const [mode, setMode] = useState<ModeType>("light");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    const colors = useMemo(() => colorToken(mode), [mode]);

    return [theme, colorMode, colors];
};

// Created context to provide colors object and toggle mode function
const ColorModeContext = createContext({
    toggleColorMode: () => {},
    colors: {},
});

// Created a custom hook for easy accessing the context
export const useColorModeContext = () => useContext(ColorModeContext);

// Exported a provider for both theme, and colors with toggleMode function
export default function ColorModeContextProvider(props: {
    children: ReactNode;
}) {
    const [theme, colorMode, colors] = useMode();

    return (
        <ColorModeContext.Provider
            value={{ toggleColorMode: colorMode.toggleColorMode, colors }}
        >
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
}
