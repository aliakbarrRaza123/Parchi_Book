import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { colors, headerOptions } from '../../constants/styles';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      ...headerOptions,
      tabBarStyle: { backgroundColor: colors.black, borderTopWidth: 0 },
      tabBarActiveTintColor: colors.white,
      tabBarInactiveTintColor: '#ABB3C0',
      tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
    }}>
      <Tabs.Screen name="customers" options={{ title: 'Parchi Book', tabBarLabel: 'Customers', 
        tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 21 }}>☰</Text> }} />
      <Tabs.Screen name="integrity-check" options={{ title: 'Integrity Check', tabBarIcon: ({ color }) => 
        <Text style={{ color, fontSize: 21 }}>✓</Text> }} />
    </Tabs>
  );
}
