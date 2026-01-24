import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ChartAreaInteractive } from './demo-chart';

export const metadata = {
  title: 'Area Chart'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/area-chart.avif' />
      <section className='w-[60%] h-[70%]'>
        <ChartAreaInteractive />
      </section>
    </PageContainer>
  );
}
