import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import  store  from './src/Store/configureStore';
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



const App = () => {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>)
}

const Home = () => {
  const { name } = useSelector(state => state.auth);
  return (
    <>
      <Provider store={store}>
        <View style={styles.container}>
          <Text>TEST</Text>
          <Text>{name}</Text>
          <StatusBar style="auto" />
        </View>
      </Provider>
    </>
  )
}

export default App


