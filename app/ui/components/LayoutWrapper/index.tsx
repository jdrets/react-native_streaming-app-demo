import { ReactNode } from "react";
import { RefreshControl, SafeAreaView, ScrollView, View } from "react-native";
import { theme } from "../Providers/theme";
import { useHeaderHeight } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";

export const LayoutWrapper = ({
  children,
  onRefresh,
  refreshing,
}: {
  children: ReactNode;
  refreshing?: boolean;
  onRefresh?: () => void;
}) => {
  const headerHeight = useHeaderHeight();

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#212D40", "#1E1F1D"]}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
        refreshControl={
          onRefresh ? (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={theme.colors.primary}
              progressViewOffset={headerHeight}
            />
          ) : undefined
        }
      >
        <SafeAreaView
          style={{ marginHorizontal: 18, marginTop: headerHeight + 12 }}
        >
          {children}
        </SafeAreaView>
        <View style={{ height: 48 }} />
      </ScrollView>
    </LinearGradient>
  );
};
