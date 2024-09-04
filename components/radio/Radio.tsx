import { View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import RadioItem from "./RadioItem";

type RadioProps = { children: ReactNode; style?: ViewStyle };

export default function Radio({ children, style }: RadioProps) {
  return <View style={style}>{children}</View>;
}

Radio.Item = RadioItem;
