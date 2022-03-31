import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {

  const getWeather = () => {

    let key = ''
    fetch(`${key}`)
      .then(response => {

        console.log(response.weather)

      })
      .catch ( error => console.log(error) )

  }

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>

    </View>

  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

})

export default App
