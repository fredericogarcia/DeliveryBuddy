import { StyleSheet, View } from 'react-native';
import { ScreenContent } from '~/components/ScreenContent';

export default function Shifts() {
  return (
    <>
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/settings.tsx" title="Settings" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
