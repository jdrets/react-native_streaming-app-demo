import { View } from "react-native";
import { Image } from "@/ui";
import Logo from "@/assets/logo.png";
import { CastButton } from "./components/CastButton";

export const Header = () => {
  return (
    <View style={{ alignItems: "flex-end", marginTop: 8 }}>
      <View
        style={{ position: "absolute", width: "100%", alignItems: "center" }}
      >
        <Image
          source={Logo}
          style={{
            resizeMode: "stretch",
            height: 24,
            width: 100,
          }}
        />
      </View>
      <CastButton />
    </View>
  );
};
