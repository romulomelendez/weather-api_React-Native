import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

const WeatherDescription: React.FC = () => {
    
    const { weatherData } = useContext(WeatherContext)

    return (

        <View style={ styles.weather_description }>

            <Text style={ styles.condition }>{  weatherData?.main }</Text>

        </View>

    )

}

const styles = StyleSheet.create({

    weather_description: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    condition: { fontSize: 25 },

})

export default WeatherDescription