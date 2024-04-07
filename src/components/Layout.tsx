import { ReactNode } from "react";
import Providers from "./Providers";
import { Box, Card, Stack } from "@mui/material";
import MenuBar from "../features/admin/components/MenuBar";

export default function Layout(props: { children?: ReactNode }) {
  return <Providers>{props.children}</Providers>;
}
