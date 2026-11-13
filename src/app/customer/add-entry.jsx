import AppButton from '../../components/AppButton';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../../constants/styles';

export default function AddEntryScreen() {
  const { customerId } = useLocalSearchParams();
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Add Entry</Text>
      <View style={[styles.card, styles.infoCard,styles.customerCard]}>
        <Text style={styles.badge}>DEMO PREVIEW</Text>
        <Text style={styles.subtitle}>Customer ID: {customerId || 'Not selected'}</Text>
        <Text style={styles.subtitle}>The Goods / Payment form will be built next. Nothing is saved from this screen yet.</Text>
      </View>
      <AppButton title="Back to Customers" variant="outline" href="/(tabs)/customers" />
    </ScrollView>
  );
}
