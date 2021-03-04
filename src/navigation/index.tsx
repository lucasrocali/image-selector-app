import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootTabParamList } from 'src/utils/types'
import Home from 'src/screens/Home'

const MainTabNavigator = createBottomTabNavigator<RootTabParamList>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <MainTabNavigator.Navigator>
        <MainTabNavigator.Screen
          name="Home"
          component={Home}
        />
      </MainTabNavigator.Navigator>
    </NavigationContainer>
  )
}
