import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import Welcome from './components/Welcome';
import Feature from './components/Feature';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Signout from './auth/Signout';
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const store = createStore(reducers,{
  auth: {
    authenticated: localStorage.getItem('token')
  }
},applyMiddleware(reduxThunk))
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome}/>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/signin" exact component={Signin}/>
      <Route path="/signout" exact component={Signout}/>
      <Route path="/feature" exact component={Feature}/>
    </App>
  </BrowserRouter>
  </Provider>, document.querySelector('#root'));
