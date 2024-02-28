const TextComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className="text text-xl mt-20 mb-10">{children}</p>
}

export default TextComponent
