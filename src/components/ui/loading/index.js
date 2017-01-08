import {h, Component} from 'preact';
import {If} from '../../utils';
import style from './style';

export default class UiLoading extends Component {
    render({children}) {
        return (
            <div class={style.loading}>
                
                <If test={children.length}>
                    {children}
                </If>
                <If test={!children.length}>
                    <h1>Page is loading...</h1>
                </If>
                
            </div>
        );
    }
}
