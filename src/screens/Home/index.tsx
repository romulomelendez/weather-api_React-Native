import { View } from 'react-native'

import Search from '../../components/Search'
//import UpdateWeather from '../../components/UpdateWeather'
import Weather from '../../components/Weather'

const Home: React.FC = () => {

    return (

        <View>

            <Search />
            
            <Weather />

        </View>

    )

}

export default Home