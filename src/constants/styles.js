import { StyleSheet } from 'react-native';

// One accent colour throughout the app. Change primary to update the main blue.
export const colors = {
  primary: '#3568AD', paleBlue: '#EAF2FC', border: '#CFDDF0',
  background: '#F4F6FA', white: '#FFFFFF', text: '#203047',
  muted: '#617087', black: '#181818',
};

// Both root Stack and Tabs use this, so every screen has the same header.
export const headerOptions = {
  headerStyle: { backgroundColor: colors.black },
  headerTintColor: colors.white,
  headerTitleStyle: { fontWeight: '600' },
  headerShadowVisible: false,
};

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  // Limit width on a laptop; keep the full available width on a phone.
  content: { padding: 20, gap: 16, paddingBottom: 40, width: '100%', maxWidth: 860, alignSelf: 'center' },
  title: { fontSize: 25, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 15, color: colors.muted, lineHeight: 23 },
  label: { fontSize: 14, fontWeight: '600', color: colors.text },
  name: { fontSize: 18, fontWeight: '600', color: colors.text },
  card: {backgroundColor: '#FFFFFF',borderWidth: 1,borderColor: '#DADDE2',borderRadius: 6,padding: 18,gap: 12},
  infoCard: {backgroundColor: '#FFFFFF'},
  customerCard: { backgroundColor: '#F0F5FD'},
  summary: { padding: 20, gap: 8, backgroundColor: colors.paleBlue, borderRadius: 12, borderWidth: 1, borderColor: colors.border },
  balance: { color: colors.primary, fontSize: 30, fontWeight: '700' },
  badge: { alignSelf: 'flex-start', borderRadius: 6, paddingVertical: 5, paddingHorizontal: 9, backgroundColor: colors.paleBlue, color: '#244F88', fontSize: 12, fontWeight: '600' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  rowWrap: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 10 },
  sectionRow: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  avatar: { width: 44, height: 44, borderRadius: 10, backgroundColor: '#DCE9FB', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: colors.primary, fontSize: 20, fontWeight: '700' },
  divider: { height: 1, backgroundColor: colors.border },
  input: { borderWidth: 1, borderColor: colors.border, backgroundColor: colors.white, borderRadius: 8, padding: 12, fontSize: 16, color: colors.text },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: 10, paddingHorizontal: 12 },
  searchInput: { flex: 1, minWidth: 0, paddingVertical: 14, fontSize: 15, color: colors.text },
  searchClear: { minHeight: 44, justifyContent: 'center', paddingHorizontal: 8 },
  searchClearText: { color: colors.primary, fontWeight: '600' },
  // alignSelf prevents the button stretching across its parent's whole width.
  button: { alignSelf: 'flex-start', maxWidth: '100%', minHeight: 44, borderRadius: 8, paddingVertical: 11, paddingHorizontal: 18, borderWidth: 1, justifyContent: 'center', alignItems: 'center' },
  buttonText: { fontSize: 15, fontWeight: '600', textAlign: 'center', flexShrink: 1 },
  buttonPrimary: { backgroundColor: colors.primary, borderColor: colors.primary },
  textPrimary: { color: colors.white },
  buttonOutline: { backgroundColor: colors.white, borderColor: colors.primary },
  textOutline: { color: colors.primary },
  buttonInfo: { backgroundColor: '#E0ECFC', borderColor: '#C2D6F2' },
  textInfo: { color: '#244F88' },
  buttonPressed: { opacity: 0.75 },
});
