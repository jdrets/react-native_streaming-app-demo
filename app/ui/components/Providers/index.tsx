import React, { useState } from "react";
import { createContext } from "@chakra-ui/react-utils";
import { PaperProvider } from "react-native-paper";
import { theme } from "./theme";
import { FeedPost, feedPosts } from "@/mocks/feedPosts";

export const [UserContext, useUserContext] = createContext<UserProps>();
export const [LayoutContext, useLayoutContext] =
  createContext<LayoutContextProps>();

export const Providers = ({ children, user }: ProvidersProps) => {
  const [layoutProps, setLayoutProps] = useState<
    Omit<LayoutContextProps, "setLayoutProps">
  >({
    loadingBar: false,
    feedPosts,
  });

  return (
    <PaperProvider theme={theme}>
      <LayoutContext value={{ ...layoutProps, setLayoutProps }}>
        <UserContext value={user}>{children}</UserContext>
      </LayoutContext>
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

export interface LayoutContextProps {
  loadingBar: boolean;
  feedPosts: FeedPost[];
  setLayoutProps: (props: LayoutContextProps) => void;
}
