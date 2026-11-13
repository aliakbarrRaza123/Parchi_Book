import AppButton from '../../components/AppButton';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../../constants/styles';

export default function IntegrityCheckScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Integrity Check</Text>
      <View style={[styles.card, styles.infoCard,styles.customerCard]}>
        <Text style={styles.badge}>DEMO PREVIEW</Text>
        <Text style={styles.subtitle}>The hash-chain check will be added in a later week. No integrity check is running yet.</Text>
      </View>
      <AppButton title="Go to Customers" variant="outline" href="/(tabs)/customers" />
    </ScrollView>
  );
}
