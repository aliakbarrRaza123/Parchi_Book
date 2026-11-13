import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors, headerOptions } from '../constants/styles';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ ...headerOptions, contentStyle: { backgroundColor: colors.background } }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="customer/[id]" options={{ title: 'Customer Ledger' }} />
        <Stack.Screen name="customer/add-entry" options={{ title: 'Add Entry' }} />
        <Stack.Screen name="entry/[id]" options={{ title: 'Entry Detail' }} />
        <Stack.Screen name="sign-in" options={{ title: 'Sign In' }} />
      </Stack>
    </>
  );
}
