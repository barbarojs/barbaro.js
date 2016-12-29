import {
    Subject
} from 'rxjs';

export const Streams = {
    INJECT: new Subject(),
    CHANGE: new Subject()
};
