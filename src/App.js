import React from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.componet';
import ShopPage from './pages/shop/shop.component';
import Header from './componets/header/header.componet';
import SignInAndSignUpPage from './pages/sign-inandsign-up/sign-inandsign-up.componet';


function App() {
  return (
    <div >
      <Header />  
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
      <Route  path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
