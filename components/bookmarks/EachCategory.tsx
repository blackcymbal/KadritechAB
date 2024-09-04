import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Typography } from "../ui";

type categoryProps = {
  id: number;
  title: string;
  url: string;
  category: string;
};

export default function EachCategory({
  category,
}: {
  category: categoryProps;
}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <Typography>{category?.title}</Typography>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          active={true}
          onPress={() => {
            router.navigate({
              pathname: "bookmarkDetails",
              params: { bookmark: JSON.stringify(category) },
            });
          }}
        >
          Details
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
