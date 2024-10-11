import { useState, useMemo, useEffect } from "react"
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { GlobalDynamics, Globals } from "../../../styles/globals"
import { getChatHistory } from "../../../services/getChatHisotry";
import { useLocalSearchParams } from "expo-router";
import { FlashList } from "@shopify/flash-list";
import Ionicons from '@expo/vector-icons/Ionicons';
import Socket from "../../../services/socket";
import AsyncStorage from "@react-native-async-storage/async-storage";


const ChatBody = () => {
  //GET OTHER USER ID FROM URL PARAMS
  const params = useLocalSearchParams();

  //STORE CHAT ARRAY
  const [chatArray, setChatArray] = useState([]);


  //FETCH CHAT ARRAY FROM SERVER
  useEffect(() => {
    const ws = new Socket(process.env.EXPO_PUBLIC_SOCKET_ENDPOINT);
    console.log(params)
    ws.connect();


    // const fetchData = async () => {
    //   const json = await getChatHistory(params.other_user_id);

    //   if (json) {
    //     console.log(json);
    //     setChatArray(json)
    //   }
    // }
    // fetchData();

    // const intervalId = setInterval(() => {
    //   fetchData()
    // }, 5000);

    // return ()=> clearInterval(intervalId);


    const loadChatHistory = async () => {
      try {
        let userJson = await AsyncStorage.getItem("user");
        let user = JSON.parse(userJson);


        if (user) {
          const data = {
            action: "LoadChatHistory",
            logged_user_id: user.id,
            other_user_id: params.other_user_id
          };

          ws.socket.onopen = () => {
            ws.sendMessage(JSON.stringify(data));

          }


          ws.socket.onmessage = (event) => {
            try {
              const parsedData = JSON.parse(event.data);
              if (Array.isArray(parsedData)) {
                setChatArray(parsedData);
                console.log("CHAT ARRAY: ", parsedData);
              } else {
                console.error("Unexpected data format:", parsedData);
              }
            } catch (error) {
              console.error("Error parsing WebSocket data: ", error);
            }
          };
        }

      } catch (error) {
        console.log("Error fetching user from AsyncStorage: ", error)
      }
    }

    loadChatHistory();

    const intervalId = setInterval(() => {
      loadChatHistory();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <KeyboardAvoidingView style={[
      GlobalDynamics.flex(1),
      GlobalDynamics.paddingTop(94),
      GlobalDynamics.backgroundColor("#fafafa"),
    ]}>


      <View style={[
        GlobalDynamics.flex(1),
        GlobalDynamics.width("100%"),

      ]}>
        <FlashList
          data={chatArray}
          contentContainerStyle={{ paddingTop: 10 }}
          renderItem={({ item }) =>
            <View style={[
              GlobalDynamics.width("100%"),
              GlobalDynamics.height(80),
              GlobalDynamics.paddingHorizontal(16),
            ]}>
              <View
                style={[
                  GlobalDynamics.alignItems(item.side == "left" ? "flex-start" : "flex-end"),
                ]}
              >
                <View>
                  <View style={[
                    GlobalDynamics.paddingHorizontal(16),
                    GlobalDynamics.paddingVertical(12),
                    GlobalDynamics.backgroundColor(item.side == "left" ? "#fff" : "#742BFF"),
                    GlobalDynamics.borderRadiusTop(10),
                    item.side == "left" ? GlobalDynamics.borderRadiusBottomRight(10) : GlobalDynamics.borderRadiusBottomLeft(10),
                    Globals.border,

                  ]}>
                    <Text
                      style={[
                        GlobalDynamics.fontWeight(item.side == "left" ? 400 : 600),
                        GlobalDynamics.color(item.side == "left" ? "#000" : "#fff")
                      ]}
                    >{item.message}</Text>
                  </View>
                  <View
                    style={[
                      Globals.flexRow,
                      Globals.alignCenter,
                      GlobalDynamics.paddingTop(6),
                      GlobalDynamics.columnGap(8),
                      GlobalDynamics.alignSelf(item.side == "left" ? "flex-start" : "flex-end")
                    ]}
                  >
                    <Text
                      style={[
                        GlobalDynamics.fontSize(10),
                        GlobalDynamics.color("#5D5D5D"),
                      ]}
                    >{item.datetime}</Text>
                    {item.side == "left" ? "" :
                      <Ionicons name="checkmark-done" size={15} color="black" />
                    }
                  </View>
                </View>
              </View>
            </View>
          }
          estimatedItemSize={1}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default ChatBody