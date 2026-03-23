// app/book/[id].jsx
import { View } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import BookContent from '../../../component/BookContent';
import { COVER_IMAGES } from '../../../component/coverImages';

export default function Book() {
  const { id, title, coverKey, author } = useLocalSearchParams();
  const bookCover = coverKey && COVER_IMAGES[coverKey] ? COVER_IMAGES[coverKey] : null;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Stack.Screen
        options={{
          title: title,
          headerBackTitleVisible: false,
        }}
      />

      <BookContent
        bookTitle={title}
        bookCover={bookCover}
        bookAuthor={author}
      />
    </View>
  );
}
