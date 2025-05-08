import { StyleSheet, View } from 'react-native';
import { ScreenContent } from '~/components/ScreenContent';

export default function Reports() {
  return (
    <>
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/reports.tsx" title="Reports" />
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
