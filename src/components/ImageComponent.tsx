const ImageComponent: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => {
  return (
    <img src={src} className="md:max-w-sm lg:max-w-lg mt-5 md:mt-0" alt={alt} />
  )
}

export default ImageComponent
