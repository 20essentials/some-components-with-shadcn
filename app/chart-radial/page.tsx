import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ChartRadialGrid } from './demo-chart';

export const metadata = {
  title: 'Chart Radial'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/chart-radial.avif' />
      <section className='w-fit h-auto'>
        <ChartRadialGrid />
      </section>
    </PageContainer>
  );
}
