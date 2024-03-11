import { Stack } from "expo-router";
import { Providers } from "@/ui";
import { userMockData } from "./mocks";

export default function RootLayout() {
  return (
    <Providers user={userMockData}>
      <Stack>
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}
