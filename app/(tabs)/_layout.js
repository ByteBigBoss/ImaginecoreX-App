import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { router } from "expo-router";
export default function HomeLayout() {

  

  return (
    <Stack>
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
      <Stack.Screen name="(chat)" options={{ headerShown: false }} />
      <Stack.Screen name="(create)" options={{ headerShown: false }} />
      <Stack.Screen name="(profile)" options={{ headerShown: false }} />
      <Stack.Screen name="(oup)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  )

}


