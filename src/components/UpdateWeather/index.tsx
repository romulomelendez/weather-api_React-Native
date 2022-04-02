import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const UpdateWeather: React.FC = () => {

    const updateWeathers = async () => {}

    return (
    
        <View style={ styles.container }>

            <TouchableOpacity style={ styles.button } onPress={ updateWeathers }>

                <Text onPress={ updateWeathers }>Refresh</Text>

            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 20

    },

    button: {

        padding: 10,
        backgroundColor: 'lightblue'

    }

})

export default UpdateWeather