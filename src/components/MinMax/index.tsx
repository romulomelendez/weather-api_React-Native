import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

const MinMax: React.FC = () => {
    
    const { minMax, currentyUnit } = useContext(WeatherContext)
    return (

        <View style={ styles.mix_max }>

            <Text style={ styles.min }>Min: { minMax?.min_temperature } { currentyUnit }</Text>
            <Text style={ styles.max }>Max: { minMax?.max_temperature } { currentyUnit }</Text>

        </View>

    )

}

const styles = StyleSheet.create({

    mix_max: {

        width: 250,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

    min: { margin: 20 },
    max: { margin: 20 },

})

export default MinMax