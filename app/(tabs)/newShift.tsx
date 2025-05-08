import { StyleSheet, View } from 'react-native';
import { ScreenContent } from '~/components/ScreenContent';

export default function NewShift() {
  return (
    <>
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/newShift.tsx" title="+" />
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
