import { LayoutWrapper, View } from "@/ui";
import { Header } from "./components/Header";
import { HeroCarrousel } from "./components/HeroCarrousel";
import { MoviesCarrousel } from "./components/MoviesCategoriesCarrusel";
import { moviesCategories } from "@/mocks/home";
import { KeepWatching } from "./components/KeepWatching";

export default function Page() {
  const firstCategory = moviesCategories[0];
  const restCategories = moviesCategories.slice(1);

  return (
    <LayoutWrapper>
      <Header />
      <HeroCarrousel />

      <MoviesCarrousel
        name={firstCategory.name}
        data={firstCategory.data}
        key={`${firstCategory.name}_first`}
      />

      <KeepWatching />

      {restCategories.map((category, index) => (
        <MoviesCarrousel
          name={category.name}
          data={category.data}
          key={`${category.name}_${index}`}
        />
      ))}

      <View style={{ height: 100 }} />
    </LayoutWrapper>
  );
}
