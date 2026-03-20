import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useRouter } from 'expo-router';
import { COVER_IMAGES } from './coverImages';

export default function DefaultItem({ book }) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: `/book/${book.id}`,
          params: { title: book.title, coverKey: book.coverKey, author: book.author },
        });
      }}
      style={({ pressed }) => [styles.card, { opacity: pressed ? 0.7 : 1 }]}
    >
      {book.coverKey && COVER_IMAGES[book.coverKey] && (
        <Image source={COVER_IMAGES[book.coverKey]} style={styles.cover} resizeMode="cover" />
      )}
      <Text style={styles.title} numberOfLines={2}>
        {book.title}
      </Text>
      <Text style={styles.author} numberOfLines={1}>
        {book.author}
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
  title: {
    fontSize: 16, // Heading2
    fontWeight: "600",
    color: "#131313",
    marginBottom: 4,
  },
  author: {
    fontSize: 12, // Body2
    color: "#666666",
  },
});
