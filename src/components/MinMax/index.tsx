import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

const MinMax: React.FC = () => {
    
    const { minMax, currentyUnit } = useContext(WeatherContext)
    return (

        <View style={ styles.mix_max }>

            <Text>Min: { minMax?.min_temperature } { currentyUnit }</Text>
            <Text>Max: { minMax?.max_temperature } { currentyUnit }</Text>

        </View>

    )

}

const styles = StyleSheet.create({

    mix_max: {

        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

})

export default MinMax