import { useEffect, useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

import FavoriteWeathers from '../FavoriteWeathers'

import { WEATHER_API_URL, WEATHER_API_URL_PART2, WEATHER_API_KEY } from '@env'

const WeatherCards: React.FC = () => {

    const { city, controlVariable, weatherData, setWeatherData, currentyTemperature, setCurrentyTemperature, currentyUnit, minMax, setMinMax } = useContext(WeatherContext)

    useEffect( () => {
    
        console.log(city)
        
        return () => {

            fetch(WEATHER_API_URL + `${city}` + WEATHER_API_URL_PART2 + WEATHER_API_KEY)
                .then( response => response.json() )
                .then( data => setWeatherData({

                        id: data.weather[0].id,
                        name: data.name,
                        main: data.weather[0].main,
                        description: data.weather[0].description,
                        icon: data.weather[0].icon,
                        temperature: data.main.temp,
                        feels_like: data.main.feels_like,
                        temp_max: data.main.temp_max,
                        temp_min: data.main.temp_min,
                        pressure: data.main.pressure,
                        humidity: data.main.humidity
                
                    }))
                .catch( error => console.log(error) )
            
        }

    }, [controlVariable])

    useEffect( () => {

       setCurrentyTemperature( Number((weatherData?.temperature)?.toFixed(2)) )
       setMinMax({

            min_temperature: Number((weatherData?.temp_min)?.toFixed(2)),
            max_temperature: Number((weatherData?.temp_max)?.toFixed(2))
            
       })

    }, [weatherData?.temperature])

    return (

        <>

            {

                weatherData !== undefined ?
                    
                    <View style={ styles.card_container }>

                        
                        <View style={ styles.temperature_section }>

                            <View style={ styles.temp }>

                                {/* <Text style={ styles.city_title }>{ weatherData.name }</Text> */}
                                <Text style={ styles.temperature}>{ currentyTemperature }</Text>
                                <Text style={ styles.degrees }>{ currentyUnit }</Text>

                            </View>

                        </View>

                        <View style={ styles.information_section }>
                            <Text>Test Content</Text>
                            {/* <View style={ styles.mix_max }>

                                <Text style={ styles.min }>Min: { minMax?.min_temperature } { currentyUnit }</Text>
                                <Text style={ styles.max }>Max: { minMax?.max_temperature } { currentyUnit }</Text>

                            </View>

                            <View style={ styles.weather_description }>

                                <Text style={ styles.condition }>{  weatherData.main }</Text>

                            </View> */}

                        </View>

                    </View>

                    : <FavoriteWeathers />

            }

        </>

    )

}

const styles = StyleSheet.create({

    card_container: {

        flexDirection: 'row',
        backgroundColor: '#ffb6d2c5',
        padding: 20,
        marginBottom: 20,
        maxHeight: 210,
        height: '100%',
        borderRadius: 12,
        width: '100%',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },

    temperature_section: {

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width:'50%',

    },

    temp: {

        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -5,
        maxWidth: 200,
        backgroundColor: 'green'

    },

    information_section: {

        flex: 1,
        height: 120,
        width: 300,
        borderRadius: 15,
        padding: 5,
        backgroundColor: '#00000049',
        justifyContent: 'center',
        alignItems: 'center'

    },

    mix_max: {

        width: 250,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

    min: { margin: 20 },
    max: { margin: 20 },

    weather_description: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    condition: { fontSize: 25 },

    temperature: {

        flex: 1,
        fontSize: 40,

    },

    degrees: {
        
        fontSize: 20,
        marginTop: 30,

    },

    city_title: {

        top: 100,
        left: 150,
        marginTop: 5,
        fontSize: 15,

    },

})

export default WeatherCards