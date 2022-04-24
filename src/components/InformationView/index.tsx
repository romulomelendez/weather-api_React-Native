import { View, StyleSheet } from 'react-native'

import MinMax from '../MinMax'
import WeatherDescription from '../WeatherDescription'

const InformationView: React.FC = () => {

    return (

        <View style = { styles.information_section }>

            <MinMax/>
            <WeatherDescription/>

        </View>


    )

}

const styles = StyleSheet.create({

    information_section: {

        flex: 1,
        height: 120,
        width: 300,
        borderRadius: 15,
        padding: 5,
        backgroundColor: '#00000049',
        justifyContent: 'center',
        alignItems: 'center'

    },

})

export default InformationView