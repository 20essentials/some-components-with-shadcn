import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ChartBarLabelCustom } from './demo-chart';

export const metadata = {
  title: 'Chart Bart Horizontal'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/chart-bar-horizontal.avif' />
      <section className='w-[50%] h-[60%]'>
        <ChartBarLabelCustom />
      </section>
    </PageContainer>
  );
}
