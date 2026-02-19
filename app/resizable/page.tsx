import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ResizableDemo } from './demo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resizable'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/resizable.svg' />
      <ResizableDemo />
    </PageContainer>
  );
}
