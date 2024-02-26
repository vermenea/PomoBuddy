const TextComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className="text text-xl mt-10">{children}</p>
}

export default TextComponent
