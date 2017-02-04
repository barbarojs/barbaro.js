import {h, render} from 'preact';
// import style from 'style/index';
import { httpProvider } from 'barbarojs-http';

import App from './components/app';
let root;
render(<App/>, document.body, root);
