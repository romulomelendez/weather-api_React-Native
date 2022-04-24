import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

const Temperature: React.FC = () => {
    
    const { currentyTemperature, currentyUnit } = useContext(WeatherContext)

    return (

        <View style={ styles.temp_container }>

            {/* <Text style={ styles.city_title }>{ weatherData.name }</Text> */}
            <Text adjustsFontSizeToFit style={ styles.temperature }>{ currentyTemperature }</Text>
            <Text>{ currentyUnit }</Text>

        </View>

    )

}

const styles = StyleSheet.create({

    temp_container: {

        flexDirection: 'row',
        width:'50%',
        alignItems: 'center',
        justifyContent: 'center',

    },

    temperature: {

        fontSize: 45,

    },

})

export default Temperature