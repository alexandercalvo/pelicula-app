import React from 'react'
import {View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView} from 'react-native';
import { useSafeAreaInsets } from'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../component/MoviePoster';
import {HorizontalSlider} from '../component/HorizontalSlider';

export const HomeScreen = () => {

	const {nowPlaying, popular,topRated, upComing, isloading} = useMovies();
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
						data={nowPlaying}
						renderItem={({item}:any)=><MoviePoster movie={item}/> }
						sliderWidth={windowWidth}
						itemWidth={300}
						inactiveSlideOpacity={1}
					/>
				</View>
				{/*Peliculos Populares*/}
				<HorizontalSlider title={"Popular"} movies={popular}/>
				<HorizontalSlider title="top Rated" movies={topRated}/>
				<HorizontalSlider title="Up Coming" movies={upComing}/>

				</View>
			</ScrollView>
		)
	}

