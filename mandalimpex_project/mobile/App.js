import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to MANDALIMPEX Mobile App</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
