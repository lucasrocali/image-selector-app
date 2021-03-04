import React from 'react'
import { SafeAreaView, Image } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'
import { getSelectedImage } from 'src/store/images/selector'
import { RootState } from 'src/store/reducers'
import { RootTabParamList } from 'src/utils/types'
import styles from './styles'

type SelectedImageScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'SelectedImage'>

type SelectedImageProps = {
  navigation: SelectedImageScreenNavigationProp
  selectedImage: string
}

function SelectedImage(props: SelectedImageProps) {

  const {
    selectedImage
  } = props


  return (
    <SafeAreaView style={styles.container}>
      {selectedImage ? <Image style={styles.image} source={{ uri: selectedImage }} /> : null}
    </SafeAreaView>
  )
}

export default connect(
  (state: RootState) => ({
    selectedImage: getSelectedImage(state),
  }),
  {},
)(SelectedImage)