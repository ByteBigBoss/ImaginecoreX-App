import React, { useState } from 'react';
import { Image, Pressable, Text, View, Switch } from "react-native"
import { GlobalDynamics, Globals } from "../../../styles/globals"
import ToggleSwitch from "toggle-switch-react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const Settings = () => {
    return (
        <View style={[
            GlobalDynamics.flex(1),
            GlobalDynamics.paddingTop(104),
            GlobalDynamics.backgroundColor("#fafafa"),
        ]}>


            {/* PROFILE PIC, NAME & MOBILE */}
            <View
                style={[
                    GlobalDynamics.paddingTop(30)
                ]}
            >
                {/* PIC */}
                <View style={[
                    GlobalDynamics.width(100),
                    GlobalDynamics.height(100),
                    GlobalDynamics.borderRadius(20),
                    GlobalDynamics.backgroundColor("white"),
                    GlobalDynamics.alignSelf("center"),
                    GlobalDynamics.border({
                        width: 1,
                        style: "solid",
                        color: "#DDD",
                    }),
                ]}>
                    {/* PROFILE PIC */}
                    <Image
                        source={{ uri: "https://example.com/profilepic.jpg" }}
                        style={[
                            GlobalDynamics.width("100%"),
                            GlobalDynamics.height("100%"),
                            GlobalDynamics.borderRadius(20),
                        ]}
                    />
                </View>

                {/* NAME */}
                <Text
                    style={[
                        GlobalDynamics.alignSelf("center"),
                        Globals.textCenter,
                        GlobalDynamics.fontSize(18),
                        GlobalDynamics.fontWeight(700),
                        GlobalDynamics.paddingTop(12)
                    ]}
                >Summer-Louise</Text>
                <Text
                    style={[
                        GlobalDynamics.alignSelf("center"),
                        Globals.textCenter,
                        GlobalDynamics.fontSize(16),
                        GlobalDynamics.color("#6E6E6E"),
                        GlobalDynamics.paddingTop(4)
                    ]}
                >0743837327</Text>
            </View>

            {/* CARDS */}
            <View
                style={[
                    GlobalDynamics.paddingHorizontal(16),
                    GlobalDynamics.paddingTop(40),
                    GlobalDynamics.rowGap(16)
                ]}
            >
                <AppearanceCard />
                <GeneralCard />
            </View>

        </View>
    )
}

export default Settings;


const AppearanceCard = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View
            style={[
                GlobalDynamics.paddingTop(12),
                GlobalDynamics.backgroundColor("white"),
                GlobalDynamics.borderRadius(10),
                GlobalDynamics.dropShadow({ color: 'rgba(0, 0, 0, 0.3)', strength: 2, radius: 6, drop: 2 }),

            ]}
        >
            {/* HEADING */}
            <View
                style={[
                    GlobalDynamics.paddingHorizontal(16),
                    GlobalDynamics.paddingBottom(12),
                    Globals.borderBottom
                ]}
            >
                <Text
                    style={[
                        GlobalDynamics.fontSize(20),
                        GlobalDynamics.fontWeight(700),
                        GlobalDynamics.color("#AC8400")
                    ]}
                >Appearance</Text>
                <Text
                    style={[
                        GlobalDynamics.fontSize(14),
                        GlobalDynamics.paddingTop(2),
                        GlobalDynamics.color("#6E6E6E")
                    ]}
                >Change theme of App</Text>
            </View>

            {/* CONTENT */}
            <View
                style={[
                    GlobalDynamics.paddingHorizontal(20),
                ]}
            >
                {/* CHANGE THEME => LIGHT | DARK */}
                <View
                    style={[
                        Globals.borderBottom,
                        GlobalDynamics.paddingVertical(16),
                        Globals.flexRow,
                        Globals.alignCenter,
                        Globals.spaceBetween,
                    ]}
                >
                    <Text>Dark Mode</Text>
                    <ToggleSwitch
                        isOn={isEnabled}
                        onColor="#00E32C"
                        offColor="#E5E5E5"
                        size="small"
                        onToggle={toggleSwitch}
                    />
                </View>

                {/* CHANGE CHAT BACKGROUND */}
                <View
                    style={[
                        GlobalDynamics.paddingVertical(16),
                        Globals.flexRow,
                        Globals.alignCenter,
                        Globals.spaceBetween,
                    ]}
                >
                    <Text>Chat Background</Text>
                    <Pressable
                        style={[
                            GlobalDynamics.width(40),
                            GlobalDynamics.height(40),
                            GlobalDynamics.borderRadius(10),
                            GlobalDynamics.backgroundColor("#AFD"),
                            GlobalDynamics.border({
                                width: 1,
                                style: "solid",
                                color: "#DDD",
                            }),
                            GlobalDynamics.dropShadow({ color: 'rgba(0, 0, 0, 0.4)', strength: 2, radius: 4, drop: 3 }),
                        ]}
                    ></Pressable>
                </View>
            </View>

        </View>
    )
}

const GeneralCard = () => {
  return(  
  <View
    style={[
        GlobalDynamics.paddingVertical(12),
        GlobalDynamics.backgroundColor("white"),
        GlobalDynamics.borderRadius(10),
        GlobalDynamics.dropShadow({ color: 'rgba(0, 0, 0, 0.3)', strength: 2, radius: 6, drop: 2 }),

    ]}
>
    {/* HEADING */}
    <View
        style={[
            GlobalDynamics.paddingHorizontal(16),
            GlobalDynamics.paddingBottom(12),
            Globals.borderBottom
        ]}
    >
        <Text
            style={[
                GlobalDynamics.fontSize(20),
                GlobalDynamics.fontWeight(700),
                GlobalDynamics.color("#00ACA5")
            ]}
        >General</Text>
        <Text
            style={[
                GlobalDynamics.fontSize(14),
                GlobalDynamics.paddingTop(2),
                GlobalDynamics.color("#6E6E6E")
            ]}
        >Take Action</Text>
    </View>

    {/* CONTENT */}
    <View
        style={[
            GlobalDynamics.paddingHorizontal(20),
        ]}
    >
        {/* CHANGE PASSWORD*/}
        <Pressable
            style={[
                Globals.borderBottom,
                GlobalDynamics.paddingVertical(16),
                Globals.flexRow,
                Globals.alignCenter,
            ]}
        >
            <Text>Change Password</Text>

        </Pressable>

        {/* LOG OUT */}
        <Pressable

            onPress={async () => {
                try {
                    await AsyncStorage.removeItem("user");
                    router.push("/")
                } catch (error) {
                    console.error("Failed to log out: ", error)
                }
            }}

            style={[
                GlobalDynamics.paddingVertical(16),
                Globals.flexRow,
                Globals.alignCenter,
                Globals.spaceBetween,
            ]}
        >
            <Text
                style={[
                    GlobalDynamics.color("#FF0000")
                ]}
            >Log Out</Text>
            <View
                style={[
                    GlobalDynamics.paddingTop(6)
                ]}
            >
                <AntDesign name="logout" size={24} color="#FF0000" />
            </View>
        </Pressable>
    </View>
</View>
)
}