import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { Metadata } from 'next';
import { SelectScrollable } from './demo';

export const metadata: Metadata = {
  title: 'Select Scrollable'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/select-scrollable.svg' />
      <SelectScrollable />
    </PageContainer>
  );
}
