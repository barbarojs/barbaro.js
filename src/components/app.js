import {h, Component} from 'preact';
import {Router, route} from 'preact-router';
// import {SplitCode} from './utils/index';
// import NotFound from './notFound/index';
// import Header from './header/index';
// import Home from './home/index';
// import Profile from './profile/index';
// import style from './style.scss!scss';
import { http, httpProvider } from 'barbarojs-http';
// import "babel-polyfill";

// using middlewares
httpProvider.use((req) => {
	if (req.status === 403) {
		// redirect to home/login
		route('/');
		return Promise.reject(req);
	} else if (req.status >= 400) {
		return Promise.reject(req);
	} else {
		return Promise.resolve(req);
	}
});

export default class App extends Component {
	/** Gets fired when the route changes.
	*	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	*	@param {string} event.url	The newly routed URL
	*/
	// handleRoute = (e) => {
	// 	this.currentUrl = e.url;
	// }

	render () {
		/*return (
			<div class={style.app}>
				<Header></Header>
				<Router onChange={this.handleRoute}>
					<Home path="/"></Home>
					<SplitCode
						path="/code-splitting-page"
						load={require('bundle?lazy!./codeSplittingPage')}
						fallbackContent={(<div style="margin-top:64px;">custom loading fallback</div>)}>
					</SplitCode>
					<Profile path="/profile/" user="me"></Profile>
					<Profile path="/profile/:user"></Profile>
					<NotFound default></NotFound>
				</Router>
			</div>
		);*/

		return (
			<div>ok</div>
		);
	}
}
