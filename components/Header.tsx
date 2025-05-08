import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View className='flex flex-row justify-start my-10 mx-10'>
        <Image className='my-2 w-20 h-20 rounded-full' source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
        <Text className='text-white text-lg font-bold m-8'>Hi, Frederico!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFBFD",
  }
});




