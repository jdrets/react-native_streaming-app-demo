import { View } from "react-native";
import { Text, LayoutWrapper, Image, Icon } from "@/ui";
import { feedPosts } from "@/mocks/feedPosts";
import { useEffect, useState } from "react";
import Logo from "@/assets/logo.png";

export default function Page() {
  return (
    <LayoutWrapper>
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
        <Icon source="cast" size={24} />
      </View>
    </LayoutWrapper>
  );
}
