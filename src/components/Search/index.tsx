import { useContext } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

import { WeatherContext } from '../../context/WeatherContext'

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

            <TextInput
                style={ styles.input }
                onChangeText={ newCity => setCity(newCity) }
                placeholder="Type here to find another city"
                value={ city }
            />

            <TouchableOpacity
                style={ styles.button }
                onPress={ verifySearch }
            >
                <Text style={ styles.text }>GO</Text>
            
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
        borderColor: '#cecece'
    
    }
  
})

export default Search