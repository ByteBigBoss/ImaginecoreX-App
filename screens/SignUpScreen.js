import { useState } from "react";
import { Alert, Button, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { SignUpStyles } from "../styles/signup-styles"
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker'
import { FontAwesome } from "@expo/vector-icons";

const SignUpScreen = () => {

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();

  const [logo, setLogo] = useState(require("../assets/img/imcx.png"));

  const [image, setImage] = useState(null);

  return (
    // <SafeAreaView style={SignUpStyles.flex1}>
    <LinearGradient end={{ x: 0.4, y: 0.3 }} colors={["#FFADAD6f", "#FFCEAD6f", "#fff"]} style={[SignUpStyles.gradient, SignUpStyles.flex1]}>
      <ScrollView>
        <View style={[SignUpStyles.flex1, SignUpStyles.justifyCenter, SignUpStyles.px_16]}>
          
        <Text style={SignUpStyles.title}>Create Account</Text>
        <Text style={SignUpStyles.subtitle}>Hello! Welcome to ImaginecoreX.</Text>
        <Text style={SignUpStyles.subtitle}>Let's open your ImaginecoreX Account.</Text>

        <Pressable
          onPress={async () => {
            let result = await ImagePicker.launchImageLibraryAsync();

            if (!result.canceled) {
              setImage(result.assets[0].uri);
            }

          }}
        >
          {image ?
            <Image source={image} style={SignUpStyles.image} />
            :
            <View style={SignUpStyles.imagePreview}>
              <FontAwesome
                name="camera"
                size={24}
                color="black"
              />
            </View>
          }
        </Pressable>

        <View style={SignUpStyles.inputCon}>

          <View style={SignUpStyles.inputLine}>
            <View style={[SignUpStyles.inputGroup, SignUpStyles.flex1]}>
              <Text style={SignUpStyles.inputLabel}>First Name</Text>
              <TextInput
                style={SignUpStyles.input}
                value={fname}
                onChangeText={setFname}
                placeholder="First Name"
              />
            </View>
            <View style={[SignUpStyles.inputGroup, SignUpStyles.flex1]}>
              <Text style={SignUpStyles.inputLabel}>LastName</Text>
              <TextInput
                style={SignUpStyles.input}
                value={lname}
                onChangeText={setLname}
                placeholder="Last Name"
              />
            </View>
          </View>

          <View style={SignUpStyles.inputGroup}>
            <Text style={SignUpStyles.inputLabel}>Mobile</Text>
            <TextInput
              style={SignUpStyles.input} inputMode="tel"
              maxLength={10}
              value={mobile}
              onChangeText={setMobile}
              placeholder="07X XXX XXXX"
            />
          </View>

          <View style={SignUpStyles.inputGroup}>
            <Text style={SignUpStyles.inputLabel}>Password</Text>
            <TextInput
              style={SignUpStyles.input} secureTextEntry={true}
              maxLength={20}
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
            />
          </View>

        </View>

        <Pressable style={SignUpStyles.pressable} onPress={() => console.log(`Action Pressed: SingUpData => {fname:${fname}, lname:${lname}, mobile:${mobile}, password:${password}}`)}>
          <Text style={SignUpStyles.pressableText}>Sing Up</Text>
        </Pressable>

        <Pressable style={SignUpStyles.secondaryPressable}>
          <Text style={SignUpStyles.secondaryPressableText}>Already have an account? Sign In</Text>
        </Pressable>

        <Text style={SignUpStyles.termsText}>By signing up, you agree to ImaginecoreX's Terms of Service and Privacy Policy.</Text>

        </View>
      </ScrollView>
    </LinearGradient>
    // </SafeAreaView>
  )
}

export default SignUpScreen
