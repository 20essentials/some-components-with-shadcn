import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { Metadata } from 'next';
import { LoginForm } from './demo';

export const metadata: Metadata = {
  title: ''
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/confetti.jpeg' />
      <div className='flex min-h-svh flex-col items-center justify-center  p-6 md:p-10  w-[60%]'>
        <div className='w-full'>
          <LoginForm />
        </div>
      </div>
    </PageContainer>
  );
}
