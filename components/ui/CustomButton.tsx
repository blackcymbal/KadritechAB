import theme from "@/constants/theme";
import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import Loader from "../global/Loader";
import Typography from "./Typography";

type CustomButtonProps = {
  children: React.ReactNode;
  active: boolean;
  isLoading?: boolean;
  buttonStyle?: "outline" | "inline";
  onPress: () => void;
  style?: ViewStyle;
};

export default function Button({
  children,
  active = false,
  isLoading = false,
  buttonStyle = "outline",
  onPress,
  style,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      disabled={!active}
      style={[
        style,
        styles.container,
        buttonStyle === "outline"
          ? [
              styles.outline,
              {
                borderColor: active
                  ? theme.colors.primaryDefault
                  : theme.colors.grayDefault,
              },
            ]
          : {
              backgroundColor: active
                ? theme.colors.primaryDefault
                : theme.colors.gray300,
            },
      ]}
      onPress={onPress}
    >
      <View style={styles.emptyView} />
      <View style={styles.textView}>
        <Typography
          weight="semiBold"
          size="base"
          color={
            buttonStyle === "outline"
              ? "primaryDefault"
              : active
              ? "white"
              : "grayDefault"
          }
        >
          {children}
        </Typography>
      </View>
      <View style={styles.emptyView}>
        {isLoading && <Loader size="small" />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 0,
  },
  outline: {
    borderWidth: 1,
  },
  textView: { flex: 5, alignItems: "center" },
  emptyView: {
    flex: 1,
  },
});
