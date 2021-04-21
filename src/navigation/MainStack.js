import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import { MainScreen } from '../pages/MainScreen'
import { RecipeScreen } from '../pages/RecipeScreen'
import { SearchScreen } from '../pages/SearchScreen'

const mainStack = createStackNavigator()

export const MainStack = () => {
    return(
        <mainStack.Navigator>
            <mainStack.Screen 
                name='Main'
                component={MainScreen}
                options={{
                    title: 'Рецептник',
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: '#9575cd'}
                }}
            /> 
            <mainStack.Screen 
                name='Recipe'
                component={RecipeScreen}
                options={({route}) => ({
                    title: route.params?.recipeTitle,
                    headerStyle: {backgroundColor: '#9575cd'},
                    headerTintColor: '#fff'
                })}
            /> 
            <mainStack.Screen 
                name='Search'
                component={SearchScreen}
                options={{
                    title:'Поиск',
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: '#9575cd'}
                }}
            />
        </mainStack.Navigator>
    )
}