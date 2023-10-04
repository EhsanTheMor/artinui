import { ReactNode } from "react";
import Providers from "./Providers";

export default function Layout(props: { children?: ReactNode }) {
    return (
        <Providers>
            <div>{props.children}</div>
        </Providers>
    );
}
