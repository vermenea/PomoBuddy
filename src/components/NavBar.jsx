import React from 'react';
import webicon from '../../public/webicon.png';

const NavBar = () => {
  return (
    <nav className="navbar fixed w-full z-50">
      <ul className="nav-list flex justify-center items-center flex-row font-oswald bg-white bg-opacity-0 rounded-lg shadow-md">
        <li className="nav-item flex justify-center items-center list-none text-lg">
          <img src={webicon} alt="Web Icon" className="webicon w-8" />
          <h1 className="ml-2 font-bold">PomoBuddy</h1>
        </li>
        <li className="nav-item flex justify-center items-center list-none text-lg">
          <a href="#pomodoro" className="nav-link">
            Pomodoro
          </a>
        </li>
        <li className="nav-item flex justify-center items-center list-none text-lg">
          <a href="#" className="nav-link">
            ToStudy
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
