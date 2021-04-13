import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, TextInput, TouchableOpacity, Button, Picker } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const AddRecipe = () => {
    const [ingValue, onChangeIng] = React.useState('')
    const [descrValue, onChangeDescr] = React.useState('')
    const [selectedValue, setSelectedValue] = React.useState('meat')
 
    return(
        <ScrollView>
            <TouchableWithoutFeedback>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Напишите рецепт!</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Напишите нужные ингридиенты...' 
                        multiline
                        value={ingValue}
                        onChangeText={text => onChangeIng(text)}
                    ></TextInput>
                    <TouchableOpacity activeOpacity={0.4} style={styles.camera} >
                        <Ionicons name='camera' size={35} style={{justifyContent: 'center'}} color={'#9575cd'} />
                    </TouchableOpacity>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Опишите процесс приготовления...' 
                        multiline
                        value={descrValue}
                        onChangeText={text => onChangeDescr(text)}
                    ></TextInput>
                    <View style={styles.pickerContainer} >
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label='Мясные' value='meat' />
                            <Picker.Item label='Вегетарианские' value='vegetarian' />
                        </Picker>
                    </View>
                    <Button title='Добавить рецепт' color={'#9575cd'} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 10,
        paddingVertical: 45
    },
    title:{
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 18
    },
    input: {
        padding: 10,
        marginBottom: 10
    },
    camera: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    picker:{
        height: 35,
        width: 200,
        color: '#9575cd'
    },
    pickerContainer:{
        paddingBottom: 10,
        display: 'flex'
    }
})