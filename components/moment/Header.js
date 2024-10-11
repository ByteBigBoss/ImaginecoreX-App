import { View, Text, Pressable, Image } from 'react-native';
import { GlobalDynamics, Globals } from "../../styles/globals"
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router"
import { API_URL } from "../../lib/endpoints";

const Header = ({ title }) => (
    <View style={[
        GlobalDynamics.backgroundColor("transparent"),
        GlobalDynamics.width("100%"),
        Globals.absolute,
        GlobalDynamics.top(0),
        GlobalDynamics.zIndex(100)
    ]}>
        <View style={[
            GlobalDynamics.height(104),
            GlobalDynamics.borderRadiusBottom(24),
            GlobalDynamics.paddingTop(24),
            GlobalDynamics.paddingHorizontal(16),
            Globals.alignCenter,
            GlobalDynamics.backgroundColor("white"),
            GlobalDynamics.dropShadow({ color: 'rgba(0, 0, 0, 0.5)', strength: 7, radius: 10, drop: 4 }),
            GlobalDynamics.zIndex(100),
            Globals.flexRow,
            GlobalDynamics.columnGap(16)
        ]}>

            {/* BACK */}
            <View>
                <Pressable onPress={() => {
                    router.back();
                }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
            </View>
            
            <Text
            style={[
                GlobalDynamics.fontSize(24),
                GlobalDynamics.fontWeight(700)
            ]}
            >{title}</Text>

        </View>
    </View>
);

export default Header