import '../global.css';

import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_700Bold, Poppins_500Medium, Poppins_300Light } from "@expo-google-fonts/poppins";

import { Stack } from 'expo-router';
import { verifyInstallation } from 'nativewind';


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_400Regular, 
    PoppinsBold: Poppins_700Bold,
    PoppinsMedium: Poppins_500Medium,
    PoppinsLight: Poppins_300Light,
  });
  if (!fontsLoaded) return null; // add loading screen
  else console.log('Fonts loaded:', fontsLoaded);

  verifyInstallation();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
