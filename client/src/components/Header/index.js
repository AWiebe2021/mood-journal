import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        
        <Link to="/">
<<<<<<< HEAD
=======

>>>>>>> 19afa1eed0eac4b9354b330af5cef0955725cd1e
        <div class="typewriter">
          <h1>Otter Journal 🦦</h1>
          <p>A journal like no otter.</p>
          </div>
<<<<<<< HEAD
=======

>>>>>>> 19afa1eed0eac4b9354b330af5cef0955725cd1e
        </Link>


        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
