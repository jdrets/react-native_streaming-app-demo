import React from "react";
import { createContext } from "@chakra-ui/react-utils";
import { PaperProvider } from "react-native-paper";
import { theme } from "./theme";

export const [UserContext, useUserContext] = createContext<UserProps>();


export const Providers = ({ children, user }: ProvidersProps) => {
  return (
    <PaperProvider theme={theme}>
      <UserContext value={user}>{children}</UserContext>
    </PaperProvider>
  );
};

interface ProvidersProps {
  children: React.ReactNode;
  user: UserProps;
}

export interface UserProps {
  username: string;
  email: string;
  avatar: string;
  nickname: string;
}
