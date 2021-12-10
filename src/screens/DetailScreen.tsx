import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends NativeStackScreenProps<RootStackParams, 'DetailScreen'>{

}
const screenHeight = Dimensions.get('screen').height;
export const DetailScreen = ({route}:Props) => {
		const movie =route.params;
		const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
		return (
				<ScrollView>
						<View style={style.imageContainer}>
								<View style={style.imageBorder}>
										<Image 
												source={{uri}}
												style={style.posterImage}/>
								</View>
						</View>
						<View style={style.marginContainer}>
									<Text style={style.subTitle}>{movie.original_title}</Text>
									<Text style={style.title}>{movie.title}</Text>
						</View>
							<View style={style.marginContainer}>
								<Icon
									name="star-outline"
									color="grey"
									size={20}
								/>
							</View>
				</ScrollView>
				)
}

const style = StyleSheet.create({
		imageContainer:{
			width:'100%',
			height:screenHeight * 0.65,
			shadowOffset:{
			width: 0,
			height: 10,
			},
			shadowOpacity: 0.24,
			shadowRadius: 4.84,
			elevation: 10,
			borderBottomStartRadius:25,
			borderBottomEndRadius:25,
		},
		imageBorder:{
			flex:1,
			overflow:'hidden',
			borderBottomStartRadius:25,
			borderBottomEndRadius:25,

		},
		posterImage:{
			flex:1,
				
		},
		marginContainer:{
			marginHorizontal:20,
			marginTop:20,

		},
		subTitle:{
			fontSize:16,
			opacity:0.8,
		},
		title:{
			fontSize:20,
			fontWeight:'bold',
		}
		
});
