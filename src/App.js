import React from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.componet';
import ShopPage from './pages/shop/shop.component';
import Header from './componets/header/header.componet';
import SignInAndSignUpPage from './pages/sign-inandsign-up/sign-inandsign-up.componet';
import { auth } from './firebase/firebase.utils';


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscrideFromAuth = null

  componentDidMount(){
    this.unsubscrideFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscrideFromAuth();
  }
  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />  
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );

  }
  
}

export default App;
