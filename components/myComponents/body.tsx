import { ComponentProps } from 'react';

type PageContainerProps = ComponentProps<'section'>;

export function PageContainer({
  children,
  className,
  ...rest
}: PageContainerProps) {
  return (
    <section
      {...rest}
      className={`min-h-screen w-full flex flex-wrap place-content-center overflow-hidden bg-cover bg-center cursor-pointer ${className ?? ''}`}
    >
      {children}
    </section>
  );
}
