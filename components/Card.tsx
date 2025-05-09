import { View, Text, StyleSheet } from 'react-native'

const Card = () => {
    return (
        <>
            <View className='bg-white rounded-2xl m-4 shadow-lg'>
                <Text className='text-black font-poppinsBold p-4'>Monday, 3rd of May 2025</Text>
                <View className='flex flex-row justify-between items-center'>
                    <Text className='w-40 text-black font-poppinsLight px-4 text-gray-500'>Hours</Text>
                    <Text className='w-16 text-black font-poppinsBold px-4' style={styles.textColorBlue}>8</Text>
                    <Text className='w-40 text-black font-poppinsLight px-4 text-gray-500'>Mileage</Text>
                    <Text className='w-16 text-black font-poppinsBold px-4' style={styles.textColorBlue}>76</Text>
                </View>
                <View className='flex flex-row justify-between items-center'>
                    <Text className='w-40 text-black font-poppinsLight px-4 text-gray-500'>Deliveries</Text>
                    <Text className='w-16 text-black font-poppinsBold p-4' style={styles.textColorBlue}>16</Text>
                    <Text className='w-40 text-black font-poppinsLight px-4 text-gray-500'>Tips</Text>
                    <Text className='w-16 text-black font-poppinsBold px-4' style={styles.textColorBlue}>£8</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
  textColorBlue: {
    color: "#3629B7",
  }
});

export default Card