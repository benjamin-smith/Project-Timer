import React            from 'react'
import { render }       from 'react-dom'
import { Provider }     from 'react-redux'

import App              from './components/App'
import Logger           from './components/Logger'
import PersistStore     from './helpers/PersistStore'
import store            from './store'

const app = document.getElementById('app')
const Debug = new Logger('App');
new PersistStore();

// Distpatch initial app load
store.dispatch({type: 'APP_LOADED'});

render(<Provider store={store}>
    <App/>
</Provider>, app);
