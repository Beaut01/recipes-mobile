import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { MainStack } from './MainStack'
import { AddRecipe } from '../pages/AddRecipe'

const Tab = createBottomTabNavigator()

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        let iconName 

                        if(route.name === 'Main'){
                            iconName = 'home'
                        } else if(route.name === 'Add') {
                            iconName = 'add-circle'
                        }

                        return <Ionicons size={size} color={color} name={iconName} />
                    }
                })}
                tabBarOptions ={{
                    activeTintColor: '#9575cd',
                    inactiveTintColor: 'grey'
                }} 
            >
                <Tab.Screen 
                    component={MainStack}
                    name='Main'
                    options={{
                        title: 'Главная'
                    }}
                />
                <Tab.Screen 
                    component={AddRecipe}
                    name='Add'
                    options={{
                        title: 'Добавление'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}