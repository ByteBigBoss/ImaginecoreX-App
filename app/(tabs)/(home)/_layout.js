import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

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
        name="message"
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
        }}
      />


      <Tabs.Screen
        name="status"
        options={{
          title: 'Status',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={22} name={focused ? 'square' : 'square-outline'} color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="profile"
        options={{
          title: 'My Profile',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome size={22} name={focused ? 'user' : 'user-o'} color={color} />
          ),
        }}
      />

    </Tabs>
  )
}