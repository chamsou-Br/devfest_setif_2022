import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../shared/constant'
const tab = createBottomTabNavigator()
const MainNavigator = () => {
    const Tabs =[
        {name : "home",component : Home , icon : "home"},
        {name : "search",component : Search , icon : "search"},
        {name : "profil",component : Profile , icon : "user"},
    ]
  return (
    <NavigationContainer>
        <tab.Navigator screenOptions={{ headerShown: false ,tabBarShowLabel : false}}>
            {Tabs.map((item,index) => {
                return(
                    <tab.Screen key={index} component={item.component} name={item.name}   options={{
                        tabBarIcon: ({ focused }) => {
                          return (
                            <Icon
                              // icon={name}
                              name={item.icon}
                              size={16}
                              style={{
                                color: focused ? colors.primary : "#758193",
                              }}
                            />
                          );
                        },
                      }} />
                )
            })}

        </tab.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator

