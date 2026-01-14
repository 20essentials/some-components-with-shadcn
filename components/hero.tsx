import { PageContainer } from '@/components/myComponents/body';

export function Hero() {
  return (
    <PageContainer className='relative h-screen bg-transparent'>
      <img src='/assets/titulo.webp' className='w-[60%] mix-blend-color-burn object-contain' alt='Title' title='Some Components with ShadCn' />
      <img src='/assets/shadcn.svg' className='w-[5vmax] absolute right-[1.5vmax] bottom-[1.5vmax]' alt='logo' title='Some Components with ShadCn' />
    </PageContainer>
  );
}
