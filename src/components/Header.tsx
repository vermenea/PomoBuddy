const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header>
      <h1 className="mt-20 text-3xl uppercase font-bold">{title}</h1>
    </header>
  )
}
export default Header
