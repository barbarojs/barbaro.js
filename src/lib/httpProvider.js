import 'whatwg-fetch';

class httpProvider {

    constructor() {
        this.options = {
            headers: {
                'Content-Type': 'application/json',
                authorization: ''
            }
        };
    }

    getOptions() {
        return Object.assign({}, this.options);
    }

    setJwtToken(token) {
        this.options.headers.authorization = `Bearer ${token}`;
    }

    removeJwtToken() {
        this.options.headers.authorization = '';
    }

}

export default new httpProvider();
