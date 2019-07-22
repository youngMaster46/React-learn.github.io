import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import News from './components/News/News';

function App(props) {
  const DComponent = () =>  <Dialogs dispatch={props.dispatch} newMessageText={props.state.dialogsPage.newMessageText} state={props.state.dialogsPage} />
  const DProfile = () => <Profile dispatch={props.dispatch} newPostText={props.state.profilePage.newPostText} state = {props.state.profilePage}/> 

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sidebar}/>
     <div className='app-wrapper-content'>
      <Route render={DComponent}  path='/dialogs' />
      <Route render={DProfile} path='/profile' />
      <Route component={News} path='/news' />
     </div>
      
    </div>
  );
}

export default App;
