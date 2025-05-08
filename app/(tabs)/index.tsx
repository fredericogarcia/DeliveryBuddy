import { Text } from 'react-native';
import { Container } from '~/components/Container';

import Header from '~/components/Header';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
          <Text className='text-black'>Previous Shifts</Text>
      </Container>
    </>
  );
}





