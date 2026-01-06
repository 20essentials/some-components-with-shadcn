import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { SonnerDemo } from './SonnerDemo';

export const metadata = {
  title: 'Sonner'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/sonner-bg.svg' />
      <SonnerDemo />
    </PageContainer>
  );
}
