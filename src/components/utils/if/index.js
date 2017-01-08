import {h, Component} from 'preact';

export default class If extends Component {
	render({test, children}) {
		if (test) {
			return ({children});
		}
	}
}
