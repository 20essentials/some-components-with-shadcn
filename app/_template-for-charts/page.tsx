import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';

export const metadata = {
  title: ''
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/.avif' />
      <section className='w-[60%] h-[70%]'>
        {'Your chart here'}
      </section>
    </PageContainer>
  );
}
