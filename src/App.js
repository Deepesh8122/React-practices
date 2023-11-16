// import logo from './logo.svg';
import './App.css';
import React from 'react';


import Header from './header'
import Profile from './profile';
import UserProfile from './userProfile';

import PropsComponent from './practices/propsComp';

import StateComponent from './practices/sateComp';
import HideshowComp from './practices/hideShowEvent';
import EventHandling from './practices/eventHanding';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <hr /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Deep
        </a> */}

        <Header />
        <hr />
        <Profile />
        <hr />

        <UserProfile 
        text="Functional Component | User Profile" 
        button_Text="Click Me Once!" UserDate={{
          Name: 'Deep', 
          Age: '21',
          Gender: 'Male'
          }} />
          <hr />

        <PropsComponent 
        componentDate={{
          Com_Name: 'Props Component File'
        }} textName={{Name: 'Deepesh'}} />
        <hr />


        <PropsComponent 
        componentDate={{
          Com_Name: 'Props Component 2 File'
        }} textName={{Name: 'Peter'}} />
        <hr />


        <StateComponent date={{
          title: 'State Management Component',
          sub_text: 'Now you can use the State feaure in this component'
        }} />
        <hr />

        <HideshowComp 
        data={{
          sub_text:'This component is using for the hide and show event reference'
        }} />
        <hr />

        <EventHandling 
        data={{
          sub_title:'This component is using for the Click Events handling'
        }} />

      </header>
    </div>
  );
}

export default App;
