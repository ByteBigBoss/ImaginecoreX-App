import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, View } from 'react-native'
import { router } from "expo-router";
import { Globals, GlobalDynamics } from "../../../styles/globals"

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        height: 54,
        paddingBottom: 5
      },
      tabBarLabelStyle: {
      },
      tabBarIconStyle: {
        marginTop: 5, // Space above the icons
      },
      tabBarActiveTintColor: '#6C00FF'
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons size={22} name={focused ? 'chat' : 'chat-outline'} color={color} />
          ),
          headerShown: true,
          headerTitle: "TalkioX",
          headerStyle: {
            backgroundColor: "#fff",
            height: 100,
            borderBottomWidth: 1,
            borderBottomColor: "#0000001f",
          },
          headerTintColor: "#000", // Text color
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 }, // Text style 

        }}
      />
      <Tabs.Screen
        name="moments"
        options={{
          title: 'Moments',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={22} name={focused ? 'rocket' : 'rocket-outline'} color={color} />
          ),
          headerTintColor: "#000", // Text color
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 }, // Text style 
          headerRight: () => (
            <Pressable onPress={() => router.push("(create)")}>
              <Ionicons name="create-outline" size={24} color="black" style={{ marginRight: 15 }} />
            </Pressable>
          ),
        }}
      />


      <Tabs.Screen
        name="status"
        options={{
          title: 'Status',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={22} name={focused ? 'square' : 'square-outline'} color={color} />
          ),
          href:null
        }}
        
      />


      <Tabs.Screen
        name="profile"
        options={{
          title: 'My Profile',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome size={22} name={focused ? 'user' : 'user-o'} color={color} />
          ),
          headerTintColor: "#000", // Text color
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 }, // Text style 
          headerRight: () => (
            <View
              style={[
                Globals.flexRow,
                Globals.alignCenter,
                GlobalDynamics.columnGap(6)
              ]}
            >
              <Pressable onPress={() => router.push({
                pathname: "/(profile)/edit",
                params: {tab:"Edit"}
              })}>
                <MaterialCommunityIcons name="pencil-outline" size={24} color="black" style={{ marginRight: 15 }} />
              </Pressable>
              <Pressable onPress={() => router.push({
                pathname: "/(profile)",
                params: {tab:"Settings"}
              })}>
                <Ionicons name="settings-outline" size={24} color="black" style={{ marginRight: 15 }} />
              </Pressable>
            </View>
          ),
        }}
      />

    </Tabs>
  )
}