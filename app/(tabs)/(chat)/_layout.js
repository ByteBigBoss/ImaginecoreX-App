import { View, Text } from 'react-native';
import Header from "../../../components/chat/Header"
import ActionBar from "../../../components/chat/ActionBar"
import { Slot } from 'expo-router';
import { GlobalDynamics, Globals } from "../../../styles/globals"
import { useLocalSearchParams } from "expo-router";

export default function ChatLayout() {
  const params = useLocalSearchParams();
  return (
    <View style={[GlobalDynamics.flex(1)]}>
      <Header item={params}/>
      {/* <Body/> */}
      <Slot/>
      <ActionBar item={params}/>
    </View>
  );
}
