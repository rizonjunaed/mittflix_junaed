import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import mainPage from './pages/mainPage.jsx'
import myList from './pages/myList.jsx'

class App extends React.Component {
  render = () => {
    return (
      <div>        
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={mainPage} />
            <Route exact={true} path="/my-list" component={myList} />
          </Switch>
        </BrowserRouter>
      </div>        
    );
  }
}

export default App;
