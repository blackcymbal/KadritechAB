import { SpacingProps, getSpacingValue } from "@/constants/spacing";
import theme from "@/constants/theme";
import React from "react";
import { FlexStyle, StyleSheet, View, ViewStyle } from "react-native";

type ContainerProps = SpacingProps & {
  children: React.ReactNode;
  flexDirection?: FlexStyle["flexDirection"];
  gap?: keyof typeof theme.spacing;
  px?: keyof typeof theme.spacing;
  style?: ViewStyle;
};
const Container = ({
  children,
  flexDirection = "column",
  gap,
  px = 4,
  style,
  ...rest
}: ContainerProps) => {
  return (
    <View
      style={
        styles({
          flexDirection,
          gap,
          px,
          style,
          ...rest,
        }).container
      }
    >
      {children}
    </View>
  );
};

type StyleProps = Required<Pick<ContainerProps, "flexDirection">> &
  Omit<ContainerProps, "flexDirection" | "children">;

const styles = ({ flexDirection, gap, px = 4, style, ...rest }: StyleProps) => {
  const spacingStyles = getSpacingValue(rest);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { paddingHorizontal, ...restSpacingStyles } = spacingStyles;

  return StyleSheet.create({
    container: {
      flexDirection,
      gap: gap !== undefined ? theme.spacing[gap] : undefined,
      paddingHorizontal: theme.spacing[px],
      ...restSpacingStyles,
      ...style,
    },
  });
};

export default Container;
