import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import DegreesButton from '../DegreesButtons'

const DegreesUnitToggle: React.FC = () => {

    return (

        <View style={ styles.degrees_container }>

            <DegreesButton degrees = 'Celsius' />
            <DegreesButton degrees = 'Farenheit' />
            <DegreesButton degrees = 'Kelvin' />

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
        

    }

})

export default DegreesUnitToggle