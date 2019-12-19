const movieEndPoint = 'http://localhost:5000/api/movies'

class Model {
	static getAllMovies = (e) => {
		return fetch(movieEndPoint, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(e)
		})
		.then(res=>res.json())
		.catch(err => console.log('error', err));

	}

	static create = (movie) => {
		return fetch(movieEndPoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(movie)
		})
		.then(res=>res.json())
		.catch(err => console.log('error', err))
	}
} 

export default Model;