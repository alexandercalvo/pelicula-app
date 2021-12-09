import React, {useEffect, useState} from 'react'
import moviDB from '../api/moviDB';
import {MoviDBNowPlaying, Movie} from '../interfaces/movieInterface';

export const useMovies = () => {
	
		const [isloading, setIsloading] = useState(true);
		const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
		const getMovies =async () =>{
				const resp = await moviDB.get<MoviDBNowPlaying>('/now_playing');
				const peliculas = resp.data.results;	
				setPeliculasEnCine(peliculas);
				setIsloading(false);
		}

		useEffect(()=>{
				//now_playing
				getMovies();	
		
		}, []);

		return {
				peliculasEnCine,
				isloading,
		}
}

