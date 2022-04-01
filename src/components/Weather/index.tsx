import { useState } from 'react'
import { View, Text } from 'react-native'

const Weather: React.FC = () => {

    interface WeatherProps {

        id: number,
        main: string,
        description: string,
        icon: string,
		temperature: number,
        feels_like: number,
        temp_max: number,
        temp_min:number,
        pressure: number,
        humidity: number

    }

    const [ temperature, setTemperature  ] = useState<WeatherProps>()
    const [ control, setControl ] = useState(0)

    return (

        <View >

            {
            
                control !== 0 ? <Text>{ temperature?.main }</Text>
                : <Text>Não foi feita uma consulta ainda { temperature }</Text>
                
            }

        </View>

    )

}

export default Weather