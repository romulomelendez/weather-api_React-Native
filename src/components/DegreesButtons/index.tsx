import { Text, StyleSheet, TouchableOpacity } from 'react-native'

type DegreesProps = { degrees: string }

const handleDegrees = ( degrees: string ) => console.log(degrees)


const DegreesButton = ( { degrees }: DegreesProps ) => (

    <TouchableOpacity onPress = { () => handleDegrees(degrees) }>
        
        <Text style={ styles.text }>

            { degrees.toUpperCase() }

        </Text>
        
    </TouchableOpacity>

)

const styles = StyleSheet.create({

    text: {

        fontSize: 15,

    },

})

export default DegreesButton