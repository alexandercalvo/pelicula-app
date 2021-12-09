import axios from 'axios';

const moviDB =  axios.create({
		baseURL:'https://api.themoviedb.org/3/movie',
		params:{
				api_key:'b916ff0ecb0b61ebbc49de086e987b08',
				language:'es-ES',
		}
});

export default moviDB;
