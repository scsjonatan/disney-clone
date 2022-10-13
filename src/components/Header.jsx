import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import {
  signInWithPopup,
  onAuthStateChanged,
  getAuth,
  signOut,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { provider } from '../firebase';
import { UserContext, initialUser } from '../contexts/user';

function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (fireBaseUser) => {
      if (fireBaseUser) {
        setUser(fireBaseUser);
      } else {
        navigate('/');
      }
    });
  }, [user.name]);

  const handleAuth = () => {
    signInWithPopup(auth, provider).then((res) => {
      const { displayName, email, photoUrl } = res.user;
      setUser({
        name: displayName,
        email,
        photo: photoUrl,
      });
    });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(initialUser);
      navigate('/');
    });
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney Logo" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="Home" />
          <span>Home</span>
        </a>
        <a href="/home">
          <img src="/images/search-icon.svg" alt="Search" />
          <span>Search</span>
        </a>
        <a href="/home">
          <img src="/images/watchlist-icon.svg" alt="Watchlist" />
          <span>Watchlist</span>
        </a>
        <a href="/home">
          <img src="/images/original-icon.svg" alt="Originals" />
          <span>Originals</span>
        </a>
        <a href="/home">
          <img src="/images/movie-icon.svg" alt="Movies" />
          <span>Movies</span>
        </a>
        <a href="/home">
          <img src="/images/series-icon.svg" alt="Series" />
          <span>Series</span>
        </a>
      </NavMenu>

      {user.displayName ? (
        <SignOut>
          <LogedUser>
            <img src={user.photoURL} alt={user.displayName} />
            <p>{user.displayName}</p>
          </LogedUser>
          <DropDown>
            <button type="submit" onClick={handleSignOut}>
              Sign Out
            </button>
          </DropDown>
        </SignOut>
      ) : (
        <LoginButton onClick={handleAuth}>Login</LoginButton>
      )}
    </Nav>
  );
}

const DropDown = styled.div`
  position: absolute;
  top: 35px;
  left: 70px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: fit-content;
  display: none;

  button {
    background: none;
    color: white;
    border: 0;
    cursor: pointer;
  }
`;

const SignOut = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;

  &:hover {
    ${DropDown} {
      display: block;
    }
  }
`;

const LogedUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  p {
    color: #f9f9f9;
    font-size: 10px;
    letter-spacing: 2px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  min-width: 80px;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-height: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: '';
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0%;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginButton = styled.a`
  background-color: rgba(0, 0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default Header;
