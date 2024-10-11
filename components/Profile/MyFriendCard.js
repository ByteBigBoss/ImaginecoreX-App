import { useState } from "react"
import { Pressable, Text, View } from "react-native"
import { GlobalDynamics, Globals } from "../../styles/globals"
import { Ionicons, FontAwesome6, AntDesign } from "@expo/vector-icons"
import { router } from "expo-router"

const MyFriendCard = () => {
    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <View
            style={[
                GlobalDynamics.width("48%"),
                GlobalDynamics.backgroundColor("#f7f7f7"),
                GlobalDynamics.borderRadius(10),
                GlobalDynamics.paddingVertical(20)
            ]}
        >

            <View style={[
                Globals.relative,
                GlobalDynamics.alignSelf("center")
            ]}>
                {/* PROFILE */}
                <View style={[
                    GlobalDynamics.width(60),
                    GlobalDynamics.height(60),
                    GlobalDynamics.borderRadius(30),
                    GlobalDynamics.border({
                        width: 2,
                        style: "solid",
                        color: "#D8D8D8",
                    }),
                    Globals.center,
                    GlobalDynamics.backgroundColor("#CED")
                ]}>

                    <Text style={[
                        GlobalDynamics.fontSize(18),
                        GlobalDynamics.fontWeight(700),
                    ]}>AA</Text>

                </View>

                {/* STATUS INDICATOR */}
                <View style={[
                    GlobalDynamics.width(16),
                    GlobalDynamics.height(16),
                    GlobalDynamics.borderRadius(20),
                    GlobalDynamics.backgroundColor("#E30060"),
                    GlobalDynamics.border({
                        width: 2,
                        style: "solid",
                        color: "white"
                    }),
                    Globals.absolute,
                    GlobalDynamics.bottom(0),
                    GlobalDynamics.right(0)
                ]}
                ></View>
            </View>

            {/* NAME */}
            <Text
                style={[
                    Globals.textCenter,
                    GlobalDynamics.paddingTop(12),
                    GlobalDynamics.fontSize(14),
                    GlobalDynamics.fontWeight(600),
                    GlobalDynamics.color("#656565")
                ]}
            >Ashen Bandara</Text>

            {/* ACTION BAR */}
            <View
                style={[
                    Globals.flexRow,
                    Globals.alignCenter,
                    GlobalDynamics.columnGap(20),
                    GlobalDynamics.alignSelf("center"),
                    GlobalDynamics.paddingTop(20)
                ]}
            >
                {/* RIGHT */}
                <Pressable
                    onPress={() => {
                        router.push({
                            pathname: "/(oup)",
                            // params: item
                        });
                    }}

                >
                    <FontAwesome6 name={"user-circle"} size={24} color={"#00000080"} />
                </Pressable>
                {/* RIGHT */}
                <Pressable onPress={() => setIsFavourite((prev) => !prev)}>
                    <Ionicons name={isFavourite ? "heart" : "heart-outline"} size={24} color={isFavourite ? "#6200FF" : "#894AFF"} />
                </Pressable>
                {/* RIGHT */}
                <Pressable onPress={() => router.push("/(chat)")}>
                    <AntDesign name={"message1"} size={24} color={"#00000080"} />
                </Pressable>
            </View>
        </View>
    )
}

export default MyFriendCard