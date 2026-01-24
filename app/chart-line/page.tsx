import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ChartLineInteractive } from './demo-chart';

export const metadata = {
  title: 'Chart Line'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/chart-line.avif' />
      <section className='w-[60%] h-[70%]'>
        <ChartLineInteractive />
      </section>
    </PageContainer>
  );
}
