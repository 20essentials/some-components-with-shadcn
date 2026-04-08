import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ChartBarInteractive } from './demo-chart';

export const metadata = {
  title: 'Bar Chart'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/bar-chart.avif' />
      <section className='w-[90%] h-[70%] am-the-chart-container'>
        <ChartBarInteractive />
      </section>
    </PageContainer>
  );
}
