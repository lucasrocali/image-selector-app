import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootTabParamList } from 'src/utils/types'
import Home from 'src/screens/Home'
import SelectedImage from 'src/screens/SelectedImage'

const MainTabNavigator = createBottomTabNavigator<RootTabParamList>()

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <MainTabNavigator.Navigator>
        <MainTabNavigator.Screen
          name='Home'
          component={Home}
        />
        <MainTabNavigator.Screen
          name='SelectedImage'
          component={SelectedImage}
        />
      </MainTabNavigator.Navigator>
    </NavigationContainer>
  )
}
