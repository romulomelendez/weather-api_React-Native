import { useContext } from 'react'
import { View, Text} from 'react-native'

//import WeatherCards from '../WeatherCards'

import { WeatherContext } from '../../context/WeatherContext'

const Weather: React.FC = () => {

    const { city, setCity } = useContext(WeatherContext)

    return (

        <View >

            <Text>{ city }</Text>

        </View>

    )

}

export default Weather