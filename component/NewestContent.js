import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function NewestContent({
  bookTitle,
  bookCover,
  bookRating,
  bookAuthor,
  bookDescription,
  bookPrice,
}) {
  const filledStar = require("../assets/icon/icon_star_filled.png");
  const emptyStar = require("../assets/icon/icon_star_empty.png");
  const ratingNumber = parseFloat(bookRating) || 0;
  const fullStars = Math.floor(ratingNumber);
  const totalStars = 5;
  return (
    <View style={styles.container}>
      {bookCover && <Image source={bookCover} style={styles.cover} />}

      <Text style={styles.title}>{bookTitle}</Text>
      <Text style={styles.author}>{bookAuthor}</Text>

      <View style={styles.ratingRow}>
        <View style={styles.starRow}>
          {[...Array(totalStars)].map((_, index) => (
            <Image
              key={index}
              source={index < fullStars ? filledStar : emptyStar}
              style={styles.starIcon}
            />
          ))}
        </View>
        <Text style={styles.ratingText}>{bookRating} / 5.0</Text>
      </View>

      <Text style={styles.description}>{bookDescription}</Text>

      <Pressable style={styles.buyButton}>
        <Text style={styles.buyButtonText}>BUY NOW FOR {bookPrice}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 10,
  },
  cover: {
    width: 210,
    height: 300,
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#131313",
    marginBottom: 8,
    textAlign: "center",
  },
  author: {
    fontSize: 16,
    color: "#9A9A9A",
    marginBottom: 14,
    textAlign: "center",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  starRow: {
    flexDirection: "row",
    marginRight: 8,
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 2,
  },
  ratingText: {
    fontSize: 15,
    color: "#666666",
  },
  description: {
    fontSize: 15,
    color: "#333333",
    lineHeight: 28,
    textAlign: "center",
    marginBottom: 28,
    paddingHorizontal: 8,
  },
  buyButton: {
    backgroundColor: "#6200EE",
    paddingHorizontal: 26,
    paddingVertical: 12,
    borderRadius: 6,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});