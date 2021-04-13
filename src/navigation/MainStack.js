import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import { MainScreen } from '../pages/MainScreen'
import { RecipeScreen } from '../pages/RecipeScreen'

const mainStack = createStackNavigator()

export const MainStack = () => {
    return(
        <mainStack.Navigator>
            <mainStack.Screen 
                name='Main'
                component={MainScreen}
            /> 
            <mainStack.Screen 
                name='Recipe'
                component={RecipeScreen}
            /> 
        </mainStack.Navigator>
    )
}