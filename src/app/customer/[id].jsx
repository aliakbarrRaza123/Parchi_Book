import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import AppButton from "../../components/AppButton";
import { styles } from "../../constants/styles";

export default function CustomerLedgerScreen() {
  const { id, name, shopNo, phone, balance } = useLocalSearchParams();
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Customer Ledger</Text>
      <View style={[styles.card, styles.infoCard, styles.customerCard]}>
        <Text style={styles.name}>{name || `Customer ${id}`}</Text>
        {shopNo ? <Text style={styles.subtitle}>Shop {shopNo}</Text> : null}
        {phone ? <Text style={styles.subtitle}>{phone}</Text> : null}
        {balance !== undefined ? (
          <Text style={styles.label}>
            Balance: Rs {Number(balance).toLocaleString("en-PK")}
          </Text>
        ) : null}
      </View>
      <Text style={styles.subtitle}>
        Navigation preview only. The entry list and balance calculations will be
        added next.
      </Text>
      <AppButton
        title="+ Add Entry"
        variant="primary"
        href={{ pathname: "/customer/add-entry", params: { customerId: id } }}
      />
      <AppButton
        title="Open sample Entry Detail"
        variant="secondary"
        href={{
          pathname: "/entry/[id]",
          params: { id: "demo-entry", customerId: id },
        }}
      />
      <AppButton
        title="Back to Customers"
        variant="outline"
        href="/(tabs)/customers"
      />
    </ScrollView>
  );
}
