import "react-native-gesture-handler";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function MenuButton() {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={styles.headerButton}
    >
      <Image
        source={require("../assets/icon/icon_menu.png")}
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
        source={require("../assets/icon/icon_search.png")}
        style={styles.headerIcon}
        resizeMode="contain"
      />
    </Pressable>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Image
          source={require("../assets/user_image/img_avatar.png")}
          style={styles.avatar}
          resizeMode="cover"
        />
        <Text style={styles.drawerName}>May</Text>
      </View>

      <DrawerItem
        label="Home"
        icon={() => (
          <Image
            source={require("../assets/icon/icon_home.png")}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        )}
        onPress={() => props.navigation.navigate("(tabs)", { screen: "index" })}
      />
      <DrawerItem
        label="Account"
        icon={() => (
          <Image
            source={require("../assets/icon/icon_account.png")}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        )}
        onPress={() => {}}
      />
      <DrawerItem
        label="Setting"
        icon={() => (
          <Image
            source={require("../assets/icon/icon_settings.png")}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        )}
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="(tabs)" />
      </Drawer>
    </GestureHandlerRootView>
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
  drawerContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 12,
  },
  drawerName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#131313",
  },
});
