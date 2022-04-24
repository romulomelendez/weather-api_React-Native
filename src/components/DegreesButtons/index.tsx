import { useContext } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

type DegreesProps = { degrees: string }

const handleDegrees = ( degrees: DegreesProps ) => { 

    const { weatherData, setCurrentyTemperature, setCurrentyUnit, setMinMax } = useContext(WeatherContext)

    const baseTemperature = Number((weatherData?.temperature)?.toFixed(2))
    const tempMin = Number(weatherData?.temp_min)
    const tempMax = Number(weatherData?.temp_max)

    console.log('currenty temperature: ', baseTemperature)

    switch( degrees.degrees ) {

        case 'Celsius':

            let newTemperature = Number((baseTemperature - 273.15).toFixed(2))
            let newMin = Number((tempMin - 273.15).toFixed(2))
            let newMax = Number((tempMax - 273.15).toFixed(2))

            setCurrentyTemperature(newTemperature)
            setCurrentyUnit('°C')
            setMinMax({

                min_temperature: newMin,
                max_temperature: newMax

            })
            
        break

        case 'Farenheit':

            newTemperature = Number((((baseTemperature - 273.15) * 9/5) + 32).toFixed(2))
            newMin = Number(((( tempMin - 273.15) * 9/5) + 32).toFixed(2))
            newMax = Number(((( tempMax - 273.15) * 9/5) + 32).toFixed(2))

            setCurrentyTemperature(newTemperature)
            setCurrentyUnit('°F')
            setMinMax({

                min_temperature: newMin,
                max_temperature: newMax
                
            })

        break

        default:

            setCurrentyTemperature(baseTemperature)
            setCurrentyUnit('°K')
            setMinMax({

                min_temperature: Number((weatherData?.temp_min)?.toFixed(2)),
                max_temperature: Number((weatherData?.temp_max)?.toFixed(2))

            })

        break

    }

}

const DegreesButton = ( { degrees }: DegreesProps ) => {

    return (

        <TouchableOpacity onPress = { () => handleDegrees({ degrees }) }>
            
            <Text style={ styles.text }>

                { degrees.toUpperCase() }

            </Text>
            
        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({

    text: {

        fontSize: 15,

    },

})

export default DegreesButton