import { Redirect } from 'expo-router';

// A starting route for /. Sign-in becomes the starting flow in a later week.
export default function Index() {
  return <Redirect href="/(tabs)/customers" />;
}
