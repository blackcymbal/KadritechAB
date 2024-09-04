import theme from "@/constants/theme";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type DividerProps = {
  style?: ViewStyle;
};

export default function Divider({ style }: DividerProps) {
  return <View style={[styles.divider, style]} />;
}

const styles = StyleSheet.create({
  divider: { height: 1, backgroundColor: theme.colors.gray200 },
});
