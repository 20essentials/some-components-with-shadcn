import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ChartRadarDots } from './demo-chart';

export const metadata = {
  title: 'Radar Chart'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/radar-chart.avif' />
      <section className='w-fit h-auto'>
        <ChartRadarDots />
      </section>
    </PageContainer>
  );
}
