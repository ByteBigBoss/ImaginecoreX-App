import {useState} from "react"

import { Text, View } from "react-native"
import { GlobalDynamics, Globals } from "../../styles/globals";

const NotificationCard = () => {
    const [read, setRead] = useState(true);


    return (
        <View
            style={[
                GlobalDynamics.backgroundColor("#f7f7f7"),
                GlobalDynamics.borderRadius(10),
                GlobalDynamics.paddingVertical(16),
                GlobalDynamics.paddingHorizontal(14),
                GlobalDynamics.borderBottom({
                    width: 5,
                    style: "solid",
                    color: read?"#E5E5EA":"#66D673"
                })
            ]}
        >
            {/* LEFT */}
            <View
                style={[
                    Globals.flexRow,
                    Globals.alignCenter,
                    GlobalDynamics.columnGap(10)
                ]}
            >
                {/* USER PROFILE */}
                <View
                    style={[
                        GlobalDynamics.width(44),
                        GlobalDynamics.height(44),
                        GlobalDynamics.borderRadius(20),
                        GlobalDynamics.backgroundColor("#CDE"),
                        Globals.border
                    ]}
                >
                </View>

                {/* TITLE & TIME */}
               <View
               style={[
                   GlobalDynamics.flex(1)
               ]}
               >
               <View
                    style={[
                        Globals.flexRow,
                        Globals.alignCenter,
                        Globals.spaceBetween,
                    ]}
                >
                    <Text
                    style={[
                        GlobalDynamics.fontSize(15),
                        GlobalDynamics.fontWeight(700)
                    ]}
                    >Sahan Perera</Text>
                    <Text
                    style={[
                        GlobalDynamics.fontSize(12),
                        GlobalDynamics.opacity(0.6)
                    ]}
                    >2h ago</Text>
                </View>
                <Text
                style={[
                    GlobalDynamics.paddingTop(4),
                    GlobalDynamics.fontSize(14),
                    GlobalDynamics.color("#8B8B8B")
                ]}
                >New message from Sahan Perera</Text>
               </View>
            </View>

            {/* RIGHT */}
            <View>
            </View>

        </View>
    )
}

export default NotificationCard;