import { View, Text } from 'react-native';
import Header from "../../../components/Profile/Header"
import ActionBar from "../../../components/chat/ActionBar"
import { Slot } from 'expo-router';
import { GlobalDynamics, Globals } from "../../../styles/globals"
import { useLocalSearchParams } from "expo-router";

export default function CreateMomentLayout() {
  const params = useLocalSearchParams();
  return (
    <View style={[GlobalDynamics.flex(1)]}>
      <Header title={params.tab}/>
      <Slot/>
    </View>
  );
}
