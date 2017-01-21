import {h, Component} from 'preact';
import {StreamComponent} from 'barbarojs-stream';
import style from './style';
import {Components} from 'components/ui/index';

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
