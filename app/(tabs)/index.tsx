import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Container } from '~/components/Container';
import Header from '~/components/Header';
import Card from '~/components/Card';
import WeeklyGraph from '~/components/WeeklyGraph';


export default function Dashboard() {
   
  const data = [
    {
      value: 10,
      label: 'Mon',
      topLabelComponent: () => (
        <Text className="font-poppinsBold text-sm" style={styles.textColorBlue}>10</Text>
      ),
    },
    {
      value: 16,
      label: 'Tue',
      topLabelComponent: () => (
        <Text className="font-poppinsBold text-sm" style={styles.textColorBlue}>16</Text>
      ),
    },
    {
      value: 0,
      label: 'Wed',
      topLabelComponent: () => (
        <Text className="font-poppinsBold text-sm" style={styles.textColorBlue}>0</Text>
      ),
    },
    {
      value: 0,
      label: 'Thur',
      topLabelComponent: () => (
        <Text className="font-poppinsBold text-sm" style={styles.textColorBlue}>0</Text>
      ),
    },
    {
      value: 7,
      label: 'Fri',
      topLabelComponent: () => (
        <Text className="font-poppinsBold text-sm" style={styles.textColorBlue}>7</Text>
      ),
    },
    {
      value: 16,
      label: 'Sat',
      topLabelComponent: () => (
        <Text className="font-poppinsBold text-sm" style={styles.textColorBlue}>16</Text>
      ),
    },
    {
      value: 9,
      label: 'Sun',
      topLabelComponent: () => (
        <Text className="font-poppinsBold text-sm" style={styles.textColorBlue}>9</Text>
      ),
    },
  ]
  return (
    <>
      <Header />
      <ScrollView>
        <Container>
          <Text className='text-black font-poppinsBold pt-4 pl-7'>Previous shifts</Text>
          <Card />
          <Card />
          <Text className='text-black font-poppinsBold pl-7 pt-2'>Deliveries this week</Text>
          <WeeklyGraph data={data} color={"#070333"} />
          <Text className='text-black font-poppinsBold pl-7 pt-8'>Tips this week</Text>
          <WeeklyGraph data={data} color={"#FF4267"} />
          <View className='pb-20'/>
        </Container>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  textColorBlue: {
    color: "#3629B7",
  }
});