import React from "react";
import { Image, StyleSheet, Pressable } from "react-native";
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/home-tab.png')}
              style={[styles.tabIconSize, { opacity: focused ? 1 : 0.5 }]}
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
              source={require('../../assets/images/wishlist-tab.png')}
              style={[styles.tabIconSize, { opacity: focused ? 1 : 0.5 }]}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="myBooks"
        options={{
          title: "My books",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/mybook-tab.png')}
              style={[styles.tabIconSize, { opacity: focused ? 1 : 0.5 }]}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconSize: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});