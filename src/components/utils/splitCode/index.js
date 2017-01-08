import { h, Component } from 'preact';
import {UiLoading} from '../../ui';

export default class SplitCode extends Component {
	componentWillMount() {
        this.props.load((file) => {
            this.setState({ deferredBundle: file.default });
        });
	}
	render({ load, fallbackContent, ...props }, { deferredBundle }) {
        let loadingComponent = fallbackContent ? fallbackContent : <UiLoading></UiLoading>;

        return deferredBundle ? h(deferredBundle, props) : loadingComponent || null;
	}
}