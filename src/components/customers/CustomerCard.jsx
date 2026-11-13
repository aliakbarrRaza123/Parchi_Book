import { Text, View } from 'react-native';
import AppButton from '../AppButton';
import { styles } from '../../constants/styles';

export default function CustomerCard({ customer }) {
  return (
    <View style={[styles.card, styles.customerCard]}>
      <View style={styles.row}>
        <View style={styles.avatar}><Text style={styles.avatarText}>{customer.name.charAt(0).toUpperCase()}</Text></View>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{customer.name}</Text>
          <Text style={styles.subtitle}>Shop {customer.shopNo}</Text>
        </View>
      </View>
      <Text style={styles.subtitle}>Phone: {customer.phone}</Text>
      <View style={styles.divider} />
      <View style={styles.sectionRow}>
        <View style={{ gap: 3 }}>
          <Text style={styles.label}>Balance owed</Text>
          <Text style={[styles.name, styles.textOutline]}>Rs {customer.balance.toLocaleString('en-PK')}</Text>
        </View>
        <AppButton title="Open Ledger →" variant="outline" href={{ pathname: '/customer/[id]', params: {
          id: customer.id, name: customer.name, shopNo: customer.shopNo,
          phone: customer.phone, balance: String(customer.balance),
        } }} />
      </View>
    </View>
  );
}
