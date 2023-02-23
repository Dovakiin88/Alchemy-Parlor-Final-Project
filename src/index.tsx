import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Contact, About, Phonebook} from './components';
import { SignIn } from './components/SignIn';
import './style.css';
import {firebaseConfig } from './firebaseConfig'
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';




let myTitle = "Ashley's Phonebook"

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

ReactDOM.render(
  <React.StrictMode>
  <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
  <Provider store={store}>
    <Router>
      
      <Switch>
        
        <Route exact path="/" component={Home}>
          <Home  title= {myTitle} />
        </Route>
        
        <Route path= '/phonebook'>
          <Phonebook></Phonebook>
        </Route>
        
        <Route path= '/contact' component={Contact}>
          <Contact></Contact>
        </Route>
        
        <Route path= '/about' component={About}>
          <About></About>
        </Route>
       
        <Route path= '/signin'>
          <SignIn></SignIn>
        </Route>
      
      </Switch>
    
    </Router>
  </Provider>
  </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


