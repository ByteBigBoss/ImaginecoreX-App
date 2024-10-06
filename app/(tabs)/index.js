import { useState, useEffect } from "react";
import { Alert,  Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { AuthStyles } from "../../styles/auth-styles"
import { LinearGradient } from "expo-linear-gradient";
import { GlobalDynamics, Globals } from "../../styles/globals";
import { doSignIn } from "../../services/doSignIn";
import { getLetters } from "../../services/getLetters";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const SignInScreen = () => {


  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");


  const [error, setError] = useState({ target: "", message: "" });

  const [logo, setLogo] = useState(require("../../assets/img/imcx.png"));
  
  useEffect(() => {
    const fetch = async () => {
      try {
        let userJson = await AsyncStorage.getItem("user");
        if (userJson != null) {
          router.replace("(home)");
        }
      } catch (e) {
        console.log(e)
      }
    }
    fetch();
  });

  return (
    // <SafeAreaView style={AuthStyles.flex1}>
    <LinearGradient end={{ x: 0.4, y: 0.3 }} colors={["#FFADAD6f", "#FFCEAD6f", "#fff"]} style={[AuthStyles.gradient, AuthStyles.flex1,]}>
      
      <ScrollView >
        <View style={[AuthStyles.flex1, AuthStyles.justifyCenter, AuthStyles.px_16, GlobalDynamics.paddingTop(80)]}>

          <Text style={AuthStyles.title}>Sign In</Text>
          <Text style={AuthStyles.subtitle}>Login to your ImaginecoreX Account.</Text>

          <View style={[
            GlobalDynamics.width(100), 
            GlobalDynamics.height(100), 
            GlobalDynamics.borderRadius(100), 
            GlobalDynamics.backgroundColor("white"),
            GlobalDynamics.alignSelf("center"),
            GlobalDynamics.marginTop(20),
            Globals.border,
            Globals.center
            ]}>
              <Text style={[
                GlobalDynamics.fontSize(40),
                GlobalDynamics.fontWeight("900"),
                Globals.uppercase,
              ]}>{name}</Text>
          </View>

          <View style={AuthStyles.inputCon}>


            <View style={AuthStyles.inputGroup}>
              <Text style={AuthStyles.inputLabel}>Mobile</Text>
              <TextInput
                style={[AuthStyles.input, error.target == "mobile" | error.target=="both" ? Globals.borderError : Globals.border]} inputMode="tel"
                maxLength={10}
                value={mobile}
                onChangeText={(text)=>{
                  setMobile(text)
                
                }}
                placeholder="07X XXX XXXX"
                onEndEditing={async()=>{
                    if(mobile.length == 10){
                      const response = await getLetters(mobile);

                      if(response){
                        setName(response.letters);
                      }
                    }
                }}
              />
            </View>

            <View style={AuthStyles.inputGroup}>
              <Text style={AuthStyles.inputLabel}>Password</Text>
              <TextInput
                style={[AuthStyles.input, error.target == "password" | error.target=="both" ? Globals.borderError : Globals.border]}
                secureTextEntry={true}
                maxLength={20}
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
              />
            </View>

          </View>

          <Pressable style={AuthStyles.pressable} onPress={async () => {

            const json = await doSignIn(mobile, password);

            if (json.success) {
              //USER REGISTRATION COMPLETED
              Alert.alert("Success", `Hello ${json.user.firstName}, ${json.message}`);
              setError({ target: "", message: "" });

              try {
                
               await AsyncStorage.setItem("user",JSON.stringify(json.user));
                router.replace("(home)");

              } catch (error) {
                
              }
             
            } else {
              //PROBLEM OCCURED
             if (json.target == "mobile") {
                setError({ target: "mobile", message: json.message });
                Alert.alert("Error", json.message);
              } else if (json.target == "password") {
                setError({ target: "password", message: json.message });
                Alert.alert("Error", json.message);
              } else {
                Alert.alert("Error", json.message);
                setError({ target: "both", message: json.message });
              }

            }



          }}>
            <Text style={AuthStyles.pressableText}>Sing In</Text>
          </Pressable>

          <Pressable style={AuthStyles.secondaryPressable}>
            <Text style={AuthStyles.secondaryPressableText}>New User? Sign Up</Text>
          </Pressable>


        </View>
      </ScrollView>
          <Text style={[AuthStyles.termsText, GlobalDynamics.bottom(0)]}>ImaginecoreX.</Text>
    </LinearGradient>
    // </SafeAreaView>
  )
}

export default SignInScreen