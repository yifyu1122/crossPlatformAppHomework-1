import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function NewestContent({ bookTitle, bookCover, bookRating, bookAuthor }) {
  return (
    <View style={styles.container}>
      {bookCover && <Image source={bookCover} style={styles.cover} resizeMode="cover" />}
      <Text style={styles.title}>{bookTitle}</Text>
      <Text style={styles.rating}>{bookRating} ★</Text>
      <Text style={styles.author}>{bookAuthor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 12 },
  cover: { width: 140, height: 200, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: "600" },
  rating: { fontSize: 14, color: "#f59e0b" },
  author: { fontSize: 14, color: "#666" },
});