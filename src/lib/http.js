import 'whatwg-fetch';
import httpProvider from './httpProvider';

class http {

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
        return {
            params: _.pick(data, this.interpolationKeys),
            payload: _.omit(data, this.interpolationKeys)
        };
    }

    prepare(method, data) {
        // interpolate
        let {params, payload} = this.remap(data);
        let URI = this.apiURI;

        if (interpolated) {
            let params = encodeURIComponent(interpolated);
            URI = `${URI}?${encodeURIComponent(params)}`;
        }

        if (payload) {
            options.body = JSON.stringify(payload);
        }

        return fetch(URI, options);
    }

    serialiseData(data) {
        let newData = {};

        _.map(data, (val, key) => {
            newData[key] = _.isObject(val)
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
        }}

    export httpProvider;
    export http;
