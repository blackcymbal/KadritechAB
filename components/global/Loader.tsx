import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from "react-native";

const Loader = ({
  size = "large",
  color = "#000000",
  style,
}: ActivityIndicatorProps) => {
  return (
    <View style={[style, styles.container]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
