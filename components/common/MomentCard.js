import { useState } from "react"
import { Pressable, Text, View } from "react-native"
import { GlobalDynamics, Globals } from "../../styles/globals"
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';


const MomentCard = ({ onClick, data }) => {

    const [isSaved, setIsSaved] = useState(false);
    const [isLiked, setIsLiked] = useState(false);


    return (
        <View
            style={[
                GlobalDynamics.width("100%"),
                GlobalDynamics.paddingHorizontal(16),
                GlobalDynamics.paddingVertical(20),
                // GlobalDynamics.borderRadius(10),
                GlobalDynamics.backgroundColor("#fff"),
                GlobalDynamics.borderBottom({
                    width: 8,
                    style: "solid",
                    color: "#E5E5EA82"
                })
            ]}
        >

            {/* TOP */}
            <View
                style={[
                    Globals.flexRow,
                    Globals.spaceBetween,
                    Globals.alignCenter
                ]}
            >

                {/* LEFT */}
                <View
                    style={[
                        Globals.flexRow,
                        GlobalDynamics.columnGap(8)
                    ]}
                >
                    {/* PROFILE */}
                    <View style={[
                        GlobalDynamics.width(40),
                        GlobalDynamics.height(40),
                        GlobalDynamics.borderRadius(10),
                        Globals.border,
                        Globals.center,
                        GlobalDynamics.backgroundColor("#EDD")
                    ]}>

                        <Text style={[
                            GlobalDynamics.fontSize(12),
                            GlobalDynamics.fontWeight(600),
                        ]}>SS</Text>

                    </View>

                    {/* NAME & PUBLISHED DATE */}
                    <View
                        style={[

                        ]}
                    >
                        <Text
                            style={[
                                GlobalDynamics.fontSize(15),
                                GlobalDynamics.fontWeight(600)
                            ]}
                        >{data&&data.user.firstName + " " + data.user.lastName}</Text>
                        <Text
                            style={[
                                GlobalDynamics.fontSize(12),
                                GlobalDynamics.opacity(0.5)
                            ]}
                        >{data && data.created_at}</Text>
                    </View>

                </View>

                {/* RIGHT */}
                <Pressable onPress={onClick}>
                    <Feather name="more-horizontal" size={24} color="black" />
                </Pressable>

            </View>

            {/* TEXT */}
            <View
                style={[
                    GlobalDynamics.paddingTop(15),
                ]}
            >
                {/* TITLE */}
                <Text
                    style={[
                        GlobalDynamics.fontSize(18),
                        GlobalDynamics.fontWeight(600)
                    ]}
                >{data ? data.title : "NEW DAY!"}</Text>

                {/* DESCRIPTION */}
                <Text
                    style={[
                        GlobalDynamics.fontSize(16),
                        GlobalDynamics.paddingTop(5),
                        GlobalDynamics.opacity(0.8)
                    ]}
                >{data ? data.description : "Moment Description"}</Text>

            </View>

            {/* POST INDICATES */}
            <View
                style={[
                    GlobalDynamics.paddingTop(30),
                    GlobalDynamics.paddingBottom(15),
                    Globals.borderBottom,
                    Globals.flexRow,
                    Globals.spaceBetween
                ]}
            >
                {/* LIKES (HEARTS) */}
                <View
                    style={[
                        Globals.flexRow,
                        Globals.alignCenter,
                        GlobalDynamics.columnGap(4)
                    ]}
                >
                    <Ionicons name="heart" size={14} color="#FF2D55" />
                    <Text
                        style={[
                            GlobalDynamics.fontSize(12),
                            GlobalDynamics.fontWeight(600),
                            GlobalDynamics.opacity(0.6)
                        ]}
                    >326.54K</Text>
                </View>

                {/* SHARES  */}
                <View
                    style={[
                        Globals.flexRow,
                        Globals.alignCenter,
                        GlobalDynamics.columnGap(4)
                    ]}
                >
                    <Entypo name="forward" size={14} color="#00000080" />
                    <Text
                        style={[
                            GlobalDynamics.fontSize(12),
                            GlobalDynamics.fontWeight(600),
                            GlobalDynamics.opacity(0.6)
                        ]}
                    >326.54K</Text>
                </View>

                {/* COMMENTS */}
                <View
                    style={[
                        Globals.flexRow,
                        Globals.alignCenter,
                        GlobalDynamics.columnGap(4)
                    ]}
                >
                    <MaterialCommunityIcons name="comment-text-outline" size={14} color="#00000080" />
                    <Text
                        style={[
                            GlobalDynamics.fontSize(12),
                            GlobalDynamics.fontWeight(600),
                            GlobalDynamics.opacity(0.6)
                        ]}
                    >10.35K</Text>
                </View>

            </View>

            {/* ACTION BAR */}
            <View
                style={[
                    GlobalDynamics.paddingTop(20),
                    Globals.flexRow,
                    Globals.spaceBetween,
                    Globals.alignCenter
                ]}
            >
                <View
                    style={[
                        Globals.flexRow,
                        Globals.alignCenter,
                        GlobalDynamics.columnGap(20)
                    ]}
                >
                    {/* RIGHT */}
                    <Pressable onPress={() => setIsSaved((prev) => !prev)}>
                        <Ionicons name={isSaved ? "bookmark" : "bookmark-outline"} size={24} color={isSaved ? "#6200FF" : "#00000080"} />
                    </Pressable>
                    {/* RIGHT */}
                    <Pressable onPress={() => setIsLiked((prev) => !prev)}>
                        <Ionicons name={isLiked ? "heart" : "heart-outline"} size={24} color={isLiked ? "#FF2D55" : "#FF2D55"} />
                    </Pressable>
                    {/* RIGHT */}
                    <Pressable onPress={() => setIsSaved((prev) => !prev)}>
                        <Ionicons name={"share-outline"} size={24} color={"#00000080"} />
                    </Pressable>
                </View>

                {/* RIGHT */}
                <Pressable >
                    <MaterialCommunityIcons name={"comment-text-outline"} size={24} color={"#00000080"} />
                </Pressable>
            </View>
        </View>
    )
}

export default MomentCard
