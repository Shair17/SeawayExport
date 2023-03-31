import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {configure} from 'axios-hooks';
import {http as axios} from './src/services/http';

configure({axios});

AppRegistry.registerComponent(appName, () => App);
