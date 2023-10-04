import { ReactNode } from "react";
import MuiThemeProvider from "../MuiThemeProvider";

export default function Providers(props: { children: ReactNode }) {
    return (
        <>
            <MuiThemeProvider>{props.children}</MuiThemeProvider>
        </>
    );
}
