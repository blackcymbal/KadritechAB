import React from "react";
import { StyleSheet, View } from "react-native";

import theme from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Typography } from "../ui";

const TopBarHome = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.inner}>
        <Typography weight="medium" size="lg" color="white">
          Bookmark Manager
        </Typography>
      </View>
    </SafeAreaView>
  );
};

export default TopBarHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  inner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary900,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});
