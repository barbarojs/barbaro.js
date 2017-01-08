import {h, Component} from 'preact';
import style from './style';

export default class NotFound extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>404</h1>
				<p>Page not found</p>
			</div>
		);
	}
}
