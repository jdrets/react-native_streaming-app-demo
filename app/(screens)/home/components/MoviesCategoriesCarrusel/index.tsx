import { MoviesCategoriesProps } from "@/mocks/home";
import { View, Text, Image } from "@/ui";
import { useRouter } from "expo-router";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Carousel } from "react-native-snap-carousel";

export const MoviesCarrousel = ({ name, data }: MoviesCategoriesProps) => {
  const screenWidth = Dimensions.get("window").width;
  const router = useRouter();

  return (
    <View style={{ marginTop: 24 }}>
      <Text variant="titleMedium" style={{ paddingBottom: 8 }}>
        {name}
      </Text>
      <Carousel
        vertical={false}
        data={data}
        renderItem={(data) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "home/screens/movie",
                params: { id: data.item.id },
              })
            }
          >
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
          </TouchableOpacity>
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
