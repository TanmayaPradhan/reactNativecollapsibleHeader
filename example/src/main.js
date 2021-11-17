import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import AnimatedHeaderScreen from '@tanmaya_pradhan/animated-collapsible-header';

const Main = () => {
  const get_renderItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => alert(JSON.stringify(item))}
        style={[styles.card, styles.shadow]} />
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <AnimatedHeaderScreen
        headerLabel="Welcome"
        descLabel="React Native"
        headerStyle={{backgroundColor: '#024aad'}}
        renderItem={get_renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  card: {
    height: 100,
    margin: 10,
    backgroundColor: '#ceff',
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
export default Main;
