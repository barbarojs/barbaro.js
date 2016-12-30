import {h, Component} from 'preact';
import style from './style';
import {Streams} from './streams';
import StreamManager from '../../lib/stream-manager';
// ui
import {Components} from '../../ui';
import UiButton from '../../ui/button';

export default class Profile extends Component {

	constructor() {
		super();

		this.state = {
			count: 0
		};

		// handle streams
		this.sm = new StreamManager();
		this.init();
	}

	// init dispatcher
	init() {
		// actions! move this to a store later
		const actions = {
			[Components.UiButton]: data => {
				console.log(data);
			}
		}
		this.sm.dispatch(Streams.CHANGE, actions);
	}

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(:: this.updateTime, 1000);
		this.updateTime();

		// every time we get remounted, increment a counter:
		this.setState({
			count: this.state.count + 1
		});

		// tests
		let dispatcher = Streams.CHANGE;
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
		this.sm.destroy();
	}

	// update the current time
	updateTime() {
		let time = new Date().toLocaleString();
		this.setState({time});
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({
		user
	}, {time, count}) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named {user}.</p>

				<div>Current time: {time}</div>
				<div>Profile route mounted {count}
					times.</div>
				<UiButton streams={Streams} label="test" id="save"></UiButton>
			</div>
		);
	}
}
