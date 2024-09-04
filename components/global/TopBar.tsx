import { ArrowLeft } from "@/assets/icons/icons";
import theme from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Typography } from "../ui";

const TopBar = ({ title }: { title: string }) => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.inner}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft height={30} />
        </TouchableOpacity>
        <Typography size="2xl" weight="medium">
          Category: {title}
        </Typography>
        <View />
      </View>
    </SafeAreaView>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});
