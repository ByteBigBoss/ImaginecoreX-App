import { Text, View } from "react-native"
import {GlobalDynamics, Globals} from "../../../styles/globals"

const EditProfile = ()=>{
    return (
        <View style={[
            GlobalDynamics.flex(1),
            GlobalDynamics.paddingTop(104),
            GlobalDynamics.backgroundColor("#fafafa"),
          ]}>
            <Text>EditProfile</Text>
        </View>
    )
}

export default EditProfile