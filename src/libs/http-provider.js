import 'whatwg-fetch';

class httpProvider {

	constructor() {
		this.options = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: ''
			}
		};
	}

	getOptions() {
		return Object.assign({}, this.options);
	}

	setJwtToken(token) {
		this.options.headers.Authorization = `Bearer ${token}`;
	}

	removeJwtToken() {
		this.options.headers.Authorization = '';
	}

}

export default new httpProvider();
