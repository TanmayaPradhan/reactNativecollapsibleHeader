import {StyleSheet} from 'react-native';

export const cardHeight = 100;
export const cardMargin = 16;
export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  renderItemContainer: {
    padding: 0,
  },
  row: {
    height: cardHeight,
    margin: cardMargin,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
});
