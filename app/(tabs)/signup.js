import { useState } from "react";
import { Alert , Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { AuthStyles } from "../../styles/auth-styles"
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker'
import { FontAwesome } from "@expo/vector-icons";
import { doSignUp } from "../../services/doSignUp";
import { Globals } from "../../styles/globals";

const SignUpScreen = () => {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const [error, setError] = useState({ target: "", message: "" });

  const [logo, setLogo] = useState(require("../../assets/img/imcx.png"));

  

  return (
    // <SafeAreaView style={AuthStyles.flex1}>
    <LinearGradient end={{ x: 0.4, y: 0.3 }} colors={["#FFADAD6f", "#FFCEAD6f", "#fff"]} style={[AuthStyles.gradient, AuthStyles.flex1]}>
      <ScrollView>
        <View style={[AuthStyles.flex1, AuthStyles.justifyCenter, AuthStyles.px_16]}>

          <Text style={AuthStyles.title}>Create Account</Text>
          <Text style={AuthStyles.subtitle}>Hello! Welcome to ImaginecoreX.</Text>
          <Text style={AuthStyles.subtitle}>Let's open your ImaginecoreX Account.</Text>

          <Pressable
            onPress={async () => {
              let result = await ImagePicker.launchImageLibraryAsync();

              if (!result.canceled) {
                setImage(result.assets[0].uri);
              }

            }}
          >
            {image ?
              <Image source={image} style={AuthStyles.image} />
              :
              <View style={[AuthStyles.imagePreview, error.target == "image" ? Globals.borderError : Globals.border]}>
                <FontAwesome
                  name="camera"
                  size={24}
                  color="black"
                />
              </View>
            }
          </Pressable>

          <View style={AuthStyles.inputCon}>

            <View style={AuthStyles.inputLine}>
              <View style={[AuthStyles.inputGroup, AuthStyles.flex1]}>
                <Text style={AuthStyles.inputLabel}>First Name</Text>
                <TextInput
                  style={[AuthStyles.input, error.target == "fname" ? Globals.borderError : Globals.border]}
                  value={fname}
                  onChangeText={setFname}
                  placeholder="First Name"
                />
              </View>
              <View style={[AuthStyles.inputGroup, AuthStyles.flex1]}>
                <Text style={AuthStyles.inputLabel}>LastName</Text>
                <TextInput
                  style={[AuthStyles.input, error.target == "lname" ? Globals.borderError : Globals.border]}
                  value={lname}
                  onChangeText={setLname}
                  placeholder="Last Name"
                />
              </View>
            </View>

            <View style={AuthStyles.inputGroup}>
              <Text style={AuthStyles.inputLabel}>Mobile</Text>
              <TextInput
                style={[AuthStyles.input, error.target == "mobile" ? Globals.borderError : Globals.border]} inputMode="tel"
                maxLength={10}
                value={mobile}
                onChangeText={setMobile}
                placeholder="07X XXX XXXX"
              />
            </View>

            <View style={AuthStyles.inputGroup}>
              <Text style={AuthStyles.inputLabel}>Password</Text>
              <TextInput
                style={[AuthStyles.input, error.target == "password" ? Globals.borderError : Globals.border]}
                secureTextEntry={true}
                maxLength={20}
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
              />
            </View>

          </View>

          <Pressable style={AuthStyles.pressable} onPress={async () => {



            const json = await doSignUp(fname, lname, mobile, password, image);

            if (json.success) {
              //USER REGISTRATION COMPLETED
              Alert.alert("Success", json.message);
             
            } else {
              //PROBLEM OCCURED
              if (json.target == "fname") {
                setError({ target: "fname", message: json.message });
                Alert.alert("Error", json.message);
              } else if (json.target == "lname") {
                setError({ target: "lname", message: json.message });
                Alert.alert("Error", json.message);
              } else if (json.target == "mobile") {
                setError({ target: "mobile", message: json.message });
                Alert.alert("Error", json.message);
              } else if (json.target == "password") {
                setError({ target: "password", message: json.message });
                Alert.alert("Error", json.message);
              } else {
                setError({ target: "", message: "" });
              }

            }



          }}>
            <Text style={AuthStyles.pressableText}>Sing Up</Text>
          </Pressable>

          <Pressable style={AuthStyles.secondaryPressable}>
            <Text style={AuthStyles.secondaryPressableText}>Already have an account? Sign In</Text>
          </Pressable>

          <Text style={AuthStyles.termsText}>By signing up, you agree to ImaginecoreX's Terms of Service and Privacy Policy.</Text>

        </View>
      </ScrollView>
    </LinearGradient>
    // </SafeAreaView>
  )
}

export default SignUpScreen
