import axios from "axios";

export const signin = async (email: string, password: string) => {
  const res = await axios.post<{ access_token: string }>(
    "http://localhost:3000/auth/signin",
    {
      email,
      password,
    }
  );

  return res.data;
};
