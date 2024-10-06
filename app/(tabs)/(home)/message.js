import { useEffect, useState } from "react"
import { ScrollView, Text, View, Pressable, Alert } from "react-native"
import { GlobalDynamics, Globals } from "../../../styles/globals"
import { LinearGradient } from "expo-linear-gradient"
import { getChatData } from "../../../services/getChatData"
import { FlashList } from "@shopify/flash-list"
import { StatusBar } from "expo-status-bar"
import { FontAwesome6 } from "@expo/vector-icons"
import { Image } from "expo-image"
import { router } from "expo-router"

const Chat = () => {

    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        const fetch = async () => {

            const json = await getChatData();

            if (json.success) {

                let chatArray = json.jsonChatArray;
                console.log(chatArray)
                setChatList(chatArray);

            } else {

            }

        }
        fetch();
    }, []);

    if (chatList == null) {
        return (
            <View>Loading</View>
        )
    }

    return (
        <LinearGradient end={{ x: 0.4, y: 0.3 }} colors={["#FFADAD6f", "#FFCEAD6f", "#fff"]} style={GlobalDynamics.flex(1)}>


            <FlashList

                data={chatList}
                renderItem={({ item }) =>
                    <Pressable
                        onPress={() => {
                            router.push({
                                pathname: "/(chat)",
                                params: item
                            });
                        }}

                        style={[
                            GlobalDynamics.width("100%"),
                            GlobalDynamics.height(80),
                            GlobalDynamics.backgroundColor("white"),
                            GlobalDynamics.borderRadius(0),

                            GlobalDynamics.paddingHorizontal(12),
                            Globals.flexRow,
                            GlobalDynamics.columnGap(14),
                            Globals.justifyCenter,
                            Globals.alignCenter
                        ]}>
                        {/* AVATAR */}
                        <View
                            style={[
                                GlobalDynamics.width(60),
                                GlobalDynamics.height(60),
                                GlobalDynamics.borderRadius(10),
                                GlobalDynamics.backgroundColor("#EDE"),
                                GlobalDynamics.border({
                                    width: 2,
                                    style: "solid",
                                    color: item.other_user_status == 1 ? "#5A02FF" : "#0000001f"
                                }),
                                Globals.center,
                                Globals.relative
                            ]}
                        >
                            {item.avatar_image_found ?
                                <Image />
                                : <Text>{item.other_user_avatar_letters}</Text>}
                            {/* STATUS INDICATOR */}
                            <View style={[
                                GlobalDynamics.width(18),
                                GlobalDynamics.height(18),
                                GlobalDynamics.borderRadius(20),
                                GlobalDynamics.backgroundColor(item.other_user_status == 1 ? "#00E33C" : "#E30060"),
                                GlobalDynamics.border({
                                    width: 2,
                                    style: "solid",
                                    color: "white"
                                }),
                                Globals.absolute,
                                GlobalDynamics.bottom(-5),
                                GlobalDynamics.right(-5)
                            ]}
                            ></View>
                        </View>
                        {/* CONTENT */}
                        <View
                            style={[
                                GlobalDynamics.flex(1),
                                Globals.justifyCenter,
                                GlobalDynamics.gap(4)
                            ]}
                        >
                            <View
                                style={[
                                    Globals.flexRow,
                                    Globals.spaceBetween
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalDynamics.fontSize(16),
                                        GlobalDynamics.fontWeight("700")
                                    ]}
                                >{item.other_user_name}</Text>
                                <Text
                                    style={[
                                        GlobalDynamics.fontSize(10),
                                        GlobalDynamics.fontWeight("500"),
                                        GlobalDynamics.opacity(0.8)
                                    ]}
                                >{item.dateTime}</Text>
                            </View>

                            <View
                                style={[
                                    Globals.flexRow,
                                    Globals.alignCenter,
                                    GlobalDynamics.columnGap(6),
                                ]}
                            >
                                <FontAwesome6
                                    name="check"
                                    size={12}
                                    color="green"
                                />
                                <Text 
                                style={[
                                    GlobalDynamics.opacity(0.8)
                                ]}
                                >{item.message}</Text>
                            </View>
                        </View>
                    </Pressable>
                }
                estimatedItemSize={200}
            />


        </LinearGradient>
    )
}

export default Chat
