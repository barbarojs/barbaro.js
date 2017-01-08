import {h, Component} from 'preact';
import style from './style';
import {Streams} from './streams';
import {http, StreamManager} from '../../libs';
import {ProfileComponents} from './components';
import {Components, UiButton} from '../ui';
import {ApiRoutes} from './api';

export default class Profile extends Component {

	constructor() {
		super();

		this.state = {
			count: 0
		};

		// handle streams
		this.sm = new StreamManager();
	}

	// init dispatcher
	componentWillMount() {
		const buttonActions = {
			[ProfileComponents.TEST_BUTTON]: data => {
				console.log(data);

				// test a connection
				this.getData();
			}
		};
		// actions! move this to a store later
		const actions = {
			[Components.UiButton]: data => {
				// handle custom id
				buttonActions[data.id](data);
			}
		};
		
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

	// get data over http
	getData() {
		let conn = new http(ApiRoutes.DEFAULT);
		conn.get({id: 123, test: 1}).then(x => console.log(x));

		conn.post({id: 123, test: 1}).then(x => console.log(x));
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
				<UiButton streams={Streams} label="test" id={ProfileComponents.TEST_BUTTON}></UiButton>
			</div>
		);
	}
}
