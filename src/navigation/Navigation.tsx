import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from'../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
const Stack = createNativeStackNavigator();

export const Navigation= () => {
		return (
			<Stack.Navigator
					screenOptions={{
							headerShown:false,
							contentStyle:{
							backgroundColor:'#fff',
							}
							
					}}>
						<Stack.Screen name="HomeScreen" component={HomeScreen}/>
						<Stack.Screen name="DetailScreen" component={DetailScreen}/>
				</Stack.Navigator>
		)
}

