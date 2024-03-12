import { ActivityIndicator } from "./ui";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
export default function Page() {
  const router = useRouter();
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  const completeLoad = appIsReady && fontsLoaded;

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  useEffect(() => {
    if (completeLoad) {
      router.replace("/(screens)/home");
    }
  }, [completeLoad]);

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#212D40", "#1E1F1D"]}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!completeLoad && <ActivityIndicator animating size="large" />}
    </LinearGradient>
  );
}
