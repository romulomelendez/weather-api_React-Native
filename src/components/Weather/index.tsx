import { useState } from 'react'
import { View, Text } from 'react-native'

import WeatherCards from '../WeatherCards'

const Weather: React.FC = () => {

    //const [ temperature, setTemperature  ] = useState<WeatherProps>()

    return (

        <View >

            <WeatherCards />

        </View>

    )

}

export default Weather