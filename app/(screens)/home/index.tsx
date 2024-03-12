import { LayoutWrapper, View } from "@/ui";
import { Header } from "./components/Header";
import { HeroCarrousel } from "./components/HeroCarrousel";
import { MoviesCarrousel } from "./components/MoviesCategoriesCarrusel";
import { moviesCategories } from "@/mocks/home";

export default function Page() {
  return (
    <LayoutWrapper>
      <Header />
      <HeroCarrousel />

      {moviesCategories.map((category, index) => (
        <MoviesCarrousel
          name={category.name}
          data={category.data}
          key={`${category}_${index}`}
        />
      ))}

      <View style={{ height: 100 }} />
    </LayoutWrapper>
  );
}
