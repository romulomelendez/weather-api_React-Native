import { useState,  } from 'react'
import { Text } from 'react-native'

//import { WEATHER_API_URL, WEATHER_API_URL_PART2, WEATHER_API_KEY } from '@env'

const FavoriteWeathers: React.FC = () => {

    // interface FavoriteWeatherProps {

    //     id: number,
    //     name: string,
    //     main: string,
    //     temperature: number
    
    // }

    //const [ favoriteWeatherDatas, setFavoriteWeatherDatas ] = useState<Object[]>([])
    //const favoriteDefaultCityNames = ['London', 'Paris', 'Berlin']

    // useEffect( () => {

        
    //     return () => {

    //         let i = 0
    //         while( i < favoriteWeatherDatas.length ) {

    //             fetch(WEATHER_API_URL + `${favoriteDefaultCityNames[i]}` + WEATHER_API_URL_PART2 + WEATHER_API_KEY)
    //             .then( response => response.json() )
    //             .then( data => setFavoriteWeatherDatas({

    //                     id: data.weather[0].id,
    //                     name: data.name,
    //                     main: data.weather[0].main,
    //                     temperature: data.main.temp,
                        
                
    //                 }))
    //             .catch( error => console.log(error) )

    //         }
            
    //     }

    // }, [])

    return (
        
        <>

            {/* {

                favoriteWeathers.map( (weather, item) => {

                    

                })  

            } */}

            <Text>FAVORITE DEFAULT/USER WEATHERS</Text>

        </>

    )

}

export default FavoriteWeathers