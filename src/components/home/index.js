import {h, Component} from 'preact';
import {Streams} from './streams';
import {StreamManager} from 'barbarojs-stream';
import style from './style';

import BUIButton from 'barbarojs-ui/src/components/UiButton';
import {ComponentsIds} from './components';
import {Components, UiButton} from 'components/ui';
import uiButtonStyle from 'components/ui/button/style';

export default class Home extends Component {

	constructor() {
		super();

		this.state = {
			count: 0
		};

		// handle streams
		this.sm = new StreamManager();
	}

	// init dispatcher
	componentWillMount() {
		const buttonActions = {
			[ComponentsIds.TEST_BUTTON]: data => {
				console.log(data);
			}
		};
		// actions! move this to a store later
		const actions = {
			[Components.UiButton]: data => {
				// handle custom id
				buttonActions[data.id](data);
			}
		};

		this.sm.dispatch(Streams.CHANGE, actions);
	}

	render() {
		return (
			<div class={style.home}>
				//<BUiButton>ciao</BUiButton>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				
				<h2>CSS Structure showcase</h2>
								
				<h3>Element</h3>
				<a>link</a>
				<p>paragraph paragraph paragraph</p>
				<input type="text"/>
				<ul>
					<li>list</li>
				</ul>
				
				<h3>Component use compose, sass variable</h3>
				<UiButton streams={Streams} label="test 1" id={ComponentsIds.TEST_BUTTON}></UiButton>
				<UiButton streams={Streams} type={uiButtonStyle.buttonPrimary} label="test 2" id={ComponentsIds.TEST_BUTTON}></UiButton>
				
				<h3>Component use Tool</h3>
				<UiButton streams={Streams} type={uiButtonStyle.buttonSecondary} label="test 3" id={ComponentsIds.TEST_BUTTON}></UiButton>
				
				<h3>Component use Custom properties with fallback Edge</h3>
				<UiButton streams={Streams} type={uiButtonStyle.buttonSpecial} label="test 4" id={ComponentsIds.TEST_BUTTON}></UiButton>
				<UiButton streams={Streams} type={uiButtonStyle.buttonSpecial} style="--test-custom-property: 60px" label="test 4" id={ComponentsIds.TEST_BUTTON}></UiButton>
			</div>
		);
	}
}
