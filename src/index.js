import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import helloReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

let store = createStore(helloReducer);

axios({
  method:'get',
  url:'https://www.reddit.com/subreddits/search.json?q=ntlm',
  withCredentials: true,
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
