// app/newest/[id].jsx
import { View } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import NewestContent from '../../component/NewestContent';
import { COVER_IMAGES } from '../../component/coverImages';

export default function Newest() {
  const { id, title, coverKey, rating, author } = useLocalSearchParams();
  const bookCover = coverKey && COVER_IMAGES[coverKey] ? COVER_IMAGES[coverKey] : null;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Stack.Screen
        options={{
          title: title,
          headerBackButtonDisplayMode: 'minimal',
        }}
      />

      <NewestContent
        bookTitle={title}
        bookCover={bookCover}
        bookRating={rating}
        bookAuthor={author}
      />
    </View>
  );
}