import { SpacingProps, getSpacingValue } from "@/constants/spacing";
import theme from "@/constants/theme";
import React from "react";
import {
  FlexStyle,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type TypographyProps = SpacingProps & {
  children: React.ReactNode;
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.fontSize;
  weight?: keyof typeof theme.fontWeight;
  style?: TextStyle | ViewStyle | FlexStyle;
  // Modify the type of style to StyleProp<TextStyle>
};

const Typography = ({
  children,
  color = "body",
  size = "base",
  weight = "regular",
  style,
  ...rest
}: TypographyProps) => {
  return (
    <Text style={styles({ color, size, weight, style, ...rest }).text}>
      {children}
    </Text>
  );
};

type StyleProps = Required<Pick<TypographyProps, "color" | "size" | "weight">> &
  Omit<TypographyProps, "color" | "size" | "weight" | "children">;

const styles = ({ color, size, weight, style, ...rest }: StyleProps) =>
  StyleSheet.create({
    text: {
      color: theme.colors[color],
      fontSize: theme.fontSize[size][0],
      fontFamily: theme.fontWeight[weight],
      lineHeight: theme.fontSize[size][1],
      ...getSpacingValue(rest),
      ...style,
    },
  });

export default Typography;
