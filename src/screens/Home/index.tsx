import { StyleSheet, View } from 'react-native'

import Weather from '../../components/Weather'
import Search from '../../components/Search'
import UpdateWeather from '../../components/UpdateWeather'

const Home: React.FC = () => {

    return (

        <View style={ styles.container }>

            <Search />
            <UpdateWeather />
            <Weather />

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        width: '100%',
        padding: 30
        

    }

})

export default Home