import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

const Temperature: React.FC = () => {
    
    const { currentyTemperature, currentyUnit } = useContext(WeatherContext)

    return (

        <View style={ styles.temperature_section }>

            <View style={ styles.temp }>

                {/* <Text style={ styles.city_title }>{ weatherData.name }</Text> */}
                <Text style={ styles.temperature }>{ currentyTemperature }</Text>
                <Text style={ styles.degrees }>{ currentyUnit }</Text>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

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

    temperature: {

        flex: 1,
        fontSize: 40,

    },

    degrees: {
        
        fontSize: 20,
        marginTop: 30,

    },

})

export default Temperature