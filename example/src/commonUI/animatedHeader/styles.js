import {StyleSheet, Dimensions} from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const textViewHeight = 50;
export const headerBottomRadius = 50;
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#024aad',
    alignItems: 'center',
    zIndex: 5,
  },
  centerLogoWrapper: {
    position: 'absolute',
    bottom: textViewHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9ff',
    overflow: 'hidden',
  },
  centerLogo: {
    flex: 1,
  },
  welcomeTextWrapper: {
    position: 'absolute',
    top: 0,
    height: textViewHeight,
    justifyContent: 'center',
  },
  nameTextWrapper: {
    position: 'absolute',
    bottom: 0,
    height: textViewHeight,
    justifyContent: 'center',
  },
  text: {
    color: '#D9FAFB',
    // fontFamily: 'Festive-Regular',
  },
  textName: {
    color: '#D9FAFB',
    // fontFamily: 'Teko-Medium',
  },
  svgWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  svgContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
