import { h, Component } from 'preact';
import Loading from '../../ui/loading';

export default class SplitCode extends Component {
	componentWillMount() {
        this.props.load((file) => {
            this.setState({ deferredBundle: file.default });
        });
	}
	render({ load, fallbackContent, ...props }, { deferredBundle }) {
        let loadingComponent = fallbackContent ? fallbackContent : <Loading></Loading>;

        return deferredBundle ? h(deferredBundle, props) : loadingComponent || null;
	}
}