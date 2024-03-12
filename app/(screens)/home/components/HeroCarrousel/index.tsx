import { heroData } from "@/mocks/home";
import { View } from "@/ui";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { Carousel, ParallaxImage } from "react-native-snap-carousel";

export const HeroCarrousel = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ marginTop: 24, marginLeft: -18 }}>
      <Carousel
        vertical={false}
        data={heroData}
        renderItem={(data, parallaxProps) => (
          <View
            style={{
              height: 200,
              width: screenWidth - 60,
              shadowColor: "#000",
            }}
          >
            <ParallaxImage
              source={{ uri: data.item.image }}
              containerStyle={{
                flex: 1,
                marginBottom: Platform.select({ ios: 0, android: 1 }),
                backgroundColor: "white",
              }}
              style={{
                ...StyleSheet.absoluteFillObject,
                resizeMode: "contain",
              }}
              parallaxFactor={0.4}
              {...parallaxProps}
            />
          </View>
        )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 60}
        activeSlideAlignment="center"
        inactiveSlideOpacity={1}
        inactiveSlideScale={0.9}
        firstItem={1}
        hasParallaxImages
        autoplay
        autoplayInterval={3000}
      />
    </View>
  );
};
