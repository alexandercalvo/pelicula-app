import React from 'react'
import {View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView} from 'react-native';
import { useSafeAreaInsets } from'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../component/MoviePoster';

export const HomeScreen = () => {
		const {peliculasEnCine, isloading} = useMovies();
		const{width:windowWidth} =Dimensions.get('window');
		const {top} = useSafeAreaInsets();
		if(isloading){
				return (
					<View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
								<ActivityIndicator color='red' size={100}/>			
						</View>
				)
		}

		return(
			<ScrollView>


			<View style={{
					marginTop:top+10,
				}}>
			{/* 	<MoviePoster movie={peliculasEnCine[10]}/> */}
			<View style={{height:440}}>
			<Carousel 
				data={peliculasEnCine}
				renderItem={({item}:any)=><MoviePoster movie={item}/> }
				sliderWidth={windowWidth}
				itemWidth={300}
			/>

			</View>
			{/*Peliculos Populares*/}
			<View style={{backgroundColor:'white', height:260}}>
				<Text style={{fontSize:30, fontWeight:'bold'}}>En Cine</Text>
				<FlatList data={peliculasEnCine}
				renderItem={({item}:any)=>
				(<MoviePoster movie={item} width={200} height={200}/>)
			}
				keyExtractor={(item)=>item.id.toString()}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				/>
				
			</View>
				{/*Peliculos Populares*/}
				<View style={{backgroundColor:'white', height:260}}>
				<Text style={{fontSize:30, fontWeight:'bold'}}>En Cine</Text>
				<FlatList data={peliculasEnCine}
				renderItem={({item}:any)=>
				(<MoviePoster movie={item} width={200} height={200}/>)
			}
				keyExtractor={(item)=>item.id.toString()}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				/>
				
			</View>
			</View>
			</ScrollView>
		)
	}

