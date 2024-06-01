import React from 'react';
import { Ionicons } from '@expo/vector-icons';

type IoniconsName = keyof typeof Ionicons.glyphMap;

type Props = {
  name: IoniconsName;
  color: string;
};

export function TabBarIcon({ name, color }: Props) {
  return <Ionicons name={name} size={30} style={{ marginBottom: -3 }} color={color} />;
}
