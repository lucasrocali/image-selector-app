import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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