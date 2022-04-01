import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const App = () => {
  
  const getWeather = () => {

    let key = '92f3ea930ce06c45e916044d9f6bcd3e'
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${key}`)
      .then( response => response.json() )
      .then( data => console.log(data.weather[0].id) )
      .catch( error => console.log(error) )

  }

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />
      <TouchableOpacity style={ styles.button } onPress={ getWeather }>
      
        <Text style={ styles.text }>PRESS HERE</Text>

      </TouchableOpacity>

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

  button: {

    padding: 10,
    borderRadius: 14,
    backgroundColor: '#cecece'

  },

  text: { fontSize: 25 }

})

export default App
