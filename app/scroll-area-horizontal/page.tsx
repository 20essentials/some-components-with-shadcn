import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { Metadata } from 'next';
import { ScrollAreaHorizontalDemo } from './demo';

export const metadata: Metadata = {
  title: 'Scroll Area Horizontal'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/scroll-area-horizontal.svg' />
      <ScrollAreaHorizontalDemo/>
    </PageContainer>
  );
}
