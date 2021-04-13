import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export const MainScreen = ({navigation}) => {
    return(
        <View style={styles.container} >
            <Text>Main page</Text>
            <Button title="Press" onPress={() => navigation.navigate('Recipe')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})