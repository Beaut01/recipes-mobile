import React from 'react'
import { Image, View, Platform, StyleSheet, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import {Ionicons} from '@expo/vector-icons'

export default function GetPhoto({onGet}){
    const [img, setImg] = React.useState(null)

    React.useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
                if (status !== 'granted') {
                    alert('Извините, но вы не дали права на использование галереи')
                }
            }
        })()
    }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [16, 9],
            quality: 1
        })

        if (!result.cancelled){
            setImg(result.uri)
            onGet(result.uri)
        }
    }

    return(
        <View>
            <TouchableOpacity activeOpacity={0.4} style={styles.camera} onPress={pickImage} >
                <Ionicons name='camera' size={35} style={{justifyContent: 'center'}} color={'#9575cd'} />
            </TouchableOpacity>
            {img && <Image source={{uri: img}} style={styles.image} />}
        </View>
    )
}

const styles = StyleSheet.create({
    camera: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        elevation: 8
    },
    image:{
        width: '100%',
        height: 200,
        marginTop: 10
    }
})