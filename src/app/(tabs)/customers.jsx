import { useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import CustomerCard from '../../components/customers/CustomerCard';
import AddCustomerModal from '../../components/customers/AddCustomerModal';
import AppButton from '../../components/AppButton';
import { useCustomers } from '../../hooks/useCustomers';
import { colors, styles } from '../../constants/styles';

export default function CustomersScreen() {
  const { customers, search, setSearch, filteredCustomers, totalBalance, addCustomer } = useCustomers();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screen}>
      <FlatList
        data={filteredCustomers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CustomerCard customer={item} />}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View style={{ gap: 16 }}>
            <View style={styles.sectionRow}>
              <View style={{ gap: 4 }}>
                <Text style={styles.title}>Customers</Text>
                <Text style={styles.subtitle}>Keep your daily accounts in one place.</Text>
              </View>
              <AppButton title="Sign In" variant="outline" href="/sign-in" />
            </View>
            <View style={{ gap: 7 }}>
              <Text style={styles.label}>Find a customer</Text>
              <View style={styles.searchBar}>
                <TextInput style={styles.searchInput} placeholder="Search name, shop or phone" placeholderTextColor={colors.muted} 
                  value={search} onChangeText={setSearch} autoCorrect={false} />
                {search.length > 0 && 
                <Pressable style={styles.searchClear} onPress={() => setSearch('')}>
                  <Text style={styles.searchClearText}>Clear</Text>
                </Pressable>}
              </View>
            </View>
            <View style={styles.summary}>
              <Text style={styles.label}>Total balance owed</Text>
              <Text style={styles.balance}>Rs {totalBalance.toLocaleString('en-PK')}</Text>
              <Text style={styles.subtitle}>{customers.length} customers · Demo balances</Text>
            </View>
            <View style={styles.sectionRow}>
              <Text style={styles.name}>Customer list ({filteredCustomers.length})</Text>
              <AppButton title="+ Add Customer" onPress={() => setModalVisible(true)} />
            </View>
          </View>
        }
        ListEmptyComponent={<View style={[styles.card, styles.infoCard]}><Text style={styles.name}>
          {customers.length === 0 ? 'Your list is empty' : 'No matches found'}</Text><Text style={styles.subtitle}>
            {customers.length === 0 ? 'Tap Add Customer to begin.' : 'Try another name, shop number or phone.'}</Text></View>}
        ListFooterComponent={<Text style={styles.subtitle}>Demo mode · Changes stay in memory and reset when the app reloads.</Text>}
      />
      {modalVisible && <AddCustomerModal onClose={() => setModalVisible(false)} onAdd={addCustomer} />}
    </View>
  );
}
