import AppButton from '../../components/AppButton';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../../constants/styles';

export default function EntryDetailScreen() {
  const { id, customerId } = useLocalSearchParams();
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Entry Detail</Text>
      <View style={[styles.card, styles.infoCard,styles.customerCard]}>
        <Text style={styles.badge}>DEMO PREVIEW</Text>
        <Text style={styles.subtitle}>Preview entry: {id}</Text>
        {customerId ? <Text style={styles.subtitle}>Customer ID: {customerId}</Text> : null}
        <Text style={styles.subtitle}>This is a navigation example, not a saved transaction. Entry information, photo and hash will be added later.</Text>
      </View>
      <AppButton title="Back to Customers" variant="outline" href="/(tabs)/customers" />
    </ScrollView>
  );
}
