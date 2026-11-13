import AppButton from '../components/AppButton';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../constants/styles';

export default function SignInScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Sign In</Text>
      <View style={[styles.card, styles.infoCard,styles.customerCard]}>
        <Text style={styles.badge}>DEMO PREVIEW</Text>
        <Text style={styles.subtitle}>Sign-in screen preview. Supabase authentication will be connected later.</Text>
      </View>
      <AppButton title="Continue to demo Customers" variant="primary" href="/(tabs)/customers" />
    </ScrollView>
  );
}
