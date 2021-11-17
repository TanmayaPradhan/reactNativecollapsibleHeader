import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, View} from 'react-native';
import AnimatedHeaderScreen from '@tanmaya_pradhan/animated-collapsible-header';

const Main = () => {
  const get_renderItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => alert(JSON.stringify(item))}
        style={[styles.card, styles.shadow]}
      />
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <AnimatedHeaderScreen
          headerLabel="Welcome"
          descLabel="React Native"
          headerStyle={{backgroundColor: '#024aad'}}
          renderItem={get_renderItem}
          listData={[1, 2, 3, 4, 5, 6, 7, 8]}
          borderSvgWidth={4}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#A439A8',
  },
  container: {
    backgroundColor: '#fff',
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
