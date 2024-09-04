import React, { ReactNode } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import Label from "./Label";

type RadioItemProps = {
  children: ReactNode;
  style?: ViewStyle;
  value: string;
  selected: string | null;
  setSelected: (value: string) => void;
  radioDefaultColor?: string;
  radioActiveColor?: string;
  radioActiveFillColor?: string;
};

export default function RadioItem({
  children,
  style,
  value,
  selected,
  setSelected,
  radioDefaultColor = "#CDD5DF",
  radioActiveColor = "#364152",
  radioActiveFillColor = "#F8FAFC",
}: RadioItemProps) {
  const isActive = selected === value;

  return (
    <Pressable
      onPress={() => setSelected(value)}
      style={[style, { flexDirection: "row", gap: 8, alignItems: "center" }]}
    >
      <View
        style={
          isActive
            ? [
                styles.radioOutline,
                {
                  borderColor: radioActiveColor,
                  backgroundColor: radioActiveFillColor,
                },
              ]
            : [styles.radioDefault, { borderColor: radioDefaultColor }]
        }
      >
        {isActive && (
          <View
            style={[styles.radioInner, { backgroundColor: radioActiveColor }]}
          />
        )}
      </View>
      {children}
    </Pressable>
  );
}

RadioItem.Label = Label;

const styles = StyleSheet.create({
  radioOutline: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  radioDefault: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
  },
});
