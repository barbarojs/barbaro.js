import {Component} from 'preact';
import StreamManager from './stream-manager';

export default class StreamComponent extends Component {

	constructor(props) {
		super(props);
		// this holds stream constant
		this.streams = props.streams;
		console.log(props);
		// this is the stream manager
		this.sm = new StreamManager();
	}

	componentWillUnmount() {
		this.sm.destroy();
	}

}
