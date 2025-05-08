import { Text, StyleSheet } from 'react-native';
import { Container } from '~/components/Container';
import Header from '~/components/Header';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
          <Text className='text-black'>Reports</Text>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
