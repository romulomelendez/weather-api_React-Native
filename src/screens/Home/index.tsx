import { StyleSheet, View } from 'react-native'

import Search from '../../components/Search'
import Weather from '../../components/Weather'
import UpdateWeather from '../../components/UpdateWeather'

import { WeatherProvider } from '../../context/WeatherContext'

const Home = () => {

    return (

        <View style={ styles.container }>

            <WeatherProvider>

                <Search />
                <UpdateWeather />
                <Weather />

            </WeatherProvider>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        width: '100%',
        padding: 30
        

    }

})

export default Home