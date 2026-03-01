import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { Metadata } from 'next';
import { SwitchDemo } from './demo';

export const metadata: Metadata = {
  title: 'Switch'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/switch.svg' />
      <SwitchDemo />
    </PageContainer>
  );
}
