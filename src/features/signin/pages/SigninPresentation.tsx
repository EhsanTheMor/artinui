import {
  Alert,
  Button,
  Card,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import CenterStack from "../../../components/shared/CenterStack";
import { ColStack } from "../../../components/shared/ColStack";
import { useState } from "react";

type TProps = {
  error: any;
  isSending: boolean;
  handleClick: (email: string, password: string) => void;
};

export default function SigninPresentation(props: TProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <CenterStack height="100dvh">
      <Card
        sx={{ width: { xs: "95vw", md: "30vw" }, padding: 5 }}
        variant="outlined"
      >
        <Typography variant="h2" textAlign="center" sx={{ marginBottom: 5 }}>
          به آرتین AI خوش آمدید
        </Typography>
        <ColStack spacing={2}>
          <FormControl>
            <ColStack spacing={2}>
              <FormLabel>آدرس ایمیل</FormLabel>
              <TextField
                dir="ltr"
                label="Example@gmail.com"
                sx={{ flexGrow: 1 }}
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              ></TextField>
            </ColStack>
          </FormControl>
          <FormControl>
            <ColStack spacing={2}>
              <FormLabel>رمز عبور</FormLabel>
              <TextField
                dir="ltr"
                type="password"
                sx={{ flexGrow: 1 }}
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              ></TextField>
            </ColStack>
          </FormControl>
          <Button
            variant="outlined"
            onClick={() => props.handleClick(email, password)}
          >
            ورود
          </Button>
          {props.error && <Alert>{props.error.message}</Alert>}
        </ColStack>
      </Card>
    </CenterStack>
  );
}
