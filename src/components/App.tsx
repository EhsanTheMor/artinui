import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../constants/routes";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useEffect, useState } from "react";
import { setToken } from "../slices/AuthSlice";
import ProtectRoute from "./shared/ProtectRoute";

export default function App() {
  const [readyToRender, setReadyToRender] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      dispatch(setToken(token));
    }

    setReadyToRender(true);
  }, []);

  return (
    <>
      {readyToRender ? (
        <Routes>
          {AppRoutes.map((route) => (
            <Route
              path={`${route.path}`}
              element={
                route.isGuarded ? (
                  <ProtectRoute childern={route.component} />
                ) : (
                  route.component
                )
              }
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
      ) : (
        <div>در حال آماده سازی</div>
      )}
    </>
  );
}
