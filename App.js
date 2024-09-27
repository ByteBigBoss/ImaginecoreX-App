import {useEffect} from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import SignInScreen from "./screens/SignInScreen";
import StatusScreen from "./screens/StatusScreen";
import SignUpScreen from "./screens/SignUpScreen";

SplashScreen.preventAutoHideAsync();

const App = () => {

  const [loaded, error] = useFonts(
    {
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    
    }
  );

  useEffect(()=>{
    if(loaded || error){
      SplashScreen.hideAsync();
    }
  },[loaded, error]);

  if(!loaded && !error){
    return null;
  }

  return (
    <SignUpScreen/>
  )
}

export default App;
