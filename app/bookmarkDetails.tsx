import TopBar from "@/components/global/TopBar";
import { Container, Typography } from "@/components/ui";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function bookmarkDetails() {
  const params = useLocalSearchParams();

  const bookmark = JSON.parse(params?.bookmark);

  return (
    <View>
      <TopBar title={bookmark?.category} />
      <Container>
        <Typography size="lg">Title: {bookmark?.title}</Typography>
        <Typography size="lg">Title: {bookmark?.url}</Typography>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({});
