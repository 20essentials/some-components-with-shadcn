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
      <section className='w-[90%] h-[70%] am-the-chart-container'>
        <ChartLineInteractive />
      </section>
    </PageContainer>
  );
}
