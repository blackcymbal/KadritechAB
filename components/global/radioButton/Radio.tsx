import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import RadioItem from "./RadioItem";

type RadioProps = {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
};

export default function Radio({ children, style }: RadioProps) {
  return <View style={style}>{children}</View>;
}

Radio.Item = RadioItem;
