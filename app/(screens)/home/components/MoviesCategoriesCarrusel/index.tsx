import { View, Text, Image } from "@/ui";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { Carousel } from "react-native-snap-carousel";

export const MoviesCarrousel = ({
  name,
  data,
}: {
  name: string;
  data: { image: string }[];
}) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ marginTop: 24 }}>
      <Text variant="titleMedium" style={{ paddingBottom: 8 }}>
        {name}
      </Text>
      <Carousel
        vertical={false}
        data={data}
        renderItem={(data) => (
          <View
            style={{
              height: 150,
              width: 100,
            }}
          >
            <Image
              source={{ uri: data.item.image }}
              style={{
                ...StyleSheet.absoluteFillObject,
                resizeMode: "contain",
              }}
            />
          </View>
        )}
        sliderWidth={screenWidth}
        itemWidth={108}
        activeSlideAlignment="start"
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </View>
  );
};
