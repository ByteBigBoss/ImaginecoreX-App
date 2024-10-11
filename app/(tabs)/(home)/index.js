import { useEffect, useState } from "react"
import { Text, View, Pressable, ActivityIndicator } from "react-native"
import { GlobalDynamics, Globals } from "../../../styles/globals"
import { FlashList } from "@shopify/flash-list"
import { StatusBar } from "expo-status-bar"
import { FontAwesome6 } from "@expo/vector-icons"
import { Image } from "expo-image"
import { router } from "expo-router"
import FriendsBar from "../../../components/common/FriendsBar"
import { API_URL, LOAD_CHAT_DATA_SERVLET, LOAD_FRIENDS_SERVLET } from "../../../lib/endpoints"
import AsyncStorage from "@react-native-async-storage/async-storage";

const Chat = () => {

    const [chatList, setChatList] = useState();
    const [friends, setFriends] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const userJson = await AsyncStorage.getItem("user");
            const user = JSON.parse(userJson);

            if (user) {
                const response = await fetch(API_URL + LOAD_CHAT_DATA_SERVLET + "?id=" + user.id);

                if (response.ok) {
                    const data = await response.json();
                    if (data.success) {

                        let chatArray = data.jsonChatArray;
                        // console.log(chatArray)
                        setChatList(chatArray);

                    } else {
                        console.log("CHAT DATA EMPTY!");
                    }
                }
            }

        }
        fetchData();
        setInterval(() => {
            fetchData();
        }, 10000);
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            const userJson = await AsyncStorage.getItem("user");
            const user = JSON.parse(userJson);

            if (user) {
                const response = await fetch(API_URL + LOAD_FRIENDS_SERVLET + "?id=" + user.id);

                if (response.ok) {
                    const data = await response.json();
                    if (data.success) {

                        setFriends(data.friend_list);
                    } else {
                        console.log("FRIENDS DATA EMPTY!");
                    }
                } else {
                    console.log("Error", "Failed to load friends data!");
                }
            }

        }
        fetchData()
    }, [])


    if (!chatList) {
        return (
            <View style={[
                GlobalDynamics.flex(1),
                Globals.center,
                GlobalDynamics.backgroundColor("#fafafa")
            ]}>
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <View
            style={[
                GlobalDynamics.flex(1),
                GlobalDynamics.width("100%"),
                GlobalDynamics.backgroundColor("#fff")
            ]}
        >
            <StatusBar hidden={false} />

            <View>
                <FriendsBar data={friends} />
            </View>

            <View
                style={[
                    GlobalDynamics.flex(1),
                    GlobalDynamics.width("100%"),
                    GlobalDynamics.backgroundColor("#fff")
                ]}
            >
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
                                    <Image
                                        style={[
                                            GlobalDynamics.width("100%"),
                                            GlobalDynamics.height("100%"),
                                            GlobalDynamics.borderRadius(10),
                                            Globals.objectCover
                                        ]}
                                        source={require("../../../assets/img/default.png")}
                                    />
                                    : <Text style={[
                                        GlobalDynamics.fontSize(18),
                                        GlobalDynamics.fontWeight(700)
                                    ]}>{item.other_user_avatar_letters}</Text>}
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
            </View>
        </View>
    )
}

export default Chat
