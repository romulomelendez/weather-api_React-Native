import { useContext } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { WEATHER_API_URL, WEATHER_API_URL_PART2, WEATHER_API_KEY } from '@env'

const UpdateWeather: React.FC = () => {

    const { city, controlVariable } = useContext(WeatherContext) 

    const updateWeathers = () => {

        try {

            fetch(WEATHER_API_URL + `${city}` + WEATHER_API_URL_PART2 + WEATHER_API_KEY)
                .then( response => response.json() )
                .then( data => console.log(data) )

        } catch (error) { console.log(error) }
        
    }

    return (
    
        <View style={ styles.container }>

            {
            
                controlVariable !== 0 &&

                    <TouchableOpacity style={ styles.button } onPress={ updateWeathers }>

                        <Icon name="update" size={22} />

                    </TouchableOpacity>
            
            }

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 20

    },

    button: {

        padding: 10,

    }

})

export default UpdateWeather