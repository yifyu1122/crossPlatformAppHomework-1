import { Text, ScrollView, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}> {/* no scrollbar */}
        <Text style={styles.title}>Popular Books</Text>
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>這裡之後放熱門書籍列表</Text>
        </View>
          <Text style={styles.title}>Newest</Text>
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>這裡之後放最新書籍列表</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#131313",
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  placeholderBox: {
    height: 180,
    backgroundColor: "#fff",
    marginHorizontal: 24,
    marginBottom: 28,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 14,
    color: "#666666",
  },
});

