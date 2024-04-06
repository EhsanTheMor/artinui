import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../constants/routes";

export default function App() {
  return (
    <Routes>
      {AppRoutes.map((route) => (
        <Route
          path={`${route.path}`}
          Component={route.component}
          key={route.name}
        />
      ))}
    </Routes>
  );
}
