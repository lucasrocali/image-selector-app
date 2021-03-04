import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'
import { fetchImages } from 'src/store/images/actions'
import { getImages } from 'src/store/images/selector'
import { RootState } from 'src/store/reducers'
import { RootTabParamList } from 'src/utils/types'

type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>

type HomeProps = {
  navigation: HomeScreenNavigationProp
  images: string[]
  fetchImages: () => void
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

function Home(props: HomeProps) {

  const { fetchImages } = props

  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <View style={styles.container}>
      <Text>{props.images}</Text>
    </View>
  )
}

export default connect(
  (state: RootState) => ({
    images: getImages(state),
  }),
  {
    fetchImages
  },
)(Home)