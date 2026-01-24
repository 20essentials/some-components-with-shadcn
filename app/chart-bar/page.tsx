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
      <section className='w-[60%] h-[70%]'>
        <ChartBarInteractive />
      </section>
    </PageContainer>
  );
}
