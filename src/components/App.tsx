import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../constants/routes";

export default function App() {
  return (
    <Routes>
      {AppRoutes.map((route) => (
        <Route
          path={`${route.path}`}
          element={route.component}
          key={route.name}
        >
          {route?.children &&
            route.children.map((sub) => (
              <Route
                path={`${sub.path}`}
                element={sub.component}
                key={sub.name}
              ></Route>
            ))}
        </Route>
      ))}
    </Routes>
  );
}
