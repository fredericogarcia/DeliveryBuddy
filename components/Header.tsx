import { View, Text, Image, StatusBar } from 'react-native';

export default function Header() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View className='flex flex-row justify-start pt-10 pl-10 pb-4'>
        <Image className='my-4 w-16 h-16 rounded-full' source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
        <Text className='text-white text-xl py-8 px-6 text-sm font-poppinsMedium'>Hi, Frederico!</Text>
      </View>
    </>
  );
}






