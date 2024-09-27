import { Text, View, TextInput, Pressable, Image } from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SignInStyles } from "../styles/signin-styles";

const SignInScreen = () => {

    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();

    const [logo, setLogo] = useState(require("../assets/img/imcx.png"));

   

    return (
        <View style={SignInStyles.container}>

            <Image source={logo} style={SignInStyles.coverImg} contentFit={"contain"}/>

            <Text style={SignInStyles.text1}>SignIn</Text>
            <Text style={SignInStyles.text2}>Hello! Welcome to ImaginecoreX. Please fill your details to continue.</Text>

            <View style={SignInStyles.inputCon}>

                <View style={SignInStyles.inputGroup}>
                    <Text style={SignInStyles.inputLabel}>Mobile</Text>
                    <TextInput 
                    style={SignInStyles.input} inputMode="tel" 
                    value={mobile}
                    onChangeText={setMobile}
                    />
                </View>

                <View style={SignInStyles.inputGroup}>
                    <Text style={SignInStyles.inputLabel}>Password</Text>
                    <TextInput 
                    style={SignInStyles.input} secureTextEntry={true} 
                    value={password}
                    onChangeText={setPassword}
                    />
                </View>

            </View>

            <Pressable style={SignInStyles.pressable} onPress={()=>console.log(`Action Pressed: InputData => {mobile:${mobile},password:${password}}`)}>
                <Text style={SignInStyles.pressableText}>Sing In</Text>
            </Pressable>

        </View>
    )
}

export default SignInScreen;