import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginPage/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import CreateConference from './components/CreateConference';
import JoinConference from './components/JoinConference';
import CallAPI from './components/CallAPI';
import CallprotectedAPI from './components/CallprotectedAPI';
import Header from './components/LoginPage/Header';

function App() {

  return (
    <>
    <Header/>
    <LogoutButton/>
    <Profile/>
    <CreateConference/>
    <JoinConference/>
    <CallAPI/>
    <CallprotectedAPI/>
    </>
  );
}

export default App;
