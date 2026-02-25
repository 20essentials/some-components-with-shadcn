import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { Metadata } from 'next';
import { SeparatorList } from './demo';

export const metadata: Metadata = {
  title: 'Separator'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/separator.svg' />
      <SeparatorList />
    </PageContainer>
  );
}
