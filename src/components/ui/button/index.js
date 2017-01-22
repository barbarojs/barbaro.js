import {h, Component} from 'preact';
import {StreamComponent} from 'barbarojs-stream';
import {Components} from 'components/ui/index';
import style from './style';

export default class UiButton extends StreamComponent {

	constructor(props) {
		super(props);
	}

	handleClick(evt) {
		this.streams.CHANGE.next({
			id: Components.UiButton,
			data: {
				id: this.props.id
			}
		});
	}

	render() {
		return (
			<button class={style.button} onClick={evt => this.handleClick(evt)}>{this.props.label}</button>
		);
	}
}
