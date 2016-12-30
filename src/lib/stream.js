import {Subject} from 'rxjs';

/**
 * Stream
 * {id: 'componentId', data: {id: 'dataId', mykey: 1}}
 */
export default class Stream extends Subject {

    filterById(id, dataId) {
        return this.filter((data) => dataId
            ? (data.id === id && data.data.id === dataId)
            : (data.id === id));
    }

    filterByIds(ids) {
        return this.filter((data) => ids.includes(data.id));
    }
}
