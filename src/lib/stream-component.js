import { Component } from 'preact';
import StreamManager from './stream-manager';

export default class StreamComponent extends Component {

    constructor(props) {
        super(props);
        this.sm = new StreamManager();
    }

    componentWillUnmount(){
        this.sm.destroy();
    }


}
