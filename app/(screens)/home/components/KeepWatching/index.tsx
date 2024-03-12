import { keepWatchingMock } from "@/mocks/home";
import { View, Image, Text, Icon } from "@/ui";
import { Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { ProgressBar } from "react-native-paper";

export const KeepWatching = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ marginTop: 24 }}>
      <Text variant="titleMedium" style={{ paddingBottom: 8 }}>Continuar viendo</Text>
      <Carousel
        vertical={false}
        data={keepWatchingMock}
        renderItem={(data) => (
          <View
            style={{
              width: screenWidth - 60,
            }}
          >
            <View
              style={{
                height: 185,
                shadowColor: "#000",
                position: "relative",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  width: "100%",
                  height: " 100%",
                  backgroundColor: "rgba(0,0,0,0.2)",
                  zIndex: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 8,
                    borderRadius: 50,
                  }}
                >
                  <Icon source="play" size={32} color="black" />
                </View>
              </View>
              <Image
                source={{ uri: data.item.image }}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: 12 }}
            >
              <ProgressBar progress={Math.random() * (1 - 0) + 0} />
              <Text
                variant="bodyMedium"
                style={{ fontWeight: "600", paddingTop: 8 }}
              >
                {data.item.title}
              </Text>
              <Text variant="bodySmall" style={{ paddingTop: 4 }}>
                {data.item.cap}
              </Text>
            </View>
          </View>
        )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 50}
        activeSlideAlignment="start"
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </View>
  );
};
