import { useState, useMemo, useEffect } from "react"
import { View, Text, ScrollView } from 'react-native';
import { GlobalDynamics, Globals } from "../../../styles/globals"
import { getChatHistory } from "../../../services/getChatHisotry";
import { useLocalSearchParams } from "expo-router";
import { FlashList } from "@shopify/flash-list";

const ChatBody = () => {
  //GET OTHER USER ID FROM URL PARAMS
  const params = useLocalSearchParams();

  //STORE CHAT ARRAY
  const [chatArray, setChatArray] = useState([]);

  //FETCH CHAT ARRAY FROM SERVER
  useEffect(() => {
    console.log(params)
    const fetchData = async () => {
      const json = await getChatHistory(params.other_user_id);

      if (json) {
        console.log(json);
        setChatArray(json)
      }
    }
    fetchData();

  }, [])

  return (
    <ScrollView style={[
      GlobalDynamics.flex(1),
      GlobalDynamics.paddingTop(104),
      GlobalDynamics.zIndex(50),
      GlobalDynamics.backgroundColor("white")
    ]}>

      <View style={{ flex: 1, width: '100%' }}>
        <FlashList
          data={chatArray}

          renderItem={({ item }) =>
            <View style={[
              GlobalDynamics.width("100%"),
              GlobalDynamics.height(80),
            ]}>
              <View
                style={[
                  GlobalDynamics.alignItems(item.side=="left"?"flex-start":"flex-end"),
                  GlobalDynamics.backgroundColor("red")
                ]}
              >
                <Text>{item.message}</Text>
              </View>
            </View>
          }
          estimatedItemSize={200}
        />
      </View>
    </ScrollView>
  )
}

export default ChatBody