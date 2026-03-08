import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>111216031 尤依帆</Text>
        <Text style={styles.subtitle}>從靈感萌發到集合完成</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        {/* Quick Action */}
        <TouchableOpacity style={styles.quickButton}>
          <Text style={styles.quickButtonText}>＋ 紀錄</Text>
        </TouchableOpacity>

        {/* Stats Cards */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardNumber}>12</Text>
            <Text style={styles.cardLabel}>筆記</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>5</Text>
            <Text style={styles.cardLabel}>紀錄</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>3</Text>
            <Text style={styles.cardLabel}>AI 語錄</Text>
          </View>
        </View>

        {/* Timeline */}
        <Text style={styles.sectionTitle}>近期動態</Text>

        <View style={styles.timelineItem}>
          <Text style={styles.timelineTitle}>進度更新</Text>
          <Text style={styles.timelineText}>進度 82%</Text>
          <Text style={styles.timelineTime}>今日</Text>
        </View>

        <View style={styles.timelineItem}>
          <Text style={styles.timelineTitle}>小筆記</Text>
          <Text style={styles.timelineText}>總結內容</Text>
          <Text style={styles.timelineTime}>昨日</Text>
        </View>

        <View style={styles.timelineItem}>
          <Text style={styles.timelineTitle}>文章草稿更新</Text>
          <Text style={styles.timelineText}>Version v3 創立</Text>
          <Text style={styles.timelineTime}>2 日前</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
  },

  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 24,
    backgroundColor: "#4F6DFF",
  },

  appTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },

  subtitle: {
    color: "white",
    marginTop: 4,
    opacity: 0.9,
  },

  content: {
    padding: 20,
  },

  quickButton: {
    backgroundColor: "#4F6DFF",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 20,
  },

  quickButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },

  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 14,
    width: "30%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  cardNumber: {
    fontSize: 24,
    fontWeight: "bold",
  },

  cardLabel: {
    color: "#666",
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },

  timelineItem: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  timelineTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },

  timelineText: {
    color: "#444",
  },

  timelineTime: {
    marginTop: 6,
    fontSize: 12,
    color: "#888",
  }

});