import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { COVER_IMAGES } from './coverImages';

export default function NewestItem({ newest }) {
  const router = useRouter();
  const rating = parseFloat(newest.rating) || 0;
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: `/newest/${newest.id}`,
          params: { title: newest.title, coverKey: newest.coverKey, author: newest.author, rating: newest.rating },
        });
      }}
      style={({ pressed }) => [styles.card, { opacity: pressed ? 0.7 : 1 }]}
    >
      {newest.coverKey && COVER_IMAGES[newest.coverKey] && (
        <Image source={COVER_IMAGES[newest.coverKey]} style={styles.cover} resizeMode="cover" />
      )}
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Ionicons
            key={i}
            name={i <= fullStars ? "star" : i === fullStars + 1 && hasHalf ? "star-half" : "star-outline"}
            size={14}
            color={i <= fullStars || (i === fullStars + 1 && hasHalf) ? "#FFD700" : "#CCCCCC"}
          />
        ))}
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {newest.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
  },
  cover: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  stars: {
    flexDirection: "row",
    gap: 2,
    marginBottom: 6,
  },
  title: {
    fontSize: 16, // Heading2
    fontWeight: "600",
    color: "#131313",
  },
});
