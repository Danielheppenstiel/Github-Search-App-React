import { useState, useEffect, useContext } from 'react';
import { userContext } from '../../context/UserContext';
import { RiUserSearchLine } from 'react-icons/ri';

function SearchBar() {

  const {user, setUser, fetchUser} = useContext(userContext);
  
  // get user
  const getUser = (event) => {
    const userInput = event.target.value;
    setUser(userInput);
  };

  console.log(user)

  // submit user
  const searchUser = () => {
    fetchUser(user);
  };

  return (
    <>
      <div className='search-bar'>
        <RiUserSearchLine color='white' className='search-icon' />
        <input className='search-input' type="text" placeholder='Search Github Username..' onChange={getUser}/>
        <button className='search-btn' onClick={searchUser} >Search</button>
      </div>
    </>
  )
}

export default SearchBar