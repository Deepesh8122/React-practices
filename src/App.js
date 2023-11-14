// import logo from './logo.svg';
import './App.css';

import Header from './header'
import Profile from './profile';
import UserProfile from './userProfile';

import PropsComponent from './practices/propsComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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

        <Profile />

        <UserProfile 
        text="Functional Component | User Profile" 
        button_Text="Click Me Once!" UserDate={{
          Name: 'Deep', 
          Age: '21',
          Gender: 'Male'
          }} />

        <PropsComponent 
        componentDate={{
          Com_Name: 'Props Component File'
        }} textName={{Name: 'Deepesh'}} />


        <PropsComponent 
        componentDate={{
          Com_Name: 'Props Component 2 File'
        }} textName={{Name: 'Peter'}} />



      </header>
    </div>
  );
}

export default App;
