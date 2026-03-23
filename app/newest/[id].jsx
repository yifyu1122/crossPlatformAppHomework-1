import { View, StyleSheet, ScrollView, Pressable, Text, Image } from "react-native";
import { useState } from "react"
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import NewestContent from "../../component/NewestContent";
import { COVER_IMAGES } from "../../component/coverImages";

export default function Newest() {
  const router = useRouter();
  const { id, title, coverKey, rating, author } = useLocalSearchParams();
  const bookCover = coverKey && COVER_IMAGES[coverKey] ? COVER_IMAGES[coverKey] : null;
  const [isSaved, setIsSaved] = useState(false);
  const bookmark = require("../../assets/icon/icon_nav_bookmark.png");
  const bookmarkActive = require("../../assets/icon/icon_nav_bookmark_actived.png");
  const back = require("../../assets/icon/icon_back.png")
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.topBar}>
        <Pressable onPress={() => router.back()}>
          <Image
            source={back}
            style={styles.backIcon}
          />
        </Pressable>

        <Pressable onPress={() => setIsSaved(!isSaved)}>
          <Image
            source={isSaved ? bookmarkActive : bookmark}
            style={styles.bookmarkIcon}
          />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <NewestContent
          bookTitle={title}
          bookCover={bookCover}
          bookRating={rating}
          bookAuthor={author}
          bookDescription="A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion."
          bookPrice="$46.99"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    color: "#131313",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  backIcon: {
      width: 24,
      height: 24,
      resizeMode: "contain",
    },
});