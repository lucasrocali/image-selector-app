import React from 'react'
import { SafeAreaView, Image, Text } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'
import { getPreviousSelectedImage } from 'src/store/images/selector'
import { RootState } from 'src/store/reducers'
import { RootTabParamList } from 'src/utils/types'
import styles from './styles'

type PreviousImageScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'PreviousImage'>

type PreviousImageProps = {
  navigation: PreviousImageScreenNavigationProp
  previousImage: string
}

function PreviousImage(props: PreviousImageProps) {

  const {
    previousImage
  } = props


  return (
    <SafeAreaView style={styles.container}>
      {previousImage ? <Image style={styles.image} source={{ uri: previousImage }} /> : null}
    </SafeAreaView>
  )
}

export default connect(
  (state: RootState) => ({
    previousImage: getPreviousSelectedImage(state),
  }),
  {},
)(PreviousImage)