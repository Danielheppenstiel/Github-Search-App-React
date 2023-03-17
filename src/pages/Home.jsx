import {Link} from 'react-router-dom';
import MainDisplay from '../components/layout/MainDisplay';
import SearchBar from '../components/layout/SearchBar';
import UserContextProvider from '../context/UserContext';

function Home() {


  return (
    <>
      <section className="home-container">
          <UserContextProvider>
            <SearchBar />
            <MainDisplay />
          </UserContextProvider>
      </section>
    </>
  )
}

export default Home