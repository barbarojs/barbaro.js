import {h, Component} from 'preact';
import style from './style';

export default class CodeSplittingPage extends Component {
    render () {
        return (
            <div class={style.home}>
                <h1>Code splitting page</h1>
                <p>This page is part of another bundle</p>
            </div>
        );
    }
}
