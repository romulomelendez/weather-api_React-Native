import { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

const Search: React.FC = () => {

    const [ city, setCity ] = useState('')

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
                onPress={ () => console.log(city) }
            >
                <Text style={ styles.text }>GO</Text>
            
            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        flexDirection: 'row'

    },

    button: {
        
        
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        height: 50,
        width: 50,
        marginLeft: -50

    },

    text: { color: '#757373' },

    input: {

        height: 50,
        width: 600,
        padding: 10,
        fontSize: 25,
        borderWidth:  1,
        borderRadius: 4,
        borderColor: '#cecece'
    
    }
  
  })

export default Search