import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setToken } from "../../../slices/AuthSlice";
import useSigninData from "../api-hooks/useSignInData";
import SigninPresentation from "./SigninPresentation";

export default function Signin() {
  const dispatch = useAppDispatch();
  const { handleSignIn, error, isSending } = useSigninData();

  const recievedToken = (token: string) => {
    dispatch(setToken(token));
  };

  const handleClick = async (email: string, password: string) => {
    const token = await handleSignIn(email, password);
    if (!token) return;
    recievedToken(token.access_token);
  };

  return (
    <SigninPresentation
      error={error}
      isSending={isSending}
      handleClick={handleClick}
    />
  );
}
