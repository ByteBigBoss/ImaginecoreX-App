import { useState, useEffect } from "react"
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { GlobalDynamics, Globals } from "../../styles/globals"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { doSendChat } from "../../services/doSendChat";

const ActionBar = ({ item }) => {

    const [msg, setMsg] = useState("");
    const [showSend, setShowSend] = useState(false);

    return (
        <View style={[
            GlobalDynamics.height(60),
            GlobalDynamics.backgroundColor("white"),
            Globals.flexRow,
            Globals.alignCenter,
            GlobalDynamics.paddingHorizontal(16),
            GlobalDynamics.columnGap(16)

        ]}>
            <View style={[GlobalDynamics.flex(1), Globals.relative, Globals.justifyCenter]}>
                <TextInput
                    onChangeText={(text) => {
                        setMsg(text);
                        if (text.length == 0) {
                            setShowSend(false);
                        } else {
                            setShowSend(true);

                        }
                    }}
                    value={msg}
                    style={[
                        GlobalDynamics.width("100%"),
                        GlobalDynamics.height(44),
                        Globals.border,
                        GlobalDynamics.borderRadius(20),
                        GlobalDynamics.paddingLeft(38),
                        GlobalDynamics.paddingRight(80),
                        GlobalDynamics.backgroundColor("#f7f7f7"),
                    ]}
                    placeholder={"Type your message"}
                />

                {/* EMOJI PICKER */}
                <Pressable
                    style={[
                        Globals.center,
                        Globals.absolute,
                        GlobalDynamics.alignSelf("center"),
                        GlobalDynamics.left(10)
                    ]}
                    onPress={() => {
                        Alert.alert("Emoji Picker", "Choose Emoji");
                    }}
                >
                    <Fontisto name="smiley" size={20} color="black" />
                </Pressable>

                <View style={[
                    Globals.absolute,
                    GlobalDynamics.right(14),
                    Globals.flexRow,
                    Globals.alignCenter,
                    GlobalDynamics.columnGap(16)
                ]}>
                    {/* FILE PICKER */}
                    <Pressable
                        style={[
                            Globals.center,
                        ]}
                        onPress={() => {
                            Alert.alert("File Picker", "Choose File");
                        }}
                    >
                        <MaterialCommunityIcons name="paperclip" size={20} color="black" />
                    </Pressable>

                    {/* USE CAMERA */}
                    {showSend ?
                    "":
                    <Pressable
                        style={[
                            Globals.center,

                        ]}
                        onPress={() => {
                            Alert.alert("Use Camera", "Take Picture");
                        }}
                    >
                        <Feather name="camera" size={20} color="black" />
                    </Pressable>
}
                </View>
            </View>

            <View style={[
                GlobalDynamics.height(44),
                Globals.flexRow,

            ]}>

                {showSend ?
                    <Pressable
                        style={[
                            Globals.center,
                            Globals.border,
                            GlobalDynamics.height(44),
                            GlobalDynamics.width(44),
                            GlobalDynamics.borderRadius(20),
                            GlobalDynamics.backgroundColor("#742BFF"),
                        ]}
                        onPress={async () => {
                            const json = await doSendChat(item.other_user_id, msg);

                            if(json.success){
                                setMsg("");
                            }
                        }}
                    >
                        <Ionicons name="send" size={18} color="white" />
                    </Pressable>
                    : <Pressable
                        style={[
                            Globals.center,
                            Globals.border,
                            GlobalDynamics.height(44),
                            GlobalDynamics.width(44),
                            GlobalDynamics.borderRadius(20),
                            GlobalDynamics.backgroundColor("#742BFF"),
                        ]}
                        onPress={async () => {
                            Alert.alert("Use Mic", "Record your message")

                        }}
                    >
                        <Ionicons name="mic" size={18} color="white" />
                    </Pressable>}
            </View>
        </View>

    )
};

export default ActionBar;