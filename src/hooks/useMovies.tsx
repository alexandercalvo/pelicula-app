import React, {useEffect, useState} from 'react'
import moviDB from '../api/moviDB';
import {MoviDBMoviesResponse, Movie} from '../interfaces/movieInterface';

interface MoviesState{
	nowPlaying:Movie[];
	popular:Movie[];
	topRated:Movie[];
	upComing:Movie[];
}
export const useMovies = () => {
		const [isloading, setIsloading] = useState(true);	
		const [moviesState, setMoviesState]= useState<MoviesState>({
				nowPlaying:[],
				popular:[],
				topRated:[],
				upComing:[],


		});

		const getMovies =async () =>{
				const nowPlayingPromise = moviDB.get<MoviDBMoviesResponse>('/now_playing');
				const popularPromise    = moviDB.get<MoviDBMoviesResponse>('/popular');
				const topRatePromise    = moviDB.get<MoviDBMoviesResponse>('/top_rated');
				const upComingPromise   = moviDB.get<MoviDBMoviesResponse>('/upcoming');
	
				const  response = await Promise.all([
						nowPlayingPromise,
						popularPromise, 
						topRatePromise, 
						upComingPromise
				]);
						
				setMoviesState({
						nowPlaying:response[0].data.results,
						popular:response[1].data.results,
						topRated:response[2].data.results,
						upComing:response[3].data.results,
				})
				setIsloading(false);
		}

		useEffect(()=>{
				//now_playing
				getMovies();	
		
		}, []);

		return {
			...moviesState,
				isloading,
		}
}

