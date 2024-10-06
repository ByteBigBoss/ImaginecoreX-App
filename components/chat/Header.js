import { View, Text, Pressable, Image } from 'react-native';
import { GlobalDynamics, Globals } from "../../styles/globals"
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router"
import { API_URL } from "../../lib/endpoints";

const Header = ({ item }) => (
    <View style={[
        GlobalDynamics.backgroundColor("transparent"),
        GlobalDynamics.width("100%"),
        Globals.absolute,
        GlobalDynamics.top(0),
        GlobalDynamics.zIndex(100)
    ]}>
        <View style={[
            GlobalDynamics.height(94),
            GlobalDynamics.borderRadiusBottom(24),
            GlobalDynamics.paddingTop(24),
            GlobalDynamics.paddingHorizontal(16),
            Globals.alignCenter,
            GlobalDynamics.backgroundColor("white"),
            GlobalDynamics.dropShadow({ color: 'rgba(0, 0, 0, 0.5)', strength: 7, radius: 10, drop: 4 }),
            GlobalDynamics.zIndex(100),
            Globals.flexRow,
            Globals.spaceBetween
        ]}>

            {/* BACK */}
            <View>
                <Pressable onPress={() => {
                    router.back();
                }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
            </View>

            {/* MIDDLE */}
            <View style={[
                Globals.alignCenter
            ]}>
                {/* NAME */}
                <Text style={[
                    GlobalDynamics.fontSize(15),
                    GlobalDynamics.fontWeight(600)
                ]}>{item.other_user_name}</Text>

                {/* STATUS */}
                <Text style={[
                    GlobalDynamics.fontSize(12),
                    GlobalDynamics.opacity(0.5)
                ]}>{item.other_user_status == 1 ? "Online" : "Offline"}</Text>

            </View>

            <View style={[
                Globals.relative
            ]}>
                {/* PROFILE */}
                <View style={[
                    GlobalDynamics.width(40),
                    GlobalDynamics.height(40),
                    GlobalDynamics.borderRadius(20),
                    Globals.border,
                    Globals.center,
                    GlobalDynamics.backgroundColor(item.avatar_image_found == "true" ? "" : "#CED")
                ]}>
                    {item.avatar_image_found == "true" ?
                        <Image source={API_URL + `/user/${item.other_user_mobile}/avatar.png`} style={[
                            GlobalDynamics.width(40),
                            GlobalDynamics.height(40),
                            GlobalDynamics.borderRadius(20),
                        ]} />
                        :
                        <Text style={[
                            GlobalDynamics.fontSize(12),
                            GlobalDynamics.fontWeight(600),
                        ]}>{item.other_user_avatar_letters}</Text>
                    }
                </View>

                {/* STATUS INDICATOR */}
                <View style={[
                    GlobalDynamics.width(16),
                    GlobalDynamics.height(16),
                    GlobalDynamics.borderRadius(20),
                    GlobalDynamics.backgroundColor(item.other_user_status == 1 ? "#00E33C" : "#E30060"),
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

        </View>
    </View>
);

export default Header