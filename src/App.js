import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import TorchScreen from './screens/torchScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <TorchScreen />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#DEE9FD'
  }
});

export default App;
