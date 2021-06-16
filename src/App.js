import Counter from './components/Counter';
import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
  const isUserAuth = useSelector(state => state.auth.isUserAuth);

  return (
    <Fragment>
      <Header/>
      {!isUserAuth && <Auth/>}
      {isUserAuth && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
