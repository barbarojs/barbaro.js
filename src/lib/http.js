import 'whatwg-fetch';
import httpProvider from './httpProvider';

export default class http {

    constructor(apiURI) {
        this.interpolationRegExp = /(\:[a-z])/i;

        this.apiURI = apiURI;
        this.interpolationKeys = this.createParams(apiURI);
    }

    createParams(URI) {
        let keys = [];

        // split querystring from body
        URI.split('/')
          .filter((x) => this.interpolationRegExp.test(x))
          .forEach((x) => {
              let o = x.substr(1);
              keys.push(o);
          }
        );

        return keys;
    }

    remap(data) {
        let dataKeys = Object.keys(data);

        return {
            params: dataKeys.filter(x=>this.interpolationKeys.includes(x)).map(x=>data[x]),
            payload: dataKeys.filter(x=>!this.interpolationKeys.includes(x)).map(x=>data[x])
        };
    }

    prepare(method, data) {
        // interpolate??

        let {params, payload} = this.remap(data);
        let URI = this.apiURI;

        if (params) {
            URI = `${URI}?${encodeURIComponent(params)}`;
        }

        if (payload) {
            options.body = JSON.stringify(payload);
        }

        return fetch(URI, options);
    }

    serialiseData(data) {
        let newData = {};
        let dataKeys = Object.keys(data);

        dataKeys.forEach(key => {
            let val = data[key];
            newData[key] = typeof val === 'object'
                ? btoa(JSON.stringify(val))
                : val;
        });

        return newData;
    }

    get(data) {
        return this.prepare('GET', data).then((res) => {
            return res;
        });
    }

    post(data) {
        return this.create('POST', data).then((res) => {
            return res;
        });
    }
}
