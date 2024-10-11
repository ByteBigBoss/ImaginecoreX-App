import { useEffect, useRef, useState } from "react"
import { Text, View, ScrollView, Button, ActivityIndicator } from 'react-native'
import { GlobalDynamics, Globals } from '../../../styles/globals'
import FriendsBar from '../../../components/common/FriendsBar'
import MomentCard from '../../../components/common/MomentCard'
import BSheet from "../../../components/common/BottomSheet"
import { getMoments } from "../../../services/getMoments"
import { getFriends } from "../../../services/getFriends"
import { StatusBar } from "expo-status-bar"

const Moments = () => {

  const [moments, setMoments] = useState()

  const bottomSheetRef = useRef(null);
  const [friends, setFriends] = useState();

  useEffect(()=>{
      const fetch = async ()=>{
          const f = await getFriends()

          if (f) {
              if(f.success){
                  setFriends(f.friend_list);
              }
          } else {

          }

      }
      fetch()
  },[])

  useEffect(()=>{
    const fetchMoments = async () => {
      
      const json = await getMoments();
      console.log(json)

      if(json){

        if(json.success){
          setMoments(json.moment_list);
        }

      }else{

      }

    }
    fetchMoments();
  },[])

  if(moments==null){
    return(
      <View style={[
        GlobalDynamics.flex(1),
        Globals.center,
        GlobalDynamics.backgroundColor("#fafafa")
    ]}>
      <ActivityIndicator/>
    </View>
    )
  }

  return (

    <View
      style={[
        GlobalDynamics.flex(1),
        GlobalDynamics.width("100%")
      ]}
    >
          <StatusBar hidden={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          GlobalDynamics.backgroundColor("#fafafa"),
        ]}
        style={[
        ]}
      >

        <FriendsBar data={friends}/>
        <View

          style={[
            GlobalDynamics.width("100%"),

            GlobalDynamics.borderTop({
              width: 8,
              style: "solid",
              color: "#E5E5EA82"
            })
          ]}
        >

          {moments.map((data, index) => (
            <MomentCard key={index} onClick={()=>bottomSheetRef.current?.open()} data={data}/>
          ))}
        </View>
      </ScrollView>


      {/* Render the BSheet component */}
      <BSheet ref={bottomSheetRef} >
        {/* Children content inside the Bottom Sheet */}
        <View>
          <Text>Awesome Bottom Sheet Content!</Text>
          <Button
            title="Close From Inside"
            onPress={() => bottomSheetRef.current?.close()}  // Close from within the child
          />
        </View>
      </BSheet>

    </View>
  )
}

export default Moments
