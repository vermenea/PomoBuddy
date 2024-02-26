import React from 'react'
import WebIcon from './WebIcon'
import NavItem from './NavItem'

interface NavItemProps {
  href: string
  text: string
  icon?: React.ReactNode
}

const NavBar: React.FC<NavItemProps> = () => {
  return (
    <nav className="fixed top-0 w-full z-50 p-2 font-oswald bg-white rounded-lg shadow-md">
      <ul className="flex justify-center items-center flex-row ">
        <NavItem href="#" text="PomoBuddy" icon={<WebIcon />} />
        <NavItem href="#pomodoro" text="Pomodoro" />
        <NavItem href="#tostudy" text="ToStudy" />
      </ul>
    </nav>
  )
}

export default NavBar
