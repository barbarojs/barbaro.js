import {h, Component} from 'preact';
import style from './style';

import {Components, UiButton} from 'components/ui';
import uiButtonStyle from 'components/ui/button/style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
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
				<UiButton label="test 1"></UiButton>
				<UiButton type={uiButtonStyle.buttonPrimary} label="test 2"></UiButton>
				
				<h3>Component use Tool</h3>
				<UiButton type={uiButtonStyle.buttonSecondary} label="test 3"></UiButton>
				
				<h3>Component use Custom properties with fallback Edge</h3>
				<UiButton type={uiButtonStyle.buttonSpecial} label="test 4"></UiButton>
				<UiButton type={uiButtonStyle.buttonSpecial} style="--test-custom-property: 60px" label="test 4"></UiButton>
			</div>
		);
	}
}
