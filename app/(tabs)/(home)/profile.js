import { useEffect, useRef, useState } from "react"
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { GlobalDynamics, Globals } from '../../../styles/globals'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MomentCard from '../../../components/common/MomentCard'
import MyFriendCard from "../../../components/Profile/MyFriendCard"
import NotificationCard from "../../../components/Profile/NotificationCard";
import { getProfile } from "../../../services/getProfile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { API_URL, LOAD_PROFILE_SERVLET, LOAD_USER_MOMENTS_SERVLET } from "../../../lib/endpoints";
import { StatusBar } from "expo-status-bar";

const Tab = createMaterialTopTabNavigator();

const MyProfile = () => {

  return (

    <View
      style={[
        GlobalDynamics.flex(1),
        GlobalDynamics.width("100%"),
        GlobalDynamics.backgroundColor("white")
      ]}
    >
      {/* TOP TAB NAVIGATOR */}
      <StatusBar hidden={false} />
      <Tab.Navigator
        initialRouteName="Moments"
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: { width: 120 },
          tabBarStyle: {
            backgroundColor: 'white',
            elevation: 0, // Remove shadow in Android
            shadowOpacity: 0, // Remove shadow in iOS
          },
          tabBarScrollEnabled: true,

        }}
      >

        <Tab.Screen
          name="Moments"
          component={MomentsTab}
        />
        <Tab.Screen name="My Friends" component={MyFriendsTab} />
        <Tab.Screen name="Notifications" component={NotificationsTab} />
        <Tab.Screen name="Saved" component={SavedTab} />
      </Tab.Navigator>



    </View>

  )
}

export default MyProfile;

const MomentsTab = () => {

  const [moments, setMoments] = useState();
  const [mLoading, setMLoading] = useState(false);
  const [profile, setProfile] = useState();
  const [pLoading, setPLoading] = useState(false);


  const bottomSheetRef = useRef(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setPLoading(true)

      const userJson = await AsyncStorage.getItem("user");
      const user = JSON.parse(userJson);
      const response = await fetch(API_URL + LOAD_PROFILE_SERVLET + "?id=" + user.id);

      if (response.ok) {
        const data = await response.json();
        setProfile(JSON.parse(data.profile));
        setPLoading(false);
        console.log("PROFILE=>PROFILE DATA: ", JSON.parse(data.profile));
      }
    }
    fetchProfile()
  }, [])

  useEffect(() => {

    const fetchMoments = async () => {

      setMLoading(true)
      const userJson = await AsyncStorage.getItem("user");
      const user = JSON.parse(userJson);

      const response = await fetch(API_URL + LOAD_USER_MOMENTS_SERVLET + "?id=" + user.id);

      if (response.ok) {
        const data = await response.json();
        setMoments(data.moment_list);
        setMLoading(false);
        console.log("PROFILE=>MOMENTS: ", data.moment_list);
      }

    }
    fetchMoments()

  }, [])

  return (
    <ScrollView
      style={[
        GlobalDynamics.flex(1),
        GlobalDynamics.width("100%"),
        GlobalDynamics.backgroundColor("white"),

      ]}
    >

      <View
        style={[
          GlobalDynamics.paddingTop(35),
          GlobalDynamics.flex(1),
          GlobalDynamics.backgroundColor("white"),

        ]}
      >
        {/* PROFILE IMAGE */}
        <View
          style={[
            GlobalDynamics.width(120),
            GlobalDynamics.height(120),
            GlobalDynamics.borderRadius(80),
            GlobalDynamics.backgroundColor("white"),
            GlobalDynamics.alignSelf("center"),
            GlobalDynamics.border({
              width: 5,
              style: "solid",
              color: "#E5E5EA"
            })
          ]}
        >
          <Image
            style={[
              GlobalDynamics.width("100%"),
              GlobalDynamics.height("100%"),
              GlobalDynamics.borderRadius(80),
              Globals.objectCover
            ]}
            source={require("../../../assets/img/default.png")}
          />
        </View>

        {/* PROFILE NAME AND TAGLINE */}
        {profile ? (
          <View style={[
            GlobalDynamics.alignSelf("center"),
            GlobalDynamics.paddingTop(10),
            GlobalDynamics.paddingBottom(30)
          ]}>
            <Text style={[
              Globals.textCenter,
              GlobalDynamics.fontSize(20),
              GlobalDynamics.fontWeight(700)
            ]}>{profile.user.firstName + " " + profile.user.lastName}</Text>
            <Text style={[
              Globals.textCenter,
              GlobalDynamics.fontSize(13),
              GlobalDynamics.paddingTop(2),
              GlobalDynamics.opacity(0.8)

            ]}>{profile.tagline}</Text>
          </View>
        )
          :
          (
            <View
              style={[
                GlobalDynamics.paddingVertical(16)
              ]}
            >
              <ActivityIndicator />
            </View>
          )
        }
      </View>

      <View style={GlobalDynamics.borderTop({ width: 8, style: "solid", color: "#E5E5EA82" })}>
        {moments ?
          moments.map((data, index) => (
            <MomentCard key={index} onClick={() => bottomSheetRef.current?.open()} data={data} />
          ))
          :
          <View
            style={[
              Globals.center,
              GlobalDynamics.paddingTop(40),
            ]}
          >
            {mLoading ?
              <ActivityIndicator />
              :
              <Text
                style={[
                  GlobalDynamics.fontSize(14),
                  GlobalDynamics.fontWeight(500),
                  GlobalDynamics.opacity(0.6)
                ]}
              >Post Your First Moment</Text>
            }
          </View>
        }
      </View>
    </ScrollView>
  )
}

const MyFriendsTab = () => (
  <ScrollView
    style={[
      GlobalDynamics.flex(1),
      GlobalDynamics.width("100%"),
      GlobalDynamics.backgroundColor("white"),
    ]}
  >
    <Text
      style={[
        GlobalDynamics.alignSelf("center"),
        Globals.textCenter,
        GlobalDynamics.fontSize(16),
        GlobalDynamics.paddingTop(30),
        GlobalDynamics.color("#6A6A6A")
      ]}
    >6 Friends</Text>

    <View style={[
      GlobalDynamics.flex(1),
      GlobalDynamics.gap(10),
      GlobalDynamics.paddingHorizontal(16),
      GlobalDynamics.paddingVertical(30),
      Globals.flexRow,
      Globals.flexWrap,
      Globals.spaceBetween,
    ]}>
      {["", "", "", "", ""].map((data, index) => (
        <MyFriendCard key={index} />
      ))}
    </View>
  </ScrollView>
)

const NotificationsTab = () => (
  <ScrollView
    style={[
      GlobalDynamics.flex(1),
      GlobalDynamics.width("100%"),
      GlobalDynamics.backgroundColor("white"),

    ]}
  >
    <View style={[
      GlobalDynamics.paddingVertical(20),
      GlobalDynamics.paddingHorizontal(16),
      GlobalDynamics.rowGap(8)
    ]}>
      {["", "", "", "", "", "", "", "", ""].map((data, index) => (
        <NotificationCard key={index} />
      ))}
    </View>
  </ScrollView>
)

const SavedTab = () => (
  <ScrollView
    style={[
      GlobalDynamics.flex(1),
      GlobalDynamics.width("100%"),
      GlobalDynamics.backgroundColor("white"),
      ,]}
  >
    <View style={GlobalDynamics.borderTop({ width: 8, style: "solid", color: "#E5E5EA82" })}>
      {["", "", ""].map((data, index) => (
        <MomentCard key={index} onClick={() => bottomSheetRef.current?.open()} />
      ))}
    </View>
  </ScrollView>
)