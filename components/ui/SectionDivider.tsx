import { StyleSheet, View } from 'react-native';
import React from 'react';
import theme from '@/constants/theme';

type SectionDividerProps = {
  marginVertical?: number;
  backgroundColor?: keyof typeof theme.colors;
};
export default function SectionDivider({
  marginVertical,
  backgroundColor = 'gray200',
}: SectionDividerProps) {
  return (
    <View style={styles({ marginVertical, backgroundColor }).dividerStyle} />
  );
}

const styles = ({ marginVertical, backgroundColor }: SectionDividerProps) =>
  StyleSheet.create({
    dividerStyle: {
      width: '100%',
      height: 1,
      marginVertical,
      backgroundColor: backgroundColor
        ? theme.colors[backgroundColor]
        : undefined,
    },
  });
