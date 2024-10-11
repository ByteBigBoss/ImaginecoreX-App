import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts(
    {
      "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
      "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
      "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),

    }
  );

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  
  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView>

    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </GestureHandlerRootView>

  )

}


