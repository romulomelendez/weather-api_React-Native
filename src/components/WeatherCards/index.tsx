import { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

import { WEATHER_API_URL, WEATHER_API_URL_PART2, WEATHER_API_KEY } from '@env'

const WeatherCards: React.FC = () => {

    const [ weatherData, setWeatherData ] = useState<WeatherProps>()
    const [ currentyTemperature, setCurrentyTemperature ] = useState<number>()
    const [ currentyUnit, setCurrentyUnit ] = useState<string>('°K')

    const { city, controlVariable } = useContext(WeatherContext)

    interface WeatherProps {

        id: number,
        name: string,
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
    
        console.log(city)
        
        return () => {

            //fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${key}`)
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

       setCurrentyTemperature(weatherData?.temperature)

    }, [weatherData?.temperature])

    const handleDegrees = ( degrees: string ) => { 

        const baseTemperature = Number((weatherData?.temperature)?.toFixed())
        console.log('currenty temperature: ', baseTemperature)

        switch( degrees ) {

            case 'Celsius':

                let newTemperature = Number((baseTemperature - 273.15).toFixed(2))
                setCurrentyTemperature(newTemperature)
                setCurrentyUnit('°C')
                
            break

            case 'Farenheit':

                newTemperature = Number((((baseTemperature - 273.15) * 9/5) + 32).toFixed(2))
                setCurrentyTemperature(newTemperature)
                setCurrentyUnit('°F')

            break

            default:

                setCurrentyTemperature(baseTemperature)
                setCurrentyUnit('°K')

            break

        }

     }

    return (

        <>

            {

                weatherData !== undefined ?
                    
                    <View style={ styles.card_container }>

                        <View style={ styles.temperature_section }>

                            <View style={ styles.degrees_container }>

                                <TouchableOpacity onPress={ () => handleDegrees('Kelvin') }><Text>KELVIN</Text></TouchableOpacity>
                                <TouchableOpacity onPress={ () => handleDegrees('Celsius') }><Text>CELSIUS</Text></TouchableOpacity>
                                <TouchableOpacity onPress={ () => handleDegrees('Farenheit') }><Text>FARENHEIT</Text></TouchableOpacity>
                                

                            </View>
                            <View style={ styles.temp }>

                                <Text style={ styles.city_title }>{ weatherData.name }</Text>
                                <Text style={ styles.temperature}>{ currentyTemperature }</Text>
                                <Text style={ styles.degrees }>{ currentyUnit }</Text>

                            </View>

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
        height: 170,
        borderRadius: 12,
        width: '100%',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },

    temperature_section: {

        justifyContent: 'center',
        alignItems: 'center',
        width:'50%',

    },

    temp: {

        flexDirection: 'row',

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

    degrees_container: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth:  0.5,
        borderRadius: 4,
        borderColor: '#000',
        padding: 10,
        width: 250,
        height: 35

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