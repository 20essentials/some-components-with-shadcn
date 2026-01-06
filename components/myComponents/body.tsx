import { ComponentProps } from 'react';

export function PageContainer(props?: ComponentProps<'section'>) {
  return (
    <section
      {...props}
      className={`min-h-screen w-full flex flex-wrap place-content-center overflow-hidden bg-cover bg-center cursor-pointer' ${props?.className}`}
    >
      {props?.children}
    </section>
  );
}
