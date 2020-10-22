import React                                            from 'react';
import { BrowserRouter as Router, Switch, Route }       from 'react-router-dom';
import NotFound404                                      from './components/NotFound404';
// import HomeView                                         from './components/HomeView';
import PercentageCalculatorView                         from './components/PercentageCalculatorView';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        {/*<Route exact path="/" component={HomeView} />*/}
        <Route exact path="/" component={PercentageCalculatorView} />

        <Route path="*" component={NotFound404} />
      </Switch>
    </Router>
  );
}

export default App;
