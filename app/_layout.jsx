import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#131313",
        headerTitle: "",
        headerLeft: () => (
          <Pressable onPress={() => {}} style={styles.headerButton}>
            <Image source={require("../assets/icon/icon_menu.png")} style={styles.headerIcon} resizeMode="contain" />
          </Pressable>
        ),
        headerRight: () => (
          <Pressable onPress={() => {}} style={styles.headerButton}>
            <Image source={require("../assets/icon/icon_search.png")} style={styles.headerIcon} resizeMode="contain" />
          </Pressable>
        ),
        tabBarActiveTintColor: "#6200EE",
        tabBarInactiveTintColor: "#666666",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/icon/icon_home_actived.png")
                  : require("../assets/icon/icon_home.png")
              }
              style={styles.headerIcon}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/icon/icon_bookmark_actived.png")
                  : require("../assets/icon/icon_bookmark.png")
              }
              style={styles.headerIcon}
              resizeMode="contain"
            />
          ),
          tabBarButton: (props) => (
            <Pressable {...props} onPress={() => {}} style={props.style}>
              {props.children}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="book/[id]"
        options={{ href: null }}
      />
      <Tabs.Screen
        name="newest/[id]"
        options={{ href: null }}
      />
      <Tabs.Screen
        name="mybooks"
        options={{
          title: "My books",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/icon/icon_mybook_actived.png")
                  : require("../assets/icon/icon_mybook.png")
              }
              style={styles.headerIcon}
              resizeMode="contain"
            />
          ),
          tabBarButton: (props) => (
            <Pressable {...props} onPress={() => {}} style={props.style}>
              {props.children}
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    padding: 12,
    marginHorizontal: 4,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
});
