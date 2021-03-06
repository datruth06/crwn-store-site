import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.componet';
import ShopPage from './pages/shop/shop.component';
import Header from './componets/header/header.componet';
import SignInAndSignUpPage from './pages/sign-inandsign-up/sign-inandsign-up.componet';
import  CheckOutPage from './pages/checkout/checkout.componets';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';


class App extends React.Component{
  

  unsubscrideFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscrideFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
             
              id: snapShot.id, 
              ...snapShot.data(),
            
          });
        
        });
        
      }
       else{

        setCurrentUser(userAuth);
       }
     
    });
  }

  componentWillUnmount(){
    this.unsubscrideFromAuth();
  }
  render() {
    return (
      <div >
        <Header />  
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  exact path='/checkout' component={CheckOutPage} />
        <Route  exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />)
         : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );

  }
  
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispath) => ({
  setCurrentUser: (user) => dispath(setCurrentUser(user)),

});
export default connect(mapStateToProps, mapDispatchToProps )(App);
