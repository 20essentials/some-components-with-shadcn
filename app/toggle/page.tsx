import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { Metadata } from 'next';
import { ToggleDemo } from './demo';

export const metadata: Metadata = {
  title: 'Toggle'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/toggle.svg' />
      <ToggleDemo />
    </PageContainer>
  );
}
