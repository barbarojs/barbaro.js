import { h, Component } from 'preact';

export default class SplitCode extends Component {
	componentWillMount() {
        this.props.load((file) => {
            this.setState({ child: file.default });
        });
	}
	render({ load, fallbackContent, ...props }, { child }) {
        return child ? h(child, props) : fallbackContent || null;
	}
}