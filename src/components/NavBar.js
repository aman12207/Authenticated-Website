import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const NavBar = () => {
  const {user,isAuthenticated,logout} = useAuth0();
  const isvalid = isAuthenticated && user ;
  if(isvalid){
    const {picture,name} = user;
    return (
      <nav>
        <img className='nav-pic' src={picture? picture: null} alt={name}/>
        <h4 className='user-name'>Welcome, <b className='name'>{name}</b></h4>
        <button className='btn' onClick={()=>{logout({returnTo : window.location.origin})}}>
        Log Out
      </button>
      </nav>
    )
  }
}

export default NavBar