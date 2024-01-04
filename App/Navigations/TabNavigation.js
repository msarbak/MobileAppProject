import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Screen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation';

const Tab=createBottomTabNavigator();
export default function TabNavigation() {
  return (
   <Tab.Navigator screenOptions={{
    headerShown:false
   }}>
    <Tab.Screen name='Ana Sayfa' component={HomeScreenNavigation} 
    options={{
        tabBarIcon:({color,size})=>(
            <Ionicons name="home" size={size} color={color} />
        )
    }}
    />
    <Tab.Screen name='Profilim' 
    component={ProfileScreen} 
    options={{
        tabBarIcon:({color,size})=>(
            <MaterialIcons name="supervised-user-circle" size={size} color={color} />
        )
    }}/>
   </Tab.Navigator>
  )
}