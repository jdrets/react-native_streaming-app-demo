import { Icon, View, Text, Image, useTheme, Button } from "@/ui";
import { moviesCategories } from "@/mocks/home";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

export default function Page() {
  const params = useLocalSearchParams();
  const movie = moviesCategories
    .flatMap((category) => category.data)
    .find((movie) => movie.id === +params.id);
  const theme = useTheme();
  const router = useRouter();

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <View style={{ position: "absolute", top: 48, left: 12, zIndex: 10 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon source="chevron-left" size={32} />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={{ uri: movie.image }}
          style={{
            width: "100%",
            height: 400,
            resizeMode: "cover",
            opacity: 0.8,
          }}
        />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["transparent", theme.colors.background]}
          style={{
            width: "100%",
            height: 400,
            position: "absolute",
            bottom: 0,
          }}
        />
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
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
            <Icon source="play" size={48} color="black" />
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 18,
          marginTop: -24,
        }}
      >
        <Text variant="headlineLarge" style={{ fontWeight: "600" }}>
          {movie.title}
        </Text>
        <Button
          icon="play"
          mode="contained"
          buttonColor="white"
          textColor="black"
          style={{ marginTop: 24 }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              color: "black",
              letterSpacing: 1,
              fontWeight: "600",
            }}
          >
            Ver ahora
          </Text>
        </Button>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <Button textColor="white" icon="plus" mode="text">
            Mi lista
          </Button>
          <Button textColor="white" icon="movie-open-play" mode="text">
            Trailer
          </Button>
        </View>
        <Text
          variant="bodyMedium"
          style={{ fontWeight: "300", letterSpacing: 1, paddingTop: 8 }}
        >
          {movie.description}
        </Text>

        <View style={{ height: 100 }} />
      </View>
    </View>
  );
}
