//core dependencies
import ReactDOM from 'react-dom';
import React from 'react';

// redux specific stuff to create a provider and store
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//import the component and the reducers
import App from 'components/app'
import reducers from 'reducers';

//import your styles
import css from 'scss/styles.scss';

import ReactDOMServer  from 'react-dom/server';

// Renader the app by wrapping the component in a provider
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App title="React-Redux boilerplate"/>
  </Provider>,
  document.querySelector('.react-root')
);


//render components as string
const stringComp = ReactDOMServer.renderToString(
  <Provider store={createStore(reducers)}>
    <App title="React-Redux boilerplate"/>
  </Provider>
);

//console.log(stringComp);
