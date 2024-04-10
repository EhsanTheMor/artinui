import { useState } from "react";
import { signin } from "../api/signin";

const useSigninData = () => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleSignIn = async (email: string, password: string) => {
    try {
      setError(null);
      setIsSending(true);
      const token = await signin(email, password);
      return token;
    } catch (e) {
      setError(e);
    } finally {
      setIsSending(false);
    }
  };

  return { handleSignIn, isSending, error };
};

export default useSigninData;
