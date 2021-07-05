import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import MainPage from './pages/MainPage.jsx'
import MyList from './pages/MyList.jsx'

class App extends React.Component {
  render = () => {
    return (
      <div>        
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={MainPage} />
            <Route exact={true} path="/my-list" component={MyList} />
          </Switch>
        </BrowserRouter>
      </div>        
    );
  }
}

export default App;
