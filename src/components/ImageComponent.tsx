import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  align?: 'left' | 'right';
};

const ImageComponent: React.FC<ImageProps> = ({ src, alt, align = 'left' }) => {
  const classes = align === 'right' ? 'md:max-w-sm lg:max-w-lg mt-5 md:mt-0 ml-auto' : 'md:max-w-sm lg:max-w-lg mt-5 md:mt-0';

  return (
    <img src={src} className={classes} alt={alt} />
  );
};

export default ImageComponent;
