import { View, Text } from 'react-native';
import { Slot } from 'expo-router';
import { GlobalDynamics, Globals } from "../../../styles/globals"
import { useLocalSearchParams } from "expo-router";
import OtherUserProfileHeader from '../../../components/Profile/OtherUserProfileHeader';

export default function OtherUserProfileLayout() {
  const params = useLocalSearchParams();
  return (
    <View style={[GlobalDynamics.flex(1)]}>
      <OtherUserProfileHeader item={params}/>
      {/* <Body/> */}
      <Slot/>
    </View>
  );
}
