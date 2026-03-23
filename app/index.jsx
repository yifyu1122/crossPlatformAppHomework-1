import { useState } from 'react';
import { Text, ScrollView, StyleSheet, View, FlatList } from 'react-native';
import BookItem from '../component/BookItem';
import NewestItem from "../component/NewestItem";

const initialBooks = [
  { id: '1', title: 'Fashinopolis', coverKey: 'fashinopolis', author: 'Dana Thomas' },
  { id: '2', title: 'chanel', coverKey: 'chanel', author: 'Patrick Mauriès' },
  { id: '3', title: 'Calligraphy', coverKey: 'calligraphy', author: 'June & Lucy' },
];
const initialNewestBooks = [
  { id: '1', title: 'Yves Saint Laurent', coverKey: 'ysl', rating: '4.0', author: 'Suzy Menkes' },
  { id: '2', title: 'The Book of Signs', coverKey: 'tbos', rating: '3.0', author: 'Rudolf Koch' },
  { id: '3', title: 'Stitched Up', coverKey: 'stitchedup', rating: '3.0', author: 'Tansy E. Hoskins' },
];

export default function HomeScreen() {
  const [books] = useState(initialBooks);
  const [newest] = useState(initialNewestBooks);

  // FlatList 的 renderItem 函數
  const renderBookItem = ({ item }) => {
    return <BookItem book={item} />;
  };
  const renderNewestItem = ({ item }) => {
    return <NewestItem newest={item} />;
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Popular Books</Text>
        <FlatList
          data={books}
          renderItem={renderBookItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        />
        <Text style={[styles.sectionTitle, { marginTop: 28 }]}>Newest</Text>
        <FlatList
          data={newest}
          renderItem={renderNewestItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#131313",
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  horizontalList: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});
