import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, TextInput, Button, Picker } from 'react-native'
import { useDispatch} from 'react-redux'
import { addRecipe } from '../redux/actions/recipes'
import GetPhoto from '../components/ImagePicker'

export const AddRecipe = ({navigation}) => {
    const dispatch = useDispatch()
    const [name, onChangeName] = React.useState('')
    const [ingValue, onChangeIng] = React.useState('')
    const [descrValue, onChangeDescr] = React.useState('')
    const [selectedValue, setSelectedValue] = React.useState('0')
    const [image, setImage] = React.useState(null)

    const clearFields = () => {
        onChangeName('')
        onChangeDescr('')
        onChangeIng('')
        setSelectedValue('0')
        setImage(null)
    }

    const createRecipe = () => {
        const recipe = {
            name: name,
            ingredients: ingValue, 
            description: descrValue, 
            id: Date.now().toString(),
            category: selectedValue,
            imageURL: image
        }
        dispatch(addRecipe(recipe))
        navigation.navigate('Main')
        clearFields()
    }

    const photoGetHandler = uri => {
        setImage(uri)
    }
 
    return(
        <ScrollView>
            <TouchableWithoutFeedback>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Напишите рецепт!</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Напишите название блюда'
                        value={name}
                        onChangeText={text => onChangeName(text)}
                    />
                    <View style={styles.pickerContainer} >
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label='Мясные' value='0' />
                            <Picker.Item label='Вегетарианские' value='1' />
                            <Picker.Item label='Сырные' value='2' />
                            <Picker.Item label='Острые' value='3' />
                            <Picker.Item label='Сладкие' value='4' />
                            <Picker.Item label='Выпечка' value='5' />
                            <Picker.Item label='Супы' value='6' />
                        </Picker>
                    </View>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Напишите нужные ингридиенты...' 
                        multiline
                        value={ingValue}
                        onChangeText={text => onChangeIng(text)}
                    />
                    <GetPhoto onGet={photoGetHandler} />
                    <TextInput 
                        style={styles.input} 
                        placeholder='Опишите процесс приготовления...' 
                        multiline
                        value={descrValue}
                        onChangeText={text => onChangeDescr(text)}
                    />
                    <Button title='Добавить рецепт' color={'#9575cd'} onPress={createRecipe} />
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