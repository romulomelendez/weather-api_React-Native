//import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import Home from './src/screens/Home'

const App: React.FC = () => {

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />
      <Home />

    </View>

  )

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    height: '100%',
    width: '100%'
  
  }

})

export default App
