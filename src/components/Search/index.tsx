import { useContext } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

//import { AUTO_COMPLETE_API_KEY } from '@env'

import Icon from 'react-native-vector-icons/AntDesign'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const Search = () => {

    const { city, setCity, controlVariable, setControlVariable} = useContext(WeatherContext)

    const verifySearch = () => {

        if( city !== '' ) 
            setControlVariable( controlVariable + 1 )
        else
            alert('Input cannot be empty!')

    }

    return (

        <View style={styles.container}>

            {/* <TextInput
                style={ styles.input }
                onChangeText={ newCity => setCity(newCity) }
                placeholder="Type here to find another city"
                value={ city }
            /> */}

            <GooglePlacesAutocomplete
            
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyCkVZDFJ6m6zZD63gALdBnwTY4HbQhHGeU',
                    language: 'en',
                }}

            />

            <TouchableOpacity
                style={ styles.button }
                onPress={ verifySearch }
            >
                <Icon name="search1" size={22} />
            
            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        flex: 0,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        height: 50,
        width: '100%'

    },

    button: {
        
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -55,
        borderWidth: 0,
        height: '100%',
        width: 50

    },

    text: { color: '#757373' },

    input: {

        width: '100%',
        height: '100%',
        padding: 10,
        fontSize: 25,
        borderWidth:  1,
        borderRadius: 4,
        borderColor: '#000'
    
    }
  
})

export default Search