import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ChartPieInteractive } from './demo-chart';

export const metadata = {
  title: 'Chart Pie'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/chart-pie.avif' />
      <section className='w-[40%] h-[70%]'>
        <ChartPieInteractive />
      </section>
    </PageContainer>
  );
}
