import { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

const WeatherCards: React.FC = () => {

    //const [ control, setControl ] = useState(0)
    const [ weatherData, setWeatherData ] = useState<WeatherProps>()

    const { city, controlVariable } = useContext(WeatherContext)

    interface WeatherProps {

        id: number,
        main: string,
        description: string,
        icon: string,
		temperature: number,
        feels_like: number,
        temp_max: number,
        temp_min:number,
        pressure: number,
        humidity: number

    }

    useEffect( () => {
        
        return () => {

            let key = '92f3ea930ce06c45e916044d9f6bcd3e'
            //fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${key}`)
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${key}`)
                .then( response => response.json() )
                .then( data => setWeatherData({

                        id: data.weather[0].id,
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

    return (

        <>

            {

                weatherData !== undefined ?

                    <View style={ styles.card_container }>

                        <View style={ styles.temperature_section }>

                            <Text style={ styles.temperature}>{ weatherData.temperature }</Text>
                            <Text style={ styles.degrees }>ºC</Text>

                        </View>

                        <View style={ styles.information_section }>

                            <View style={ styles.mix_max }>

                                <Text style={ styles.min }>Min: { weatherData.temp_min }°C</Text>
                                <Text style={ styles.max }>Max: { weatherData.temp_max }ºC</Text>

                            </View>

                            <View style={ styles.weather_description }>

                                <Text style={ styles.condition }>{  weatherData.main }</Text>

                            </View>

                        </View>

                    </View>

                : <Text>Nothing to show here!</Text> 

            }

        </>

    )

}

const styles = StyleSheet.create({

    card_container: {

        flexDirection: 'row',
        backgroundColor: 'pink',
        padding: 20,
        marginBottom: 20,
        height: 160,
        borderRadius: 12,
        width: '100%',

        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },

    temperature_section: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:'50%',

    },

    information_section: {

        flex: 1,
        height: 120,
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

        fontSize: 100,

    },

    degrees: {
        
        fontSize: 20,
        marginTop: -25,

    },

    city_title: {},

})

export default WeatherCards