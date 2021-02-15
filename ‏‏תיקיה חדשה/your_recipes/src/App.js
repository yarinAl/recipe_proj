//import logo from './logo.svg';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import FCHome from './FunctionalComponents/FCHome';
import CCHeader from './ClassComponents/CCHeader';
import FCFooter from './FunctionalComponents/FCFooter';
import CCAbout from './ClassComponents/CCAbout';
import CCContant from './ClassComponents/CCContant';
import CCLogin from './ClassComponents/CCLogin';
import CCRegister from './ClassComponents/CCRegister';
import { Component } from 'react';
import FCProflie from './FunctionalComponents/FCProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render () {
    return (
      <div>
        <CCHeader />
        <Switch>
          <Route exact path="/">
            <FCHome />
          </Route>
          <Route path="/About" >
            <CCAbout />
          </Route>
          <Route path="/Contant" >
            <CCContant />
          </Route>
          <Route path="/Login" >
            <CCLogin />
          </Route>
          <Route path="/Register" >
            <CCRegister />
          </Route>
          <Route path="/Profile" >
            <FCProflie />
          </Route>
        </Switch> 
        <FCFooter />
      </div>
    );
  }
}

export default withRouter(App);
