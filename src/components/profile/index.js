import { h, Component } from 'preact';
import style from './style';
// import StreamComponent from '../../lib/stream-component';
import {Streams} from './streams';
import StreamManager from '../../lib/stream-manager';

export default class Profile extends Component {

	constructor(){
		super();

		this.state = {
			count: 0
		};

        this.sm = new StreamManager();
	}

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(::this.updateTime, 1000);
		this.updateTime();

		// every time we get remounted, increment a counter:
		this.setState({ count: this.state.count+1 });

        // tests
        let dispatcher = Streams.CHANGE;
        this.sm.add(
            dispatcher.subscribe(
            x=> console.log(x)
            )
        );
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
        this.sm.destroy();
	}

	// update the current time
	updateTime() {
		let time = new Date().toLocaleString();
		this.setState({ time });

        Streams.CHANGE.next({
            id: '',
            data: time
            }
        );
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>Profile: { user }</h1>
				<p>This is the user profile for a user named { user }.</p>

				<div>Current time: { time }</div>
				<div>Profile route mounted { count } times.</div>
			</div>
		);
	}
}
