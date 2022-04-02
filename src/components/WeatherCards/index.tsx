import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const WeatherCards: React.FC = () => {

    const [ control, setControl ] = useState(0)
    const [ weatherData, setWeatherData ]= useState<WeatherProps>()
    
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


    useEffect(() => {
        
        return () => {

            let key = '92f3ea930ce06c45e916044d9f6bcd3e'
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${key}`)
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

    }, [control])

    return (

        <View>

            <TouchableOpacity onPress={ () => setControl(control + 1) }><Text>TEST BUTTON</Text></TouchableOpacity>

            {

                weatherData !== undefined ?
                    <Text>nao sou undefined, tenho conteudo{ console.log(weatherData) }</Text>
                : <Text>Sou undefined</Text>

            }

        </View>

    )

}

const styles = StyleSheet.create({

    container: {},
    temperature: {},
    degrees: {},
    title: {},
    description: {}

})

export default WeatherCards