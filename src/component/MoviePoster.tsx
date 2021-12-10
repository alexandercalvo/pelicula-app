import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {Movie} from '../interfaces/movieInterface'
import {useNavigation} from '@react-navigation/native'

interface Props{
		movie:Movie,
		height?:number,
		width?:number,
}
export const MoviePoster = ({movie, height = 420, width = 300}:Props) => {

		const uri=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
		const navigation = useNavigation();
		console.log(movie);
		return (
			<TouchableOpacity 
				onPress={()=>navigation.navigate('DetailScreen', movie)}
					activeOpacity={0.8}
					style={{
							width, 
							height, 
							marginHorizontal:2,
							paddingBottom:20,
							paddingHorizontal:10

					}}>
					<View style={style.containerImage}>
					<Image source={{uri}} style={style.image}/>
					</View>
			 </TouchableOpacity>
	)
}
const style = StyleSheet.create({
		image:{
			flex:1,
			borderRadius:10,
			shadowColor: "#000",
		
		},
	containerImage:{
		borderRadius:18,
				flex:1,
				shadowOffset: {
					width: 0,
					height: 10,
			},
			shadowOpacity: 0.24,
			shadowRadius: 4.84,

			elevation: 10,

	}

}); 
