import { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import AppButton from '../AppButton';
import { colors, styles } from '../../constants/styles';


export default function AddCustomerModal({ onClose, onAdd }) {
  const [name, setName] = useState('');
  const [shopNo, setShopNo] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  function saveCustomer() {
    if (!name.trim() || !shopNo.trim() || !phone.trim()) {
      setError('Please fill in all three fields.');
      return;
    }
    if (!/^03[0-9]{9}$/.test(phone.trim())) {
      setError('Enter an 11-digit mobile number starting with 03.');
      return;
    }
    onAdd(name, shopNo, phone);
    onClose();
  }

  return (
    <Modal visible transparent animationType="fade" onRequestClose={onClose}>
      <KeyboardAvoidingView style={local.overlay} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={local.form}>
          <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.content}>
            <Text style={styles.title}>Add Customer</Text>
            <Text style={styles.subtitle}>New customers start with Rs 0 balance.</Text>
            <Text style={styles.label}>Customer name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="e.g. Ali Traders" 
              placeholderTextColor={colors.muted} maxLength={60}/>
            <Text style={styles.label}>Shop number</Text>
            <TextInput style={styles.input} value={shopNo} onChangeText={setShopNo} placeholder="e.g. A-10" 
              placeholderTextColor={colors.muted} maxLength={30} />
            <Text style={styles.label}>Phone number</Text>
            <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="03xxxxxxxxx" 
              placeholderTextColor={colors.muted} keyboardType="phone-pad" maxLength={11}/>
            {error ? <Text style={local.error}>{error}</Text> : null}
            <View style={styles.rowWrap}>
              <AppButton title="Save Customer" onPress={saveCustomer} />
              <AppButton title="Cancel" variant="outline" onPress={onClose} />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const local = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.3)' },
  form: { backgroundColor: colors.background, borderRadius: 12, maxHeight: '90%', width: '100%', maxWidth: 480, alignSelf: 'center' },
  error: { color: '#A52B2B', fontSize: 14 },
});
