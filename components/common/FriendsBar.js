import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, ActivityIndicator } from 'react-native'
import { GlobalDynamics, Globals } from '../../styles/globals'
import { Image } from 'expo-image'
import { API_URL } from '../../lib/endpoints'

const FriendsBar = ({ data }) => {
    const [friends, setFriends] = useState([]); 

    useEffect(() => {
        if (Array.isArray(data)) {
            setFriends(data);
        }
    }, [data]);

    if (friends.length === 0) {
        return (
            <View style={[Globals.alignCenter, Globals.flexRow, GlobalDynamics.paddingHorizontal(16), GlobalDynamics.paddingVertical(16)]}>
                <ActivityIndicator size="small" color="#0000ff" />
            </View>
        );
    }

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[
                Globals.alignCenter,
                Globals.flexRow,
                GlobalDynamics.columnGap(16),
                GlobalDynamics.paddingHorizontal(16),
                GlobalDynamics.paddingVertical(26),
                GlobalDynamics.height("auto")
            ]}
        >
            {friends.map((friend, index) => (
                <View key={index} style={[Globals.relative]}>
                    {/* PROFILE */}
                    <View style={[
                        GlobalDynamics.width(60),
                        GlobalDynamics.height(60),
                        GlobalDynamics.borderRadius(30),
                        Globals.border,
                        Globals.center,
                        GlobalDynamics.backgroundColor("#CED")
                    ]}>
                        {friend.avatar ? (
                            <Image
                                style={[
                                    GlobalDynamics.width("100%"),
                                    GlobalDynamics.height("100%"),
                                    GlobalDynamics.borderRadius(10),
                                    Globals.objectCover
                                ]}
                                source={{ uri: API_URL + friend.data.friend.mobile + "avatar.png" }}
                            />
                        ) : (
                            <Text style={[
                                GlobalDynamics.fontSize(18),
                                GlobalDynamics.fontWeight(700),
                            ]}>
                                {friend.data.friend.firstName[0] + friend.data.friend.lastName[0]}
                            </Text>
                        )}
                    </View>

                    {/* STATUS INDICATOR */}
                    <View style={[
                        GlobalDynamics.width(16),
                        GlobalDynamics.height(16),
                        GlobalDynamics.borderRadius(20),
                        GlobalDynamics.backgroundColor(friend.data.friend.userStatus === 1 ? "#00E32C" : "#E30060"),
                        GlobalDynamics.border({
                            width: 2,
                            style: "solid",
                            color: "white"
                        }),
                        Globals.absolute,
                        GlobalDynamics.bottom(0),
                        GlobalDynamics.right(0)
                    ]}></View>
                </View>
            ))}
        </ScrollView>
    );
}

export default FriendsBar;
