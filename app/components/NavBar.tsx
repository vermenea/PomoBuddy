import WebIcon from './WebIcon'
import NavItem from './NavItem'

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 p-2 bg-white rounded-lg shadow-md font-Oswald">
      <ul className="flex justify-center items-center flex-row ">
        <NavItem href="#" text="PomoBuddy" icon={<WebIcon />} />
        <NavItem href="#pomodoro" text="Pomodoro" />
        <NavItem href="#tostudy" text="ToStudy" />
      </ul>
    </nav>
  )
}
