import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import DegreesButton from '../DegreesButtons'

const DegreesUnitToggle: React.FC = () => {

    // const handleDegrees = ( degrees: string ) => { 

    //     const baseTemperature = Number((weatherData?.temperature)?.toFixed(2))
    //     const tempMin = Number(weatherData?.temp_min)
    //     const tempMax = Number(weatherData?.temp_max)

    //     console.log('currenty temperature: ', baseTemperature)

    //     switch( degrees ) {

    //         case 'Celsius':

    //             let newTemperature = Number((baseTemperature - 273.15).toFixed(2))
    //             let newMin = Number((tempMin - 273.15).toFixed(2))
    //             let newMax = Number((tempMax - 273.15).toFixed(2))

    //             setCurrentyTemperature(newTemperature)
    //             setCurrentyUnit('°C')
    //             setMinMax({

    //                 min_temperature: newMin,
    //                 max_temperature: newMax

    //             })
                
    //         break

    //         case 'Farenheit':

    //             newTemperature = Number((((baseTemperature - 273.15) * 9/5) + 32).toFixed(2))
    //             newMin = Number(((( tempMin - 273.15) * 9/5) + 32).toFixed(2))
    //             newMax = Number(((( tempMax - 273.15) * 9/5) + 32).toFixed(2))

    //             setCurrentyTemperature(newTemperature)
    //             setCurrentyUnit('°F')
    //             setMinMax({

    //                 min_temperature: newMin,
    //                 max_temperature: newMax
                    
    //             })

    //         break

    //         default:

    //             setCurrentyTemperature(baseTemperature)
    //             setCurrentyUnit('°K')
    //             setMinMax({

    //                 min_temperature: Number((weatherData?.temp_min)?.toFixed(2)),
    //                 max_temperature: Number((weatherData?.temp_max)?.toFixed(2))

    //             })

    //         break

    //     }

    // }

    

    return (

        <View style={ styles.degrees_container }>

            <DegreesButton degrees='Celsius' />
            <DegreesButton degrees='Farenheit' />
            <DegreesButton degrees='Kelvin' />

        </View>

    )

}

const styles = StyleSheet.create({

    degrees_container: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth:  0.5,
        borderRadius: 4,
        borderColor: '#000',
        padding: 10,
        maxWidth: 220,
        width: '100%',
        height: 35
        

    },

    

})

export default DegreesUnitToggle