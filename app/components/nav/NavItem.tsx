import { NavItemProps } from "@/types/types"

const NavItem: React.FC<NavItemProps> = ({ href, text, icon }) => {
  return (
    <li className="flex justify-center items-center list-none text-lg m-2">
      {icon}
      <a href={href} className="ml-2 font-medium hover:text-gray-500">
        {text}
      </a>
    </li>
  )
}

export default NavItem
