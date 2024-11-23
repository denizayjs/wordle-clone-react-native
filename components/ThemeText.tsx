import { Text, TextProps } from 'react-native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function ThemeText({ style, children, ...rest }: TextProps) {
  const colorScheme = useColorScheme();

  const color = Colors[colorScheme ?? 'light'].text;

  return (
    <Text style={[style, { color }]} {...rest}>
      {children}
    </Text>
  );
}
