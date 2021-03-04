import React, { useEffect } from 'react'
import { StyleSheet, FlatList, SafeAreaView, View, Image, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'
import { fetchImages, selectImage } from 'src/store/images/actions'
import { getErrorMessage, getImages, getSelectedImage, isLoading } from 'src/store/images/selector'
import { RootState } from 'src/store/reducers'
import { RootTabParamList } from 'src/utils/types'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoContent: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderColor: 'green',
    borderWidth: 1
  },
  imageContent: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderColor: 'red',
    borderWidth: 1
  }
})

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