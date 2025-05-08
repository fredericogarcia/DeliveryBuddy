import { StyleSheet, View } from 'react-native';
import { ScreenContent } from '~/components/ScreenContent';

export default function Shifts() {
  return (
    <>
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/shifts.tsx" title="Shifts" />
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
