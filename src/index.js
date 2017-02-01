import {h, render} from 'preact';
import style from 'style/index';
import { httpProvider } from 'barbarojs-http';

let root;
function init() {
	let App = require('./components/app').default;
	root = render(
		<App/>, document.body, root);
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV === 'production') {
	require('./pwa');
} else {
	// use with testing backend
	httpProvider.setHostname('http://localhost:3000');
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init));
}

init();
