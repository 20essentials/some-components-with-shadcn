import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { Metadata } from 'next';
import { TypographyLtr } from './demo';

export const metadata: Metadata = {
  title: 'Typography'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/typography.avif' />
      <section className='w-[60%] p-[3vmax] bg-[#0008]'>
        <TypographyLtr />
      </section>
    </PageContainer>
  );
}
