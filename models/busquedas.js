const axios = require('axios');

class Busquedas {
	historial = ['Tegucigalpa', 'Madrid', 'CDMX'];

	constructor() {
		//todo leer db si existe
	}

	async ciudad(lugar = '') {
		try {
			//peticion http
			const resp = await axios.get('https://reqres.in/api/users?page=2');
			console.log(resp.data);
			return [];
		} catch (error) {
			return [];
		}
	}
}

module.exports = Busquedas;
