import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

//import { AUTO_COMPLETE_API_KEY } from '@env'

const Search: React.FC = () => {

    const { setCity, controlVariable, setControlVariable } = useContext(WeatherContext)

    return (

        <View style={styles.container}>

            <GooglePlacesAutocomplete

                placeholder='City'
                onPress={ (data, details) => {

                    setCity(data.structured_formatting.main_text)
                    setControlVariable( controlVariable + 1 )

                } }
                query={{
                    key: 'AIzaSyCkVZDFJ6m6zZD63gALdBnwTY4HbQhHGeU',
                    language: 'en'
                }}
                textInputProps={{
                    autoCapitalize: 'none',
                    autoCorrect: false
                }}
                fetchDetails
                enablePoweredByContainer={ false }

            />

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        flex: 0,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        width: '100%'

    },
  
})

export default Search