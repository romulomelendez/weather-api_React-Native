//import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'

const App: React.FC = () => {
  
  // const [ weatherCondition, setWeatherCondition ] = useState({})

  // const getWeather = () => {

  //   let key = '92f3ea930ce06c45e916044d9f6bcd3e'
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${key}`)
  //     .then( response => response.json() )
  //     .then( data => setWeatherCondition(data.weather[0]) )
  //     .catch( error => console.log(error) )

  // }

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />
      <Weather />

    </View>

  )

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  }

})

export default App
