import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ChartExample } from './minimalist-chart-demo';

export const metadata = {
  title: 'Minimalist Bar Chart'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/minimalist-chart-bg.svg' />
      <section className="w-[60%] h-[70%]">
        <ChartExample />
      </section>
    </PageContainer>
  );
}
