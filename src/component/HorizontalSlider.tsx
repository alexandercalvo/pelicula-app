import React from 'react'
import {View,Text, FlatList} from 'react-native'
import {MoviePoster} from '../component/MoviePoster';
import{Movie} from '../interfaces/movieInterface'
interface Props{
	title?:String;
	movies:Movie[];

}
export const HorizontalSlider = ({title,movies}:Props) => {
	return (

		<View style={{backgroundColor:'white', height:(title)?260:230}}>
			{title?	<Text style={{fontSize:30, fontWeight:'bold'}}>
				{title}</Text>:null								
			} 
				<FlatList data={movies}
				renderItem={({item}:any)=>
				(<MoviePoster movie={item} width={200} height={200}/>)
			}
				keyExtractor={(item)=>item.id.toString()}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				/>
				
			</View>
		
	)
}
	

