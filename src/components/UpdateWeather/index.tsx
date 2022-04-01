import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const UpdateWeather: React.FC = () => {

    const updateWeathers = async () => {}

    return (
    
        <View style={ styles.container }>

            <TouchableOpacity style={ styles.button } onPress={ updateWeathers }>

                <Text style={ styles.text }>ícone de atualizar</Text>

            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({


    container: {},
    text: {},
    button: {}

})

export default UpdateWeather