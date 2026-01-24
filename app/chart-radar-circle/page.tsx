import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ChartRadarGridCircle } from './demo-chart';

export const metadata = {
  title: 'Chart Radar Circle'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/chart-radar-circle.avif' />
      <section className='w-fit h-auto'>
        <ChartRadarGridCircle />
      </section>
    </PageContainer>
  );
}
