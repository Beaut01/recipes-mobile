import React from 'react'
import { FlatList, View } from 'react-native'

import { Category } from './Category'

const categories = [
    {
        id: 33,
        name: 'Все',
        URL: 'https://grandkulinar.ru/uploads/posts/2019-02/1550337897_vkusnye-i-krasivye-blyuda-populyarnye-v-instagram.jpg'
    },
    {
        id: 0,
        name: 'Мясные',
        URL: 'https://xcook.info/wp-content/cache/thumb/91/d7a8ce78018d991_750x375.jpg'
    },
    {
        id: 1,
        name: 'Вегетарианские',
        URL: 'https://the-challenger.ru/wp-content/uploads/2015/05/main-600x600.jpg'
    },
    {
        id: 2,
        name: 'Сырные',
        URL: 'https://www.edimdoma.ru/system/images/contents/0001/2088/popup/shutterstock_1367838311.jpg?1612517104'
    },
    {
        id: 3,
        name: 'Острые',
        URL: 'https://images11.domashnyochag.ru/upload/article/af2/af24152268c0804001fa3cacff20a05f.jpg'
    },
    {
        id: 4,
        name: 'Сладкие',
        URL: 'https://static.1000.menu/img/content-v2/cb/28/38768/tort-ideal-mujskoi_1568143869_11_max.jpg'
    },
    {
        id: 5,
        name: 'Выпечка',
        URL: 'https://static-sl.insales.ru/images/products/1/4339/349892851/%D0%BA%D1%80%D1%83%D0%B0%D1%81%D1%81%D0%B0%D0%BD.jpg'
    },
    {
        id: 6,
        name: 'Супы',
        URL: 'https://2recepta.com/recept/borshh/borshh.jpg'
    }
]

export const Categories = () => {
    return(
        <View>
            <FlatList 
                data={categories}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <Category {...item} />}
                horizontal={true}
            />       
        </View>
    )
}