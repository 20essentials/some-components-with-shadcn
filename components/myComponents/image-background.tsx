import { ComponentProps } from 'react';

export function ImageBackground(props: ComponentProps<'img'>) {
  return (
    <img
      {...props}
      src={props.src}
      alt='Image'
      className={`w-full h-screen fixed z-[-1] object-cover ${props?.className}`}
    />
  );
}
