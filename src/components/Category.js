import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native'
import { useDispatch } from 'react-redux'
import { changeCategory } from '../redux/actions/categories'

export const Category = ({URL, name, id}) => {
    const dispatch = useDispatch()

    const changeActiveCategory = id => {
        dispatch(changeCategory(id))
    }

    return(
        <TouchableOpacity onPress={() => changeActiveCategory(id)} >
            <View style={styles.category}>
                <ImageBackground style={styles.image} source={{uri: URL}}>
                    <View style={styles.textWrapp}>
                        <Text style={styles.text}>{name}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    category:{
        height: 80,
        backgroundColor: '#fff',
        width: 100,
        elevation: 24,
        marginLeft: 10,
        marginVertical: 5,
        borderRadius: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textWrapp:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    text: {
        color: '#fff',
        fontSize: 18
    }
})