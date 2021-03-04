import React, { useEffect } from 'react'
import { FlatList, SafeAreaView, View, Image, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'
import { fetchImages, selectImage } from 'src/store/images/actions'
import { getErrorMessage, getImages, getSelectedImage, isLoading } from 'src/store/images/selector'
import { RootState } from 'src/store/reducers'
import { RootTabParamList } from 'src/utils/types'
import styles from './styles'

type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>

type HomeProps = {
  navigation: HomeScreenNavigationProp
  images: string[]
  loading: boolean
  errorMessage: string
  selectedImage: string
  fetchImages: () => void
  selectImage: (image: string) => void
}

function Home(props: HomeProps) {

  const {
    images,
    loading,
    errorMessage,
    selectedImage,
    fetchImages,
    selectImage
  } = props

  useEffect(() => {
    fetchImages()
  }, [])

  const onSelectedImage = (image: string): void => {
    selectImage(image)
  }

  const renderItem = ({ item: image }: { item: string }) => (
    <TouchableOpacity style={styles.imageContainer} onPress={() => onSelectedImage(image)}>
      <View style={styles.imageContent}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      {selectedImage === image ? <Text>{'Selected'}</Text> : null}
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.infoContent}>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  if (errorMessage) {
    return (
      <SafeAreaView style={styles.infoContent}>
        <Text>{errorMessage}</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        extraData={selectedImage}
      />
    </SafeAreaView>
  )
}

export default connect(
  (state: RootState) => ({
    images: getImages(state),
    loading: isLoading(state),
    errorMessage: getErrorMessage(state),
    selectedImage: getSelectedImage(state),
  }),
  {
    fetchImages,
    selectImage
  },
)(Home)