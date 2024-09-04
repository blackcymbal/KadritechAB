import theme from "@/constants/theme";
import * as Haptics from "expo-haptics";
import React from "react";
import {
  AccessibilityState,
  Animated,
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import { SvgProps } from "react-native-svg";
import { Typography } from "../ui";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type TabBarButtonProps = {
  Icon: React.FC<SvgProps>;
  name: string;
  navTo: string;
  onPress?: (e: GestureResponderEvent) => void;
  accessibilityState?: AccessibilityState;
};

export default function TabBarButton({
  Icon,
  name,
  navTo,
  onPress,
  accessibilityState,
}: TabBarButtonProps) {
  return (
    <AnimatedPressable
      onPress={(e) => {
        if (Platform.OS !== "web") {
          Haptics.selectionAsync();
        }

        onPress?.(e);
      }}
      style={styles.container}
    >
      <Icon
        width={30}
        height={30}
        color={
          accessibilityState?.selected
            ? theme.colors.primaryDefault
            : theme.colors.grayDefault
        }
      />
      <Typography
        size="xs"
        color={accessibilityState?.selected ? "primaryDefault" : "grayDefault"}
      >
        {name}
      </Typography>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    marginTop: Platform.OS === "ios" ? 8 : 0,
  },
});
