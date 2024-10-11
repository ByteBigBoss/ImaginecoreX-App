import { View, Text, Pressable, Image } from 'react-native';
import { GlobalDynamics, Globals } from "../../styles/globals"
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router"
import { API_URL } from "../../lib/endpoints";
import { AntDesign } from '@expo/vector-icons';

const OtherUserProfileHeader = ({ item }) => (
    <View style={[
        GlobalDynamics.backgroundColor("transparent"),
        GlobalDynamics.width("100%"),
        Globals.absolute,
        GlobalDynamics.top(0),
        GlobalDynamics.zIndex(100)
    ]}>
        <View style={[
            GlobalDynamics.height(94),
            GlobalDynamics.paddingTop(24),
            GlobalDynamics.paddingHorizontal(16),
            Globals.alignCenter,
            GlobalDynamics.backgroundColor("white"),
            // GlobalDynamics.dropShadow({ color: 'rgba(0, 0, 0, 0.5)', strength: 7, radius: 10, drop: 4 }),
            GlobalDynamics.zIndex(100),
            Globals.flexRow,
            Globals.spaceBetween
        ]}>

            {/* BACK */}
            <View>
                <Pressable onPress={() => {
                    router.back();
                }}>
                    <Text
                        style={[
                            GlobalDynamics.fontSize(16),
                            GlobalDynamics.fontWeight(600),
                            GlobalDynamics.color("#4602FF")
                        ]}
                    >Back</Text>
                </Pressable>
            </View>

            {/* MIDDLE */}
            <View style={[
                Globals.alignCenter,
                Globals.flexRow,
                GlobalDynamics.columnGap(5)
            ]}>

                <View
                    style={[
                        GlobalDynamics.width(12),
                        GlobalDynamics.height(12),
                        GlobalDynamics.borderRadius(10),
                        GlobalDynamics.backgroundColor(item.other_user_status == 1 ? "#00E32C" : "#E30060")
                    ]}
                ></View>

                {/* STATUS */}
                <Text style={[
                    GlobalDynamics.fontSize(12),
                    GlobalDynamics.opacity(0.5)
                ]}>{item.other_user_status == 1 ? "Online" : "Offline"}</Text>

            </View>

            <Pressable
                onPress={() => {
                    router.push({
                        pathname: "/(chat)",
                        params: item
                    });
                }}
            >

                <AntDesign name={"message1"} size={24} color={"#00000080"} />

            </Pressable>

        </View>
    </View>
);

export default OtherUserProfileHeader