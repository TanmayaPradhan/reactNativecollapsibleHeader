import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import AnimatedHeaderScreen from './screens/AnimatedHeaderScreen';

const Main = () => {
  const get_renderItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => alert(JSON.stringify(item))}
        style={styles.card} />
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <AnimatedHeaderScreen
        headerLabel="Welcome"
        descLabel="React Native"
        headerStyle={{backgroundColor: '#024aad'}}
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
    backgroundColor: 'red',
    marginBottom: 10,
  },
});
export default Main;
