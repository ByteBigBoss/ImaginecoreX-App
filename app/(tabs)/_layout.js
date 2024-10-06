import {  Stack } from "expo-router";

export default function HomeLayout() {

  return (
    <Stack>
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
      <Stack.Screen name="(chat)" options={{ headerShown: false }} />
      <Stack.Screen name="index"  />
      <Stack.Screen name="signup"/>
    </Stack>
  )

}


