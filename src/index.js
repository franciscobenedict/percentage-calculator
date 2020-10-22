import React, { Suspense }          from 'react';
import ReactDOM                     from 'react-dom';
import App                          from './App';
import * as serviceWorker           from './serviceWorker';
import { HelmetProvider }           from 'react-helmet-async';
import LoadingOverlay               from './components/partials/LoadingOverlay';

ReactDOM.render(
  <HelmetProvider>
    <Suspense fallback={ <LoadingOverlay /> }>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
