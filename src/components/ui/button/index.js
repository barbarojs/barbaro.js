import {h, Component} from 'preact';
import StreamComponent from '../../../lib/stream-component';
import style from './style';
import {Components} from '../index';

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
