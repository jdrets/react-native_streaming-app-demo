import { Tabs } from "expo-router";
import { Avatar, Icon, useUserContext } from "@/ui";
import { BlurView } from "expo-blur";

export default function Page() {
  const user = useUserContext();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          paddingTop: 10,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={50}
            style={{
              backgroundColor: "rgba(0, 0,0 , 0.5",
              width: "100%",
              height: "100%",
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Icon size={28} source="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Icon size={28} source="magnify" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Avatar.Image
              source={{ uri: user.avatar }}
              size={32}
              style={{ opacity: focused ? 1 : 0.6 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
