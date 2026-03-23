import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { Tabs, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

function MenuButton() {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={styles.headerButton}
    >
      <Image
        source={require("../../assets/icon/icon_menu.png")}
        style={styles.headerIcon}
        resizeMode="contain"
      />
    </Pressable>
  );
}

function SearchButton() {
  return (
    <Pressable style={styles.headerButton}>
      <Image
        source={require("../../assets/icon/icon_search.png")}
        style={styles.headerIcon}
        resizeMode="contain"
      />
    </Pressable>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#fff",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerLeft: () => <MenuButton />,
        headerRight: () => <SearchButton />,
        tabBarActiveTintColor: "#6200EE",
        tabBarInactiveTintColor: "#666666",
        tabBarItemStyle: { flex: 1 },
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
                  ? require("../../assets/icon/icon_home_actived.png")
                  : require("../../assets/icon/icon_home.png")
              }
              style={styles.headerIcon}
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
                  ? require("../../assets/icon/icon_bookmark_actived.png")
                  : require("../../assets/icon/icon_bookmark.png")
              }
              style={styles.headerIcon}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="mybooks"
        options={{
          title: "My books",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icon/icon_mybook_actived.png")
                  : require("../../assets/icon/icon_mybook.png")
              }
              style={styles.headerIcon}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="book/[id]"
        options={{
        href: null,
        headerShown: false,
        }}
      />
      <Tabs.Screen
        name="newest/[id]"
        options={{
          href: null,
          headerShown: false,
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
