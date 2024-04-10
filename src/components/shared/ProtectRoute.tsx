import { useEffect } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";

export default function ProtectRoute(props: { childern: JSX.Element }) {
  const { token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, []);

  return <>{props.childern}</>;
}
