import { useRef } from "react"
import { Alert, Pressable, ScrollView, Text, View } from 'react-native'
import { GlobalDynamics, Globals } from '../../../styles/globals'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MomentCard from '../../../components/common/MomentCard'
import MyFriendCard from "../../../components/Profile/MyFriendCard"
import NotificationCard from "../../../components/Profile/NotificationCard";
import { AntDesign } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const OtherUserProfile = () => {
    return (
        <View
            style={[
                GlobalDynamics.flex(1),
                GlobalDynamics.width("100%"),
                GlobalDynamics.backgroundColor("white"),
                GlobalDynamics.paddingTop(94)
            ]}
        >
            {/* TOP TAB NAVIGATOR */}

            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarItemStyle: { width: 120 },
                    tabBarStyle: {
                        backgroundColor: 'white',
                        elevation: 0, // Remove shadow in Android
                        shadowOpacity: 0, // Remove shadow in iOS
                    },
                    tabBarScrollEnabled: true,

                }}
            >
                <Tab.Screen name="Moments" component={MomentsTab} />
                <Tab.Screen name="Friends" component={FriendsTab} />

            </Tab.Navigator>



        </View>
    )
};

export default OtherUserProfile;


const MomentsTab = () => {
    const bottomSheetRef = useRef(null);

    return (
        <ScrollView
            style={[
                GlobalDynamics.flex(1),
                GlobalDynamics.width("100%"),
                GlobalDynamics.backgroundColor("white"),

            ]}
        >

            <View
                style={[
                    GlobalDynamics.paddingTop(35),
                    GlobalDynamics.flex(1),
                    GlobalDynamics.backgroundColor("white"),
                    GlobalDynamics.paddingBottom(30),

                ]}
            >
                {/* PROFILE IMAGE */}
                <View
                    style={[
                        GlobalDynamics.width(120),
                        GlobalDynamics.height(120),
                        GlobalDynamics.borderRadius(80),
                        GlobalDynamics.backgroundColor("white"),
                        GlobalDynamics.alignSelf("center"),
                        GlobalDynamics.border({
                            width: 5,
                            style: "solid",
                            color: "#E5E5EA"
                        })
                    ]}
                ></View>

                {/* PROFILE NAME AND TAGLINE */}
                <View style={[
                    GlobalDynamics.alignSelf("center"),
                    GlobalDynamics.paddingTop(10),
                ]}>
                    <Text style={[
                        Globals.textCenter,
                        GlobalDynamics.fontSize(20),
                        GlobalDynamics.fontWeight(700)
                    ]}>Summer-Louise</Text>
                    <Text style={[
                        Globals.textCenter,
                        GlobalDynamics.fontSize(13),
                        GlobalDynamics.paddingTop(2),
                        GlobalDynamics.opacity(0.8)

                    ]}>Never Give Up!</Text>
                </View>

                <Pressable
                    onPress={()=>Alert.alert("Clicked", "Add Friend")}
                    style={[
                        GlobalDynamics.alignSelf("center"),
                        GlobalDynamics.marginTop(10),
                        Globals.flexRow,
                        Globals.alignCenter,
                        GlobalDynamics.columnGap(4),
                        GlobalDynamics.paddingLeft(10),
                        GlobalDynamics.paddingRight(14),
                        GlobalDynamics.paddingVertical(6),
                        Globals.border,
                        GlobalDynamics.borderRadius(20),
                        GlobalDynamics.backgroundColor("#000")
                    ]}
                >
                    <AntDesign name="adduser" size={14} color="white" />
                    <Text style={[
                        GlobalDynamics.fontSize(12),
                        GlobalDynamics.fontWeight(500),
                        GlobalDynamics.color("#fff")
                    ]}
                    >Add Friend</Text>
                </Pressable>
            </View>

            <View style={GlobalDynamics.borderTop({ width: 8, style: "solid", color: "#E5E5EA82" })}>
                {["", "", ""].map((data, index) => (
                    <MomentCard key={index} onClick={() => bottomSheetRef.current?.open()} />
                ))}
            </View>
        </ScrollView>
    )
}

const FriendsTab = () => (
    <ScrollView
        style={[
            GlobalDynamics.flex(1),
            GlobalDynamics.width("100%"),
            GlobalDynamics.backgroundColor("white"),
        ]}
    >
        <Text
            style={[
                GlobalDynamics.alignSelf("center"),
                Globals.textCenter,
                GlobalDynamics.fontSize(16),
                GlobalDynamics.paddingTop(30),
                GlobalDynamics.color("#6A6A6A")
            ]}
        >6 Friends</Text>

        <View style={[
            GlobalDynamics.flex(1),
            GlobalDynamics.gap(10),
            GlobalDynamics.paddingHorizontal(16),
            GlobalDynamics.paddingVertical(30),
            Globals.flexRow,
            Globals.flexWrap,
            Globals.spaceBetween,
        ]}>
            {["", "", "", "", ""].map((data, index) => (
                <MyFriendCard key={index} />
            ))}
        </View>
    </ScrollView>
)