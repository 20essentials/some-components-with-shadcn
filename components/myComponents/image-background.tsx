import { ComponentProps } from 'react';

export function ImageBackground(props: ComponentProps<'img'>) {
  const { className, src, ...rest } = props;
  return (
    <img
      {...rest}
      src={src}
      alt='Image'
      className={`w-full h-screen fixed -z-10 object-cover ${className}`}
    />
  );
}
