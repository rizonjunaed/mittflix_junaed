import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import mainPage from './pages/mainPage.jsx'
import myList from './pages/myList.jsx'
import * as MovieAPI from './MovieAPI';

class App extends React.Component {
  render = () => {
    return (
      <div>
        <h1>hello world!</h1>        
      <BrowserRouter>
        <Switch>
          <Route path="/" component={mainPage} />
          <Route path="/my-list" component={myList} />
        </Switch>
      </BrowserRouter>
      </div>        
    );
  }
}

export default App;
