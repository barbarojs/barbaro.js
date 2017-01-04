import 'whatwg-fetch';

class httpProvider {

    constructor() {
        this.options = {
            headers: {
                'Content-Type': 'application/json',
                authorization: '',
            }
        };
    }

    getOptions() {
        return this.options;
    }

    setJwtToken(token) {
        this.options.headers.authorization = `Bearer ${token}`;
    }
}

export default new httpProvider();
