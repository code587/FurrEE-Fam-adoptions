import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import Search from '../Search';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
<<<<<<< HEAD
            <h1 className="m-0" >Tech Thoughts</h1>
=======
            <h1 className="m-0">Congrats on wanting to grow your family! </h1>
>>>>>>> 9066c5f4244802de95104a4539fb8027cf958874
          </Link>
          <p className="m-0">Dogs are the treasure we seek in life.</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
              <Search />
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
