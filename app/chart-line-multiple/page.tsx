import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ChartLineMultiple } from './demo-chart';

export const metadata = {
  title: 'Chart Line Multiple'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/chart-line-multiple.avif' />
      <section className='w-[50%] h-[50%]'>
        <ChartLineMultiple />
      </section>
    </PageContainer>
  );
}
